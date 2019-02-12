<?php

namespace app\api\model;

use think\Exception;
use think\Model;

class ClassAttendance extends Base
{
    protected $append = ['course_name'];
    protected $hidden = [];

    public static function init()
    {
        parent::init(); // TODO: Change the autogenerated stub
        ClassAttendance::event('after_insert', function ($model) {
            if (!empty($model['cid'])) {
                $cls = $model['cls'];
                if ($cls instanceof Model) {
                    $cls->setInc('attendance_times');
                    if ($cls['status'] == 0) {
                        /*如果该班级的status状态为：待开课招生中，则更新status为已开课状态*/
                        $cls->data('status', 1)->save();
                    }
                }
            }

            if (!empty($model['ca_id'])) {
                $course_arrange = $model['course_arrange'];
                if ($course_arrange && $course_arrange instanceof CourseArrange) {
                    $course_arrange->data('is_attendance', 1)->save();
                }
            }
        });

        ClassAttendance::event('after_delete', function ($model) {
            if (!empty($model['cid'])) {
                $cls = $model['cls'];
                if ($cls instanceof Model) {
                    if($cls->attendance_times > 0) {
                        $cls->setDec('attendance_times');
                    }
                }
            }

            if (!empty($model['ca_id'])) {
                $course_arrange = $model['course_arrange'];
                if ($course_arrange && $course_arrange instanceof CourseArrange) {
                    $course_arrange->data('is_attendance', 0)->save();
                }
            }
        });
    }

    public function review()
    {
        return $this->hasOne('Review', 'catt_id', 'catt_id');
    }

    public function ftReview()
    {
        return $this->hasOne('FtReview', 'catt_id', 'catt_id');
    }

    public function cls()
    {
        return $this->belongsTo('Classes', 'cid', 'cid');
    }

    public function CourseArrange()
    {
        return $this->belongsTo('CourseArrange', 'ca_id', 'ca_id');
    }

    public function Textbook()
    {
        return $this->hasOne('textbook', 'tb_id', 'tb_id');
    }

    public function TextbookSection()
    {
        return $this->hasOne('textbook_section', 'tbs_id', 'tbs_id');
    }

    /*每一条student_attendance记录必然会属于一条class_attendance记录*/
    public function studentAttendances() {
        return $this->hasMany('StudentAttendance', 'catt_id', 'catt_id');
    }

    public function getCourseNameAttr($value,$data){
        $course_name = get_course_name_by_row($data);

        return $course_name;
    }

    public function getConfirmTimeAttr($value, $data)
    {
        return $value > 0 ? date('Y-m-d H:i:s',$value) : 0;
    }


