webpackJsonp([213,257],{1237:function(t,e,s){"use strict";var a=s(1),i=s(209),n=s(207);e.a={mixins:[i.a,n.a],data:function(){return{data:[]}},methods:{init_data:function(){var t=this;return this.$rest("center_versions").get().success(function(e){e.forEach(function(t){t.expand$=!1}),t.data=e}).error(function(e){t.$Message.erro(e.body.message)}),this},get_date:function(t){var e=void 0,s=void 0;return e=t.publish_date.toString().substring(4,6),s=t.publish_date.toString().substring(6,8),a.b.sprintf("%s月%s日",e,s)}}}},1376:function(t,e){},1377:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Modal",{directives:[{name:"drag-modal",rawName:"v-drag-modal"}],staticClass:"version-modal",attrs:{"mask-closable":!1,title:t.modal$.title,width:"500"},model:{value:t.modal$.show,callback:function(e){t.$set(t.modal$,"show",e)},expression:"modal$.show"}},[s("div",{staticClass:"version-list"},[s("table",[s("tbody",[t._l(t.data,function(e){return[s("tr",{staticClass:"title"},[s("td",[s("p",[t._v("校360 "+t._s(e.ver)+"主要更新")]),t._v(" "),s("span",[t._v(t._s(t.get_date(e)))])]),t._v(" "),s("td",{on:{click:function(t){e.expand$=!e.expand$}}},[e.expand$?s("Icon",{attrs:{type:"chevron-down"}}):s("Icon",{attrs:{type:"chevron-right"}})],1)]),t._v(" "),e.expand$?s("tr",[s("td",{attrs:{colspan:"2"}},[s("div",{staticClass:"html",domProps:{innerHTML:t._s(e.content)}})])]):t._e()]}),t._v(" "),t.data.length?t._e():s("tr",{staticClass:"text-center"},[s("td",{attrs:{colspan:"2"}},[t._v("没有数据")])])],2)])])])},i=[];a._withStripped=!0;var n={render:a,staticRenderFns:i};e.a=n},1577:function(t,e,s){"use strict";var a=s(209),i=s(207),n=s(1),r=s(357);e.a={mixins:[a.a,i.a],components:{VersionInfo:r.default},data:function(){return{version:"",expire_day:"20180908",client:"",rest_num:"",is_expire:!1,a_limit:0,a_current:0}},methods:{getAbout:function(){var t=this;return this.$rest("organization").get().success(function(e){var s=e.client_info;t.version=s.current_version,t.expire_day=s.expire_day,t.client=s.client_name,t.a_limit=s.student_num_limit,t.a_current=e.client_status.student_num,t.is_expire=e.is_expire}).error(function(e){t.$Message.error(e.body.message)}),this},showVerList:function(){this.$store.commit("updateLatestVersionRead"),this.$refs.version_info.init_data().show("版本历史","list")}},computed:{hasLatestVersion:function(){return""!=this.$store.state.latest_version.ver&&0==this.$store.state.latest_version.read},studentNumsPercent:function(){return Math.round(100*n.b.div(this.a_current,this.a_limit))},rest_days:function(){var t=Date.parse(this.$filter("int_date")(this.expire_day)),e=Date.parse(new Date),s=t-e;return s>0?Math.round(s/1e3/60/60/24):0},vip:function(){var t=this.$store.state.user.info,e=t.product_url.split("//"),s=t.token,a="",i="";return a=n.b.sprintf("%s//vip.%s/#/renew?token=%s",e[0],e[1],s),i=n.b.sprintf("%s//vip.%s/#/expand?token=%s",e[0],e[1],s),{charge:a,expand:i}}}}},2152:function(t,e){},2153:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{directives:[{name:"drag-modal",rawName:"v-drag-modal"}],attrs:{"mask-closable":!1,title:t.modal$.title,width:"580"},on:{"on-cancel":t.close},model:{value:t.modal$.show,callback:function(e){t.$set(t.modal$,"show",e)},expression:"modal$.show"}},[a("div",{staticClass:"row about",staticStyle:{"align-items":"center","justify-content":"center"}},[a("div",{staticClass:"col-sm-4"},[a("img",{attrs:{src:s(2154)}})]),t._v(" "),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"title"},[t._v("校360"),a("sup",[t._v("专业版")]),t._v(" "),t.hasLatestVersion?a("Badge",{attrs:{dot:""}},[a("a",{staticClass:"text-primary",on:{click:t.showVerList}},[t._v("("+t._s(t.version)+")")])]):a("a",{staticClass:"text-primary",on:{click:t.showVerList}},[t._v("("+t._s(t.version)+")")])],1),t._v(" "),a("div",{staticClass:"item"},[t._v("授权给："+t._s(t.client))]),t._v(" "),a("div",{staticClass:"item"},[t._v("到期日期："+t._s(t._f("int_date")(t.expire_day))+"\n\t\t\t\t("),t.is_expire?a("span",{staticClass:"text-danger"},[t._v("已过期")]):a("span",[t._v("剩余"),a("span",{staticClass:"text-danger"},[t._v(t._s(t.rest_days))]),t._v("天")]),t._v(")\n\t\t\t\t"),a("a",{staticClass:"mr-4 pull-right",attrs:{target:"_blank",href:t.vip.charge}},[t._v("现在续费")])]),t._v(" "),a("div",{staticClass:"item"},[t._v("系统容量：\n\t\t\t\t"),0!==t.a_limit?[a("Progress",{staticStyle:{width:"150px","vertical-align":"middle","padding-bottom":"2px"},attrs:{status:"normal",percent:t.studentNumsPercent,"stroke-width":14}}),t._v(" "),a("a",{staticClass:"mr-4 pull-right",attrs:{target:"_blank",href:t.vip.expand}},[t._v("现在扩容")]),t._v(" "),a("div",{staticClass:"rest-capacity"},[t._v("剩余"+t._s(t.a_limit-t.a_current)+"人")])]:[a("span",[t._v("不限制学员数")]),t._v(" "),a("div",{staticClass:"rest-capacity"},[t._v("已使用："+t._s(t.a_current)+"人")])]],2)])]),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"text-center"},[t._v("深圳浪腾计算机信息技术有限公司   联系电话：400-621-8114")])]),t._v(" "),a("version-info",{ref:"version_info"})],1)},i=[];a._withStripped=!0;var n={render:a,staticRenderFns:i};e.a=n},2154:function(t,e,s){t.exports=s.p+"add8be7399c0318269534c9d2369e9b6.jpg"},357:function(t,e,s){"use strict";function a(t){r||s(1376)}Object.defineProperty(e,"__esModule",{value:!0});var i=s(1237),n=s(1377),r=!1,o=s(11),c=a,l=o(i.a,n.a,!1,c,null,null);l.options.__file="src/views/common/modal/version-info.vue",e.default=l.exports},389:function(t,e,s){"use strict";function a(t){r||s(2152)}Object.defineProperty(e,"__esModule",{value:!0});var i=s(1577),n=s(2153),r=!1,o=s(11),c=a,l=o(i.a,n.a,!1,c,null,null);l.options.__file="src/views/common/modal/about.vue",e.default=l.exports}});