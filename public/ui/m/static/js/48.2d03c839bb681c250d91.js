webpackJsonp([48],{"6OWF":function(t,e,n){"use strict";function i(t){n("AHBG")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("MoGH");n.n(s);for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);var a=n("wvsd"),r=n.n(a),l=n("ssFY"),A=n("vSla"),d=i,f=A(r.a,l.a,!1,d,"data-v-31e218f7",null);e.default=f.exports},AHBG:function(t,e,n){var i=n("Fqvi");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("FIqI")("4d034d88",i,!0,{})},Fqvi:function(t,e,n){e=t.exports=n("UTlt")(!0),e.push([t.i,"\n.list-item[data-v-31e218f7] {\n  padding: 13px 13px;\n  background: #fff;\n  position: relative;\n}\n.list-item[data-v-31e218f7]:after {\n  content: '';\n  width: 95%;\n  height: 1px;\n  border-bottom: 1px solid #EEEEEE;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n.list-item .list-item-title[data-v-31e218f7] {\n  font-size: 15px;\n  color: #323232;\n  line-height: 30px;\n}\n.list-item .list-item-time[data-v-31e218f7] {\n  float: right;\n  font-size: 12px;\n  color: #999999;\n}\n.list-item .list-item-desc[data-v-31e218f7] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 12px;\n  color: #999999;\n  line-height: 30px;\n}\n","",{version:3,sources:["/Users/payhon/Project/x360p/src/neza_org_mobile/src/views/home/news.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,iCAAiC;EACjC,mBAAmB;EACnB,UAAU;EACV,SAAS;CACV;AACD;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,aAAa;EACb,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,oBAAoB;EACpB,wBAAwB;EACxB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,kBAAkB;CACnB",file:"news.vue",sourcesContent:["\n.list-item[data-v-31e218f7] {\n  padding: 13px 13px;\n  background: #fff;\n  position: relative;\n}\n.list-item[data-v-31e218f7]:after {\n  content: '';\n  width: 95%;\n  height: 1px;\n  border-bottom: 1px solid #EEEEEE;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n.list-item .list-item-title[data-v-31e218f7] {\n  font-size: 15px;\n  color: #323232;\n  line-height: 30px;\n}\n.list-item .list-item-time[data-v-31e218f7] {\n  float: right;\n  font-size: 12px;\n  color: #999999;\n}\n.list-item .list-item-desc[data-v-31e218f7] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 12px;\n  color: #999999;\n  line-height: 30px;\n}\n"],sourceRoot:""}])},MoGH:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("8Llf"),s=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={mixins:[s.default],data:function(){return{data_uri:"broadcasts",data:[]}},mounted:function(){},methods:{formatDate:function(t){return t.substring(0,10)},getInnerHTML:function(t){return t.replace(/<[^>]+>/g,"")}}}},ssFY:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"filter-container"}),t._v(" "),n("div",{directives:[{name:"me-scroll",rawName:"v-me-scroll"}],staticClass:"mescroll",style:{top:t.headerHeight+"px"}},[n("div",{ref:"dataList"},t._l(t.data,function(e,i){return n("div",{key:i,staticClass:"list-item",on:{click:function(n){t.$router.push({path:"./news/"+e.bc_id})}}},[n("div",{staticClass:"list-item-title"},[t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t"),n("span",{staticClass:"list-item-time"},[t._v(t._s(t.formatDate(e.create_time)))])]),t._v(" "),n("div",{staticClass:"list-item-desc"},[t._v("\n\t\t\t\t\t"+t._s(t.getInnerHTML(e.desc))+"\n\t\t\t\t")])])}))])])},s=[],o={render:i,staticRenderFns:s};e.a=o},wvsd:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("8Llf"),s=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={mixins:[s.default],data:function(){return{data_uri:"broadcasts",data:[]}},mounted:function(){},methods:{formatDate:function(t){return t.substring(0,10)},getInnerHTML:function(t){return t.replace(/<[^>]+>/g,"")}}}}});
//# sourceMappingURL=48.2d03c839bb681c250d91.js.map