webpackJsonp([28],{"4KrA":function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var i=e("VD+p"),o=a(i),r=e("TVG1"),s=a(r),c=e("8Llf"),d=a(c),A=e("KUj2"),l=a(A),p=e("j108"),u=a(p),m=e("inDh"),C=a(m),f=e("cTn1"),x=a(f);n.default={mixins:[d.default,l.default],components:{Tab:u.default,Popup:x.default,TabItem:C.default},data:function(){return{tab:0,time:(0,o.default)(new Date).format("YYYY-MM-DD"),data:{},ready:!1,barAction:!1,popup:{show:!1,title:"",amount:0,unit:"",filed:"",list:[]}}},watch:{tab:function(t){this.init_data()}},mounted:function(){this.init_data()},methods:{getPercent:function(t){var n=this.popup.field,e=this.popup.amount;return parseFloat(t[n]/e*100).toFixed(2)},back:function(){this.popup.show=!1,this.barAction=!1},detail:function(t,n,e,a){var i=this;this.getNums(n,e)>0&&(this.popup.title=t,this.popup.list=this.data[n][e],this.popup.field=e,this.popup.unit=a||"人",this.popup.amount=this.getNums(n,e),this.popup.show=!0,setTimeout(function(){i.barAction=!0},100))},init_data:function(){var t=this;this.ready=!1,this.dr().getData(this.data_uri).then(function(n){t.data=n,t.ready=!0})},getNums:function(t,n){var e=this.data[t][n],a=0;return e&&e.length>0&&(e.forEach(function(t){a+=Number(t[n])}),r._.isNumber(e[e.length-1][n])||(a=parseFloat(a).toFixed(2))),a}},computed:{title:function(){return(0,o.default)(new Date).format("YYYY年MM月DD")+" 星期"+{1:"一",2:"二",3:"三",4:"四",5:"五",6:"六",7:"日"}[(0,o.default)(new Date).isoWeekday()]},data_uri:function(){var t="",n="",e=(0,o.default)(this.time).weekday()-1;return 0==this.tab?(t=(0,o.default)(this.time).subtract(e,"days").format("YYYYMMDD"),n=(0,o.default)(this.time).format("YYYYMMDD")):(t=(0,o.default)(this.time).format("YYYYMM")+"01",n=(0,o.default)(this.time).format("YYYYMM")+(0,o.default)((0,o.default)(this.time).format("YYYY-MM"),"YYYY-MM").daysInMonth()),s.default.sprintf("report_summaries/overview?start_day=%s&end_day=%s",t,n)}}}},BBvI:function(t,n,e){n=t.exports=e("UTlt")(!0),n.push([t.i,"\n.x-tab .vux-tab-bar-inner{\n\tbackground-color: #45A6FF !important;\n}\n","",{version:3,sources:["/Users/payhon/project/x360p/src/neza_org_mobile/src/views/report/dailyreport.vue"],names:[],mappings:";AACA;CACC,qCAAqC;CACrC",file:"dailyreport.vue",sourcesContent:["\n.x-tab .vux-tab-bar-inner{\n\tbackground-color: #45A6FF !important;\n}\n"],sourceRoot:""}])},E4yq:function(t,n,e){n=t.exports=e("UTlt")(!0),n.push([t.i,"\n.x-popup-header[data-v-165e73e2] {\n  color: #555555;\n  padding: 10px 12px;\n  position: absolute;\n  font-size: 14px;\n  color: #999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.x-popup-content[data-v-165e73e2] {\n  position: absolute;\n  width: 100%;\n  height: calc(100% - 82px);\n  top: 40px;\n  left: 0;\n  background: #fff;\n  overflow: auto;\n}\n.x-popup-content .x-check-item[data-v-165e73e2] {\n  padding: 12px 10px;\n  position: relative;\n  border-bottom: 1px solid #e5e5e5;\n  text-align: left;\n}\n.x-popup-content .x-check-item .icon[data-v-165e73e2] {\n  color: transparent;\n}\n.x-popup-content .x-check-item.active[data-v-165e73e2] {\n  color: #5cb4f5;\n}\n.x-popup-content .x-check-item.active .icon[data-v-165e73e2] {\n  color: #5cb4f5;\n}\n.x-popup-content .x-check-item .x-check-item-icon[data-v-165e73e2] {\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.x-popup-content .x-check-item .x-check-item-text[data-v-165e73e2] {\n  font-size: 14px;\n  display: inline-block;\n}\n.x-popup-footer[data-v-165e73e2] {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n}\n.x-popup-footer .x-popup-btn[data-v-165e73e2] {\n  width: 100%;\n  height: 40px;\n  text-align: center;\n  background: #5cb4f5;\n  line-height: 40px;\n  color: #fff;\n}\n.x-popup-footer .x-popup-btn-left[data-v-165e73e2] {\n  border-right: 1px solid #fff;\n  background: #999999;\n}\n.x-cell-item[data-v-165e73e2] {\n  padding: 10px;\n}\n.x-cell[data-v-165e73e2] {\n  position: relative;\n  height: 48px;\n}\n.x-cell .x-cell-bar[data-v-165e73e2] {\n  position: absolute;\n  height: 100%;\n  left: 0;\n  top: 0;\n  width: 0%;\n  background: #d9efff;\n  border-radius: 3px;\n  -webkit-transition: all .5s;\n  -o-transition: all .5s;\n  transition: all .5s;\n}\n.x-cell .x-cell-content[data-v-165e73e2] {\n  position: absolute;\n  padding: 0 10px;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  line-height: 1.2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.x-cell .x-cell-content .title[data-v-165e73e2] {\n  font-size: 14px;\n  color: #464646;\n}\n.x-cell .x-cell-content small[data-v-165e73e2] {\n  font-size: 12px;\n  color: #999999;\n}\n.x-cell .x-cell-content .total[data-v-165e73e2] {\n  color: #0096FF;\n  font-size: 16px;\n}\n.x-popup-content-top[data-v-165e73e2] {\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 20px 0;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border-bottom: 10px solid #eee;\n}\n.x-popup-content-top .title[data-v-165e73e2] {\n  color: red;\n  font-size: 26px;\n}\n.x-popup-content-top p[data-v-165e73e2] {\n  color: #999999;\n  font-size: 13px;\n}\n.card-container .card[data-v-165e73e2] {\n  width: calc(100% - 24px);\n  margin: 10px 12px 10px 12px;\n}\n.card-container .card .card-header[data-v-165e73e2] {\n  background: #7CBBF5;\n  color: #fff;\n  padding: 10px 10px;\n  font-size: 14px;\n}\n.card-container .card .card-item[data-v-165e73e2] {\n  background: rgba(0, 150, 255, 0.15);\n  color: #555555;\n  font-size: 14px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 15px 16px;\n  position: relative;\n}\n.card-container .card .card-item .card-item-left[data-v-165e73e2] {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.card-container .card .card-item .card-item-right[data-v-165e73e2] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.card-container .card .card-item[data-v-165e73e2]:after {\n  content: '';\n  position: absolute;\n  width: calc(100% - 20px);\n  height: 1px;\n  left: 10px;\n  bottom: 0px;\n  background: #F9F9F9;\n}\n.card-container .card .card-item[data-v-165e73e2]:nth-last-child(1):after {\n  height: 0px;\n}\n.card-container .card:nth-child(2) .card-header[data-v-165e73e2] {\n  background-color: #F5C37C;\n}\n.card-container .card:nth-child(2) .card-item[data-v-165e73e2] {\n  background: rgba(245, 195, 124, 0.15);\n}\n.card-container .card:nth-child(3) .card-header[data-v-165e73e2] {\n  background-color: #C97CF5;\n}\n.card-container .card:nth-child(3) .card-item[data-v-165e73e2] {\n  background: rgba(223, 124, 245, 0.15);\n}\n.x-tab-item-primary[data-v-165e73e2] {\n  color: #45A6FF !important;\n  border-color: #45A6FF !important;\n}\n.banner[data-v-165e73e2] {\n  width: 100%;\n  height: 146px;\n  background: url(https://sp1.xiao360.com/static/img/org/report_bg.png) no-repeat;\n  background-size: cover;\n  padding: 35px 0 30px 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  text-align: center;\n}\n.banner .banner-title[data-v-165e73e2] {\n  color: #fff;\n  font-size: 24px;\n  position: relative;\n  text-align: center;\n}\n.banner .banner-title[data-v-165e73e2]:before {\n  content: '';\n  position: absolute;\n  width: 96px;\n  height: 2px;\n  background: #fff;\n  top: -5px;\n  left: calc(50% - 48px);\n}\n.banner .banner-title[data-v-165e73e2]:after {\n  content: '';\n  position: absolute;\n  width: 96px;\n  height: 2px;\n  background: #fff;\n  bottom: -5px;\n  left: calc(50% - 48px);\n}\n.banner .banner-time[data-v-165e73e2] {\n  margin: 0 auto;\n  color: #545454;\n  padding: 5px 10px;\n  background: #fff;\n  border: none;\n  font-size: 13px;\n  display: inline-block;\n  margin-top: 17px;\n}\n","",{version:3,sources:["/Users/payhon/project/x360p/src/neza_org_mobile/src/views/report/dailyreport.vue"],names:[],mappings:"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",file:"dailyreport.vue",sourcesContent:["\n.x-popup-header[data-v-165e73e2] {\n  color: #555555;\n  padding: 10px 12px;\n  position: absolute;\n  font-size: 14px;\n  color: #999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.x-popup-content[data-v-165e73e2] {\n  position: absolute;\n  width: 100%;\n  height: calc(100% - 82px);\n  top: 40px;\n  left: 0;\n  background: #fff;\n  overflow: auto;\n}\n.x-popup-content .x-check-item[data-v-165e73e2] {\n  padding: 12px 10px;\n  position: relative;\n  border-bottom: 1px solid #e5e5e5;\n  text-align: left;\n}\n.x-popup-content .x-check-item .icon[data-v-165e73e2] {\n  color: transparent;\n}\n.x-popup-content .x-check-item.active[data-v-165e73e2] {\n  color: #5cb4f5;\n}\n.x-popup-content .x-check-item.active .icon[data-v-165e73e2] {\n  color: #5cb4f5;\n}\n.x-popup-content .x-check-item .x-check-item-icon[data-v-165e73e2] {\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.x-popup-content .x-check-item .x-check-item-text[data-v-165e73e2] {\n  font-size: 14px;\n  display: inline-block;\n}\n.x-popup-footer[data-v-165e73e2] {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n}\n.x-popup-footer .x-popup-btn[data-v-165e73e2] {\n  width: 100%;\n  height: 40px;\n  text-align: center;\n  background: #5cb4f5;\n  line-height: 40px;\n  color: #fff;\n}\n.x-popup-footer .x-popup-btn-left[data-v-165e73e2] {\n  border-right: 1px solid #fff;\n  background: #999999;\n}\n.x-cell-item[data-v-165e73e2] {\n  padding: 10px;\n}\n.x-cell[data-v-165e73e2] {\n  position: relative;\n  height: 48px;\n}\n.x-cell .x-cell-bar[data-v-165e73e2] {\n  position: absolute;\n  height: 100%;\n  left: 0;\n  top: 0;\n  width: 0%;\n  background: #d9efff;\n  border-radius: 3px;\n  -webkit-transition: all .5s;\n  -o-transition: all .5s;\n  transition: all .5s;\n}\n.x-cell .x-cell-content[data-v-165e73e2] {\n  position: absolute;\n  padding: 0 10px;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  line-height: 1.2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.x-cell .x-cell-content .title[data-v-165e73e2] {\n  font-size: 14px;\n  color: #464646;\n}\n.x-cell .x-cell-content small[data-v-165e73e2] {\n  font-size: 12px;\n  color: #999999;\n}\n.x-cell .x-cell-content .total[data-v-165e73e2] {\n  color: #0096FF;\n  font-size: 16px;\n}\n.x-popup-content-top[data-v-165e73e2] {\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 20px 0;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border-bottom: 10px solid #eee;\n}\n.x-popup-content-top .title[data-v-165e73e2] {\n  color: red;\n  font-size: 26px;\n}\n.x-popup-content-top p[data-v-165e73e2] {\n  color: #999999;\n  font-size: 13px;\n}\n.card-container .card[data-v-165e73e2] {\n  width: calc(100% - 24px);\n  margin: 10px 12px 10px 12px;\n}\n.card-container .card .card-header[data-v-165e73e2] {\n  background: #7CBBF5;\n  color: #fff;\n  padding: 10px 10px;\n  font-size: 14px;\n}\n.card-container .card .card-item[data-v-165e73e2] {\n  background: rgba(0, 150, 255, 0.15);\n  color: #555555;\n  font-size: 14px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 15px 16px;\n  position: relative;\n}\n.card-container .card .card-item .card-item-left[data-v-165e73e2] {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.card-container .card .card-item .card-item-right[data-v-165e73e2] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.card-container .card .card-item[data-v-165e73e2]:after {\n  content: '';\n  position: absolute;\n  width: calc(100% - 20px);\n  height: 1px;\n  left: 10px;\n  bottom: 0px;\n  background: #F9F9F9;\n}\n.card-container .card .card-item[data-v-165e73e2]:nth-last-child(1):after {\n  height: 0px;\n}\n.card-container .card:nth-child(2) .card-header[data-v-165e73e2] {\n  background-color: #F5C37C;\n}\n.card-container .card:nth-child(2) .card-item[data-v-165e73e2] {\n  background: rgba(245, 195, 124, 0.15);\n}\n.card-container .card:nth-child(3) .card-header[data-v-165e73e2] {\n  background-color: #C97CF5;\n}\n.card-container .card:nth-child(3) .card-item[data-v-165e73e2] {\n  background: rgba(223, 124, 245, 0.15);\n}\n.x-tab-item-primary[data-v-165e73e2] {\n  color: #45A6FF !important;\n  border-color: #45A6FF !important;\n}\n.banner[data-v-165e73e2] {\n  width: 100%;\n  height: 146px;\n  background: url(https://sp1.xiao360.com/static/img/org/report_bg.png) no-repeat;\n  background-size: cover;\n  padding: 35px 0 30px 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  text-align: center;\n}\n.banner .banner-title[data-v-165e73e2] {\n  color: #fff;\n  font-size: 24px;\n  position: relative;\n  text-align: center;\n}\n.banner .banner-title[data-v-165e73e2]:before {\n  content: '';\n  position: absolute;\n  width: 96px;\n  height: 2px;\n  background: #fff;\n  top: -5px;\n  left: calc(50% - 48px);\n}\n.banner .banner-title[data-v-165e73e2]:after {\n  content: '';\n  position: absolute;\n  width: 96px;\n  height: 2px;\n  background: #fff;\n  bottom: -5px;\n  left: calc(50% - 48px);\n}\n.banner .banner-time[data-v-165e73e2] {\n  margin: 0 auto;\n  color: #545454;\n  padding: 5px 10px;\n  background: #fff;\n  border: none;\n  font-size: 13px;\n  display: inline-block;\n  margin-top: 17px;\n}\n"],sourceRoot:""}])},JYyK:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var i=e("VD+p"),o=a(i),r=e("TVG1"),s=a(r),c=e("8Llf"),d=a(c),A=e("KUj2"),l=a(A),p=e("j108"),u=a(p),m=e("inDh"),C=a(m),f=e("cTn1"),x=a(f);n.default={mixins:[d.default,l.default],components:{Tab:u.default,Popup:x.default,TabItem:C.default},data:function(){return{tab:0,time:(0,o.default)(new Date).format("YYYY-MM-DD"),data:{},ready:!1,barAction:!1,popup:{show:!1,title:"",amount:0,unit:"",filed:"",list:[]}}},watch:{tab:function(t){this.init_data()}},mounted:function(){this.init_data()},methods:{getPercent:function(t){var n=this.popup.field,e=this.popup.amount;return parseFloat(t[n]/e*100).toFixed(2)},back:function(){this.popup.show=!1,this.barAction=!1},detail:function(t,n,e,a){var i=this;this.getNums(n,e)>0&&(this.popup.title=t,this.popup.list=this.data[n][e],this.popup.field=e,this.popup.unit=a||"人",this.popup.amount=this.getNums(n,e),this.popup.show=!0,setTimeout(function(){i.barAction=!0},100))},init_data:function(){var t=this;this.ready=!1,this.dr().getData(this.data_uri).then(function(n){t.data=n,t.ready=!0})},getNums:function(t,n){var e=this.data[t][n],a=0;return e&&e.length>0&&(e.forEach(function(t){a+=Number(t[n])}),r._.isNumber(e[e.length-1][n])||(a=parseFloat(a).toFixed(2))),a}},computed:{title:function(){return(0,o.default)(new Date).format("YYYY年MM月DD")+" 星期"+{1:"一",2:"二",3:"三",4:"四",5:"五",6:"六",7:"日"}[(0,o.default)(new Date).isoWeekday()]},data_uri:function(){var t="",n="",e=(0,o.default)(this.time).weekday()-1;return 0==this.tab?(t=(0,o.default)(this.time).subtract(e,"days").format("YYYYMMDD"),n=(0,o.default)(this.time).format("YYYYMMDD")):(t=(0,o.default)(this.time).format("YYYYMM")+"01",n=(0,o.default)(this.time).format("YYYYMM")+(0,o.default)((0,o.default)(this.time).format("YYYY-MM"),"YYYY-MM").daysInMonth()),s.default.sprintf("report_summaries/overview?start_day=%s&end_day=%s",t,n)}}}},bzVJ:function(t,n,e){"use strict";function a(t){e("cf4t"),e("uxEz")}Object.defineProperty(n,"__esModule",{value:!0});var i=e("JYyK");e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);var r=e("4KrA"),s=e.n(r),c=e("vuPE"),d=e("C7Lr"),A=a,l=d(s.a,c.a,!1,A,"data-v-165e73e2",null);n.default=l.exports},cf4t:function(t,n,e){var a=e("BBvI");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("FIqI")("f8ea01be",a,!0,{})},uxEz:function(t,n,e){var a=e("E4yq");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("FIqI")("69480cbf",a,!0,{})},vuPE:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"banner"},[t._m(0),t._v(" "),e("div",{staticClass:"banner-time"},[t._v("\n\t\t\t"+t._s(t.title)+"\n\t\t")])]),t._v(" "),e("tab",{staticClass:"x-tab",attrs:{"label-width":3,"custom-bar-width":"60px"},model:{value:t.tab,callback:function(n){t.tab=n},expression:"tab"}},[e("tab-item",{attrs:{"active-class":"x-tab-item-primary",selected:""}},[t._v("本周报表")]),t._v(" "),e("tab-item",{attrs:{"active-class":"x-tab-item-primary"}},[t._v("当月累计")])],1),t._v(" "),t.ready?e("div",{staticClass:"card-container"},[e("div",{staticClass:"card"},[t._m(1),t._v(" "),e("div",{staticClass:"card-item",on:{click:function(n){t.detail("新增学员","student_data","student_inc_num")}}},[t._m(2),t._v(" "),e("div",{attrs:{calss:"card-item-right"}},[e("span",[t._v(t._s(t.getNums("student_data","student_inc_num"))+" 人")]),t._v(" "),t.getNums("student_data","student_inc_num")>0?e("i",{staticClass:"icon icon-ios-arrow-right text-primary"}):t._e()])]),t._v(" "),e("div",{staticClass:"card-item",on:{click:function(n){t.detail("咨询客户","student_data","customer_inc_num")}}},[t._m(3),t._v(" "),e("div",{attrs:{calss:"card-item-right"}},[e("span",[t._v(t._s(t.getNums("student_data","customer_inc_num"))+" 人")]),t._v(" "),t.getNums("student_data","customer_inc_num")>0?e("i",{staticClass:"icon icon-ios-arrow-right text-primary"}):t._e()])]),t._v(" "),e("div",{staticClass:"card-item",on:{click:function(n){t.detail("试听人次数","student_data","trial_listen_num")}}},[t._m(4),t._v(" "),e("div",{attrs:{calss:"card-item-right"}},[e("span",[t._v(t._s(t.getNums("student_data","trial_listen_num"))+" 人")]),t._v(" "),t.getNums("student_data","trial_listen_num")>0?e("i",{staticClass:"icon icon-ios-arrow-right text-primary"}):t._e()])]),t._v(" "),e("div",{staticClass:"card-item",on:{click:function(n){t.detail("转化学员","student_data","is_reg_num")}}},[t._m(5),t._v(" "),e("div",{attrs:{calss:"card-item-right"}},[e("span",[t._v(t._s(t.getNums("student_data","is_reg_num"))+" 人")]),t._v(" "),t.getNums("student_data","is_reg_num")>0?e("i",{staticClass:"icon icon-ios-arrow-right text-primary"}):t._e()])])]),t._v(" "),e("div",{staticClass:"card"},[t._m(6),t._v(" "),e("div",{staticClass:"card-item",on:{click:function(n){t.detail("收费人次","order_data","receipt_bill_num")}}},[t._m(7),t._v(" "),e("div",{attrs:{calss:"card-item-right"}},[e("span",[t._v(t._s(t.getNums("order_data","receipt_bill_num"))+" 人")]),t._v(" "),t.getNums("order_data","receipt_bill_num")>0?e("i",{staticClass:"icon icon-ios-arrow-right text-primary"}):t._e()])]),t._v(" "),e("div",{staticClass:"card-item",on:{click:function(n){t.detail("收费金额","order_data","receipt_bill_amount","元")}}},[t._m(8),t._v(" "),e("div",{attrs:{calss:"card-item-right"}},[e("span",[t._v(t._s(t.getNums("order_data","receipt_bill_amount"))+" 元")]),t._v(" "),t.getNums("order_data","receipt_bill_amount")>0?e("i",{staticClass:"icon icon-ios-arrow-right text-primary"}):t._e()])]),t._v(" "),e("div",{staticClass:"card-item",on:{click:function(n){t.detail("退费人次","order_data","refund_num")}}},[t._m(9),t._v(" "),e("div",{attrs:{calss:"card-item-right"}},[e("span",[t._v(t._s(t.getNums("order_data","refund_num"))+" 人")]),t._v(" "),t.getNums("order_data","refund_num")>0?e("i",{staticClass:"icon icon-ios-arrow-right text-primary"}):t._e()])]),t._v(" "),e("div",{staticClass:"card-item",on:{click:function(n){t.detail("退费金额","order_data","refund_amount","元")}}},[t._m(10),t._v(" "),e("div",{attrs:{calss:"card-item-right"}},[e("span",[t._v(t._s(t.getNums("order_data","refund_amount"))+" 元")]),t._v(" "),t.getNums("order_data","refund_amount")>0?e("i",{staticClass:"icon icon-ios-arrow-right text-primary"}):t._e()])])]),t._v(" "),e("div",{staticClass:"card"},[t._m(11),t._v(" "),e("div",{staticClass:"card-item",on:{click:function(n){t.detail("考勤次数","attendance_data","class_attendance_num","次")}}},[t._m(12),t._v(" "),e("div",{attrs:{calss:"card-item-right"}},[e("span",[t._v(t._s(t.getNums("attendance_data","class_attendance_num"))+" 次")]),t._v(" "),t.getNums("attendance_data","class_attendance_num")>0?e("i",{staticClass:"icon icon-ios-arrow-right text-primary"}):t._e()])]),t._v(" "),e("div",{staticClass:"card-item",on:{click:function(n){t.detail("考勤人次数","attendance_data","student_attendance_num","人")}}},[t._m(13),t._v(" "),e("div",{attrs:{calss:"card-item-right"}},[e("span",[t._v(t._s(t.getNums("attendance_data","student_attendance_num"))+" 人")]),t._v(" "),t.getNums("attendance_data","student_attendance_num")>0?e("i",{staticClass:"icon icon-ios-arrow-right text-primary"}):t._e()])]),t._v(" "),e("div",{staticClass:"card-item",on:{click:function(n){t.detail("课消总课时","attendance_data","lesson_consume_hours","个")}}},[t._m(14),t._v(" "),e("div",{attrs:{calss:"card-item-right"}},[e("span",[t._v(t._s(t.getNums("attendance_data","lesson_consume_hours"))+" 个")]),t._v(" "),t.getNums("attendance_data","lesson_consume_hours")>0?e("i",{staticClass:"icon icon-ios-arrow-right text-primary"}):t._e()])]),t._v(" "),e("div",{staticClass:"card-item",on:{click:function(n){t.detail("课消金额","attendance_data","lesson_consume_amount","元")}}},[t._m(15),t._v(" "),e("div",{attrs:{calss:"card-item-right"}},[e("span",[t._v(t._s(t.getNums("attendance_data","lesson_consume_amount"))+" 元")]),t._v(" "),t.getNums("attendance_data","lesson_consume_amount")>0?e("i",{staticClass:"icon icon-ios-arrow-right text-primary"}):t._e()])])])]):t._e(),t._v(" "),e("popup",{staticStyle:{width:"100%",height:"100%"},style:{top:t.headerHeight+"px",height:"calc(100% - "+t.headerHeight+"px)"},attrs:{position:"right"},model:{value:t.popup.show,callback:function(n){t.$set(t.popup,"show",n)},expression:"popup.show"}},[e("div",{staticClass:"x-popup-header",on:{click:t.back}},[e("i",{staticClass:"icon icon-ios-arrow-left"}),t._v("\n\t\t\t"+t._s(t.popup.title)+"明细\n\t\t")]),t._v(" "),e("div",{staticClass:"x-popup-content"},[e("div",{staticClass:"x-popup-content-top"},[e("p",{staticClass:"title"},[t._v(t._s(t.popup.amount))]),t._v(" "),e("p",[t._v("\n\t\t\t\t\t"+t._s(1==t.tab?"本月":"本周")+t._s(t.popup.title)+"（"+t._s(t.popup.unit)+"）\n\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"x-popup-list"},t._l(t.popup.list,function(n,a){return e("div",{key:a,staticClass:"x-cell-item b-b-1"},[e("div",{staticClass:"x-cell"},[e("div",{staticClass:"x-cell-bar",style:{width:(t.barAction?t.getPercent(n):0)+"%"}}),t._v(" "),e("div",{staticClass:"x-cell-content"},[e("p",[e("span",{staticClass:"title"},[t._v(t._s(t._f("branch_name")(n.bid)))]),t._v(" "),e("small",[t._v(t._s(t.getPercent(n))+"%")])]),t._v(" "),e("p",{staticClass:"total"},[t._v(t._s(n[t.popup.field])+" "+t._s(n[t.popup.unit]))])])])])}),0)])])],1)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"banner-title"},[e("span",[t._v("运营周报")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card-header"},[e("span",[t._v("招生数据")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card-item-left"},[e("span",[t._v("新增学员")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card-item-left"},[e("span",[t._v("咨询客户")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card-item-left"},[e("span",[t._v("试听人次数")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card-item-left"},[e("span",[t._v("转化学员")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card-header"},[e("span",[t._v("报名收费")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card-item-left"},[e("span",[t._v("收费人次")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card-item-left"},[e("span",[t._v("收费金额")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card-item-left"},[e("span",[t._v("退费人次")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card-item-left"},[e("span",[t._v("退费金额")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card-header"},[e("span",[t._v("考勤及课消")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card-item-left"},[e("span",[t._v("考勤次数")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card-item-left"},[e("span",[t._v("考勤人次数")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card-item-left"},[e("span",[t._v("课消总课时")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card-item-left"},[e("span",[t._v("课消金额")])])}],o={render:a,staticRenderFns:i};n.a=o}});
//# sourceMappingURL=28.33b108080df949d9887e.js.map