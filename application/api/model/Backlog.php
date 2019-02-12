<?php
/**
 * Author: luo
 * Time: 2017-12-05 09:03
**/

namespace app\api\model;

class Backlog extends Base
{

    protected function setIntDayAttr($value)
    {
        return $value ? format_int_day($value) : $value;
    }

    protected function setIntHourAttr($value)
    {
        return $value ? format_int_hour($value) : $value;
    }

    protected function getIntHourAttr($value)
    {
        return $value ? int_hour_to_hour_str($value) : $value;
    }

    public function addBackLog($input){

        $this->startTrans();
        try {
            $result = $this->isUpdate(false)->allowField(true)->save($input);
            if (false === $result) {
                $this->rollback();
                return $this->sql_add_error('back_log');
            }
            $backlog = $this->getData();
            $delay = str_to_time($input['int_day'].$input['int_hour']) - time();
            $rs = $this->pushBackLog($backlog,$delay);
            if (false === $rs) {
                $this->rollback();
                return $this->user_error('push error');
            }

        } catch(\Exception $e) {
            $this->rollback();
            return $this->exception_error($e);
        }

        $this->commit();
        return true;
    }

    /**
     * ���ʹ�������
     * @param $sid
     * @param $frvw_id
     * @return bool
     */
    public function pushBackLog($backlog,$delay = 0)
    {
        $mMessage = new Message();
        $scene = 'to_do';
        $default_template_setting = config('tplmsg');
        $user_template_setting = isset(Config::userConfig()['wechat_template'][$scene]) ? Config::userConfig()['wechat_template'][$scene] : null;
        if (empty($user_template_setting)) {
            //�ͻ����û�����ù��ںŵ�ģ����Ϣ��first�ֶΡ�remark�ֶκ���ɫ�����ã���ʹ��ϵͳĬ�ϵĹ��ںŵ�����
            $user_template_setting = $default_template_setting[$scene];
        }

        $this->startTrans();
        try {
            $task_data['bl_id'] = $backlog['bl_id'];
            $task_data['subject'] = '����һ����������';
            $task_data['content'] = $backlog['desc'];
            $task_data['uid'] = $backlog['create_uid'];

            $rs = $mMessage->sendTplMsg('back_log',$task_data ,[],2,$delay);
            if($rs === false) return $this->user_error($mMessage->getErrorMsg());
        } catch(\Exception $e) {
            $this->rollback();
            return $this->exception_error($e);
        }

        $this->commit();
        return true;
    }


}