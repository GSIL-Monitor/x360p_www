webpackJsonp([250],{1639:function(t,o,e){"use strict";var s=e(209);o.a={mixins:[s.a],data:function(){return{uid:0,og_id:0,loginUrl:""}},watch:{og_id:function(t){this.getToken()}},methods:{getToken:function(){var t=this;this.$rest("orgs/"+this.og_id+"/domktoken").post({uid:this.uid}).success(function(o){t.loginUrl=o.data.url}).error(function(o){t.$Notice.error({title:"提示",desc:o.body.message||"获取登录地址错误~"})})},openNewWindow:function(){this.loginUrl&&window.open(this.loginUrl)}}}},2255:function(t,o){},2256:function(t,o,e){"use strict";var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("Modal",{attrs:{title:t.modal$.title,"mask-closable":!1,width:450},model:{value:t.modal$.show,callback:function(o){t.$set(t.modal$,"show",o)},expression:"modal$.show"}},[e("p",{staticClass:"mb-2"},[t._v("登录地址如下：")]),t._v(" "),e("Alert",[e("span",{staticClass:"text-primary cursor",on:{click:t.openNewWindow}},[t._v("\n\t\t\t"+t._s(t.loginUrl)+"\n\t\t")])]),t._v(" "),e("Alert",{attrs:{"show-icon":""}},[t._v("点击上面的链接直接登录客户的系统")]),t._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"ghost"},on:{click:t.close}},[t._v("关闭")])],1)],1)},n=[];s._withStripped=!0;var i={render:s,staticRenderFns:n};o.a=i},435:function(t,o,e){"use strict";function s(t){r||e(2255)}Object.defineProperty(o,"__esModule",{value:!0});var n=e(1639),i=e(2256),r=!1,l=e(11),a=s,c=l(n.a,i.a,!1,a,null,null);c.options.__file="src/views/system/orgs/user-token-modal.vue",o.default=c.exports}});