    /**
     * 创建或者更新[class_attendance]
     *
     * 1.班课或一对一或一对多，不管是排课考勤，还是无排课自由考勤，都会产生一条class_attendance记录。
     * 2.上同一节课的学生的考勤共享一条class_attendance记录。student_attendance belongs_to class_attendance。
     * 3.上同一节课的同学在想象中他们是一个班级的（不管是不是班课）。
     *
     * @param $atd_info array
     * @return ClassAttendance
     */
    public static function addOrUpdateClassAttendance(array &$atd_info)
    {
        $w    = [];
        $data = [];
        array_copy($data,$atd_info,['og_id','bid','eid','lid','sj_id','grade','lesson_type']);

        if (!empty($atd_info['cid'])) {
            $w['cid']    = $atd_info['cid'];/*班课*/
            $data['cid'] = $atd_info['cid'];
            $data['class_student_nums'] = $atd_info['cls']['student_nums']; //todo bug 不准确
            $data['later_nums'] = 0;
        }
        if (!empty($atd_info['ca_id'])) {
            //排课考勤
            $w['ca_id']    = $atd_info['ca_id'];
            $data['ca_id'] = $atd_info['ca_id'];
            $data['chapter_index'] = $atd_info['target_ca']['chapter_index'];
        } elseif ($atd_info['lesson_type'] !== Lesson::LESSON_TYPE_CLASS) {
           //非班课无排课自由考勤, 试听和补课都是以排课为基础???
            $where = [];
            $where['sid'] = $atd_info['sid'];
            $where['sl_id'] = $atd_info['sl_id'];
            $where['int_day']        = $atd_info['int_day'];
            $where['int_start_hour'] = $atd_info['int_start_hour'];
            $where['int_end_hour']   = $atd_info['int_end_hour'];
            $student_attendance = StudentAttendance::get($where);
            if ($student_attendance) {
                $w['catt_id'] = $student_attendance['catt_id'];
            } else {
                $w['eid'] = $atd_info['eid'];
            }
        }
        $w['int_day']        = $atd_info['int_day'];
        $w['int_start_hour'] = $atd_info['int_start_hour'];
        $w['int_end_hour']   = $atd_info['int_end_hour'];

        $data['int_day']        = $atd_info['int_day'];
        $data['int_start_hour'] = $atd_info['int_start_hour'];
        $data['int_end_hour']   = $atd_info['int_end_hour'];

        if (!empty($atd_info['lesson_remark'])) {
            $data['lesson_remark'] = $atd_info['lesson_remark'];
        }

        if (!empty($atd_info['second_eid'])) {
            $data['second_eid'] = $atd_info['second_eid'];
        } else {
            if (!empty($atd_info['target_ca'])) {
                $data['second_eid'] = $atd_info['target_ca']['second_eid'];
            } elseif (!empty($atd_info['cls']['second_eid'])) {
                $data['second_eid'] = $atd_info['cls']['second_eid'];
            }
            if (isset($data['second_eid'])) {
                $atd_info['second_eid'] = $data['second_eid'];
            }
        }
        $data['need_nums'] = $atd_info['need_nums'];

        $model = self::get($w);
        if ($model) {
            $model->allowField(true)->isUpdate(true)->save($data);
            return $model;
        } else {
            $data['in_nums'] = 0;
            $data['later_nums'] = 0;
            $data['leave_nums'] = 0;
            $data['trial_nums'] = 0;
            $data['makeup_nums'] = 0;
            return self::create($data, true);
        }
    }


    protected function init_catt_info($catt_id){
        if($catt_id == 0){
            $catt_info = $this->getData();
        }else{
            $catt_info = get_catt_info($catt_id);
            $this->data($catt_info);
        }
        return $catt_info;
    }

    /**
     * 撤销考勤记录
     * @param int $catt_id
     * @return bool
     */
    public function cancelAttendance($catt_id = 0)
    {
        $catt_info = $this->init_catt_info($catt_id);
        if(empty($catt_info)){
            return false;
        }

        if(!$this->checkDelParamsPermit($catt_id)){
            return false;
        }
        $catt_id = $catt_info['catt_id'];

        $w_satt['catt_id'] = $catt_id;

        $m_satt = new StudentAttendance();
        $satt_list = $m_satt->where($w_satt)->select();
        $this->startTrans();
        try {
            foreach ($satt_list as $satt) {
                $result = $satt->cancelAttendance(false,$satt['satt_id']);
                if(!$result){
                    $this->rollback();
                    return $this->user_error($satt->getError());
                }
            }

            //处理试听
            $w_tla['catt_id'] = $catt_id;
            $update_tla['is_attendance'] = 0;
            $update_tla['attendance_status'] = 0;
            $update_tla['catt_id'] = 0;
            $update_tla['is_arrive'] = 0;
            $update_tla['remark'] = '';
            $m_tla = new TrialListenArrange();
            $result = $m_tla->save($update_tla,$w_tla);
            if(false === $result){
                $this->rollback();
                return $this->sql_save_error('trial_listen_arrange');
            }

            if($catt_info['ca_id'] > 0){
                $m_cas = new CourseArrangeStudent();
                // 撤销排课 出勤试听次数 -1
                $cas_list = $m_cas->where('ca_id',$catt_info['ca_id'])->select();
                foreach ($cas_list as $cas) {
                    if($cas['is_in'] == 1 && $cas['cu_id'] > 0){
                        $customer = Customer::get($cas['cu_id']);
                        $customer->trial_listen_times = $customer->trial_listen_times - 1;
                        $result = $customer->save();

                        if(false === $result){
                            $this->rollback();
                            return $this->sql_save_error('customer');
                        }
                    }
                    /*
                    $cas['is_attendance'] = 0;
                    $cas['satt_id'] = 0;
                    $cas['is_in'] = -1;
                    $cas['has_extra_consume'] = 0;

                    $result = $cas->save();

                    if(false === $result){
                        $this->rollback();
                        return $this->sql_save_error('course_arrange_student');
                    }*/
                }
                /*
                $w_cas_update['ca_id'] = $catt_info['ca_id'];
                $w_cas_update['is_in'] = ['NEQ',-1];

                $update_cas['is_attendance'] = 0;
                $update_cas['satt_id'] = 0;
                $update_cas['is_in'] = -1;
                $update_cas['has_extra_consume'] = 0;

                $result = $m_cas->isUpdate(true)->save($update_cas,$w_cas_update);

                if(false === $result){
                    $this->rollback();
                    return $this->sql_save_error('course_arrange_student');
                }
                */
            }

            //删除授课记录
            $result = $this->deleteCatt();
            if(!$result){
                $this->rollback();
                return false;
            }
        }catch(Exception $e){
            $this->rollback();
            return $this->exception_error($e);
        }
        $this->commit();
        return true;
    }

