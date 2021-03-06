<?php
namespace app\api\controller;

use app\api\model\EmployeeTimeSection;
use think\Request;

class EmployeeTimeSections extends Base
{

    public function get_list(Request $request)
    {
        $get = $request->get();
        $mEts = new EmployeeTimeSection();
        $result = $mEts->getSearchResult($get);

        return $this->sendSuccess($result);
    }

    public function get_detail(Request $request, $id = 0)
    {
        return parent::get_detail($request, $id); // TODO: Change the autogenerated stub
    }

    public function post(Request $request)
    {
        $time_section_list = $request->post();

        $mEts = new EmployeeTimeSection();
        $result = $mEts->batchTimeSections($time_section_list);
        if(false === $result){
            return $this->sendError(400,$mEts->getError());
        }

        return $this->sendSuccess();
    }

    public function put(Request $request)
    {
        $input = $request->put();
        $ets_id = isset($input['ets_id']) ? $input['ets_id'] : 0;
        unset($input['ets_id']);

        $mEts = new EmployeeTimeSection();
        $result = $mEts->updateTimeSections($ets_id,$input);
        if(false === $result){
            return $this->sendError(400,$mEts->getError());
        }

        return $this->sendSuccess();
    }

    public function delete(Request $request)
    {
        $ets_id = input('id/d');

        $mEts = new EmployeeTimeSection();
        $employee_time_section = $mEts->get($ets_id);
        if (empty($employee_time_section)) return $this->user_error('时间段不存在');

        $result = $mEts->delTimeSection($ets_id);
        if (false === $result){
            return $this->user_error(400,$mEts->getError());
        }

        return $this->sendSuccess();
    }

    public function batch_delete(Request $request)
    {
        $input = input();
        $ets_ids = isset($input['ets_ids']) ? $input['ets_ids'] : [];

        $mEts = new EmployeeTimeSection();
        $result = $mEts->batchDelete($ets_ids);
        if (false === $result) return $this->sendError(400,$mEts->getError());

        return $this->sendSuccess();
    }

}