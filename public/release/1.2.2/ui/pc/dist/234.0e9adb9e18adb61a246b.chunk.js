webpackJsonp([234],{1533:function(t,e,i){"use strict";var s=i(1),o=i(209),a=i(207);e.a={mixins:[a.a,o.a],data:function(){return{info:{}}},methods:{ok:function(){var t=this;if(0==this.info.is_valid)return void this.$Notice.warning({title:"提示：",desc:"请选择有效性"});var e=s.b.copy(this.info),i="market_clues/"+e.mcl_id;e.bid=this.bid$,this.$rest(i).put(e).success(function(e){t.$Message.success("修改成功！"),t.$emit("on-success"),t.close()}).error(function(e){t.$Message.error(e.body.message||"操作失败~","error")})}}}},2060:function(t,e){},2061:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Modal",{directives:[{name:"drag-modal",rawName:"v-drag-modal"}],attrs:{title:t.modal$.title,width:480,"mask-closable":!1},model:{value:t.modal$.show,callback:function(e){t.$set(t.modal$,"show",e)},expression:"modal$.show"}},[i("Form",{attrs:{"label-width":80}},[i("Form-item",{attrs:{label:"有效性"}},[t.info.cu_id>0?i("Alert",{attrs:{"show-icon":""}},[t._v(t._s(t.item.name)+"已经转化为客户")]):i("RadioGroup",{attrs:{type:"button"},model:{value:t.info.is_valid,callback:function(e){t.$set(t.info,"is_valid",e)},expression:"info.is_valid"}},[i("Radio",{attrs:{label:1}},[t._v("有效")]),t._v(" "),i("Radio",{attrs:{label:2}},[t._v("无效")])],1)],1)],1),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{type:"ghost"},on:{click:t.close}},[t._v("取消")]),t._v(" "),i("Button",{attrs:{type:"primary",loading:t.saving},on:{click:t.ok}},[t._v("确定")])],1)],1)},o=[];s._withStripped=!0;var a={render:s,staticRenderFns:o};e.a=a},372:function(t,e,i){"use strict";function s(t){r||i(2060)}Object.defineProperty(e,"__esModule",{value:!0});var o=i(1533),a=i(2061),r=!1,n=i(11),l=s,c=n(o.a,a.a,!1,l,null,null);c.options.__file="src/views/recruiting/market/validation-single.vue",e.default=c.exports}});