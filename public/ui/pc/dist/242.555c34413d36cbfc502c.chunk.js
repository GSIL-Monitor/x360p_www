webpackJsonp([242],{1599:function(t,e,s){"use strict";var i=s(1),n=s(209),a=s(207),o={name:"",service_name:"",tpl_id:"",tpl_define:[],business_type:"",apply_tpl:""};e.a={name:"smsInfoModal",mixins:[n.a,a.a],data:function(){return{canChange:!1,info:i.b.copy(o),copy_info:i.b.copy(o),define:{r:"",l:""},action:"add",rules:{name:[{required:!0,type:"string",message:"请输入模板名称",trigger:"blur"}],service_name:[{required:!0,type:"string",message:"请选择短信服务商",trigger:"change"}],tpl_id:[{required:!0,type:"string",message:"请选择短信服务商",trigger:"change"}]}}},methods:{selectBusinessType:function(t){if(!this.canChange&&"edit"==this.modal$.action)return this.canChange=!0,!1;var e=this.sms_tpls.find(function(e){return e.business_type==t});e&&(e.apply_tpl?this.info.apply_tpl=e.apply_tpl:this.info.apply_tpl="")},selectVar:function(t){this.define.l=t},saveDefine:function(){if(""===this.define.r||""===this.define.l)return!1;this.info.tpl_define.push({r:this.define.r,l:this.define.l}),this.define.r="",this.define.l="",this.action=""},addDefine:function(){this.action="add"},delDefine:function(t){this.info.tpl_define.splice(t,1)},ok:function(){var t=this;this.$form("form").check().then(function(e){if(0==t.info.tpl_define.length)return t.$Message.error("请至少添加一条数据值"),!1;var s="add"==t.modal$.action?"post":"put",n="add"==t.modal$.action?"添加":"编辑",a=t.$rest(t.info_url$);"add"!=t.modal$.action?a.add_url_param(t.info[t.info_pk_id$]):t.info&&t.info_pk_id$&&t.info[t.info_pk_id$]&&delete t.info[t.info_pk_id$],a[s](t.info).success(function(e){var s=e.data;"add"==t.modal$.action&&i.a.isString(s)&&/^\d+$/.test(s)&&(t.info[t.info_pk_id$]=i.b.int(s)),t.$Message.success(i.b.sprintf("%s%s成功!",t.info_name$,n)),t.$emit("save",{action:t.modal$.action,data:t.info}),i.a.isDefined(t.$store.state.gvars[t.info_url$])&&t.$store.dispatch("updateGlobalVar",t.info_url$),t.close()}).error(function(e){t.$Message.error(e.body.message)})})}},watch:{"modal$.show":function(t){t&&"add"==this.modal$.action&&(this.info=i.b.copy(o),this.sms_clounds.length>0&&(this.info.service_name=this.sms_clounds[0].key))}},computed:{info_url$:function(){return"sms_tpl_defines"},info_name$:function(){return"短信模板"},info_pk_id$:function(){return"std_id"},sms_tpl_vars:function(){var t=this,e=[],s=this.sms_tpls.find(function(e){return e.business_type==t.info.business_type});return s&&(e=s.vars),e},sms_tpls:function(){return this.$store.state.gvars.sms_tpls},sms_clounds:function(){var t=this.$store.state.gvars.sms_clound,e=[];for(var s in t)1==t[s].enable&&e.push({key:s,value:t[s].name});return e},tpl_id_text:function(){var t=this,e="请先至短信接口设置页面配置相关参数并启用短信服务商";if(""!==this.service_name&&(e="请至"+this.info.service_name+"官网申请模板"),this.info.business_type){var s=this.sms_tpls.find(function(e){return e.business_type==t.info.business_type});s&&s.apply_tpl?e+="，<br/>根据您选的业务类型，参考以下模板并按需修改":e+="，<br/>您选的业务类型没有对应的参考模板"}else e+="，<br/>根据您选的业务类型，参考对应的模板并按需修改";return e}}}},2181:function(t,e){},2182:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Modal",{directives:[{name:"drag-modal",rawName:"v-drag-modal"}],attrs:{"mask-closable":!1,width:"750",title:t.modal$.title},on:{"on-cancel":t.close},model:{value:t.modal$.show,callback:function(e){t.$set(t.modal$,"show",e)},expression:"modal$.show"}},[t.modal$.show?[s("Form",{ref:"form",staticClass:"sms-tpl-info",attrs:{"label-width":100,model:t.info,rules:t.rules}},[s("Form-item",{attrs:{prop:"business_type",label:"业务类型"}},[s("Select",{attrs:{placeholder:"请选择业务类型",clearable:""},on:{"on-change":t.selectBusinessType},model:{value:t.info.business_type,callback:function(e){t.$set(t.info,"business_type",e)},expression:"info.business_type"}},t._l(t.sms_tpls,function(e){return s("Option",{attrs:{value:e.business_type}},[t._v(t._s(e.name))])}))],1),t._v(" "),s("Form-item",{attrs:{prop:"name",label:"模板名称"}},[s("Input",{attrs:{placeholder:"模板名称，例：订单支付成功通知 (自定义)"},model:{value:t.info.name,callback:function(e){t.$set(t.info,"name",e)},expression:"info.name"}})],1),t._v(" "),s("Form-item",{attrs:{prop:"service_name",label:"短信服务商"}},[s("p",{staticClass:"info-tip"},[t._v("请先至『短信接口设置』页面设置好短信服务商的接口信息 (保存后不可修改)")]),t._v(" "),t.sms_clounds.length>0?s("RadioGroup",{model:{value:t.info.service_name,callback:function(e){t.$set(t.info,"service_name",e)},expression:"info.service_name"}},t._l(t.sms_clounds,function(e){return s("Radio",{attrs:{label:e.key,disabled:"edit"==t.modal$.action}},[t._v(t._s(e.value)+"\n        \t\t\t\t")])})):t._e()],1),t._v(" "),s("Form-item",{directives:[{name:"help",rawName:"v-help",value:t.tpl_id_text,expression:"tpl_id_text"}],attrs:{prop:"tpl_id",label:"模板ID"}},[s("Input",{staticStyle:{width:"500px"},attrs:{placeholder:"短信模板ID，例：SMS_12345 (短信服务商提供的模板ID)"},model:{value:t.info.tpl_id,callback:function(e){t.$set(t.info,"tpl_id",e)},expression:"info.tpl_id"}})],1),t._v(" "),s("Form-item",{attrs:{prop:"apply_tpl",label:"运营商短信模板"}},[s("Input",{attrs:{type:"textarea",rows:3},model:{value:t.info.apply_tpl,callback:function(e){t.$set(t.info,"apply_tpl",e)},expression:"info.apply_tpl"}})],1),t._v(" "),s("Form-item",{staticClass:"define",attrs:{prop:"tpl_define",label:"数据值"}},[s("p",{staticClass:"info-tip"},[t._v("系统变量替换模板变量，例：模板变量=orderno 系统变量=订单编号")]),t._v(" "),s("div",{staticClass:"row",staticStyle:{"margin-left":"0"}},[s("table",{staticClass:"col-sm-8"},[s("tbody",[s("tr",[s("td",[t._v("模板变量")]),t._v(" "),s("td",[t._v("系统变量")]),t._v(" "),s("td",[t._v("操作")])]),t._v(" "),t._l(t.info.tpl_define,function(e,i){return s("tr",[s("td",[t._v(t._s(e.r))]),t._v(" "),s("td",[t._v(t._s(e.l))]),t._v(" "),s("td",[s("Button",{attrs:{type:"text",size:"small",icon:"minus-circled",title:"删除"},on:{click:function(e){t.delDefine(i)}}})],1)])}),t._v(" "),"add"==t.action?s("tr",[s("td",[s("Input",{staticStyle:{width:"120px"},attrs:{size:"small"},model:{value:t.define.r,callback:function(e){t.$set(t.define,"r",e)},expression:"define.r"}})],1),t._v(" "),s("td",[s("Input",{staticStyle:{width:"120px"},attrs:{size:"small"},model:{value:t.define.l,callback:function(e){t.$set(t.define,"l",e)},expression:"define.l"}})],1),t._v(" "),s("td",[s("Button",{attrs:{type:"text",size:"small",icon:"checkmark",title:"保存"},on:{click:t.saveDefine}})],1)]):s("tr",[s("td",{staticClass:"text-center",attrs:{colspan:"3"}},[s("Button",{attrs:{type:"text",size:"small",icon:"plus"},on:{click:t.addDefine}},[t._v("添加\n\t        \t\t\t\t\t\t\t")])],1)])],2)]),t._v(" "),s("div",{staticClass:"define-vars col-sm-4"},[t.sms_tpl_vars.length>0?s("Card",{attrs:{"dis-hover":""}},[s("span",{attrs:{slot:"title"},slot:"title"},[t._v("选择系统变量：")]),t._v(" "),t._l(t.sms_tpl_vars,function(e){return s("Tag",{nativeOn:{click:function(s){t.selectVar(e)}}},[t._v(t._s(e))])})],2):t._e()],1)])])],1)]:t._e(),t._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("Button",{attrs:{type:"ghost"},on:{click:t.close}},[t._v("取消")]),t._v(" "),s("Button",{attrs:{type:"primary"},on:{click:t.ok}},[t._v("确定")])],1)],2)},n=[];i._withStripped=!0;var a={render:i,staticRenderFns:n};e.a=a},417:function(t,e,s){"use strict";function i(t){o||s(2181)}Object.defineProperty(e,"__esModule",{value:!0});var n=s(1599),a=s(2182),o=!1,l=s(11),r=i,c=l(n.a,a.a,!1,r,null,null);c.options.__file="src/views/system/configs/sms/tpl-info-modal.vue",e.default=c.exports}});