webpackJsonp([266],{1580:function(s,t,e){"use strict";var o=e(33),a=e.n(o),r=e(1),n=e(209),l=e(207),i=e(208),u={lesson_hours:1,remark:""};t.a={mixins:[n.a,l.a,i.a],data:function(){return{info:{student:{},lid:0,sj_ids:[]},post:r.b.copy(u)}},watch:{"modal$.show":function(s){s&&(this.post=r.b.copy(u))}},methods:{save:function(){var s=this;if(0==this.post.lesson_hours)return this.$Message.error("赠送课时不能为0"),!1;var t=a()(r.b.copy(this.post),{sl_id:this.info.sl_id,op_type:1});this.$rest("student_lesson_operates").post(t).success(function(t){s.$Message.success("赠送成功"),s.$emit("save"),s.close()}).error(function(t){s.$Message.error(t.body.message)})}}}},2153:function(s,t,e){"use strict";var o=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("Modal",{directives:[{name:"drag-modal",rawName:"v-drag-modal"}],attrs:{"mask-closable":!1,title:s.modal$.title,width:"500"},model:{value:s.modal$.show,callback:function(t){s.$set(s.modal$,"show",t)},expression:"modal$.show"}},[s.modal$.show?[e("Form",{ref:"form",attrs:{"label-width":100,modal:s.info}},[e("Form-item",{attrs:{label:"学员："}},[e("span",[s._v(s._s(s.info.student.student_name))])]),s._v(" "),e("Form-item",{attrs:{label:"课程/科目："}},[e("span",[s._v(s._s(s._f("lesson_name")(s.info.lid))+" ("+s._s(s._f("sj_ids_text")(s.info.sj_ids))+")")])]),s._v(" "),e("Form-item",{attrs:{label:"赠送课时："}},[e("InputNumber",{attrs:{min:0},model:{value:s.post.lesson_hours,callback:function(t){s.$set(s.post,"lesson_hours",t)},expression:"post.lesson_hours"}})],1),s._v(" "),e("Form-item",{attrs:{label:"备注："}},[e("Input",{attrs:{type:"textarea"},model:{value:s.post.remark,callback:function(t){s.$set(s.post,"remark",t)},expression:"post.remark"}})],1)],1),s._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"ghost"},on:{click:s.close}},[s._v("关闭")]),s._v(" "),e("Button",{attrs:{type:"primary"},on:{click:s.save}},[s._v("确定")])],1)]:s._e()],2)},a=[];o._withStripped=!0;var r={render:o,staticRenderFns:a};t.a=r},398:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(1580),a=e(2153),r=e(11),n=r(o.a,a.a,!1,null,null,null);n.options.__file="src/views/business/order/student-lesson/present-modal.vue",t.default=n.exports}});