    /**
     * @param int $catt_id
     * @return bool
     * @throws Exception
     */
    public function deleteCatt($catt_id = 0){
        $catt_info = $this->init_catt_info($catt_id);
        if(empty($catt_info)){
            return false;
        }
        $catt_id = $catt_info['catt_id'];

        $this->startTrans();
        try{
            //清除教师课耗
            $w_elh['catt_id'] = $catt_id;
            $m_elh = new EmployeeLessonHour();
            $result = $m_elh->where($w_elh)->delete(true);
            if(false === $result){
                $this->rollback();
                return $this->sql_delete_error('employee_lesson_hour');
            }
            //删除自己
            $result = $this->delete(true);
            if(false === $result){
                $this->rollback();
                return $this->sql_delete_error('class_attendance');
            }
        }catch(\Exception $e){
            $this->rollback();
            return $this->exception_error($e);
        }
        $this->commit();
        return true;
    }

    /**
     * 批量整体撤销某一次上课的所有考勤
     * @return bool
     * @throws \Exception
     */
    public function cancel_attendance()
    {
        $catt_id = $this->getData('catt_id');
        $list = $this->getAttr('student_attendances');
        $this->startTrans();
        try {
            foreach ($list as $att_item) {
                if (!$att_item instanceof StudentAttendance) {
                    throw new Exception('pass');
                }
                $att_item->cancelStudentAttendance(false);
            }

            $ca_id = $this->getData('ca_id');
            if (!empty($ca_id)) {
                //恢复试听记录的状态,目前试听只能安排到排课上面,只有排课才有试听 todo
                $temp = [];
                $temp['eid']               = 0;
                $temp['is_attendance']     = 0;
                $temp['attendance_status'] = 0;
                $w = [];
                $w['ca_id'] = $ca_id;
                TrialListenArrange::update($temp, $w);
            }
            $w = [];
            $w['catt_id'] = $catt_id;
            StudentLessonHour::destroy($w);
            EmployeeLessonHour::destroy($w);
            StudentAttendance::destroy($w);
            $rs = $this->delete();
            if (!$rs) {
                $this->rollback();
                return $this->user_error('撤销考勤失败!');
            }
        } catch (\Exception $exception) {
            $this->rollback();
//            throw $exception;
            return $this->user_error('撤销考勤失败!' . $exception->getMessage());
        }
        $this->commit();
        return true;
    }

