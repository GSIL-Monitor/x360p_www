webpackJsonp([42],{"2FHx":function(t,a,e){"use strict";function i(t){e("Q6/A")}Object.defineProperty(a,"__esModule",{value:!0});var s=e("EesL");e.n(s);for(var n in s)"default"!==n&&function(t){e.d(a,t,function(){return s[t]})}(n);var l=e("3JmI"),c=e.n(l),r=e("mtfa"),o=e("vSla"),d=i,A=o(c.a,r.a,!1,d,"data-v-15a33810",null);a.default=A.exports},"3JmI":function(t,a,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var s=e("8Llf"),n=i(s),l=e("KUj2"),c=i(l),r=e("PHeM"),o=i(r),d=e("+CBI"),A=i(d),f=e("zhFk"),x=i(f);a.default={mixins:[n.default,c.default],components:{Card:o.default,MyRater:x.default,XSwitch:A.default},data:function(){return{mapRel:{0:"-",1:"自己",2:"爸爸",3:"妈妈",4:"其他"},info:{},id:this.$route.params.id,followList:[],deputy:[]}},mounted:function(){this.init_data()},methods:{init_data:function(){var t=this;this.showLoading(),this.$rest(this.data_uri).get().success(function(a){t.info=a.customer,t.deputy=a.deputy,t.getFollowList(),t.hideLoading()})},getFollowList:function(){var t=this,a="customer_follow_up?cu_id="+this.id;this.$rest(a).get().success(function(a){t.followList=a.list})}},computed:{data_uri:function(){return"customers/"+this.id}}}},EesL:function(t,a,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var s=e("8Llf"),n=i(s),l=e("KUj2"),c=i(l),r=e("PHeM"),o=i(r),d=e("+CBI"),A=i(d),f=e("zhFk"),x=i(f);a.default={mixins:[n.default,c.default],components:{Card:o.default,MyRater:x.default,XSwitch:A.default},data:function(){return{mapRel:{0:"-",1:"自己",2:"爸爸",3:"妈妈",4:"其他"},info:{},id:this.$route.params.id,followList:[],deputy:[]}},mounted:function(){this.init_data()},methods:{init_data:function(){var t=this;this.showLoading(),this.$rest(this.data_uri).get().success(function(a){t.info=a.customer,t.deputy=a.deputy,t.getFollowList(),t.hideLoading()})},getFollowList:function(){var t=this,a="customer_follow_up?cu_id="+this.id;this.$rest(a).get().success(function(a){t.followList=a.list})}},computed:{data_uri:function(){return"customers/"+this.id}}}},"Q6/A":function(t,a,e){var i=e("QUxa");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("FIqI")("b2baf150",i,!0,{})},QUxa:function(t,a,e){a=t.exports=e("UTlt")(!0),a.push([t.i,"\n.flex-column[data-v-15a33810] {\n  flex-direction: column;\n  align-items: baseline !important;\n}\n.x-card-title[data-v-15a33810] {\n  padding: 15px 10px;\n  font-size: 15px;\n  color: #323232;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.x-card-title .x-card-title-text[data-v-15a33810] {\n  flex: 1;\n}\n.x-card-cell-item[data-v-15a33810] {\n  padding: 15px 10px 15px 22px;\n  color: #545454;\n  display: flex;\n  align-items: center;\n  position: relative;\n  font-size: 14px;\n}\n.x-card-cell-item .x-card-cell-item-left[data-v-15a33810] {\n  flex: 1;\n  align-items: flex-start;\n}\n.x-card-cell-item .x-card-cell-item-right[data-v-15a33810] {\n  align-items: flex-end;\n}\n.x-card-cell-item[data-v-15a33810]:nth-last-child(1):after {\n  border: none !important;\n}\n.x-card-title[data-v-15a33810]:after,\n.x-card-cell-item[data-v-15a33810]:after {\n  content: '';\n  position: absolute;\n  width: calc(100% - 20px);\n  height: 1px;\n  left: 10px;\n  bottom: 0;\n  border-bottom: 1px solid #EEEEEE;\n}\n.x-card-item[data-v-15a33810] {\n  padding: 10px;\n  display: flex;\n}\n.x-card-item .x-card-item-left[data-v-15a33810] {\n  flex: 1;\n  align-items: flex-start;\n}\n.x-card-item .x-card-item-left .x-item-name[data-v-15a33810] {\n  font-size: 15px;\n  color: #323232;\n}\n.x-card-item .x-card-item-left .x-item-status[data-v-15a33810] {\n  font-size: 12px;\n  margin-top: 10px;\n  color: #999999;\n}\n.x-card-item .x-card-item-right[data-v-15a33810] {\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n  flex-direction: column;\n  color: #999999;\n  font-size: 12px;\n  justify-content: center;\n}\n.x-card-item-icon-tel[data-v-15a33810] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #16B800;\n  color: #fff;\n  text-align: center;\n  line-height: 40px;\n  font-size: 26px;\n}\n.tag[data-v-15a33810] {\n  padding: 0 5px;\n  margin-right: 5px;\n  background: #ABC9ED;\n  color: #FFFFFF;\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 9px;\n  box-sizing: border-box;\n  letter-spacing: 1px;\n  height: 14px;\n  line-height: 14px;\n}\n.tag i.icon[data-v-15a33810] {\n  line-height: 14px;\n}\n","",{version:3,sources:["/Users/payhon/Project/x360p/src/neza_org_mobile/src/views/recruit/detail.vue"],names:[],mappings:";AACA;EACE,uBAAuB;EACvB,iCAAiC;CAClC;AACD;EACE,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,cAAc;EACd,oBAAoB;CACrB;AACD;EACE,QAAQ;CACT;AACD;EACE,6BAA6B;EAC7B,eAAe;EACf,cAAc;EACd,oBAAoB;EACpB,mBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE,QAAQ;EACR,wBAAwB;CACzB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,wBAAwB;CACzB;AACD;;EAEE,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,UAAU;EACV,iCAAiC;CAClC;AACD;EACE,cAAc;EACd,cAAc;CACf;AACD;EACE,QAAQ;EACR,wBAAwB;CACzB;AACD;EACE,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,QAAQ;EACR,cAAc;EACd,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,wBAAwB;CACzB;AACD;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;EACf,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;EACf,uBAAuB;EACvB,oBAAoB;EACpB,aAAa;EACb,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB",file:"detail.vue",sourcesContent:["\n.flex-column[data-v-15a33810] {\n  flex-direction: column;\n  align-items: baseline !important;\n}\n.x-card-title[data-v-15a33810] {\n  padding: 15px 10px;\n  font-size: 15px;\n  color: #323232;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.x-card-title .x-card-title-text[data-v-15a33810] {\n  flex: 1;\n}\n.x-card-cell-item[data-v-15a33810] {\n  padding: 15px 10px 15px 22px;\n  color: #545454;\n  display: flex;\n  align-items: center;\n  position: relative;\n  font-size: 14px;\n}\n.x-card-cell-item .x-card-cell-item-left[data-v-15a33810] {\n  flex: 1;\n  align-items: flex-start;\n}\n.x-card-cell-item .x-card-cell-item-right[data-v-15a33810] {\n  align-items: flex-end;\n}\n.x-card-cell-item[data-v-15a33810]:nth-last-child(1):after {\n  border: none !important;\n}\n.x-card-title[data-v-15a33810]:after,\n.x-card-cell-item[data-v-15a33810]:after {\n  content: '';\n  position: absolute;\n  width: calc(100% - 20px);\n  height: 1px;\n  left: 10px;\n  bottom: 0;\n  border-bottom: 1px solid #EEEEEE;\n}\n.x-card-item[data-v-15a33810] {\n  padding: 10px;\n  display: flex;\n}\n.x-card-item .x-card-item-left[data-v-15a33810] {\n  flex: 1;\n  align-items: flex-start;\n}\n.x-card-item .x-card-item-left .x-item-name[data-v-15a33810] {\n  font-size: 15px;\n  color: #323232;\n}\n.x-card-item .x-card-item-left .x-item-status[data-v-15a33810] {\n  font-size: 12px;\n  margin-top: 10px;\n  color: #999999;\n}\n.x-card-item .x-card-item-right[data-v-15a33810] {\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n  flex-direction: column;\n  color: #999999;\n  font-size: 12px;\n  justify-content: center;\n}\n.x-card-item-icon-tel[data-v-15a33810] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #16B800;\n  color: #fff;\n  text-align: center;\n  line-height: 40px;\n  font-size: 26px;\n}\n.tag[data-v-15a33810] {\n  padding: 0 5px;\n  margin-right: 5px;\n  background: #ABC9ED;\n  color: #FFFFFF;\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 9px;\n  box-sizing: border-box;\n  letter-spacing: 1px;\n  height: 14px;\n  line-height: 14px;\n}\n.tag i.icon[data-v-15a33810] {\n  line-height: 14px;\n}\n"],sourceRoot:""}])},mtfa:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.info?e("div",[e("card",{staticClass:"mg-10 br-5"},[e("div",{staticClass:"x-card-item",attrs:{slot:"content"},slot:"content"},[e("div",{staticClass:"x-card-item-left"},[e("span",{staticClass:"x-item-name"},[t._v(t._s(t.info.name))]),t._v(" "),e("span",{staticClass:"tag"},[e("i",{staticClass:"icon",class:(i={},i["icon-male"]=1==t.info.sex,i["icon-female"]=2==t.info.sex,i["icon-help"]=0==t.info.sex,i)}),t._v("\n\t\t\t\t\t"+t._s(t.getAge(t.info.birth_time))+"\n\t\t\t\t")]),t._v(" "),e("p",{staticClass:"x-item-status"},[t._v(t._s(t.labelDicts(t.info.customer_status_did,"customer_status")||"-"))])]),t._v(" "),e("div",{staticClass:"x-card-item-right"},[e("span",[t._v(t._s(t.labelDicts(t.info.from_did,"from")))]),t._v(" "),e("p",[e("my-rater",{attrs:{value:t.info.intention_level,disabled:"","font-size":12}})],1),t._v(" "),e("p",[t._v("介绍人："+t._s(t.info.referer_student?t.info.referer_student.student_name:"无"))])])])]),t._v(" "),e("card",{staticClass:"mg-10 br-5"},[e("div",{staticClass:"x-card-item",attrs:{slot:"content"},slot:"content"},[e("div",{staticClass:"x-card-item-left"},[e("span",{staticClass:"x-item-name"},[t._v("联系方式")]),t._v(" "),e("p",{staticClass:"x-item-status"},[t._v(t._s(t.info.first_tel))])]),t._v(" "),e("div",{staticClass:"x-card-item-right"},[e("a",{staticClass:"x-card-item-icon-tel x-icon-large",attrs:{href:"tel:"+t.info.first_tel}},[e("i",{staticClass:"icon icon-ios-telephone-outline"})])])])]),t._v(" "),e("card",{staticClass:"mg-10 br-5"},[e("div",{staticClass:"x-card-title",attrs:{slot:"header"},slot:"header"},[t._v("\n\t\t\t第一联系人\n\t\t")]),t._v(" "),e("div",{staticClass:"x-card-content",attrs:{slot:"content"},slot:"content"},[1!=t.info.first_family_rel?[e("div",{staticClass:"x-card-cell-item"},[e("span",{staticClass:"x-card-cell-item-left"},[t._v("亲属姓名")]),t._v(" "),e("span",{staticClass:"x-card-cell-item-right"},[t._v(t._s(t.info.first_family_name||"未填写"))])])]:t._e(),t._v(" "),e("div",{staticClass:"x-card-cell-item"},[e("span",{staticClass:"x-card-cell-item-left"},[t._v("亲属关系")]),t._v(" "),e("a",{staticClass:"x-card-cell-item-right"},[t._v(t._s(t.mapRel[t.info.first_family_rel]||"未设置"))])]),t._v(" "),e("div",{staticClass:"x-card-cell-item"},[e("span",{staticClass:"x-card-cell-item-left"},[t._v("联系电话")]),t._v(" "),e("a",{staticClass:"x-card-cell-item-right text-primary",attrs:{href:"tel:"+t.info.first_tel}},[t._v(t._s(t.info.first_tel))])])],2)]),t._v(" "),t.info.second_family_rel?e("card",{staticClass:"mg-10 br-5"},[e("div",{staticClass:"x-card-title",attrs:{slot:"header"},slot:"header"},[t._v("\n\t\t\t第二联系人\n\t\t")]),t._v(" "),e("div",{staticClass:"x-card-content",attrs:{slot:"content"},slot:"content"},[1!=t.info.second_family_rel?[e("div",{staticClass:"x-card-cell-item"},[e("span",{staticClass:"x-card-cell-item-left"},[t._v("亲属姓名")]),t._v(" "),e("span",{staticClass:"x-card-cell-item-right"},[t._v(t._s(t.info.second_family_name||"未填写"))])])]:t._e(),t._v(" "),e("div",{staticClass:"x-card-cell-item"},[e("span",{staticClass:"x-card-cell-item-left"},[t._v("亲属关系")]),t._v(" "),e("span",{staticClass:"x-card-cell-item-right"},[t._v(t._s(t.mapRel[t.info.second_family_rel]||"未设置"))])]),t._v(" "),e("div",{staticClass:"x-card-cell-item"},[e("span",{staticClass:"x-card-cell-item-left"},[t._v("联系电话")]),t._v(" "),e("a",{staticClass:"x-card-cell-item-right text-primary",attrs:{href:"tel:"+t.info.second_tel}},[t._v(t._s(t.info.second_tel||"未填写"))])])],2)]):t._e(),t._v(" "),e("card",{staticClass:"mg-10 br-5"},[e("div",{staticClass:"x-card-title",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("基本信息")])]),t._v(" "),e("div",{staticClass:"x-card-content",attrs:{slot:"content"},slot:"content"},[e("div",{staticClass:"x-card-cell-item"},[e("span",{staticClass:"x-card-cell-item-left"},[t._v("招生来源")]),t._v(" "),e("span",{staticClass:"x-card-cell-item-right"},[t._v(t._s(t.labelDicts(t.info.from_did,"from")||"-"))])]),t._v(" "),e("div",{staticClass:"x-card-cell-item"},[e("span",{staticClass:"x-card-cell-item-left"},[t._v("公立学校")]),t._v(" "),e("span",{staticClass:"x-card-cell-item-right"},[t._v(t._s(t.info.school_id_text||"未填写"))])]),t._v(" "),e("div",{staticClass:"x-card-cell-item"},[e("span",{staticClass:"x-card-cell-item-left"},[t._v("所在年级")]),t._v(" "),e("span",{staticClass:"x-card-cell-item-right"},[t._v(t._s(t.labelDicts(t.info.school_grade,"grade")||"-"))])]),t._v(" "),e("div",{staticClass:"x-card-cell-item"},[e("span",{staticClass:"x-card-cell-item-left"},[t._v("就读班级")]),t._v(" "),e("span",{staticClass:"x-card-cell-item-right"},[t._v(t._s(t.info.school_class||"未填写"))])]),t._v(" "),e("div",{staticClass:"x-card-cell-item"},[e("span",{staticClass:"x-card-cell-item-left"},[t._v("副责任人")]),t._v(" "),e("div",{staticClass:"x-card-cell-item-right"},[t.deputy.length?t._l(t.deputy,function(a,i){return e("p",{key:i},[t._v("\n\t\t\t\t\t\t\t"+t._s(t._f("ename")(a.eid))+"-"+t._s(t.labelDicts(a.sale_role_did,"sale_role"))+"\n\t\t\t\t\t\t")])}):e("span",[t._v("无")])],2)])])]),t._v(" "),t.followList.length?e("card",{staticClass:"mg-10 br-5",nativeOn:{click:function(a){t.$router.push({path:"/recruit/following/"+t.info.cu_id})}}},[e("div",{staticClass:"x-card-title",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"x-card-title-text"},[t._v("跟进记录")]),t._v(" "),e("i",{staticClass:"icon icon-ios-arrow-right pull-right"})]),t._v(" "),e("div",{attrs:{slot:"content"},slot:"content"},[e("div",{staticClass:"x-card-cell-item"},[e("span",{staticClass:"x-card-cell-item-left"},[t._v("沟通类型")]),t._v(" "),e("span",{staticClass:"x-card-cell-item-right"},[t._v(t._s(t.labelDicts(t.followList[0].followup_did,"followup")))])]),t._v(" "),e("div",{staticClass:"x-card-cell-item"},[e("span",{staticClass:"x-card-cell-item-left"},[t._v("下次跟进日期")]),t._v(" "),e("span",{staticClass:"x-card-cell-item-right"},[0==t.followList[0].next_follow_time?e("span",[t._v("待定")]):t._e(),t._v(" "),e("span",[t._v(t._s(t._f("int_date")(t.followList[0].next_follow_time)))])])]),t._v(" "),e("div",{staticClass:"x-card-cell-item"},[e("span",{staticClass:"x-card-cell-item-left"},[t._v("诺到访日")]),t._v(" "),e("span",{staticClass:"x-card-cell-item-right"},[t._v(t._s(t._f("int_date")(t.followList[0].promise_int_day)))])]),t._v(" "),e("div",{staticClass:"x-card-cell-item"},[e("span",{staticClass:"x-card-cell-item-left"},[t._v("是否到访")]),t._v(" "),e("span",{staticClass:"x-card-cell-item-right"},[e("x-switch",{attrs:{"true-value":1,"false-value":0,readonly:!0,value:t.followList[0].is_visit}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("是")]),t._v(" "),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("否")])])],1)]),t._v(" "),t.followList[0].is_visit?e("div",{staticClass:"x-card-cell-item"},[e("span",{staticClass:"x-card-cell-item-left"},[t._v("实际到访日")]),t._v(" "),e("span",{staticClass:"x-card-cell-item-right"},[t._v(t._s(t._f("int_date")(t.followList[0].visit_int_day)))])]):t._e(),t._v(" "),e("div",{staticClass:"x-card-cell-item flex-column"},[e("span",{staticClass:"x-card-cell-item-left"},[t._v("沟通内容")]),t._v(" "),e("span",{staticClass:"x-card-cell-item-right"},[t._v(t._s(t.followList[0].content))])])])]):t._e()],1):t._e();var i},s=[],n={render:i,staticRenderFns:s};a.a=n}});
//# sourceMappingURL=42.3d9d658584b1e88d39bd.js.map