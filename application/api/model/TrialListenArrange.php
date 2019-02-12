<?php
/** 
 * Author: luo
 * Time: 2017-10-12 09:41
**/

namespace app\api\model;

use app\api\controller\Classrooms;
use app\common\exception\FailResult;
use app\common\Wechat;
use think\Exception;

class TrialListenArrange extends Base
{

    const LISTEN_TYPE_FOLLOW_CLASS = 0; # 跟班试听
    const LISTEN_TYPE_NEW_ARRANGE = 1; # 开课试听

    public static function init()
    {
        parent::init(); // TODO: Change the autogenerated stub
        TrialListenArrange::event('after_update', function ($model) {
            if ($model instanceof TrialListenArrange && !empty($model['cu_id'])) {
                $customer = Customer::get($model['cu_id']);
                $changed_data = $model->getChangedData();
                /*如果客户参加了给他安排的试听，就更新客户状态为：已试听*/
                if ($customer && isset($changed_data['attendance_status']) && $model['attendance_status'] == 1 && $customer['customer_status_did'] !== Customer::STATUS_DID_SUCCESS) {
                    $customer->data('customer_status_did', Customer::STATUS_DID_LISTEN)->save();
                }
            }
        });
    }

    //protected $listen_type = ['follow_class' => 0, 'new_arrange' => 1];

    protected $insert = ['is_student'];

    protected function setIsStudentAttr($value, $data)
    {
        return (isset($data['sid']) && $data['sid'] > 0) ? 1 : 0;

    }

    public function customer()
    {
        return $this->belongsTo('Customer', 'cu_id', 'cu_id');
    }

    public function student()
    {
        return $this->belongsTo('Student', 'sid', 'sid');
    }

    public function course()
    {
        return $this->belongsTo('CourseArrange', 'ca_id', 'ca_id');
    }

    public function courseArrange()
    {
        return $this->belongsTo('CourseArrange', 'ca_id', 'ca_id');
    }

    public function oneClass()
    {
        return $this->hasOne('Classes', 'cid', 'cid');
    }

    /**
     * @desc  创建一个试听记录
     * @author luo
     */
    public function createOneTrial($ca_id, $student_data) {

        $course = CourseArrange::get(['ca_id', $ca_id]);
        if(empty($course)) return $this->user_error('课程不存在');

        if(isset($student_data['sid']) && $student_data['sid'] != ''){
            $w = [
                'sid' => $student_data['sid'],
                'ca_id' => $ca_id,
                'int_day' => $course['int_day'],
                'int_start_hour' => $course['int_start_hour'],
                'int_end_hour' => $course['int_end_hour'],
            ];
        }
        if(isset($student_data['cu_id']) && $student_data['cu_id'] != ''){
            $w = [
                'cu_id' => $student_data['cu_id'],
                'ca_id' => $ca_id,
                'int_day' => $course['int_day'],
                'int_start_hour' => $course['int_start_hour'],
                'int_end_hour' => $course['int_end_hour'],
            ];
        }

        $data = $this->where($w)->find();
        if ($data){
            return $this->user_error(' 试听记录已存在,不要重复创建！');
        }

        try {
            $this->startTrans();

            //--1-- 试听记录的课程相关的数据，如课程时间、老师，直接使用课程安排的数据
            $data = $course->toArray();
            $data['eid'] = $data['teach_eid'];

            //--2-- 如果是试听课程，则为创建试听
            $data['listen_type'] = $data['is_trial'] === 1 ? self::LISTEN_TYPE_NEW_ARRANGE : self::LISTEN_TYPE_FOLLOW_CLASS;
            $data['cu_id'] = isset($student_data['cu_id']) ? $student_data['cu_id'] : 0;
            $data['sid'] = isset($student_data['sid']) ? $student_data['sid'] : 0;

            $rs = (new self())->isUpdate(false)->allowField(true)->save($data);
            if (!$rs) return $this->user_error('试听纪录失败');

            /*if ($data['cu_id'] > 0) {
                $m_customer = new Customer();
                $m_customer->where('cu_id', $data['cu_id'])->setInc('trial_listen_times');
            }*/

            //加入到课程的学生记录中
            $m_cas = new CourseArrangeStudent();
            $rs = $m_cas->addOneArrangeStudent($course, $data['sid'], ['cu_id' => $data['cu_id'], 'is_trial' => 1]);

            $this->commit();
        } catch (Exception $e) {
            $this->rollback();
            return $this->deal_exception($e->getMessage(), $e);
        }

        return $rs;
    }