    /**
     * 根据排课记录创建一条教师授课记录
     * @param  [type] $ca_info             [排课信息]
     * @param  string $user_input          [用户输入实际考勤信息]
     * @return [type]                      [description]
     */
    public function createCattByCa($ca_info,$user_input = []){
        $consume_lesson_hour = isset($user_input['consume_lesson_hour'])?$user_input['consume_lesson_hour']:null;
        $lesson_remark       = isset($user_input['lesson_remark'])?$user_input['lesson_remark']:'';

        $data = [];
        array_copy($data,$ca_info,
            ['og_id',
            'bid',
            'ca_id',
            'int_day',
            'int_start_hour',
            'int_end_hour',
            'sj_id',
            'grade',
            'lesson_type',
            'is_trial',
            'is_makeup',
            'lid',
            'cid', 'consume_source_type', 'consume_lesson_amount', 'tb_id','tbs_id'
            ]
        );

        $data['eid']           = isset($user_input['teach_eid'])?$user_input['teach_eid']:$ca_info['teach_eid'];
        $data['second_eid']    = isset($user_input['second_eid'])?$user_input['second_eid']:$ca_info['second_eid'];
        $data['second_eids']   = isset($user_input['second_eids']) ? $user_input['second_eids'] : $ca_info['second_eids'];
        $data['lesson_remark'] = $lesson_remark;

        if(is_null($consume_lesson_hour) || $consume_lesson_hour == 0){
            if(isset($ca_info['consume_lesson_hour']) && $ca_info['consume_lesson_hour'] > 0){
                $consume_lesson_hour = $ca_info['consume_lesson_hour'];
            }else{
                $m_course_arrange = new CourseArrange();
                $consume_lesson_hour = $m_course_arrange->getConsumeLessonHour($ca_info);
            } 
        }

        $data['consume_lesson_hour'] = $consume_lesson_hour;

        if(isset($user_input['consume_source_type'])){
            $data['consume_source_type'] = $user_input['consume_source_type'];
        }
        if(isset($user_input['consume_lesson_amount'])){
            $data['consume_lesson_amount'] = $user_input['consume_lesson_amount'];
        }

        $result = $this->data([])->isUpdate(false)->save($data);

        if(!$result){
            return $this->sql_add_error('class_attendance');
        }

        return $this;
    }

    /**
     * 根据自由登记信息创建class_attendance记录
     * @param  array  $user_input [description]
     * @return [type]             [description]
     */
    public function createCattByFreeReg($user_input = []){
        $consume_lesson_hour = isset($user_input['consume_lesson_hour'])?$user_input['consume_lesson_hour']:null;
        $lesson_remark       = isset($user_input['lesson_remark'])?$user_input['lesson_remark']:'';

        $data = [];
        $lesson_type = $user_input['lesson_type'];
        if($lesson_type == 0){
            $cid = $user_input['cid'];
            $class_info = get_class_info($cid);
            $data['og_id'] = $class_info['og_id'];
            $data['bid']   = $class_info['bid'];
        }else{
            $data['og_id'] = gvar('og_id');
        }
        
        array_copy($data,$user_input,
            [
            'int_day',
            'int_start_hour',
            'int_end_hour',
            'sj_id',
            'lesson_type',
            'lid',
            'cid'
            ]
        );

        if(isset($user_input['grade'])){
            $data['grade'] = intval($user_input['grade']);
        }

        $data['eid']           = $user_input['teach_eid'];
        $data['second_eid']    = isset($user_input['second_eid'])?$user_input['second_eid']:0;

        $data['lesson_remark'] = $lesson_remark;

        if(is_null($consume_lesson_hour)){
            $consume_lesson_hour = 1.00;
        }

        $data['consume_lesson_hour'] = $consume_lesson_hour;

        $result = $this->data([])->isUpdate(false)->save($data);

        if(!$result){
            return $this->sql_add_error('class_attendance');
        }

        return $this;
    }

    /**
     * 刷新考勤记录
     * @param int $catt_id
     */
    public function refresh($catt_id = 0){
        $catt_info = $this->init_catt_info($catt_id);
        if(!$catt_info){
            return false;
        }
        $catt_id = $catt_info['catt_id'];

        $this->startTrans();
        try{
            $result = $this->updateCattCountFields();
            if(!$result){
                $this->rollback();
                return false;
            }

            $catt_info = $this->getData();

            $att_nums = $catt_info['in_nums'] + $catt_info['absence_nums'];
            $is_delete = false;

            if($att_nums == 0 && $this->trial_nums == 0){
                $result = $this->deleteCatt();
                if(false === $result){
                    $this->rollback();
                    return false;
                }
                //删除教师课耗记录
                $m_elh = new EmployeeLessonHour();
                $w_elh['catt_id'] = $catt_id;

                $result = $m_elh->where($w_elh)->delete(true);

                if(false === $result){
                    $this->rollback();
                    return $this->sql_delete_error('employee_lesson_hour');
                }

                $is_delete  = true;
            }else{
                //创建教师课耗
                $result = $this->createEmployeeLessonHours();
                if(!$result){
                    $this->rollback();
                    return false;
                }
            }

            //更新排课状态
            if($catt_info['ca_id'] > 0) {

                if ($is_delete) {
                    $update_ca['is_attendance'] = 0;

                } else {
                    if ($catt_info['need_nums'] <= $catt_info['in_nums'] + $catt_info['absence_nums']) {
                        $update_ca['is_attendance'] = 2;
                    } elseif ($catt_info['in_nums'] + $catt_info['absence_nums'] > 0) {
                        $update_ca['is_attendance'] = 1;
                    } else {
                        $update_ca['is_attendance'] = 0;
                    }
                }

                $w_ca_update['ca_id'] = $catt_info['ca_id'];

                $m_ca = new CourseArrange();

                $result = $m_ca->save($update_ca, $w_ca_update);

                if (false === $result) {
                    $this->rollback();
                    return $this->sql_save_error('course_arrange');
                }
            }

        }catch(Exception $e){
            $this->rollback();
            return $this->exception_error($e);
        }
        $this->commit();
        return true;
    }

