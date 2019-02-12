webpackJsonp([206],{1999:function(t,e,n){"use strict";var _=(n(1),n(914)),s=n(209),a=n(210);e.a={mixins:[_.a,s.a,a.a],data:function(){return{cfg_name:"params",student_leave_unit:"day",student_leave_value:1,config:{org_name:"",sysname:"",address:"",mobile:"",present_lesson_consume_method:1,ignore_time_long_clh:0,class_must_sel_lesson:0,remind_before_course:{days_before:1},class_attendance:{min_after_class:10,min_before_class:10,allow_debt_att:0,reg_att_before_min:10},return_visit:{absence_times:3,ask_leave_times:3,not_hand_in_homework_times:3,student_lesson_remain_times:5,student_lesson_remain_rate:.3},service:{auto_create_record:0,enable_homework_star:0},student_leave:{minutes_before:1440,enable:!0},course_arrange:{ignore_1by1_cc:0,allow_mobile_change:1},student_signup:{allow_modify_date:1,modify_date_days:30},default_sale_role_did:{new:"",renew:""},leave_warn_times:5,enable_company:0,member:{enable:0,level:[],max_level:5,name:""}}}},computed:{remind_before:function(){return{0:"今天",1:"明天",2:"后天",3:"大后天"}[this.config.remind_before_course.days_before]},present_consume_rule:function(){return{1:"先消耗正常课次，再消耗赠送课次",2:"按平均单价计算"}[this.config.present_lesson_consume_method]}},methods:{modifyConfig:function(t){var e=this,n="";switch(t){case"system":n="修改系统参数";break;case"class":n="修改班级是否必须属于课程";break;case"grade":n="修改是否启用年级";break;case"hour":n="修改默认课时定义";break;case"remind_before":n="修改课前提醒";break;case"attend":n="修改点名考勤";break;case"leave":n="修改学员请假";break;case"leave_warn_times":n="修改请假预警";break;case"present_consume_rule":n="修改赠送课时消耗规则";break;case"signup":n="修改报名缴费日期";break;case"sale_role":n="修改默认业绩归属人销售角色";break;case"leave_warn_times":n="修改请假预警";break;case"ignore_1by1_cc":n="修改是否忽略1对1排课教室冲突";break;case"allow_mobile_change":case"return_visit":n="修改学员回访";break;case"reg_att_before_min":n="登记考勤设置";break;case"company":n="修改是否启用分公司";break;case"service":n="修改作业配置";case"vip":n="修改会员体系配置";case"allow_passed_arrange":n="修改是否允许过期排课"}this.$Modal.open("system/configs/params/modify-modal.vue",{props:{data:this.config},on:{save:function(){e.init_config_data()}}}).then(function(_){_.vuec.set("config_id",e.cfg_id).set("modify_type",t).show(n)})},initFinished:function(){this.config.student_leave.minutes_before>=1440?(this.student_leave_unit="day",this.student_leave_value=this.config.student_leave.minutes_before/1440):(this.student_leave_unit="min",this.student_leave_value=this.config.student_leave.minutes_before)},getRate:function(){return 100*this.config.return_visit.student_lesson_remain_rate},setRate:function(t){this.config.return_visit.student_lesson_remain_rate=parseFloat(t/100).toFixed(2)},changeLessonConfig:function(){var t=this.config.return_visit.student_lesson_remain_times>0?0:5;this.config.return_visit.student_lesson_remain_times=t}}}},2961:function(t,e){},2962:function(t,e,n){"use strict";var _=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-grid"},[n("table",{staticClass:"params-table"},[n("tbody",[t._m(0),t._v(" "),n("tr",[n("td",[t._v("系统参数")]),t._v(" "),n("td",[n("p",[t._v("机构名称："+t._s(t.config.org_name||"-"))]),t._v(" "),n("p",[t._v("机构地址："+t._s(t.config.address||"-"))]),t._v(" "),n("p",[t._v("联系电话："+t._s(t.config.mobile||"-"))])]),t._v(" "),n("td"),t._v(" "),n("td",[n("Button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.modifyConfig("system")}}},[t._v("修改")])],1)]),t._v(" "),n("tr",[n("td",[t._v("课程")]),t._v(" "),n("td",[n("span",[t._v("班级是否必须属于课程")]),t._v(" "),n("Tag",{attrs:{color:t.config.class_must_sel_lesson?"green":"red"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.config.class_must_sel_lesson?"是":"否")+"\n\t\t\t\t\t")])],1),t._v(" "),n("td",[t._v("说明：开启后创建班级必须选择所属课程")]),t._v(" "),n("td",[n("Button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.modifyConfig("class")}}},[t._v("修改")])],1)]),t._v(" "),n("tr",[n("td",[t._v("班级")]),t._v(" "),n("td",[n("span",[t._v("是否启用年级")]),t._v(" "),n("Tag",{attrs:{color:t.config.enable_grade?"green":"red"}},[t._v(t._s(t.config.enable_grade?"是":"否"))])],1),t._v(" "),n("td",[t._v("说明：开启后课程、班级、排课、考勤、课耗等会有年级条件")]),t._v(" "),n("td",[n("Button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.modifyConfig("grade")}}},[t._v("修改")])],1)]),t._v(" "),n("tr",[n("td",[t._v("分公司")]),t._v(" "),n("td",[n("span",[t._v("部门设置是否启用分公司")]),t._v(" "),n("Tag",{attrs:{color:t.config.enable_company?"green":"red"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.config.enable_company?"是":"否")+"\n\t\t\t\t\t")])],1),t._v(" "),n("td",[t._v("说明：开启后可划分分公司")]),t._v(" "),n("td",[n("Button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.modifyConfig("company")}}},[t._v("修改")])],1)]),t._v(" "),n("tr",[n("td",[t._v("会员体系")]),t._v(" "),n("td",[n("p",[n("span",[t._v("是否启用会员体系")]),t._v(" "),n("Tag",{attrs:{color:t.config.member.enable?"green":"red"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.config.member.enable?"是":"否")+"\n\t\t\t\t\t\t")])],1),t._v(" "),t.config.member.enable?[n("p",[t._v("会员名称："+t._s(t.config.member.name))]),t._v(" "),n("table",{staticClass:"vip-table"},[t._m(1),t._v(" "),t._l(t.config.member.level,function(e,_){return n("tr",[n("td",[t._v(t._s(_))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),0==_?[n("td"),t._v(" "),n("td")]:[n("td",[t._v(t._s(e.amount))]),t._v(" "),n("td",[t._v(t._s(e.discount))])]],2)})],2)]:t._e()],2),t._v(" "),n("td",{staticStyle:{"vertical-align":"top"}},[t._v("说明：开启后学员拥有会员等级")]),t._v(" "),n("td",[n("Button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.modifyConfig("vip")}}},[t._v("修改")])],1)])]),t._v(" "),n("tbody",[t._m(2),t._v(" "),n("tr",[n("td",[t._v("默认课时定义")]),t._v(" "),n("td",[n("p",[t._v("一个课时价格"),n("span",{staticClass:"config-value"},[t._v(t._s(t.config.per_lesson_hour_price))]),t._v("元")]),t._v(" "),n("p",[t._v("单课时分钟数"),n("span",{staticClass:"config-value"},[t._v(t._s(t.config.per_lesson_hour_minutes))]),t._v("分钟")]),t._v(" "),n("p",[n("span",[t._v("是否忽略课时长度与扣课时关系")]),t._v(" "),n("Tag",{attrs:{color:t.config.ignore_time_long_clh?"green":"red"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.config.ignore_time_long_clh?"是":"否")+"\n\t\t\t\t\t\t")])],1)]),t._v(" "),n("td"),t._v(" "),n("td",[n("Button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.modifyConfig("hour")}}},[t._v("修改")])],1)]),t._v(" "),n("tr",[n("td",[t._v("课前提醒")]),t._v(" "),n("td",[n("p",[t._v("默认筛选"),n("span",{staticClass:"config-value"},[t._v(t._s(t.remind_before))]),t._v("上课的学员")])]),t._v(" "),n("td"),t._v(" "),n("td",[n("Button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.modifyConfig("remind_before")}}},[t._v("修改")])],1)]),t._v(" "),n("tr",[n("td",[t._v("登记考勤")]),t._v(" "),n("td",[n("p",[t._v("上课前"),n("span",{staticClass:"config-value"},[t._v(t._s(t.config.class_attendance.reg_att_before_min))]),t._v("分钟内可以考勤")])]),t._v(" "),n("td",[t._v("说明：如上课时间为08:00 ~ 10:00，设置为10分钟，那么在 07:50 后才可以考勤")]),t._v(" "),n("td",[n("Button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.modifyConfig("reg_att_before_min")}}},[t._v("修改")])],1)]),t._v(" "),n("tr",[n("td",[t._v("(点名/刷卡)考勤")]),t._v(" "),n("td",[n("p",[t._v("上课前"),n("span",{staticClass:"config-value"},[t._v(t._s(t.config.class_attendance.min_before_class))]),t._v("分钟内可以考勤")]),t._v(" "),n("p",[t._v("下课后"),n("span",{staticClass:"config-value"},[t._v(t._s(t.config.class_attendance.min_after_class))]),t._v("分钟内可以考勤")]),t._v(" "),n("p",[n("span",[t._v("是否允许负课时考勤")]),t._v(" "),n("Tag",{attrs:{color:t.config.class_attendance.allow_debt_att?"green":"red"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.config.class_attendance.allow_debt_att?"是":"否")+"\n\t\t\t\t\t\t")])],1)]),t._v(" "),n("td",{staticStyle:{"vertical-align":"bottom"}},[t._v("说明：开启后学员剩余课时不足时仍可以考勤")]),t._v(" "),n("td",[n("Button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.modifyConfig("attend")}}},[t._v("修改")])],1)]),t._v(" "),n("tr",[n("td",[t._v("学员请假")]),t._v(" "),n("td",[n("p",[n("span",[t._v("是否允许请假")]),t._v(" "),n("Tag",{attrs:{color:t.config.student_leave.enable?"green":"red"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.config.student_leave.enable?"是":"否")+"\n\t\t\t\t\t\t")])],1),t._v(" "),t.config.student_leave.enable?[n("p",[t._v("至少提前\n\t\t\t\t\t\t\t"),n("span",{staticClass:"config-value"},[t._v(t._s(t.student_leave_value)+"\n\t\t\t\t\t\t\t")]),t._v(t._s("day"==t.student_leave_unit?"天":"分钟")+"\n\t\t\t\t\t\t")]),t._v(" "),n("p",[t._v("允许请假"),n("span",{staticClass:"config-value"},[t._v(t._s(t.config.student_leave.times_limit))]),t._v("次")])]:t._e()],2),t._v(" "),n("td",[t._v("说明：1.学员通过学习管家请假; 2.同一课程允许请假的次数限制, 0表示不限制")]),t._v(" "),n("td",[n("Button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.modifyConfig("leave")}}},[t._v("修改")])],1)]),t._v(" "),n("tr",[n("td",[t._v("请假预警")]),t._v(" "),n("td",[n("p",[t._v("预警请假"),n("span",{staticClass:"config-value"},[t._v(t._s(t.config.leave_warn_times))]),t._v("次以上的学员")])]),t._v(" "),n("td"),t._v(" "),n("td",[n("Button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.modifyConfig("leave_warn_times")}}},[t._v("修改")])],1)]),t._v(" "),n("tr",[n("td",[t._v("赠送课时消耗规则")]),t._v(" "),n("td",[n("p",[t._v(t._s(t.present_consume_rule))])]),t._v(" "),n("td"),t._v(" "),n("td",[n("Button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.modifyConfig("present_consume_rule")}}},[t._v("修改")])],1)])]),t._v(" "),n("tbody",[t._m(3),t._v(" "),n("tr",[n("td",[t._v("报名缴费日期")]),t._v(" "),n("td",[n("p",[n("span",[t._v("是否允许修改")]),t._v(" "),n("Tag",{attrs:{color:t.config.student_signup.allow_modify_date?"green":"red"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.config.student_signup.allow_modify_date?"是":"否")+"\n\t\t\t\t\t\t")])],1),t._v(" "),t.config.student_signup.allow_modify_date?n("p",[t._v("允许范围：当前日期(含)往前推\n\t\t\t\t\t\t"),n("span",{staticClass:"config-value"},[t._v(t._s(t.config.student_signup.modify_date_days))]),t._v("天\n\t\t\t\t\t")]):t._e()]),t._v(" "),n("td",{staticStyle:{"vertical-align":"top"}},[t._v("说明：不允许修改默认为当天")]),t._v(" "),n("td",[n("Button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.modifyConfig("signup")}}},[t._v("修改")])],1)]),t._v(" "),n("tr",[n("td",[t._v("默认业绩归属人销售角色")]),t._v(" "),n("td",[n("p",[t._v("新生报名："+t._s(t._f("dict_title")(t.config.default_sale_role_did.new,"sale_role","-")))]),t._v(" "),n("p",[t._v("老生续报："+t._s(t._f("dict_title")(t.config.default_sale_role_did.renew,"sale_role","-")))])]),t._v(" "),n("td"),t._v(" "),n("td",[n("Button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.modifyConfig("sale_role")}}},[t._v("修改")])],1)])]),t._v(" "),n("tbody",[t._m(4),t._v(" "),n("tr",[n("td",[t._v("冲突检测")]),t._v(" "),n("td",[n("span",[t._v("是否忽略1对1排课教室冲突")]),t._v(" "),n("Tag",{attrs:{color:t.config.course_arrange.ignore_1by1_cc?"green":"red"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.config.course_arrange.ignore_1by1_cc?"是":"否")+"\n\t\t\t\t\t")])],1),t._v(" "),n("td"),t._v(" "),n("td",[n("Button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.modifyConfig("ignore_1by1_cc")}}},[t._v("修改")])],1)]),t._v(" "),n("tr",[n("td",[t._v("排课限制")]),t._v(" "),n("td",[n("span",[t._v("是否允许过期排课")]),t._v(" "),n("Tag",{attrs:{color:t.config.course_arrange.allow_passed_arrange?"green":"red"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.config.course_arrange.allow_passed_arrange?"是":"否")+"\n\t\t\t\t\t")])],1),t._v(" "),n("td"),t._v(" "),n("td",[n("Button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.modifyConfig("allow_passed_arrange")}}},[t._v("修改")])],1)]),t._v(" "),n("tr",[n("td",[t._v("移动端调课限制")]),t._v(" "),n("td",[n("span",[t._v("是否允许移动端调课")]),t._v(" "),n("Tag",{attrs:{color:t.config.course_arrange.allow_mobile_change?"green":"red"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.config.course_arrange.allow_mobile_change?"是":"否")+"\n\t\t\t\t\t")])],1),t._v(" "),n("td"),t._v(" "),n("td",[n("Button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.modifyConfig("allow_mobile_change")}}},[t._v("修改")])],1)])]),t._v(" "),n("tbody",[t._m(5),t._v(" "),n("tr",[n("td",[t._v("学员回访")]),t._v(" "),n("td",[n("p",[t._v("显示请假"),n("span",{staticClass:"config-value"},[t._v(t._s(t.config.return_visit.ask_leave_times))]),t._v("次以上的学员")]),t._v(" "),n("p",[t._v("显示缺勤"),n("span",{staticClass:"config-value"},[t._v(t._s(t.config.return_visit.absence_times))]),t._v("次以上的学员")]),t._v(" "),n("p",[t._v("显示未交作业"),n("span",{staticClass:"config-value"},[t._v(t._s(t.config.return_visit.not_hand_in_homework_times))]),t._v("次以上的学员")]),t._v(" "),t.config.return_visit.student_lesson_remain_times?[n("p",[t._v("显示剩余课次总量\n\t\t    \t\t\t\t"),n("span",{staticClass:"config-value"},[t._v(t._s(t.config.return_visit.student_lesson_remain_times))])])]:[n("p",[t._v("显示剩余课次百分比\n\t\t\t    \t\t\t"),n("span",{staticClass:"config-value"},[t._v(t._s(t.getRate()))]),t._v(" "),n("span",{staticClass:"mr-3"},[t._v("%")])])]],2),t._v(" "),n("td"),t._v(" "),n("td",[n("Button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.modifyConfig("return_visit")}}},[t._v("修改")])],1)]),t._v(" "),n("tr",[n("td",[t._v("课后作业")]),t._v(" "),n("td",[n("p",[t._v("是否开启作业星级\n\t\t\t\t\t\t"),n("Tag",{attrs:{color:t.config.service.enable_homework_star?"green":"red"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.config.service.enable_homework_star?"是":"否")+"\n\t\t\t\t\t\t")])],1)]),t._v(" "),n("td",{staticStyle:{"vertical-align":"top"}},[t._v("说明：开启后即使用作业精批模式，学员可自主选择作业星级（不同星级代表不同的作业难度）")]),t._v(" "),n("td",[n("Button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.modifyConfig("service")}}},[t._v("修改")])],1)])])]),t._v(" "),t.loading?n("Spin",{attrs:{size:"large",fix:""}}):t._e(),t._v(" "),n("Button",{staticClass:"mt-2",attrs:{type:"primary"},on:{click:t.restoreDefault}},[t._v("恢复默认设置")])],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",{attrs:{colspan:"4"}},[t._v("系统相关设置")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("等级")]),t._v(" "),n("td",[t._v("名称")]),t._v(" "),n("td",[t._v("累计缴费")]),t._v(" "),n("td",[t._v("享有折扣")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",{attrs:{colspan:"4"}},[t._v("考勤相关设置")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",{attrs:{colspan:"4"}},[t._v("报名缴费相关设置")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",{attrs:{colspan:"4"}},[t._v("排课相关设置")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",{attrs:{colspan:"4"}},[t._v("其他")])])}];_._withStripped=!0;var a={render:_,staticRenderFns:s};e.a=a},580:function(t,e,n){"use strict";function _(t){i||n(2961)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(1999),a=n(2962),i=!1,o=n(11),r=_,c=o(s.a,a.a,!1,r,null,null);c.options.__file="src/views/system/configs/params.vue",e.default=c.exports},667:function(t,e,n){"use strict";function _(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=n(674),a=_(s),i=n(212),o=_(i);e.default=function(){function t(t,e){var n=[],_=!0,s=!1,a=void 0;try{for(var i,r=(0,o.default)(t);!(_=(i=r.next()).done)&&(n.push(i.value),!e||n.length!==e);_=!0);}catch(t){s=!0,a=t}finally{try{!_&&r.return&&r.return()}finally{if(s)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if((0,a.default)(Object(e)))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},674:function(t,e,n){t.exports={default:n(675),__esModule:!0}},675:function(t,e,n){n(36),n(27),t.exports=n(676)},676:function(t,e,n){var _=n(56),s=n(4)("iterator"),a=n(18);t.exports=n(2).isIterable=function(t){var e=Object(t);return void 0!==e[s]||"@@iterator"in e||a.hasOwnProperty(_(e))}},914:function(t,e,n){"use strict";var _=n(667),s=n.n(_),a=n(1);e.a={data:function(){return{cfg_name:"",cfg_id:0,config:{},action:"edit",loading:!0}},mounted:function(){this.init_config_data()},methods:{init_config_data:function(){var t=this;this.loading=!0,this.$http.get("configs?cfg_name="+this.cfg_name).then(function(e){if(a.a.isArray(e.body.data)&&0===e.body.data.length)t.action="add";else{0==e.body.data.cfg_id&&(t.action="add");for(var n in e.body.data.cfg_value)t.$set(t.config,n,e.body.data.cfg_value[n]);t.cfg_id=e.body.data.cfg_id}t.initFinished(),t.loading=!1}).catch(function(e){t.$Message.error(e.message)})},initFinished:function(){},handleSubmit:function(){var t=this,e="add"===this.action?["post","configs"]:["put","configs/"+this.cfg_id],n=s()(e,2),_=n[0],i=n[1],o={cfg_name:this.cfg_name,cfg_value:this.config};this.loading=!0,this.$http[_](i,o).then(function(e){var n=t.cfg_name;"lesson"==n&&(n="lesson_config"),"params"==n&&(n="configs"),"org_pc_ui"==n&&(n="quick_navs"),t.$Message.success("保存成功!"),a.a.isDefined(t.$store.state.gvars[n])&&t.$store.dispatch("updateGlobalVar",n),t.init_config_data()}).catch(function(e){t.$Message.error(e.message)})},restoreDefault:function(){var t=this;this.confirm("你确定恢复默认设置吗？").then(function(){t.loading=!0,t.$rest("configs").delete(t.cfg_id).success(function(e){t.$Message.success("恢复成功");var n="";"org_pc_ui"==t.cfg_name&&(n="quick_navs"),"params"==t.cfg_name&&(n="configs"),""!==n&&t.$store.dispatch("updateGlobalVar",n),t.init_config_data()}).error(function(e){t.$Message.error(e.body.message)})})}}}}});