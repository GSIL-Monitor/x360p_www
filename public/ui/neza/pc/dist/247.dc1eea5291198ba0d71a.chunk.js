webpackJsonp([247],{340:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(644),l=s(666),a=s(11),n=a(i.a,l.a,!1,null,null,null);n.options.__file="src/views/components/SelectLessonModal.vue",t.default=n.exports},635:function(e,t,s){"use strict";var i=s(1);t.a={data:function(){return{data:[],pageIndex:1,pageSize:10,is_data_init:!1,modalShow:!1,selIds:[],checkAll:!1,params:{search_field:"",search_value:"",order_field:"",order_sort:"",last_search_value:""},textField:"",idField:"",gvarName:"",total:0}},computed:{selectedTotal:function(){return 0!=this.selIds[0]?this.selIds.length:0},selectedList:function(){var e=this,t=[];return this.selIds.forEach(function(s){s>0&&t.push(e.getObjById(s))}),t},labelText:function(){return this.selIds.length>0&&0!=this.selIds[0]?this.$filter(this.textField)(this.selIds[0]):""}},methods:{pagesize:function(e){this.pageSize=e,this.init_data()},pagenation:function(e){this.pageIndex=e,this.init_data()},search:function(){this.pagenation(1)},resetSearch:function(){this.params.search_value="",this.init_data()},data_filter:function(e){return e},init_data:function(){var e=this,t=[],s=[],l=void 0,a=void 0,n=void 0;s=/^\s*$/.test(this.params.search_value)?this.$store.state.gvars[this.gvarName]:this.$store.state.gvars[this.gvarName].filter(function(t){return-1!==t[e.params.search_field].indexOf(e.params.search_value)}),i.a.isEmpty(this.condition)||this.condition.bid&&(s=s.filter(function(t){return 0==t.bids.length||-1!==t.bids.indexOf(e.condition.bid)})),s=this.data_filter(s),this.total=s.length,l=(this.pageIndex-1)*this.pageSize,a=l+this.pageSize,n=0,s.forEach(function(e){n>=l&&n<a&&t.push(i.b.copy(e)),n++}),this.data=t,this.refreshData(t)},getObjById:function(e){var t=this,s=this.$store.state.gvars[this.gvarName].find(function(s){return s[t.idField]==e});return s?i.b.copy(s):null},clearSelectedId:function(){this.selIds.splice(0,this.selIds.length),this.refreshData(this.data)},cancelSelectedId:function(e){var t=this.selIds.indexOf(e[this.idField]);-1!==t&&(this.selIds.splice(t,1),this.refreshData(this.data))},deal_data:function(e){return e.list.length>0?(this.$store.commit("buildIdTextMap",{list:e.list,name:"",ifield:"",tfield:""}),this.refreshData(e.list)):this.multiple&&this.checkAll&&(this.checkAll=!1),e.list},checkSelectAll:function(e,t,s){return-1!==this.selIds.indexOf(e[this.idField])},refreshData:function(e){var t=this;e.forEach(function(e){-1!==t.selIds.indexOf(e[t.idField])?e.$selected=!0:e.$selected=!1}),this.multiple&&(this.checkAll=e.every(this.checkSelectAll))},addSelectedId:function(e){-1===this.selIds.indexOf(e)&&(this.selIds.push(e),this.refreshData(this.data))},removeSelectedId:function(e){var t=this.selIds.indexOf(e);-1!==t&&(this.selIds.splice(t,1),this.refreshData(this.data))},replaceSelectedId:function(e){0==this.selIds.length?this.selIds.push(e):this.selIds.splice(0,1,e)},toggleSelected:function(e){this.multiple?e.$selected?this.removeSelectedId(e[this.idField]):this.addSelectedId(e[this.idField]):e.$selected?this.ok():(this.data.forEach(function(e){e.$selected=!1}),e.$selected=!0,this.replaceSelectedId(e[this.idField]))},init_data_cache:function(){this.is_data_init||(this.init_data(),this.is_data_init=!0)},handleCheckAll:function(){var e=this;this.data.forEach(function(t){var s=e.selIds.indexOf(t[e.idField]);!1===e.checkAll?-1==s&&(e.selIds.push(t[e.idField]),t.$selected=!0):s>-1&&(e.selIds.splice(s,1),t.$selected=!1)})},refreshSelId:function(e){var t=this;null!==e&&0!==e.length&&""!==e&&0!==e||(this.selIds=[],this.refreshData(this.data)),this.multiple?e.forEach(function(e){-1==t.selIds.indexOf(e)&&t.selIds.push(e)}):0==this.selIds.length?this.selIds.push(e):this.selIds.splice(0,1,e)},cancel:function(){var e=this;this.modalShow=!1,this.multiple?(this.selIds=[],this.selected.forEach(function(t){e.selIds.push(t)}),this.refreshData(this.data)):(this.selIds=[],this.selIds.push(this.selected),this.refreshData(this.data)),this.$emit("input",!1)},closeModal:function(){this.cancel()}},watch:{value:function(e){this.modalShow=e,this.modalShow?this.init_data_cache():""!=this.params.search_value&&(this.params.search_value="",this.is_data_init=!1)},selected:function(e){var t=this;null!==e&&0!==e.length&&""!==e&&0!==e||(this.selIds=[],this.refreshData(this.data)),this.multiple?e.forEach(function(e){-1==t.selIds.indexOf(e)&&t.selIds.push(e)}):0==this.selIds.length?this.selIds.push(e):this.selIds.splice(0,1,e)},"$store.state.branch.id":{handler:function(e,t){this.pageIndex=1,this.pageSize=10,this.init_data()}}}}},644:function(e,t,s){"use strict";var i=s(54),l=s.n(i),a=s(1),n=s(209),c=s(210),d=s(635),o=s(55);t.a={name:"LessonList",mixins:[n.a,o.a,c.a,d.a],props:{value:{type:Boolean,default:!1},width:{type:String,default:"640"},title:{type:String,default:"选择课程"},condition:{type:Object,default:function(){return{lesson_type:[]}}},allowType:{type:Array,default:function(){return[0,1,2]}},multiple:{type:Boolean,default:!1},selected:{type:[Array,Number,String],default:function(){return[]}},isDemoExtra:{type:Boolean,default:!1}},data:function(){return{params:{search_field:"lesson_name",search_value:"",order_field:"",order_sort:"",last_search_value:""},textField:"lesson_name",idField:"lid",gvarName:"lessons",is_demo:this.isDemoExtra}},watch:{isDemoExtra:function(e){this.is_demo=e}},computed:{classes:function(){var e;return["select-list",(e={},l()(e,"select-list-multiple",this.multiple),l()(e,"select-list-single",!this.multiple),e)]}},mounted:function(){this.init_data(),this.refreshSelId(this.selected)},methods:{ok:function(){if(!this.selectedTotal)return void this.$Message.error("没有选中任何课程");if(this.multiple)this.$emit("on-select",this.selectedList);else{var e=this.getObjById(this.selIds[0]);this.$emit("on-select",e)}this.modalShow=!1,this.$emit("input",!1)},data_filter:function(e){var t=this,s=[],i=this.is_demo?1:0;return s=e.filter(function(e){return 0==e.bids.length||-1!==e.bids.indexOf(t.bid$)}),this.condition.hasOwnProperty("lesson_type")&&(s=s.filter(function(e){return t.condition.lesson_type.indexOf(e.lesson_type)>-1})),this.condition.hasOwnProperty("product_level_did")&&(s=s.filter(function(e){return t.condition.product_level_did==e.product_level_did})),s=s.filter(function(e){return i===e.is_demo&&1==e.status})},changeLessonType:function(){this.init_data()},change:function(e){var t=["期","次","课时","月"],s=e.is_term?0:e.price_type,i=t[s],l=a.b.sprintf("按%s收费,%s元/%s",i,e.sale_price,i),n=[],c=e.unit_price;if(n.push("<p>"+l+"</p>"),e.is_term){i=t[e.price_type],c=parseFloat(e.sale_price/e.lesson_nums).toFixed(2);var d=a.b.sprintf("共%s%s,单价:%s元/%s",e.lesson_nums,i,c,i);n.push("<p>"+d+"</p>")}return n.join("")}}}},666:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Modal",{directives:[{name:"drag-modal",rawName:"v-drag-modal"}],attrs:{"mask-closable":!0,width:e.width,title:e.title},on:{"on-cancel":e.closeModal},model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[s("div",{class:e.classes},[s("div",{staticClass:"list-main"},[s("div",{staticClass:"list-condition"},[s("Row",[s("Col",{attrs:{span:"8"}},[s("Input",{directives:[{name:"focusme",rawName:"v-focusme",value:"searchkey",expression:"'searchkey'"}],attrs:{size:"small",placeholder:"课程名称"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.search(t):null}},model:{value:e.params.search_value,callback:function(t){e.$set(e.params,"search_value",t)},expression:"params.search_value"}})],1),e._v(" "),s("Col",{attrs:{span:"16"}},[s("ButtonGroup",[s("Button",{attrs:{type:"primary",icon:"ios-search",size:"small"},on:{click:e.search}},[e._v("查询")])],1),e._v(" "),s("Button",{attrs:{type:"primary",icon:"refresh",size:"small"},on:{click:e.resetSearch}},[e._v("重置")]),e._v(" "),s("CheckboxGroup",{staticClass:"ml-3",staticStyle:{display:"inline-block"},on:{"on-change":e.changeLessonType},model:{value:e.condition.lesson_type,callback:function(t){e.$set(e.condition,"lesson_type",t)},expression:"condition.lesson_type"}},[-1!==e.allowType.indexOf(0)?s("Checkbox",{attrs:{disabled:1==e.allowType.length,label:0}},[e._v("班课")]):e._e(),e._v(" "),-1!==e.allowType.indexOf(1)?s("Checkbox",{attrs:{disabled:1==e.allowType.length,label:1}},[e._v("一对一")]):e._e(),e._v(" "),-1!==e.allowType.indexOf(2)?s("Checkbox",{attrs:{disabled:1==e.allowType.length,label:2}},[e._v("一对多")]):e._e()],1),e._v(" "),s("span",[e._v("|")]),e._v(" "),s("Checkbox",{staticClass:"ml-2",attrs:{disabled:e.isDemoExtra},model:{value:e.is_demo,callback:function(t){e.is_demo=t},expression:"is_demo"}},[e._v("体验课")])],1)],1)],1),e._v(" "),s("div",{staticClass:"list-body"},[s("div",{directives:[{name:"loading",rawName:"v-loading.like",value:"lessons",expression:"'lessons'",modifiers:{like:!0}}],staticClass:"list-body-wrap"},[s("table",{staticClass:"modal-table"},[s("thead",[s("tr",[e.multiple?s("th",{attrs:{width:"50"}},[s("div",{staticClass:"ivu-table-cell"},[s("Checkbox",{nativeOn:{click:function(t){return e.handleCheckAll(t)}},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}})],1)]):e._e(),e._v(" "),s("th",[s("div",{staticClass:"ivu-table-cell"},[e._v("课程")])]),e._v(" "),s("th",[s("div",{staticClass:"ivu-table-cell"},[e._v("授课")])]),e._v(" "),s("th",[s("div",{staticClass:"ivu-table-cell"},[e._v("收费")])]),e._v(" "),s("th",[s("div",{staticClass:"ivu-table-cell"},[e._v("等级")])])])]),e._v(" "),s("tbody",[e._l(e.data,function(t){return s("tr",{class:{"table-info":t.$selected},on:{click:function(s){e.toggleSelected(t)}}},[e.multiple?s("td",[s("div",{staticClass:"ivu-table-cell"},[s("Checkbox",{model:{value:t.$selected,callback:function(s){e.$set(t,"$selected",s)},expression:"item.$selected"}})],1)]):e._e(),e._v(" "),s("td",[s("div",{staticClass:"ivu-table-cell"},[e._v(e._s(t.lesson_name))])]),e._v(" "),s("td",[s("div",{staticClass:"ivu-table-cell"},[s("p",[e._v(e._s(e._f("lesson_type")(t.lesson_type)))]),e._v(" "),3!==t.price_type?[s("p",[e._v("单次课时长:"+e._s(t.unit_lesson_minutes)+"分钟")]),e._v(" "),s("p",[e._v("每次课消耗:"+e._s(t.unit_lesson_hours)+"课时")])]:e._e()],2)]),e._v(" "),s("td",[s("div",{staticClass:"ivu-table-cell",domProps:{innerHTML:e._s(e.change(t))}})]),e._v(" "),s("td",[s("div",{staticClass:"ivu-table-cell"},[e._v(e._s(e._f("dict_title")(t.product_level_did,"product_level")))])])])}),e._v(" "),0==e.data.length?s("tr",[s("td",{staticStyle:{"text-align":"center"},attrs:{colspan:"5"}},[s("p",{staticClass:"empty"},[e._v("没有合适的课程")])])]):e._e()],2)])]),e._v(" "),s("div",{staticClass:"list-page clearfix"},[s("Page",{staticClass:"pull-right",attrs:{size:"small",total:e.total,"show-total":!0,current:e.pageIndex,"show-sizer":!0,"page-size":e.pageSize},on:{"on-change":e.pagenation,"on-page-size-change":e.pagesize}})],1)])]),e._v(" "),this.multiple?s("div",{staticClass:"multi-selected"},[s("Card",[s("div",{staticStyle:{display:"flex","align-items":"center"},attrs:{slot:"title"},slot:"title"},[s("span",{staticStyle:{flex:"0 0 190px"}},[e._v("已选择:"),s("span",{staticClass:"badge"},[e._v(e._s(e.selectedTotal))])]),e._v(" "),s("Button",{staticClass:"pull-right",attrs:{type:"ghost",shape:"circle",size:"small",icon:"trash-a",title:"清空"},on:{click:e.clearSelectedId}})],1),e._v(" "),s("ul",{staticClass:"multi-selected-list"},e._l(e.selectedList,function(t){return s("li",{staticStyle:{display:"flex","align-items":"center"}},[s("span",{staticStyle:{flex:"0 0 190px"}},[e._v(e._s(t.lesson_name))]),e._v(" "),s("Button",{staticClass:"pull-right",attrs:{type:"ghost",shape:"circle",size:"small",icon:"trash-a",title:"移除"},on:{click:function(s){e.cancelSelectedId(t)}}})],1)}))])],1):e._e()]),e._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"},[e.multiple?e._e():s("span",{staticClass:"footer-selected pull-left"},[s("i",[e._v("已选择:")]),e._v(e._s(e.labelText))]),e._v(" "),s("Button",{attrs:{type:"default"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),s("Button",{attrs:{type:"primary"},on:{click:e.ok}},[e._v("确定")])],1)])},l=[];i._withStripped=!0;var a={render:i,staticRenderFns:l};t.a=a}});