    /**
     * 更新统计字段
     * @return [type] [description]
     */
    public function updateCattCountFields(){
        $catt_info = $this->getData();

        $w_satt['catt_id'] = $catt_info['catt_id'];
        $w_cas = [];
        $class_student_nums = 0;
        $need_nums = 0;
        $in_nums = 0;
        $absence_nums = 0;
        $leave_nums = 0;
        $later_nums = 0;
        $makeup_nums = 0;
        $has_extra_consume = 0;

        $mCas = new CourseArrangeStudent();


        if($catt_info['ca_id'] > 0) {
            $w_cas['ca_id'] = $catt_info['ca_id'];
            $need_nums = $mCas->where($w_cas)->count();
        }
         //先统计试课人数
        $w_tla = $w_cas;
        $w_tla['is_trial'] = 1;
         $tla_count = $mCas->where($w_tla)->count();

         $trial_nums = $tla_count;
         $att_nums   = 0;
         $ca_info = get_ca_info($catt_info['ca_id']);
         if($ca_info['is_trial'] == 1){
             $mTla = new TrialListenArrange();
            $w_tla = [];
            $w_tla['ca_id'] = $catt_info['ca_id'];
            $w_tla['is_attendance'] = 1;
            $tla_list = $mTla->where($w_tla)->select();

            foreach($tla_list as $tla) {
                if ($tla['attendance_status'] == 1) {
                    $in_nums++;
                } else {
                    $absence_nums++;
                }
                $att_nums++;
            }
         }else{
             $mSatt = new StudentAttendance();
             $satt_list = $mSatt->where($w_satt)->select();
             foreach($satt_list as $satt){
                 if($satt['is_in']){
                     $in_nums++;
                 }elseif($satt['is_in'] == 0){
                     $absence_nums++;
                 }
                 if($satt['is_late']){
                     $later_nums++;
                 }
                 if($satt['is_leave']){
                     $leave_nums++;
                 }
                 if($satt['is_makeup']){
                     $makeup_nums++;
                 }else{
                     $class_student_nums++;
                 }
                 if($satt['has_extra_consume'] > 0){
                     $has_extra_consume = 1;
                 }
                 $att_nums++;
             }
             if($trial_nums > 0){
                 $w_cas = [];
                 $w_cas['ca_id'] = $catt_info['ca_id'];
                 $w_cas['is_trial'] = 1;
                 $cas_list = $mCas->where($w_cas)->select();
                 foreach($cas_list as $cas){
                     if($cas['is_in']){
                         $in_nums++;
                     }elseif($cas['is_in'] == 0){
                         $absence_nums++;
                     }
                     $att_nums++;
                 }
             }
         }

        if($need_nums == 0){
            $need_nums = $att_nums;
        }

        $this->class_student_nums = $class_student_nums;
        $this->need_nums = $need_nums;
        $this->in_nums = $in_nums;
        $this->leave_nums = $leave_nums;
        $this->later_nums = $later_nums;
        $this->makeup_nums = $makeup_nums;
        $this->trial_nums = $trial_nums;
        $this->absence_nums = $absence_nums;
        $this->has_extra_consume = $has_extra_consume;

        $result = $this->isUpdate(true)->save();

        if(false === $result){
            return $this->sql_save_error('class_attendance');
        }

        return true;
    }

