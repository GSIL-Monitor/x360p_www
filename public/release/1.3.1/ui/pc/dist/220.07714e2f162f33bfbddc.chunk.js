webpackJsonp([220],{2088:function(t,e,s){"use strict";var i=s(675),a=s.n(i),n=s(1),l=s(207);e.a={mixins:[l.a],data:function(){return{data:[],copy_data:[],action:"",cfg_id:0,cfg_names:[{name:"学员信息",value:"student"},{name:"员工信息",value:"employee"}],current_value:"student",type_list:[{name:"文本",value:"text"},{name:"多行文本",value:"textarea"},{name:"数字",value:"number"},{name:"日期",value:"date"},{name:"选项",value:"select"}]}},mounted:function(){this.init_customer_fields()},computed:{rest_api:function(){return n.b.sprintf("configs?cfg_name=%s_option_fields",this.current_value)}},methods:{init_customer_fields:function(){var t=this;this.$rest(this.rest_api).get().success(function(e){t.data.splice(0);for(var s=0,i=e.cfg_value.length;s<i;s++){var a=e.cfg_value[s];a.$$name="自定义字段"+(s+1),a.$$edit=!1,t.data.push(a)}t.copy_data=n.b.copy(t.data),t.cfg_id=e.cfg_id,t.cfg_name=e.cfg_name}).error(function(e){t.$Message.error(e.body.message)})},setOptionValue:function(t){var e=this;this.$Modal.open("system/configs/customer-fields/options-modal.vue",{on:{save:function(s){e.$set(t,"option_values",s),e.ok(t)}}}).then(function(e){e.set("options",t.option_values).show("设置选项值")})},getTypeName:function(t){return this.type_list.find(function(e){return e.value==t.type}).name},selectItem:function(t){this.current_value=t.value,this.init_customer_fields()},ok:function(t){if(!t.label)return this.$Message.error("显示名称不能为空"),!1;this.submit()},cancel:function(t){this.data=n.b.copy(this.copy_data),this.action=""},edit:function(t){t&&""==this.action&&(t.$$edit=!0,this.action="edit")},switchable:function(t){this.submit()},submit:function(){var t=this,e={cfg_name:this.cfg_name,cfg_value:function(t){var e=[];return t.forEach(function(t){var s={};for(var i in t)"$"!=i.substr(0,1)&&(s[i]=t[i]);e.push(s)}),e}(this.data)},s=0==this.cfg_id?["post","configs"]:["put","configs/"+this.cfg_id],i=a()(s,2),n=i[0],l=i[1];this.$rest(l)[n](e).success(function(e){t.action="",t.$Message.success("保存成功"),t.$store.dispatch("updateGlobalVar","configs"),t.init_customer_fields()}).error(function(e){t.$Message.error(e.body.message)})}}}},3155:function(t,e){},3156:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"c-grid customer-fields-config"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-3"},[s("Card",{attrs:{"dis-hover":""}},[s("div",{attrs:{slot:"title"},slot:"title"},[t._v("自定义项目")]),t._v(" "),s("div",{staticClass:"item-list"},t._l(t.cfg_names,function(e){return s("a",{class:["item",{selected:t.current_value==e.value}],on:{click:function(s){t.selectItem(e)}}},[s("span",[t._v(t._s(e.name))]),t._v(" "),t.current_value==e.value?s("Icon",{staticClass:"arrow-right",attrs:{type:"ios-arrow-right"}}):t._e()],1)}))])],1),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("div",{staticClass:"list-body"},[s("div",{directives:[{name:"loading",rawName:"v-loading.like",value:"configs",expression:"'configs'",modifiers:{like:!0}}],staticClass:"list-body-wrap"},[s("table",{staticClass:"modal-table"},[t._m(0),t._v(" "),s("tbody",t._l(t.data,function(e){return s("tr",[s("td",[s("div",{staticClass:"ivu-table-cell"},[t._v(t._s(e.$$name))])]),t._v(" "),e.$$edit?[s("td",[s("div",{staticClass:"ivu-table-cell"},[s("Input",{model:{value:e.label,callback:function(s){t.$set(e,"label",s)},expression:"item.label"}})],1)]),t._v(" "),s("td",[s("div",{staticClass:"ivu-table-cell"},[s("Select",{model:{value:e.type,callback:function(s){t.$set(e,"type",s)},expression:"item.type"}},t._l(t.type_list,function(e){return s("Option",{attrs:{value:e.value}},[t._v(t._s(e.name))])}))],1)])]:[s("td",[s("div",{staticClass:"ivu-table-cell"},[t._v(t._s(e.label))])]),t._v(" "),s("td",[s("div",{staticClass:"ivu-table-cell"},[s("span",[t._v(t._s(t.getTypeName(e)))]),t._v(" "),"select"===e.type?s("Button",{staticClass:"ml-2",attrs:{type:"primary",size:"small"},on:{click:function(s){t.setOptionValue(e)}}},[t._v("选项值\n\t\t\t\t\t\t\t\t\t\t\t\t")]):t._e()],1)])],t._v(" "),s("td",[s("div",{staticClass:"ivu-table-cell"},[s("i-switch",{attrs:{"false-value":0,"true-value":1},on:{"on-change":function(s){t.switchable(e)}},model:{value:e.enable,callback:function(s){t.$set(e,"enable",s)},expression:"item.enable"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("是")]),t._v(" "),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("否")])])],1)]),t._v(" "),s("td",[s("div",{staticClass:"ivu-table-cell"},[e.$$edit?s("ButtonGroup",[s("Button",{attrs:{type:"primary",size:"small",loading:t.saving},on:{click:function(s){t.ok(e)}}},[t._v("确定\n\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("Button",{attrs:{type:"ghost",size:"small",disabled:t.saving},on:{click:function(s){t.cancel(e)}}},[t._v("取消\n\t\t\t\t\t\t\t\t\t\t\t\t")])],1):s("Button",{attrs:{type:"ghost",shape:"circle",icon:"edit",size:"small",title:"编辑"},on:{click:function(s){t.edit(e)}}})],1)])],2)}))])])])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{width:"20%"}},[s("div",{staticClass:"ivu-table-cell"},[t._v("字段")])]),t._v(" "),s("th",{attrs:{width:"20%"}},[s("div",{staticClass:"ivu-table-cell"},[t._v("显示名称")])]),t._v(" "),s("th",{attrs:{width:"20%"}},[s("div",{staticClass:"ivu-table-cell"},[t._v("字段类型")])]),t._v(" "),s("th",{attrs:{width:"20%"}},[s("div",{staticClass:"ivu-table-cell"},[t._v("启用")])]),t._v(" "),s("th",{attrs:{width:"20%"}},[s("div",{staticClass:"ivu-table-cell"},[t._v("操作")])])])])}];i._withStripped=!0;var n={render:i,staticRenderFns:a};e.a=n},611:function(t,e,s){"use strict";function i(t){l||s(3155)}Object.defineProperty(e,"__esModule",{value:!0});var a=s(2088),n=s(3156),l=!1,c=s(11),o=i,r=c(a.a,n.a,!1,o,null,null);r.options.__file="src/views/system/configs/customer-fields.vue",e.default=r.exports},675:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=s(681),n=i(a),l=s(210),c=i(l);e.default=function(){function t(t,e){var s=[],i=!0,a=!1,n=void 0;try{for(var l,o=(0,c.default)(t);!(i=(l=o.next()).done)&&(s.push(l.value),!e||s.length!==e);i=!0);}catch(t){a=!0,n=t}finally{try{!i&&o.return&&o.return()}finally{if(a)throw n}}return s}return function(e,s){if(Array.isArray(e))return e;if((0,n.default)(Object(e)))return t(e,s);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},681:function(t,e,s){t.exports={default:s(682),__esModule:!0}},682:function(t,e,s){s(36),s(26),t.exports=s(683)},683:function(t,e,s){var i=s(56),a=s(3)("iterator"),n=s(18);t.exports=s(2).isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||n.hasOwnProperty(i(e))}}});