    /**
     * @desc  创建多个试听
     * @author luo
     */
    public function createManyTrial($ca_id, $student_list)
    {
        $this->startTrans();
        try {
            foreach($student_list as $per_student) {
                $rs = $this->createOneTrial($ca_id, $per_student);
                if(!$rs) exception($this->getErrorMsg());
            }
            $this->commit();
        } catch(Exception $e) {
            $this->rollback();
            return $this->user_error(['msg' => $e->getMessage(), 'data' => $e->getTrace()]);
        }

        return true;
    }

    public static function makeMsgData($ca_id)
    {
        if(!($ca_id instanceof CourseArrange)){
            $m_ca = new CourseArrange();
            $course = $m_ca->find($ca_id);
        } else {
            $course = $ca_id;
        }
        if(empty($course)) throw new FailResult('课程不存在');


        $lesson_name = '';
        if(!empty($course['name'])) {
            $lesson_name = $course['name'];
        } else {
            if(empty($lesson_name) && $course['lid'] > 0) {
                $lesson = (new Lesson())->where('lid', $course['lid'])->field('lesson_name')->find();
                if(!empty($lesson['lesson_name'])) {
                    $lesson_name = $lesson['lesson_name'];
                }
            }
            if(empty($lesson_name) && $course['cid'] > 0) {
                $class = (new Classes())->where('cid', $course['cid'])->field('class_name')->find();
                if(!empty($class['class_name'])) {
                    $lesson_name = $class['class_name'];
                }
            }
        }

        $msg_data['lesson_name'] = $lesson_name;
        $employee = (new Employee())->where('eid', $course->teach_eid)->field('ename')->find();
        $msg_data['lesson_time'] = int_day_to_date_str($course->int_day) . ' '
            . int_hour_to_hour_str($course->int_start_hour) . '-' . int_hour_to_hour_str($course->int_end_hour);
        $msg_data['ename'] = $employee->ename;
        if($course->cr_id > 0) {
            $classroom = (new Classroom())->field('room_name')->find($course->cr_id);
            $msg_data['classroom'] = $classroom['room_name'];
        } else {
            $msg_data['classroom'] = '';
        }

        return $msg_data;
    }