    /**
     * 根据教师授课记录产生教师课时记录
     * @return [type] [description]
     */
    public function createEmployeeLessonHours(){
        $catt_info = $this->getData();
        $catt_id = $catt_info['catt_id'];

        $cd = [];           //统计数据 count data
        $cd['student_nums'] = 0;
        $cd['lesson_hours'] = $catt_info['consume_lesson_hour'];
        $cd['lesson_minutes'] = cacu_minutes($catt_info['int_start_hour'],$catt_info['int_end_hour']);
        $cd['total_lesson_hours'] = 0.00;
        $cd['total_lesson_amount'] = 0.00;
        $cd['payed_lesson_amount'] = 0.00;

        $sids = [];         //存放学员ID
        $extra_elhs = [];       //额外课消，多个教师ID;

        $w['catt_id'] = $catt_id;
        $slh_list = $this->m_student_lesson_hour->where($w)->select();

        if($slh_list){
            foreach($slh_list as $slh){
                if($slh['extra_consume_did'] == 0){
                    if(!in_array($slh->sid,$sids)){
                        array_push($sids,$slh->sid);
                        $cd['student_nums']++;
                        $cd['total_lesson_hours'] += $slh['lesson_hours'];
                        $cd['total_lesson_amount'] += $slh['lesson_amount'];
                        if($slh['is_pay']){
                            $cd['payed_lesson_amount'] += $slh['lesson_amount'];
                        }
                    }
                }else{
                    $eid = $slh['eid'];
                    if(isset($extra_elhs[$eid])){
                        if($slh['extra_consume_did'] == $extra_elhs[$eid]['extra_consume_did']){
                            $extra_elhs[$eid]['student_nums']++;
                            $extra_elhs[$eid]['total_lesson_hours'] += $slh['lesson_hours'];
                            $extra_elhs[$eid]['total_lesson_amount'] += $slh['lesson_amount'];
                        }else{
                            if(isset($extra_elhs[$eid]['other_ec_did'][$slh['extra_consume_did']])){
                                $extra_elhs[$eid]['other_ec_did'][$slh['extra_consume_did']]['student_nums']++;
                                $extra_elhs[$eid]['other_ec_did'][$slh['extra_consume_did']]['total_lesson_hours'] += $slh['lesson_hours'];
                                $extra_elhs[$eid]['other_ec_did'][$slh['extra_consume_did']]['total_lesson_amount'] += $slh['lesson_amount'];
                            }else{
                                $extra_elhs[$eid]['other_ec_did'][$slh['extra_consume_did']] = [
                                    'student_nums'  => 1,
                                    'total_lesson_hours'    => $slh['lesson_hours'],
                                    'total_lesson_amount'   => $slh['lesson_amount']
                                ];
                            }
                        }

                    }else{
                        $extra_elhs[$eid] = [
                            'is_extra_consume'  => 1,
                            'student_nums'    =>  1,
                            'total_lesson_hours'  => $slh['lesson_hours'],
                            'total_lesson_amount' => $slh['lesson_amount'],
                            'payed_lesson_amount' => 0.00,
                            'extra_consume_did' => $slh['extra_consume_did'],
                            'other_ec_did'      => []
                        ];
                    }
                    if($slh['is_pay']){
                        $extra_elhs[$eid]['payed_lesson_amount'] += $slh['lesson_amount'];
                    }
                }
            }
        }

        if($cd['student_nums'] == 0 && empty($extra_elhs)){
            return true;
        }

        //创建记录
        $elh_info = [];
        $elh_info['change_type'] = 1;       //考勤登记
        $elh_info['sid'] = 0;
        $elh_info['sids'] = '';
        array_copy($elh_info, $catt_info,
            [
                'og_id', 'bid', 'eid', 'second_eid', 'second_eids',
                'lesson_type', 'lid', 'sj_id', 'grade', 'sg_id', 'cid',
                'ca_id', 'catt_id', 'int_day', 'int_start_hour', 'int_end_hour'
            ]);
        if($cd['student_nums'] > 0) {
            // 创建课耗时，添加导师ID
            if ($elh_info['lesson_type'] == 0) {
                $cinfo = get_class_info($elh_info['cid']);
                if ($cinfo) {
                    $elh_info['edu_eid'] = $cinfo['edu_eid'];
                }
            } elseif ($elh_info['lesson_type'] == 1) {
                $elh_info['sid'] = $sids[0];
                $esinfo = m('employee_student')->where('sid', $elh_info['sid'])->find();
                if ($esinfo) {
                    $elh_info['edu_eid'] = $esinfo->eid;
                }
            } elseif ($elh_info['lesson_type'] == 2) {
                $elh_info['sids'] = implode(',',$sids);
            }
            $w['is_extra_consume'] = 0;
            $result = $this->addOrSaveEmployeeLessonHours($elh_info, $cd, $w);
            if(!$result){
                return false;
            }
        }

        if(!empty($extra_elhs)){
            $f1 = ['is_extra_consume','student_nums','total_lesson_hours','total_lesson_amount','payed_lesson_amount','extra_consume_did'];
            $f2 = ['og_id','bid','lesson_type','change_type','ca_id','satt_id','catt_id','int_day','int_start_hour','int_end_hour','is_demo'];
            $f3 = ['student_nums','total_lesson_hours','total_lesson_amount','payed_lesson_amount'];
            foreach($extra_elhs as $eid=>$extra_elh){
                $extra_elh_info = [];
                $extra_elh_info['eid'] = $eid;
                $extra_elh_info['edu_eid'] = 0;
                $extra_elh_info['second_eid'] = 0;
                $extra_elh_info['second_eids'] = '';

                array_copy($extra_elh_info,$extra_elh,$f1);
                array_copy($extra_elh_info,$elh_info,$f2);

                $extra_cd = [];
                $extra_cd['lesson_minutes'] = $cd['lesson_minutes'];
                $extra_cd['lesson_hours']   = format_lesson_hours($extra_elh['total_lesson_hours'] / $extra_elh['student_nums']);
                array_copy($extra_cd,$extra_elh_info,$f3);

                $w_extra = [];
                $w_extra['eid']     = $eid;
                $w_extra['catt_id'] = $catt_id;
                $w_extra['is_extra_consume'] = 1;
                $w_extra['extra_consume_did'] = $extra_elh_info['extra_consume_did'];

                $result = $this->addOrSaveEmployeeLessonHours($extra_elh_info,$extra_cd,$w_extra);
                if(!$result){
                    return false;
                }

                if(!empty($extra_elh['other_ec_did'])){
                    foreach($extra_elh['other_ec_did'] as $ec_did=>$did_extra_elh){
                        $did_extra_elh_info = array_merge($extra_elh_info,$did_extra_elh);
                        $did_extra_elh_info['extra_consume_did'] = $ec_did;
                        $did_extra_cd = array_merge($extra_cd,$did_extra_elh);
                        $w_did_extra = array_merge($w_extra,['extra_consume_did'=>$ec_did]);
                        $result = $this->addOrSaveEmployeeLessonHours($did_extra_elh_info,$did_extra_cd,$w_did_extra);
                        if(!$result){
                            return false;
                        }
                    }
                }

            }
        }
        return true;
    }

