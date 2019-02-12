webpackJsonp([261],{1557:function(t,n,e){"use strict";var s=e(1),i=e(209),a=e(207);n.a={mixins:[i.a,a.a],props:{forbidType:{type:Array,default:function(){return[]}}},data:function(){return{pcLink:"",mLink:"",studentLink:"",selectTab:""}},computed:{system_links:function(){return this.$store.state.gvars.system_links}},methods:{showPane:function(t){return-1===this.forbidType.indexOf(t)},pcLinkChange:function(t){this.mLink="",this.studentLink="",this.pcLink=t.link,this.currentLinkObj=t,this.selectTab="pc"},mLinkChange:function(t){this.pcLink="",this.studentLink="",this.mLink=t.link,this.currentLinkObj=t,this.selectTab="m"},sLinkChange:function(t){this.pcLink="",this.mLink="",this.studentLink=t.link,this.currentLinkObj=t,this.selectTab="student"},ok:function(){var t=this.currentLinkObj,n="",e=this.$store.state.user.info.base_url;if(s.a.isEmpty(t))return this.$Message.error("没有选中任何链接"),!1;"pc"===this.selectTab&&("modal"===t.type?n=t.link:"router"===t.type&&(n=s.b.sprintf("%s/#%s",e,t.link))),"m"===this.selectTab&&(n=s.b.sprintf("%s/m/#%s",e,t.link)),"student"===this.selectTab&&(n=s.b.sprintf("%s/student/#%s",e,t.link)),this.$emit("on-change",n),this.close()}}}},2119:function(t,n){},2120:function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Modal",{directives:[{name:"drag-modal",rawName:"v-drag-modal"}],attrs:{"mask-closable":!1,title:t.modal$.title,width:"550"},model:{value:t.modal$.show,callback:function(n){t.$set(t.modal$,"show",n)},expression:"modal$.show"}},[e("Tabs",[t.showPane("pc")?e("TabPane",{attrs:{label:t.system_links.pc.name,name:"pc"}},[e("RadioGroup",{staticClass:"links-group",attrs:{vertical:""},model:{value:t.pcLink,callback:function(n){t.pcLink=n},expression:"pcLink"}},t._l(t.system_links.pc.links,function(n){return e("Radio",{attrs:{label:n.link},nativeOn:{click:function(e){e.preventDefault(),t.pcLinkChange(n)}}},[t._v(t._s(n.text)+"\n\t\t\t\t")])}))],1):t._e(),t._v(" "),t.showPane("m")?e("TabPane",{attrs:{label:t.system_links.m.name,name:"m"}},[e("RadioGroup",{staticClass:"links-group",attrs:{vertical:""},model:{value:t.mLink,callback:function(n){t.mLink=n},expression:"mLink"}},t._l(t.system_links.m.links,function(n){return e("Radio",{attrs:{label:n.link},nativeOn:{click:function(e){e.preventDefault(),t.mLinkChange(n)}}},[t._v(t._s(n.text)+"\n\t\t\t\t")])}))],1):t._e(),t._v(" "),t.showPane("student")?e("TabPane",{attrs:{label:t.system_links.student.name,name:"student"}},[e("RadioGroup",{staticClass:"links-group",attrs:{vertical:""},model:{value:t.studentLink,callback:function(n){t.studentLink=n},expression:"studentLink"}},t._l(t.system_links.student.links,function(n){return e("Radio",{attrs:{label:n.link},nativeOn:{click:function(e){e.preventDefault(),t.sLinkChange(n)}}},[t._v(t._s(n.text)+"\n\t\t\t\t")])}))],1):t._e()],1),t._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"ghost"},on:{click:t.close}},[t._v("关闭")]),t._v(" "),e("Button",{attrs:{type:"primary"},on:{click:t.ok}},[t._v("确定")])],1)],1)},i=[];s._withStripped=!0;var a={render:s,staticRenderFns:i};n.a=a},369:function(t,n,e){"use strict";function s(t){l||e(2119)}Object.defineProperty(n,"__esModule",{value:!0});var i=e(1557),a=e(2120),l=!1,r=e(11),o=s,c=r(i.a,a.a,!1,o,null,null);c.options.__file="src/views/components/SelectSystemLinkModal.vue",n.default=c.exports}});