    //推送老师微信通知
    public function wechat_tpl_notify_employee($scene, $msg_data, $employees)
    {
        //--1-- 模板信息链接字段检查
        $default_template_setting = config('tplmsg')[$scene];
        preg_match_all('/\{([^\}]+)\}/',$default_template_setting['weixin']['url'],$matches);
        if(isset($matches[1]) && !empty($matches[1])) {
            foreach($matches[1] as $field) {
                if($field == 'base_url') continue;

                if(!isset($msg_data[$field])) return $this->user_error($field.'模板信息链接字段不能为空');
            }
        }

        //--2-- 模板信息字段检查
        $temp = [];
        foreach($default_template_setting['tpl_fields'] as $field => $val) {
            if(!isset($msg_data[$field])) return $this->user_error($field.'模板信息字段不能为空');
            $temp[$field] = $msg_data[$field];
        }

        $wechat = Wechat::getInstance(Wechat::getAppidByBid(request()->bid));
        $message['appid'] = $wechat->appid;

        $message['url'] = tplmsg_url($default_template_setting['weixin']['url'],$msg_data);

        //--3-- 处理模板id
        if ($wechat->default) {
            $message['template_id'] = $default_template_setting['weixin']['template_id'];
        } else {
            $w = [];
            $w['appid'] = $message['appid'];
            $w['scene'] = $scene;
            $target_tpl = WxmpTemplate::get($w);
            if (empty($target_tpl)) {
                //该公众号还没有成功设置该模板.
                return $this->user_error('公众号还没有设置作业推送模板');
            }
            $message['template_id'] = $target_tpl['template_id'];
        }

        $user_template_setting = isset(Config::userConfig()['wechat_template'][$scene]) ? Config::userConfig()['wechat_template'][$scene] : null;
        if (empty($user_template_setting)) {
            //客户如果没有设置公众号的模板消息的first字段、remark字段和颜色的设置，则使用系统默认的公众号的设置
            $user_template_setting = $default_template_setting;
        }

        //--4-- 模板消息内容替换
        $search  = array_values($user_template_setting['tpl_fields']);
        $replace = array_values($temp);

        $data = $user_template_setting['weixin']['data'];
        foreach ($data as &$subject) {
            $subject = str_replace($search, $replace, $subject);
        }
        $sms_message = str_replace($search, $replace, $user_template_setting['sms']['tpl']);
        $message['data'] = $data;

        //--5-- 准备发送消息
        $inner_message = [];
        $inner_message['business_type'] = $scene;
        $inner_message['business_id'] = isset($msg_data['business_id']) ? $msg_data['business_id'] : 0;
        $inner_message['title']   = $default_template_setting['message']['title'];
        $inner_message['content'] = str_replace($search, $replace, $default_template_setting['message']['content']);
        $inner_message['url']     = $message['url'];
        foreach ($employees as $employee) {
            if(!($employee instanceof Employee)) {
                $employee = Employee::get($employee['eid']);
            }
            $user = $employee->user;
            if(empty($user)) continue;
            /** @var User $per_user */
            if(empty($user->getData())) continue;

            $inner_message['uid'] = $user['uid'];
            Message::create($inner_message);
            if ($user['mobile'] && $user_template_setting['sms_switch']) {
                queue_push('SendSmsMsg', [$user['mobile'], $sms_message]);
            }
            if ($user['openid'] && $user_template_setting['weixin_switch']) {
                $w = [];
                $w['openid'] = $user['openid'];
                $w['subscribe'] = WxmpFans::SUBSCRIBE;
                if (WxmpFans::get($w)) {
                    $message['openid'] = $user['openid'];
                    queue_push('SendWxTplMsg', $message);
                }
            }

        }

        return true;
    }

    /**
     * 根据排课ID删除试听记录
     * @param  [type] $ca_id [description]
     * @return [type]        [description]
     */
    public function deleteByCaId($ca_id){
        $w_tla['ca_id'] = $ca_id;

        $result = $this->where($w_tla)->delete();

        if(false === $result){
            return $this->sql_delete_error('trial_listen_arrange');
        }

        return true;
    }