    /**
     * 新增或编辑一条教师课耗记录
     * @param [type] $elh_info [description]
     * @param [type] $cd       [description]
     */
    protected function addOrSaveEmployeeLessonHours($elh_info,$cd,$w)
    {
        $m_elh = $this->m_employee_lesson_hour->where($w)->find();
        if(!$m_elh){
            $elh_info = array_merge($elh_info,$cd);
            $result = $this->m_employee_lesson_hour->data([])->isUpdate(false)->save($elh_info);
            if(!$result){
                return $this->sql_add_error('employee_lesson_hour');
            }
        }else{
            //更新记录
            array_copy($cd,$elh_info,['cid','sid','sids']);
            $result = $m_elh->data($cd)->save();
            if(false === $result){
                return $this->sql_save_error('employee_lesson_hour');
            }
        }
        return true;
    }


    public function checkDelParamsPermit($catt_id = 0){
        $catt_info = $this->init_catt_info($catt_id);
        if(empty($catt_info)){
            return true;
        }

        $now_int_day = int_day(time());

        if($catt_info['int_day'] < $now_int_day){
            $catt_params = user_config('params.class_attendance',$catt_info['bid']);
            if($catt_params['allow_del_history'] === 0 ){
                return $this->user_error('系统设置为不允许撤销历史考勤!');
            }
            if($catt_params['allow_del_history'] === 1 && $catt_params['del_history_pass_days'] > 0){
                $days = int_day_diff($catt_info['int_day'],$now_int_day);
                if($days > $catt_params['del_history_pass_days']){
                    $msg = sprintf('系统设置为允许撤销考勤的天数为%s天,当前考勤已过%s天',$catt_params['del_history_pass_days'],$days);
                    return $this->user_error($msg);
                }
            }
        }
        return true;
    }

