webpackJsonp([242],{1560:function(e,t,a){"use strict";var o=a(1),l=a(209),n=a(207),r=a(208),i={rule_name:"",type:1,cate:1,credit:0,enable:1};t.a={mixins:[l.a,n.a,r.a],data:function(){return{info:o.b.copy(i),rules:{rule_name:[{required:!0,message:"规则名称不能为空",trigger:"blur"}]}}},watch:{"modal$.show":function(e){e&&"add"==this.modal$.action&&(this.info=o.b.copy(i))}},computed:{info_url$:function(){return"credit_rules"},info_name$:function(){return"规则"},info_pk_id$:function(){return"cru_id"}}}},2113:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Modal",{directives:[{name:"drag-modal",rawName:"v-drag-modal"}],attrs:{title:e.modal$.title,"mask-closable":!1,width:"500"},model:{value:e.modal$.show,callback:function(t){e.$set(e.modal$,"show",t)},expression:"modal$.show"}},[a("Form",{ref:"form",attrs:{"label-width":100,model:e.info,rules:e.rules}},[a("Form-item",{attrs:{label:"规则名称",prop:"rule_name"}},[a("Input",{attrs:{placeholder:"请输入规则名称"},model:{value:e.info.rule_name,callback:function(t){e.$set(e.info,"rule_name",t)},expression:"info.rule_name"}})],1),e._v(" "),a("Form-item",{attrs:{label:"积分类型",prop:"cate"}},[a("RadioGroup",{attrs:{type:"button"},model:{value:e.info.cate,callback:function(t){e.$set(e.info,"cate",t)},expression:"info.cate"}},[a("Radio",{attrs:{label:1}},[e._v("学习积分")]),e._v(" "),a("Radio",{attrs:{label:2}},[e._v("消费积分")])],1)],1),e._v(" "),a("Form-item",{attrs:{label:"积分操作",prop:"type"}},[a("RadioGroup",{attrs:{type:"button"},model:{value:e.info.type,callback:function(t){e.$set(e.info,"type",t)},expression:"info.type"}},[a("Radio",{attrs:{label:1}},[e._v("增加")]),e._v(" "),a("Radio",{attrs:{label:2}},[e._v("减少")])],1)],1),e._v(" "),a("Form-item",{attrs:{label:"积分数",prop:"credit"}},[a("InputNumber",{attrs:{min:0},model:{value:e.info.credit,callback:function(t){e.$set(e.info,"credit",t)},expression:"info.credit"}}),e._v("\n\t\t\t(0表示不限制)\n\t\t")],1),e._v(" "),a("Form-item",{attrs:{label:"是否启用",prop:"enable"}},[a("i-switch",{attrs:{"true-value":1,"false-value":0},model:{value:e.info.enable,callback:function(t){e.$set(e.info,"enable",t)},expression:"info.enable"}},[a("span",{attrs:{slot:"open"},slot:"open"},[e._v("是")]),e._v(" "),a("span",{attrs:{slot:"close"},slot:"close"},[e._v("否")])])],1)],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"ghost"},on:{click:e.close}},[e._v("取消")]),e._v(" "),a("Button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确定")])],1)],1)},l=[];o._withStripped=!0;var n={render:o,staticRenderFns:l};t.a=n},399:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(1560),l=a(2113),n=a(11),r=n(o.a,l.a,!1,null,null,null);r.options.__file="src/views/business/student/integral/rule-info-modal.vue",t.default=r.exports}});