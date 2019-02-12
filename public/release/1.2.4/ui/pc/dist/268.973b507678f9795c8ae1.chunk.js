webpackJsonp([268],{339:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(701),a=s(758),l=s(11),c=l(i.a,a.a,!1,null,null,null);c.options.__file="src/views/components/SelectBranchModal.vue",e.default=c.exports},701:function(t,e,s){"use strict";var i=s(54),a=s.n(i),l=s(207),c=s(55),n=s(208),h=(s(24),s(1));e.a={name:"BranchList",mixins:[l.a,c.a,n.a],props:{value:{type:Boolean,default:""},width:{type:String,default:""},title:{type:String,default:"选择校区"},multiple:{type:Boolean,default:!1},selected:{type:[Array,Number],default:[]}},data:function(){return{params:{search_field:"branch_name",search_value:"",order_field:"",order_sort:"",last_search_value:""},modalShow:!1,pageIndex:1,pageSize:10,totalCount:0,data:[],selIds:[],is_data_init:!1,checkAll:!1}},computed:{total:function(){return this.totalCount},classes:function(){var t;return["select-list",(t={},a()(t,"select-list-multiple",this.multiple),a()(t,"select-list-single",!this.multiple),t)]},labelText:function(){if(this.selIds.length>0){var t=this.$filter("branch_name")(this.selIds[0]);return t||""}},selectedTotal:function(){return this.selIds.length},selectedList:function(){var t=this,e=[];return this.selIds.forEach(function(s){s>0&&e.push(t.getObjById(s))}),e}},mounted:function(){this.init_data(),this.refreshSelId(this.selected)},methods:{pagesize:function(t){this.pageSize=t,this.init_data()},pagenation:function(t){this.pageIndex=t,this.init_data()},search:function(){if(/^\s*$/.test(this.params.search_value)&&""==this.params.last_search_value)return void this.focus("searchkey");this.pagenation(1)},resetSearch:function(){this.params.search_value="",this.init_data()},init_data:function(){var t=this,e=[],s=this.$store.state.gvars.branchs,i=void 0,a=void 0,l=void 0;this.is_admin||(s=s.filter(function(e){return t.bids_user.indexOf(e.bid)>-1})),/^\s*$/.test(this.params.search_value)||(s=s.filter(function(e){return-1!==e[t.params.search_field].indexOf(t.params.search_value)})),this.totalCount=s.length,i=(this.pageIndex-1)*this.pageSize,a=i+this.pageSize,l=0,s.forEach(function(t){l>=i&&l<a&&e.push(h.b.copy(t)),l++}),this.data=e,this.refreshData(e)},getObjById:function(t){var e=this.$store.state.gvars.branchs.find(function(e){return e.bid==t});return e?h.b.copy(e):null},ok:function(){if(!this.selectedTotal)return void this.$Message.error("没有选中任何校区");if(this.multiple)this.$emit("on-select",this.selectedList);else{var t=this.$store.getters.getMapObject(this.selIds[0],"branch");this.$emit("on-select",t)}this.modalShow=!1,this.$emit("input",!1)},cancel:function(){var t=this;this.modalShow=!1,this.multiple?(this.selIds=[],this.selected.forEach(function(e){t.selIds.push(e)}),this.refreshData(this.data)):(this.selIds=[],this.selIds.push(this.selected),this.refreshData(this.data)),this.$emit("input",!1)},closeModal:function(){this.cancel()},clearSelectedId:function(){this.selIds.splice(0,this.selIds.length),this.refreshData(this.data)},cancelSelectedId:function(t){var e=this.selIds.indexOf(t.bid);-1!==e&&(this.selIds.splice(e,1),this.refreshData(this.data))},checkSelectAll:function(t,e,s){return-1!==this.selIds.indexOf(t.bid)},refreshData:function(t){var e=this;t.forEach(function(t){-1!==e.selIds.indexOf(t.bid)?t.$selected=!0:t.$selected=!1}),this.multiple&&(this.checkAll=t.every(this.checkSelectAll))},addSelectedId:function(t){-1===this.selIds.indexOf(t)&&(this.selIds.push(t),this.refreshData(this.data))},removeSelectedId:function(t){var e=this.selIds.indexOf(t);-1!==e&&(this.selIds.splice(e,1),this.refreshData(this.data))},replaceSelectedId:function(t){0==this.selIds.length?this.selIds.push(t):this.selIds.splice(0,1,t)},toggleSelected:function(t){this.multiple?t.$selected?this.removeSelectedId(t.bid):this.addSelectedId(t.bid):t.$selected?this.ok():(this.data.forEach(function(t){t.$selected=!1}),t.$selected=!0,this.replaceSelectedId(t.bid))},init_data_cache:function(){this.is_data_init||(this.init_data(),this.is_data_init=!0)},handleCheckAll:function(){var t=this;this.data.forEach(function(e){var s=t.selIds.indexOf(e.bid);!1===t.checkAll?-1==s&&(t.selIds.push(e.bid),e.$selected=!0):s>-1&&(t.selIds.splice(s,1),e.$selected=!1)})},refreshSelId:function(t){var e=this;null!==t&&0!==t.length&&""!==t&&0!==t||(this.selIds=[],this.refreshData(this.data)),this.multiple?t.forEach(function(t){-1==e.selIds.indexOf(t)&&e.selIds.push(t)}):0==this.selIds.length?this.selIds.push(t):this.selIds.splice(0,1,t)}},watch:{value:function(t){this.modalShow=t,this.modalShow?this.init_data_cache():""!=this.params.search_value&&(this.params.search_value="",this.is_data_init=!1)},selected:function(t){this.refreshSelId(t)}}}},758:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Modal",{directives:[{name:"drag-modal",rawName:"v-drag-modal"}],attrs:{"mask-closable":!0,width:t.width,title:t.title},on:{"on-cancel":t.closeModal},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[s("div",{class:t.classes},[s("div",{staticClass:"list-main"},[s("div",{staticClass:"list-condition"},[s("Row",[s("Col",{attrs:{span:"8"}},[s("Input",{directives:[{name:"focusme",rawName:"v-focusme",value:"searchkey",expression:"'searchkey'"}],attrs:{placeholder:"校区名称",size:"small"},model:{value:t.params.search_value,callback:function(e){t.$set(t.params,"search_value",e)},expression:"params.search_value"}})],1),t._v(" "),s("Col",{attrs:{span:"10"}},[s("ButtonGroup",[s("Button",{attrs:{type:"primary",icon:"ios-search",size:"small"},on:{click:t.search}},[t._v("查询")])],1),t._v(" "),s("Button",{attrs:{type:"primary",icon:"refresh",size:"small"},on:{click:t.resetSearch}},[t._v("重置")])],1)],1)],1),t._v(" "),s("div",{staticClass:"list-body"},[s("div",{staticClass:"list-body-wrap"},[s("table",{staticClass:"table-list"},[s("thead",[s("tr",[t.multiple?s("th",{attrs:{width:"50"}},[s("div",{staticClass:"ivu-table-cell"},[s("Checkbox",{nativeOn:{click:function(e){t.handleCheckAll(e)}},model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}})],1)]):t._e(),t._v(" "),s("th",[s("div",{staticClass:"ivu-table-cell"},[t._v("校区")])]),t._v(" "),s("th",[s("div",{staticClass:"ivu-table-cell"},[t._v("简称")])]),t._v(" "),s("th",[s("div",{staticClass:"ivu-table-cell"},[t._v("电话")])]),t._v(" "),s("th",[s("div",{staticClass:"ivu-table-cell"},[t._v("地址")])])])]),t._v(" "),s("tbody",[t._l(t.data,function(e){return s("tr",{class:{"table-info":e.$selected},on:{click:function(s){t.toggleSelected(e)}}},[t.multiple?s("td",[s("div",{staticClass:"ivu-table-cell"},[s("Checkbox",{model:{value:e.$selected,callback:function(s){t.$set(e,"$selected",s)},expression:"item.$selected"}})],1)]):t._e(),t._v(" "),e?s("td",[s("div",{staticClass:"ivu-table-cell"},[t._v(t._s(e.branch_name))])]):t._e(),t._v(" "),s("td",[s("div",{staticClass:"ivu-table-cell"},[t._v(t._s(e.short_name))])]),t._v(" "),s("td",[s("div",{staticClass:"ivu-table-cell"},[t._v(t._s(e.branch_tel))])]),t._v(" "),s("td",[s("div",{staticClass:"ivu-table-cell"},[t._v(t._s(e.address))])])])}),t._v(" "),0==t.data.length?s("tr",[s("td",{staticStyle:{"text-align":"center"},attrs:{colspan:"5"}},[s("p",{staticClass:"empty"},[t._v("没有找到校区")])])]):t._e()],2)])]),t._v(" "),s("div",{staticClass:"list-page clearfix"},[s("Page",{staticClass:"pull-right",attrs:{size:"small",total:t.total,"show-total":!0,current:t.pageIndex,"show-sizer":!0,"page-size":t.pageSize},on:{"on-change":t.pagenation,"on-page-size-change":t.pagesize}})],1)])]),t._v(" "),this.multiple?s("div",{staticClass:"multi-selected"},[s("Card",[s("div",{attrs:{slot:"title"},slot:"title"},[s("span",[t._v("已选择："),s("span",{staticClass:"badge"},[t._v(t._s(t.selectedTotal))])]),t._v(" "),s("Button",{staticClass:"pull-right",attrs:{type:"ghost",shape:"circle",size:"small",icon:"trash-a",title:"清空"},on:{click:t.clearSelectedId}})],1),t._v(" "),s("ul",{staticClass:"multi-selected-list"},t._l(t.selectedList,function(e){return s("li",[e?s("span",[t._v(t._s(e.branch_name))]):t._e(),t._v(" "),s("Button",{staticClass:"pull-right",attrs:{type:"ghost",shape:"circle",size:"small",icon:"trash-a",title:"移除"},on:{click:function(s){t.cancelSelectedId(e)}}})],1)}))])],1):t._e()]),t._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"},[t.multiple?t._e():s("span",{staticClass:"footer-selected pull-left"},[s("i",[t._v("已选择:")]),t._v(t._s(t.labelText))]),t._v(" "),s("Button",{attrs:{type:"default"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),s("Button",{attrs:{type:"primary"},on:{click:t.ok}},[t._v("确定")])],1)])},a=[];i._withStripped=!0;var l={render:i,staticRenderFns:a};e.a=l}});