    /**
     * 批量确认考勤
     * @param array $catt_ids
     * @return bool
     */
    public function batchConfirmAttendance($catt_ids = [])
    {
        if (empty($catt_ids) || !is_array($catt_ids)) {
            return $this->user_error('请选择转入考勤id');
        }

        $this->startTrans();
        try {
            foreach ($catt_ids as $catt_id) {
                $result = $this->confirmAttendance($catt_id);
                if (!$result) {
                    $this->rollback();
                    return false;
                }
            }
        }catch(\Exception $e){
            $this->rollback();
            return $this->exception_error($e);
        }
        $this->commit();
        return true;
    }

    /**
     * 考勤确认
     * @param $catt_id
     * @return bool
     */
    public function confirmAttendance($catt_id)
    {
        if($catt_id > 0){
            $catt_info = get_class_attendance_info($catt_id);
        }else{
            $catt_info = $this->getData();
            $catt_id = $catt_info['catt_id'];
        }

        if(!$catt_info || !$catt_id){
            return $this->user_error('catt_id error!');
        }

        if ($catt_info['lesson_type'] != 1){
            return $this->user_error('一对一才可以确认考勤');
        }

        $user = gvar('user');
        $update_ca = [
            'is_confirm' => 1,
            'confirm_eid' => $user['employee']['eid'],
            'confirm_time' => time()
        ];

        $this->startTrans();
        try {
            $w_ca['catt_id'] = $catt_id;
            $result = $this->save($update_ca,$w_ca);

            if(false === $result){
                $this->rollback();
                return $this->sql_save_error('class_attendance');
            }

        }catch(\Exception $e){
            $this->rollback();
            return $this->exception_error($e);
        }
        $this->commit();
        return true;

    }

    /**
     *批量取消考勤记录确认
     * @param $catt_ids
     * @return bool
     */
    public function batchCalcelConfirmAttendance($catt_ids)
    {
        if (empty($catt_ids) || !is_array($catt_ids)) {
            return $this->user_error('请选择撤销转入考勤id');
        }

        $this->startTrans();
        try {
            foreach ($catt_ids as $catt_id) {
                $result = $this->calcelConfirmAttendance($catt_id);
                if (!$result) {
                    $this->rollback();
                    return false;
                }
            }
        }catch(\Exception $e){
            $this->rollback();
            return $this->exception_error($e);
        }
        $this->commit();
        return true;
    }

    /**
     * 取消考勤记录确认
     * @param $catt_id
     */
    public function calcelConfirmAttendance($catt_id)
    {
        if($catt_id > 0){
            $catt_info = get_class_attendance_info($catt_id);
        }else{
            $catt_info = $this->getData();
            $catt_id = $catt_info['catt_id'];
        }

        if(!$catt_info || !$catt_id){
            return $this->user_error('catt_id error!');
        }

        if ($catt_info['lesson_type'] != 1){
            return $this->user_error('一对一才可以撤销确认考勤');
        }

        $update_ca = [
            'is_confirm' => 0,
            'confirm_eid' => 0,
            'confirm_time' => 0
        ];

        $this->startTrans();
        try {
            $w_ca['catt_id'] = $catt_id;
            $result = $this->save($update_ca,$w_ca);

            if(false === $result){
                $this->rollback();
                return $this->sql_save_error('class_attendance');
            }

        }catch(\Exception $e){
            $this->rollback();
            return $this->exception_error($e);
        }
        $this->commit();
        return true;

    }

}