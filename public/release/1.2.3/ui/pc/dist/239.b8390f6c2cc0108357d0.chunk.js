webpackJsonp([239],{1262:function(t,e,o){"use strict";var s=o(6);e.a=new s.a({data:function(){return{}},computed:{},methods:{}})},1598:function(t,e,o){"use strict";var s=o(1262),a=o(0),i=o.n(a),n=o(209);e.a={mixins:[n.a],data:function(){return{swipeType:"attend"}},methods:{onSchoolNotice:function(t){var e=this,o=t.cardNo,s=(t.action,{int_day:i()(new Date).format("YYYYMMDD"),is_push:1,card_no:o});"attend"===this.swipeType?s.is_attend=1:s.is_leave=1,this.$rest("student_attend_school_logs").post(s).success(function(t){e.$Message.success("刷卡成功！"),e.$emit("on-success")}).error(function(t){e.$Notice.error({title:"刷卡失败",desc:t.body.message||"刷卡失败"})})}},computed:{cardReader:function(){return this.$store.state.layout.$refs.cardReader}},mounted:function(){s.a.$on("school-notice",this.onSchoolNotice),this.cardReader.setAction("notice")},beforeDestroy:function(){s.a.$off("school-notice",this.onSchoolNotice),this.cardReader.setAction("")}}},2179:function(t,e){},2180:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Modal",{directives:[{name:"drag-modal",rawName:"v-drag-modal"}],attrs:{title:t.modal$.title,"mask-closable":!1,width:"580"},model:{value:t.modal$.show,callback:function(e){t.$set(t.modal$,"show",e)},expression:"modal$.show"}},[o("div",{staticClass:"notice-swipe-modal"},[o("RadioGroup",{staticClass:"d-block",attrs:{type:"button"},model:{value:t.swipeType,callback:function(e){t.swipeType=e},expression:"swipeType"}},[o("Radio",{attrs:{label:"attend"}},[o("Icon",{attrs:{type:"log-in"}}),t._v("到校")],1),t._v(" "),o("Radio",{attrs:{label:"leave"}},[o("Icon",{attrs:{type:"log-out"}}),t._v("离校")],1)],1),t._v(" "),o("img",{attrs:{src:"https://sp1.xiao360.com/static/ui/pc/swipe.gif"}})],1),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("Button",{attrs:{type:"ghost"},on:{click:t.close}},[t._v("关闭")])],1)])},a=[];s._withStripped=!0;var i={render:s,staticRenderFns:a};e.a=i},416:function(t,e,o){"use strict";function s(t){n||o(2179)}Object.defineProperty(e,"__esModule",{value:!0});var a=o(1598),i=o(2180),n=!1,c=o(11),r=s,l=c(a.a,i.a,!1,r,null,null);l.options.__file="src/views/service/bclass/notice-swipe-modal.vue",e.default=l.exports}});