webpackJsonp([211],{2048:function(t,e,i){"use strict";var s=i(667),a=i.n(s),n=i(1),l=i(209);e.a={mixins:[l.a],data:function(){return{data:[],copy_data:[],action:"",cfg_id:0,cfg_names:[{name:"学员信息",value:"student"},{name:"员工信息",value:"employee"}],current_value:"student",type_list:[{name:"文本",value:"text"},{name:"多行文本",value:"textarea"},{name:"数字",value:"number"},{name:"日期",value:"date"}]}},mounted:function(){this.init_customer_fields()},computed:{rest_api:function(){return n.b.sprintf("configs?cfg_name=%s_option_fields",this.current_value)}},methods:{init_customer_fields:function(){var t=this;this.$rest(this.rest_api).get().success(function(e){t.data.splice(0);for(var i=0,s=e.cfg_value.length;i<s;i++){var a=e.cfg_value[i];a.$$name="自定义字段"+(i+1),a.$$edit=!1,t.data.push(a),t.copy_data=n.b.copy(t.data)}t.cfg_id=e.cfg_id,t.cfg_name=e.cfg_name}).error(function(e){t.$Message.error(e.body.message)})},getTypeName:function(t){return this.type_list.find(function(e){return e.value==t.type}).name},selectItem:function(t){this.current_value=t.value,this.init_customer_fields()},ok:function(t){if(!t.label)return this.$Message.error("显示名称不能为空"),!1;this.submit()},cancel:function(t){this.data=n.b.copy(this.copy_data),this.action=""},edit:function(t){t&&""==this.action&&(t.$$edit=!0,this.action="edit")},switchable:function(t){this.submit()},submit:function(){var t=this,e={cfg_name:this.cfg_name,cfg_value:function(t){var e=[];return t.forEach(function(t){var i={};for(var s in t)"$"!=s.substr(0,1)&&(i[s]=t[s]);e.push(i)}),e}(this.data)},i=0==this.cfg_id?["post","configs"]:["put","configs/"+this.cfg_id],s=a()(i,2),n=s[0],l=s[1];this.$rest(l)[n](e).success(function(e){t.action="",t.$Message.success("保存成功"),t.$store.dispatch("updateGlobalVar","configs"),t.init_customer_fields()}).error(function(e){t.$Message.error(e.body.message)})}}}},3076:function(t,e){},3077:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"c-grid customer-fields-config"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-3"},[i("Card",{attrs:{"dis-hover":""}},[i("div",{attrs:{slot:"title"},slot:"title"},[t._v("自定义项目")]),t._v(" "),i("div",{staticClass:"item-list"},t._l(t.cfg_names,function(e){return i("a",{class:["item",{selected:t.current_value==e.value}],on:{click:function(i){t.selectItem(e)}}},[i("span",[t._v(t._s(e.name))]),t._v(" "),t.current_value==e.value?i("Icon",{staticClass:"arrow-right",attrs:{type:"ios-arrow-right"}}):t._e()],1)}))])],1),t._v(" "),i("div",{staticClass:"col-sm-9"},[i("div",{staticClass:"list-body"},[i("div",{directives:[{name:"loading",rawName:"v-loading.like",value:"configs",expression:"'configs'",modifiers:{like:!0}}],staticClass:"list-body-wrap"},[i("table",{staticClass:"modal-table"},[t._m(0),t._v(" "),i("tbody",t._l(t.data,function(e){return i("tr",[i("td",[i("div",{staticClass:"ivu-table-cell"},[t._v(t._s(e.$$name))])]),t._v(" "),e.$$edit?[i("td",[i("div",{staticClass:"ivu-table-cell"},[i("Input",{model:{value:e.label,callback:function(i){t.$set(e,"label",i)},expression:"item.label"}})],1)]),t._v(" "),i("td",[i("div",{staticClass:"ivu-table-cell"},[i("Select",{model:{value:e.type,callback:function(i){t.$set(e,"type",i)},expression:"item.type"}},t._l(t.type_list,function(e){return i("Option",{attrs:{value:e.value}},[t._v(t._s(e.name))])}))],1)])]:[i("td",[i("div",{staticClass:"ivu-table-cell"},[t._v(t._s(e.label))])]),t._v(" "),i("td",[i("div",{staticClass:"ivu-table-cell"},[t._v(t._s(t.getTypeName(e)))])])],t._v(" "),i("td",[i("div",{staticClass:"ivu-table-cell"},[i("i-switch",{attrs:{"false-value":0,"true-value":1},on:{"on-change":function(i){t.switchable(e)}},model:{value:e.enable,callback:function(i){t.$set(e,"enable",i)},expression:"item.enable"}},[i("span",{attrs:{slot:"open"},slot:"open"},[t._v("是")]),t._v(" "),i("span",{attrs:{slot:"close"},slot:"close"},[t._v("否")])])],1)]),t._v(" "),i("td",[i("div",{staticClass:"ivu-table-cell"},[e.$$edit?i("ButtonGroup",[i("Button",{attrs:{type:"primary",size:"small",loading:t.saving},on:{click:function(i){t.ok(e)}}},[t._v("确定\n\t\t\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),i("Button",{attrs:{type:"ghost",size:"small",disabled:t.saving},on:{click:function(i){t.cancel(e)}}},[t._v("取消\n\t\t\t\t\t\t\t\t\t\t\t\t")])],1):i("Button",{attrs:{type:"ghost",shape:"circle",icon:"edit",size:"small",title:"编辑"},on:{click:function(i){t.edit(e)}}})],1)])],2)}))])])])])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",{attrs:{width:"20%"}},[i("div",{staticClass:"ivu-table-cell"},[t._v("字段")])]),t._v(" "),i("th",{attrs:{width:"20%"}},[i("div",{staticClass:"ivu-table-cell"},[t._v("显示名称")])]),t._v(" "),i("th",{attrs:{width:"20%"}},[i("div",{staticClass:"ivu-table-cell"},[t._v("字段类型")])]),t._v(" "),i("th",{attrs:{width:"20%"}},[i("div",{staticClass:"ivu-table-cell"},[t._v("启用")])]),t._v(" "),i("th",{attrs:{width:"20%"}},[i("div",{staticClass:"ivu-table-cell"},[t._v("操作")])])])])}];s._withStripped=!0;var n={render:s,staticRenderFns:a};e.a=n},594:function(t,e,i){"use strict";function s(t){l||i(3076)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(2048),n=i(3077),l=!1,c=i(11),r=s,o=c(a.a,n.a,!1,r,null,null);o.options.__file="src/views/system/configs/customer-fields.vue",e.default=o.exports},667:function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=i(674),n=s(a),l=i(212),c=s(l);e.default=function(){function t(t,e){var i=[],s=!0,a=!1,n=void 0;try{for(var l,r=(0,c.default)(t);!(s=(l=r.next()).done)&&(i.push(l.value),!e||i.length!==e);s=!0);}catch(t){a=!0,n=t}finally{try{!s&&r.return&&r.return()}finally{if(a)throw n}}return i}return function(e,i){if(Array.isArray(e))return e;if((0,n.default)(Object(e)))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},674:function(t,e,i){t.exports={default:i(675),__esModule:!0}},675:function(t,e,i){i(36),i(27),t.exports=i(676)},676:function(t,e,i){var s=i(56),a=i(4)("iterator"),n=i(18);t.exports=i(2).isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||n.hasOwnProperty(s(e))}}});