    /**
     * 通过登记考勤进行试听结果登记
     * @param  [type] $catt_info   [description]
     * @param  [type] $input_sinfo [description]
     * @return [type]              [description]
     */
    public function regByCatt($catt_info,$input_sinfo){
        $w_tla = [];
        $tla   = [];
        if(isset($input_sinfo['sid']) && $input_sinfo['sid'] > 0){
            $w_tla['sid'] = $input_sinfo['sid'];
            $w_tla['is_student'] = 1;
        }else{
            $w_tla['cu_id'] = $input_sinfo['cu_id'];
            $w_tla['is_student'] = 0;
        }
        array_copy($w_tla,$catt_info,['og_id','bid','int_day','int_start_hour','int_end_hour']);
        
        $m_tla = $this->where($w_tla)->find();

        $this->startTrans();
        try {
            if (!$m_tla) {
                //创建一条试听记录
                $tla = array_merge($tla, $w_tla);
                array_copy($tla, $catt_info, ['cid', 'ca_id', 'catt_id', 'eid']);
                $tla['is_attendance'] = 1;
                $tla['attendance_status'] = $input_sinfo['is_in'];

                if ($tla['cid'] > 0) {
                    $tla['listen_type'] = 0;
                } else {
                    $tla['listen_type'] = 1;
                }

                $result = $this->data([])->isUpdate(false)->save($tla);

                if (!$result) {
                    return $this->sql_add_error('trial_listen_arrange');
                }
            } else {

                //更新试听安排的状态
                $update_tla = [];
                $update_tla['catt_id'] = $catt_info['catt_id'];
                $update_tla['eid'] = $catt_info['eid'];
                $update_tla['ca_id'] = $catt_info['ca_id'];

                $w_tla_update['tla_id'] = $m_tla->tla_id;

                $update_tla['is_attendance'] = 1;
                $update_tla['attendance_status'] = $input_sinfo['is_in'];

                if ($input_sinfo['is_in'] == 1) {
                    $update_tla['is_arrive'] = 1;
                    $input_sinfo['remark'] = '';
                }
                $update_tla['remark'] = $input_sinfo['remark'];

                $result = $m_tla->save($update_tla, $w_tla_update);

                if (false === $result) {
                    return $this->sql_update_error('trial_listen_arrange');
                }
            }

            if(isset($input_sinfo['cu_id']) && $input_sinfo['cu_id'] > 0 && $input_sinfo['is_in'] > 0){
                //更新客户名单的试听状态
                $customer = Customer::get($input_sinfo['cu_id']);
                if($customer->is_trial == 0){
                    $customer->is_trial = 1;
                }
                
                $customer->trial_listen_times = $customer->trial_listen_times + 1;

                $customer->save();
                
                // 更新市场名单试听状态
                $market_clue = MarketClue::get(['cu_id'=>$input_sinfo['cu_id']]);
                if($market_clue){
                    $market_clue->is_trial = 1;
                    $market_clue->save();
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
     * 更新试听
     * @param  [type] $input [description]
     * @return [type]        [description]
     */
    public function updateTrialStatus(TrialListenArrange $trial,$input)
    {
        $this->startTrans();
        try{
            $input['is_attendance'] = 1;
            if(isset($input['is_arrive']) && $input['is_arrive'] == 0){
                $input['attendance_status'] = 0;
            }
            $res = $trial->isUpdate(true)->allowField(true)->save($input);
            if(!$res){
                $this->rollback();
                return false;
            }
            
            // 更新CourseArrangeStudent
            if($trial->sid){
                $cas = (new CourseArrangeStudent)->where(['sid'=>$trial->sid,'ca_id'=>$trial->ca_id])->find();
            }elseif($trial->cu_id){
                $cas = (new CourseArrangeStudent)->where(['cu_id'=>$trial->cu_id,'ca_id'=>$trial->ca_id])->find();

                //更新客户名单的试听状态
                $customer = Customer::get($trial->cu_id);
                if($input['is_arrive'] == 1 && $input['attendance_status'] == 1){
                    if($customer->is_trial == 0){
                        $customer->is_trial = 1;
                    }
                    $customer->trial_listen_times += 1;
                    $ret = $customer->save();
                    if(false === $ret){
                        $this->rollback();
                        return $this->sql_save_error('customer');
                    }
                }
                
                // 市场名单 不具备试听条件 
                /*$m_mcl = new MarketClue();
                $result = $m_mcl->save($update,$w_update);
                if(false === $result){
                    $this->rollback();
                    return $this->sql_save_error('market_clue');
                }*/

            }
            if(empty($cas)){
                $this->rollback();
                return false;
            }
            $cas->is_in  = $input['attendance_status'];
            $cas->is_attendance = $input['attendance_status'];
            $cas->remark = $input['remark'];
            $ret = $cas->save();
            if(false === $ret){
                $this->rollback();
                return $this->sql_save_error('course_arrange_student');
            }
            
            
        }catch(\Exception $e){
            $this->rollback();
            return $this->deal_exception($e->getMessage(), $e);
        }
        $this->commit();

        return true;

    }

    public function getTodayTrialListen($eid){
        $w['int_day'] = int_day(time());
        $w['eid'] = $eid;
        return $this->where($w)->count();
    }

}