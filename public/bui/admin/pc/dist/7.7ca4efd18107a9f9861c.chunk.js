webpackJsonp([7],{314:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(449),a=i(575),n=i(16),o=n(s.a,a.a,!1,null,null,null);o.options.__file="src/views/crm/following.vue",e.default=o.exports},331:function(t,e,i){"use strict";e.a={name:"filterColumn",props:{keys:{type:Object,default:function(){return{}}}}}},332:function(t,e,i){"use strict";function s(t,e){var i=[];for(var s in this.operation_keys){var a=this.operation_keys[s],n=[],o=void 0,l=!0;a.per&&n.push({name:"per",value:a.per,expression:"",arg:"display",modifiers:{}}),a.condition&&(r.b.isString(a.condition)?o=new Function("row","params","return "+a.condition):r.b.isFunction(condition)&&(o=condition),r.b.isFunction(o)&&(o(e.row,e)||(l=!1))),r.b.isFunction(this.operation_func[s])&&!1!==a.show&&l&&i.push(t("Dropdown-item",{nativeOn:{click:this.operation_func[s].bind(this,e)},directives:n},[t("Icon",{props:{type:a.type}})," ",a.title]))}return t("div",[t("Dropdown",{props:{placement:"bottom-start",trigger:"click"}},[t("Button",{props:{type:"primary",size:"small"}},["操作"," ",t("Icon",{props:{type:"arrow-down-b"}})]),t("Dropdown-menu",{slot:"list"},i)])])}var a=i(49),n=i.n(a),o=i(13),l=i.n(o),r=(i(21),i(201),i(5)),c=i(335),d={int_day:function(t,e){return this.$filter("int_date")(e.row.int_day)}};e.a={components:{FilterColumn:c.a},data:function(){return{imgView:!1,bigImage:"",loading:!1,rest_api:"",searchExpand:!1,params:{search_field:"name",search_value:"",order_field:"",order_sort:"",last_search_value:"",bid:""},data:[],modal:{title:"",action:"add",show:!1},total:0,pageIndex:1,pageSize:10,init_page_size:0,bigPageSizeOption:[10,20,40,60,80,100],showCheckbox:!1,showIndex:!0,column_keys:{},column_render:{},operation_keys:{},operation_func:{},column_operation_text:"操作"}},methods:{sortChange:function(t){this.params.order_field=t.key,this.params.order_sort=t.order,this.init_data()},pagenation:function(t){this.pageIndex=t,this.init_data()},pagesize:function(t){if(this.pageSize=t,0==this.init_page_size)return void(this.init_page_size=1);this.init_data()},toggleSearch:function(){this.searchExpand=!this.searchExpand},search:function(){this.pagenation(1)},resetSearch:function(){this.params.search_value="",this.init_data()},init_data:function(){var t=this;if(this.loading)return!1;if(""!=this.rest_api){var e={};e.page=this.pageIndex,e.pagesize=this.pageSize,""!=this.params.search_value?(e.search_field=this.params.search_field,e.search_value=this.params.search_value,this.params.last_search_value=this.params.search_value):this.params.last_search_value="",""!=this.params.order_field&&(e.order_field=this.params.order_field,e.order_sort=this.params.order_sort),this.hook_get_param(e);for(var i in e)null===e[i]&&delete e[i];var s=this.rest_api;-1!==this.rest_api.indexOf("/:")&&(s=this.replace_rest_api(this.rest_api,e)),this.loading=!0,this.$rest(s).get(e).success(function(i){t.params=r.a.copy(e),t.data=t.deal_data(i),t.total=i.total,t.pageSize=parseInt(i.pagesize),t.loading=!1}).error(function(e){t.loading=!1})}},replace_rest_api:function(t,e){if(t.match(/:([^\/]+)\//)){var i=RegExp.$1;void 0!==e[i]&&(t=t.replace(":"+i,e[i]))}return t},hook_get_param:function(t){},deal_data:function(t){return t.list},check:function(){var t=this;return new l.a(function(e,i){t.$refs["form_"+t.datakey].validate(function(t){t?e():i()})})},add:function(){this.modal.action="add",this.modal.title="添加"+this.res_name,this.modal.show=!0,this[this.datakey][this.pk]=null},edit:function(t){this.rest_id=t[this.pk],n()(this[this.datakey],t),this.modal.action="edit",this.modal.title="编辑"+this.res_name,this.modal.show=!0},save:function(){var t=this;return new l.a(function(e,i){var s=t.rest_api,a=t[t.datakey];t.check().then(function(){var n="add"==t.modal.action?"post":"put",o=(t.modal.action,t.$rest(s));"add"!=t.modal.action&&o.add_url_param(t.rest_id),o[n](a).success(function(i){t.close(),t.init_data(),e(i)}).error(function(e){t.$Message.error(e.body.message),i(e)})})})},close:function(){this.modal.show=!1},delete:function(t){var e=this;return new l.a(function(i,s){e.$rest(e.rest_api).delete(t[e.pk]).success(function(t,s){e.init_data(),i(t)}).error(function(t,i){e.$Message.error(t.body.message),s(t)})})},do:function(t,e,i){var s=this;return new l.a(function(a,n){s.$rest(s.rest_api).add_url_param(e[s.pk],"do"+t).post(i).success(function(t){s.init_data(),a(t)}).error(function(t){s.$Message.error(t.body.message),n(t)})})},confirm:function(t){var e=this;return new l.a(function(i,s){e.$Modal.confirm({content:t||"您确定要进行删除操作吗?",onOk:function(){i()},onCancel:function(){s()}})})},fixLeft:function(){return this.data.length>0&&"left"},fixRight:function(){return this.data.length>0&&"right"},exportCSV:function(t,e){this.$refs[e].exportCsv({filename:t})},view_img:function(t){this.imgView=!0,this.bigImage=t}},computed:{toggleSearchIcon:function(){return this.searchExpand?"chevron-up":"chevron-down"},export_params:function(){var t={};t.page=this.pageIndex,t.pagesize=this.pageSize,""!=this.params.search_value&&(t[this.params.search_field]=this.params.search_value),this.hook_get_param(t);for(var e in t)null===t[e]&&delete t[e];return t},columns_head:function(){var t=[];return this.showCheckbox&&t.push({type:"selection",width:60,align:"center"}),this.showIndex&&t.push({type:"index",width:60,align:"center"}),t},columns:function(){var t=[],e={},i=this.column_render;n()(t,this.columns_head);for(var a in this.column_keys){var o=this.column_keys[a];if(void 0===o.show&&(o.show=!0),void 0===o.disabled&&(o.disabled=!1),o.show){var l=n()({key:a},o);i[a]?l.render=i[a].bind(this):d[a]&&(l.render=d[a].bind(this)),t.push(l)}}if(r.b.isEmpty(this.operation_btn)||(e.key="operation",e.title=this.column_operation_text,e.width=80,e.render=this.operation_btn.operation.bind(this),t.push(e)),r.b.isEmpty(this.operation_keys)||(e.key="operation",e.title=this.column_operation_text,e.width=80,e.render=s.bind(this),t.unshift(e)),!r.b.isEmpty(this.expand_render)){var c={};c.type="expand",c.width=50,c.render=this.expand_render.expand.bind(this),t.unshift(c)}return t},upload_header:function(){return{"x-token":this.$store.state.user.token,"x-file-key":"file"}},upload_post:function(){return{mod:"attachment_file"}}},watch:{}}},333:function(t,e,i){"use strict";e.__esModule=!0;var s=i(339),a=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default=function(t,e,i){return e in t?(0,a.default)(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}},334:function(t,e){},335:function(t,e,i){"use strict";function s(t){o||i(334)}var a=i(331),n=i(336),o=!1,l=i(16),r=s,c=l(a.a,n.a,!1,r,null,null);c.options.__file="src/views/components/FilterColumn.vue",e.a=c.exports},336:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"filter-column"},[i("Dropdown",{attrs:{placement:"bottom-end"}},[i("Button",{attrs:{type:"primary"}},[t._v("\r\n    \t\t选择列\r\n            "),i("Icon",{attrs:{type:"funnel"}})],1),t._v(" "),i("Dropdown-menu",{attrs:{slot:"list"},slot:"list"},t._l(t.keys,function(e){return i("Dropdown-item",[i("Checkbox",{nativeOn:{click:function(t){t.stopPropagation(),e.show=e.show}},model:{value:e.show,callback:function(i){t.$set(e,"show",i)},expression:"item.show"}},[t._v(t._s(e.title))])],1)}))],1)],1)},a=[];s._withStripped=!0;var n={render:s,staticRenderFns:a};e.a=n},337:function(t,e,i){"use strict";var s=i(198),a=i(5);e.a={mixins:[s.a],name:"DateRangePicker",props:{value:{type:Array},label:{type:String},size:{type:String}},methods:{dateChange:function(t){var e=this;this.date_arr=t,this.$emit("input",t),this.$nextTick(function(){e.dispatch("FormItem","on-form-change",t)})},ok:function(){this.$emit("on-change",this.date_arr)},clear:function(){this.date_arr[0]="",this.date_arr[1]="",this.$emit("on-change",this.date_arr)}},computed:{placeholder:function(){return this.label||"请选择日期"}},data:function(){return{date_arr:[],date_option:{shortcuts:[{text:"今天",value:function(){return a.a.today_range()}},{text:"本周",value:function(){return a.a.week_range()}},{text:"本月",value:function(){return a.a.month_range()}},{text:"最近一周",value:function(){return a.a.recent_week_range(1)}},{text:"最近一个月",value:function(){return a.a.recent_month_range(1)}},{text:"最近三个月",value:function(){return a.a.recent_month_range(3)}}]}}}}},338:function(t,e,i){"use strict";function s(t,e){for(var i=0;i<e.length;i++)if(t===e[i])return!0;return!1}function a(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s=t.$children;return s.length&&s.forEach(function(t){var s=t.$options.name,n=t.$children;if(s===e&&i.push(t),n.length){var o=a(t,e,i);o&&i.concat(o)}}),i}e.a=s,i.d(e,"b",function(){return a});window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver},339:function(t,e,i){t.exports={default:i(340),__esModule:!0}},340:function(t,e,i){i(341);var s=i(1).Object;t.exports=function(t,e,i){return s.defineProperty(t,e,i)}},341:function(t,e,i){var s=i(6);s(s.S+s.F*!i(9),"Object",{defineProperty:i(8).f})},343:function(t,e,i){"use strict";var s=i(337),a=i(347),n=i(16),o=n(s.a,a.a,!1,null,null,null);o.options.__file="src/views/components/DateRangePicker.vue",e.a=o.exports},347:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("Date-picker",{attrs:{type:"daterange",value:t.value,size:t.size,confirm:"",options:t.date_option,placeholder:t.placeholder},on:{"on-change":t.dateChange,"on-clear":t.clear,"on-ok":t.ok}})},a=[];s._withStripped=!0;var n={render:s,staticRenderFns:a};e.a=n},356:function(t,e,i){"use strict";var s=i(333),a=i.n(s),n=i(338),o=i(385),l=(i(21),i(5),"ivu-select");e.a={name:"SelectCustomer",components:{SelectCustomerModal:o.a},props:{value:{type:[Number,String,Array],default:0},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},placeholder:{type:String},loading:{type:Boolean,default:!1},loadingText:{type:String},size:{validator:function(t){return i.i(n.a)(t,["small","large","default"])}},notFoundText:{type:String},placement:{validator:function(t){return i.i(n.a)(t,["top","bottom"])},default:"bottom"},toFormal:{type:Boolean,default:!1}},data:function(){return{prefixCls:l,modalShow:!1,options:[],optionsInstances:[],labelText:"",model:this.value}},computed:{modalWidth:function(){return this.multiple?"900":"640"},multiple:function(){return!!Array.isArray(this.model)},classes:function(){var t;return["ivu-select",(t={},a()(t,"ivu-select-visible",this.visible),a()(t,"ivu-select-disabled",this.disabled),a()(t,"ivu-select-multiple",this.multiple),a()(t,"ivu-select-single",!this.multiple),a()(t,"ivu-select-show-clear",this.showCloseIcon),a()(t,"ivu-select-"+this.size,!!this.size),t)]},showPlaceholder:function(){var t=!1;return"string"==typeof this.model?""!==this.model&&"0"!==this.model||(t=!0):Array.isArray(this.model)?this.model.length||(t=!0):"number"==typeof this.model?0==this.model&&(t=!0):null===this.model&&(t=!0),t},localePlaceholder:function(){return void 0===this.placeholder?"请选择":this.placeholder},showCloseIcon:function(){return this.clearable&&!this.showPlaceholder}},methods:{openModal:function(){if(this.disabled)return!1;this.modalShow=!this.modalShow},updateSelected:function(t){var e=this;this.multiple?(this.model.length>0&&this.model.splice(0,this.model.length),t.forEach(function(t){e.model.push(t.cu_id)})):this.model=t.cu_id,this.updateLabelText(),this.$emit("on-change",this.model),this.$emit("input",this.model),this.$emit("select",this.model)},updateLabelText:function(){var t=this;this.multiple?this.model.length>0&&this.model[0]>0?this.$store.dispatch("getMapText",{id:this.model[0],name:"customer",idf:"cu_id",txf:"name"}).then(function(e){var i=e;t.model.length>1&&(i+="等"+t.model.length+"个客户"),t.labelText=i}):this.labelText="":this.model?this.$store.dispatch("getMapText",{id:this.model,name:"customer",idf:"cu_id",txf:"name"}).then(function(e){t.labelText=e}):this.labelText=""},clearSelected:function(){this.multiple?this.model.length>0&&this.model.splice(0,this.model.length):this.model=0,this.$emit("input",this.model)}},watch:{value:function(t){this.model=t,this.updateLabelText()}}}},357:function(t,e,i){"use strict";var s=i(333),a=i.n(s),n=(i(4),i(0)),o=(i.n(n),i(332)),l=i(202);i(21);e.a={name:"CustomerList",mixins:[o.a,l.a],props:{value:{type:Boolean,default:""},width:{type:String,default:""},title:{type:String,default:"选择客户"},multiple:{type:Boolean,default:!1},selected:{type:[Array,Number,String],default:[]},toFormal:{type:Boolean,default:!1}},data:function(){return{rest_api:"customers?is_reg=0",modalShow:!1,selIds:[],is_data_init:!1,params:{search_field:"name"},checkAll:!1}},computed:{classes:function(){var t;return["select-list",(t={},a()(t,"select-list-multiple",this.multiple),a()(t,"select-list-single",!this.multiple),t)]},labelText:function(){if(this.selIds.length>0)return this.$store.getters.getMapText(this.selIds[0],"customer")},isSelected:function(){return this.multiple?this.selIds.length>0&&0!=this.selIds[0]||void 0:0!=this.selIds[0]},selectedTotal:function(){return this.selIds.length},selectedList:function(){var t=this,e=[];return this.selIds.forEach(function(i){i>0&&e.push(t.$store.getters.getMapObject(i,"customer"))}),e}},created:function(){this.setSelIds(this.selected)},methods:{setSelIds:function(t){0!==t&&""!=t&&0!==t.length||(this.selIds=[],this.refreshData(this.data)),this.multiple?(this.selIds=t,this.refreshData(this.data)):0==this.selIds.length?this.selIds.push(t):this.selIds.splice(0,1,t)},ok:function(){if(!this.isSelected)return void this.$Message.error("没有选中任何客户");if(this.multiple)this.$emit("on-select",this.selectedList);else{var t=this.$store.getters.getMapObject(this.selIds[0],"customer");this.$emit("on-select",t)}this.modalShow=!1,this.$emit("input",!1)},cancel:function(){var t=this;this.modalShow=!1,this.multiple?(this.selIds=[],this.selected.forEach(function(e){t.selIds.push(e)}),this.refreshData(this.data)):(this.selIds=[],this.selIds.push(this.selected),this.refreshData(this.data)),this.$emit("input",!1)},closeModal:function(){this.cancel()},clearSelectedId:function(){this.selIds.splice(0,this.selIds.length),this.refreshData(this.data)},cancelSelectedId:function(t){var e=this.selIds.indexOf(t.cu_id);-1!==e&&(this.selIds.splice(e,1),this.refreshData(this.data))},deal_data:function(t){return t.list.length>0?(this.$store.commit("buildIdTextMap",{list:t.list,name:"customer",ifield:"cu_id",tfield:"name"}),this.refreshData(t.list)):this.multiple&&this.checkAll&&(this.checkAll=!1),t.list},checkSelectAll:function(t,e,i){return-1!==this.selIds.indexOf(t.cu_id)},refreshData:function(t){var e=this;t.forEach(function(t){-1!==e.selIds.indexOf(t.cu_id)?t.$selected=!0:t.$selected=!1}),this.multiple&&(this.checkAll=t.every(this.checkSelectAll))},addSelectedId:function(t){-1===this.selIds.indexOf(t)&&(this.selIds.push(t),this.refreshData(this.data))},removeSelectedId:function(t){var e=this.selIds.indexOf(t);-1!==e&&(this.selIds.splice(e,1),this.refreshData(this.data))},replaceSelectedId:function(t){0==this.selIds.length?this.selIds.push(t):this.selIds.splice(0,1,t)},toggleSelected:function(t){this.multiple?t.$selected?this.removeSelectedId(t.cu_id):this.addSelectedId(t.cu_id):t.$selected?this.ok():(this.data.forEach(function(t){t.$selected=!1}),t.$selected=!0,this.replaceSelectedId(t.cu_id))},init_data_cache:function(){this.is_data_init||(this.init_data(),this.is_data_init=!0)},handleCheckAll:function(){var t=this;this.data.forEach(function(e){var i=t.selIds.indexOf(e.cu_id);!1===t.checkAll?-1==i&&(t.selIds.push(e.cu_id),e.$selected=!0):i>-1&&(t.selIds.splice(i,1),e.$selected=!1)})}},watch:{value:function(t){this.modalShow=t,this.modalShow?this.init_data_cache():""!=this.params.search_value&&(this.params.search_value="",this.is_data_init=!1)},selected:function(t){this.setSelIds(t)}}}},358:function(t,e,i){"use strict";var s=i(5),a=i(0),n=i.n(a),o=i(201),l=i(198),r=i(199),c=i(370),d={cu_id:0,is_connect:1,followup_did:0,connect_day:"",content:"",next_follow_day:"",intetion_level:0,customer_status_did:0};e.a={mixins:[r.a,l.a],components:{selectCustomer:c.a},data:function(){var t=this,e=function(e,i,s){""!=i||t.next_follow_status?t.isBeforeNow(i)?s(new Error("所选日期不能小于当前日期")):s():s(new Error("请选择日期"))};return{cu_id:0,next_follow_status:!1,info:s.a.copy(d),rules:{content:[{required:!0,message:"请输入沟通内容",trigger:"blur"}],followup_did:[{required:!0,type:"number",message:"请选择沟通类型",trigger:"change"}],customer_status_did:[{required:!0,type:"number",message:"请选择客户状态",trigger:"change"}],connect_day:[{validator:e,trigger:"change"}],next_follow_day:[{validator:e,trigger:"change"}]}}},watch:{next_follow_status:function(t){t&&(this.info.next_follow_day="")},"info.cu_id":function(t){console.log("info.cu_id:"+t)},cu_id:function(t){this.info.cu_id=t}},mounted:function(){},methods:{isBeforeNow:function(t){return!(0==t||!n()(t).add(1,"days").isBefore(n()(new Date)))&&(this.$Message.error("所选时间不能小于当前时间"),!0)},edit:function(t){this.cu_id=t.cu_id,this.set("info",t),this.show("编辑跟进记录["+t.customer.name+"]","edit"),0==t.next_follow_day?this.next_follow_status=1:this.info.next_follow_day=this.$filter("int_date")(this.info.next_follow_day),this.info.connect_day=this.$filter("int_date")(this.info.connect_day)},ok:function(){var t=this,e="post",s="customers/"+this.info.cu_id+"/follow_up",a="添加成功";if("edit"==this.modal$.action&&(e="put",s="customer_follow_ups/"+this.info.cfu_id,a="修改成功"),this.isBeforeNow(this.info.next_follow_day)||this.isBeforeNow(this.info.follow_day))return!1;this.$form("form").check().then(function(){t.info.connect_day=n()(t.info.connect_day).format("YYYYMMDD"),t.info.next_follow_day=n()(t.info.next_follow_day).format("YYYYMMDD"),i.i(o.a)(s)[e](t.info).success(function(e){t.$Message.success(a),t.$emit("on-success"),t.cancel()}).error(function(e){t.$Message.error(e.body.message||"添加失败")})})},cancel:function(){this.info=s.a.copy(d),this.$form("form").reset(),this.close()}}}},365:function(t,e,i){"use strict";var s=i(358),a=i(389),n=i(16),o=n(s.a,a.a,!1,null,null,null);o.options.__file="src/views/crm/follow/info-modal.vue",e.a=o.exports},370:function(t,e,i){"use strict";var s=i(356),a=i(386),n=i(16),o=n(s.a,a.a,!1,null,null,null);o.options.__file="src/views/components/SelectCustomer.vue",e.a=o.exports},385:function(t,e,i){"use strict";var s=i(357),a=i(387),n=i(16),o=n(s.a,a.a,!1,null,null,null);o.options.__file="src/views/components/SelectCustomerModal.vue",e.a=o.exports},386:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.classes},[i("div",{staticStyle:{display:"inline-block",width:"100%"},on:{click:t.openModal}},[t._t("default",[i("div",{ref:"reference",class:[t.prefixCls+"-selection"],on:{click:t.openModal}},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.showPlaceholder,expression:"showPlaceholder"}],class:[t.prefixCls+"-placeholder"]},[t._v(t._s(t.localePlaceholder))]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:!t.showPlaceholder,expression:"!showPlaceholder"}],class:[t.prefixCls+"-selected-value"],staticStyle:{"line-height":"30px"}},[t._v(t._s(t.labelText))]),t._v(" "),i("Icon",{directives:[{name:"show",rawName:"v-show",value:t.showCloseIcon,expression:"showCloseIcon"}],class:[t.prefixCls+"-arrow"],attrs:{type:"ios-close"},nativeOn:{click:function(e){return e.stopPropagation(),t.clearSelected(e)}}}),t._v(" "),i("Icon",{class:[t.prefixCls+"-arrow"],attrs:{type:"arrow-down-b"}})],1)])],2),t._v(" "),i("select-customer-modal",{attrs:{multiple:t.multiple,selected:t.model,width:t.modalWidth,toFormal:t.toFormal},on:{"on-select":t.updateSelected},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}})],1)},a=[];s._withStripped=!0;var n={render:s,staticRenderFns:a};e.a=n},387:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Modal",{directives:[{name:"drag-modal",rawName:"v-drag-modal"}],attrs:{"mask-closable":!1,width:t.width,title:t.title},on:{"on-cancel":t.closeModal},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[i("div",{class:t.classes},[i("div",{staticClass:"list-main"},[i("div",{staticClass:"list-condition"},[i("Row",[i("Col",{attrs:{span:"8"}},[i("Input",{directives:[{name:"focusme",rawName:"v-focusme",value:"searchkey",expression:"'searchkey'"}],attrs:{placeholder:"姓名",size:"small"},model:{value:t.params.search_value,callback:function(e){t.$set(t.params,"search_value",e)},expression:"params.search_value"}})],1),t._v(" "),i("Col",{attrs:{span:"10"}},[i("ButtonGroup",[i("Button",{attrs:{type:"primary",icon:"ios-search",size:"small"},on:{click:t.search}},[t._v("查询")])],1),t._v(" "),i("Button",{attrs:{type:"primary",icon:"refresh",size:"small"},on:{click:t.resetSearch}},[t._v("重置")])],1)],1)],1),t._v(" "),i("div",{staticClass:"list-body"},[i("div",{directives:[{name:"loading",rawName:"v-loading.like",value:"students",expression:"'students'",modifiers:{like:!0}}],staticClass:"list-body-wrap"},[i("table",{staticClass:"table table-list"},[i("thead",[i("tr",[t.multiple?i("th",{attrs:{width:"50"},on:{click:t.handleCheckAll}},[i("Checkbox",{model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}})],1):t._e(),t._v(" "),i("th",[t._v("客户")]),t._v(" "),i("th",[t._v("联系人")]),t._v(" "),i("th",[t._v("电话")]),t._v(" "),i("th",[t._v("客户地址")])])]),t._v(" "),i("tbody",[t._l(t.data,function(e){return i("tr",{class:{"table-info":e.$selected},on:{click:function(i){t.toggleSelected(e)}}},[t.multiple?i("td",[i("Checkbox",{model:{value:e.$selected,callback:function(i){t.$set(e,"$selected",i)},expression:"item.$selected"}})],1):t._e(),t._v(" "),i("td",[t._v(t._s(e.name))]),t._v(" "),i("td",[t._v(t._s(e.contact))]),t._v(" "),i("td",[t._v(t._s(e.tel))]),t._v(" "),i("td",[t._v(t._s(e.address))])])}),t._v(" "),0==t.data.length?i("tr",[i("td",{staticStyle:{"text-align":"center"},attrs:{colspan:"5"}},[i("p",{staticClass:"empty"},[t._v("没有找到客户")])])]):t._e()],2)])]),t._v(" "),i("div",{staticClass:"list-page clearfix"},[i("Page",{staticClass:"pull-right",attrs:{size:"small",total:t.total,"show-total":!0,current:t.pageIndex,"show-sizer":!0,"page-size":t.pageSize},on:{"on-change":t.pagenation,"on-page-size-change":t.pagesize}})],1)])]),t._v(" "),this.multiple?i("div",{staticClass:"multi-selected"},[i("Card",[i("div",{attrs:{slot:"title"},slot:"title"},[i("span",[t._v("已选择："),i("span",{staticClass:"badge"},[t._v(t._s(t.selectedTotal))])]),t._v(" "),i("Button",{staticClass:"pull-right",attrs:{type:"ghost",shape:"circle",size:"small",icon:"trash-a",title:"清空"},on:{click:t.clearSelectedId}})],1),t._v(" "),i("ul",{staticClass:"multi-selected-list"},t._l(t.selectedList,function(e){return i("li",[i("span",[t._v(t._s(e.name))]),t._v(" "),i("Button",{staticClass:"pull-right",attrs:{type:"ghost",shape:"circle",size:"small",icon:"trash-a",title:"移除"},on:{click:function(i){t.cancelSelectedId(e)}}})],1)}))])],1):t._e()]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[t.multiple?t._e():i("span",{staticClass:"footer-selected pull-left"},[i("i",[t._v("已选择:")]),t._v(t._s(t.labelText))]),t._v(" "),i("Button",{attrs:{type:"default"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),t.toFormal?i("Button",{directives:[{name:"per",rawName:"v-per",value:"dashboard.toformal",expression:"'dashboard.toformal'"}],attrs:{type:"primary"},on:{click:t.ok}},[t._v("确定转为正式学员")]):i("Button",{attrs:{type:"primary"},on:{click:t.ok}},[t._v("确定")])],1)])},a=[];s._withStripped=!0;var n={render:s,staticRenderFns:a};e.a=n},389:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Modal",{directives:[{name:"drag-modal",rawName:"v-drag-modal"}],attrs:{"mask-closable":!1,title:t.modal$.title,width:"850"},on:{"on-cancel":t.cancel},model:{value:t.modal$.show,callback:function(e){t.$set(t.modal$,"show",e)},expression:"modal$.show"}},[t.modal$.show?i("Form",{ref:"form",staticClass:"row",attrs:{"label-width":120,model:t.info,rules:t.rules}},[t.cu_id?t._e():i("Form-item",{staticClass:"col-sm-6",attrs:{label:"选择客户",prop:"cu_id"}},[i("select-customer",{attrs:{clearable:""},model:{value:t.info.cu_id,callback:function(e){t.$set(t.info,"cu_id",e)},expression:"info.cu_id"}})],1),t._v(" "),i("Form-item",{staticClass:"col-sm-6",attrs:{label:"",prop:"is_connect"}},[i("RadioGroup",{model:{value:t.info.is_connect,callback:function(e){t.$set(t.info,"is_connect",e)},expression:"info.is_connect"}},[i("Radio",{attrs:{label:1}},[t._v("有效沟通")]),t._v(" "),i("Radio",{attrs:{label:0}},[t._v("无效沟通")])],1)],1),t._v(" "),i("Form-item",{staticClass:"col-sm-6",attrs:{label:"意向级别",prop:"intetion_level"}},[i("Rate",{attrs:{disabled:"edit"==t.modal$.action},model:{value:t.info.intetion_level,callback:function(e){t.$set(t.info,"intetion_level",e)},expression:"info.intetion_level"}})],1),t._v(" "),i("Form-item",{staticClass:"col-sm-6",attrs:{label:"沟通类型",prop:"followup_did"}},[i("Select",{attrs:{disabled:"edit"==t.modal$.action},model:{value:t.info.followup_did,callback:function(e){t.$set(t.info,"followup_did",e)},expression:"info.followup_did"}},[0==t.info.followup_did?i("Option",{attrs:{value:0}},[t._v("请选择")]):t._e(),t._v(" "),t._l(t.dicts("followup"),function(e){return i("Option",{key:e.did,attrs:{value:e.did}},[t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t")])})],2)],1),t._v(" "),i("Form-item",{staticClass:"col-sm-6",attrs:{label:"客户状态",prop:"customer_status_did"}},[i("Select",{attrs:{disabled:"edit"==t.modal$.action},model:{value:t.info.customer_status_did,callback:function(e){t.$set(t.info,"customer_status_did",e)},expression:"info.customer_status_did"}},[0==t.info.customer_status_did?i("Option",{attrs:{value:0}},[t._v("请选择")]):t._e(),t._v(" "),t._l(t.dicts("customer_status"),function(e){return i("Option",{key:e.did,attrs:{value:e.did}},[t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t")])})],2)],1),t._v(" "),i("Form-item",{staticClass:"col-sm-6",attrs:{label:"跟进日期",prop:"connect_day"}},[i("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.info.connect_day,callback:function(e){t.$set(t.info,"connect_day",e)},expression:"info.connect_day"}})],1),t._v(" "),i("Form-item",{staticClass:"col-sm-6",attrs:{label:"下次跟进日期",prop:"next_follow_day"}},[i("DatePicker",{staticStyle:{width:"200px"},attrs:{disabled:1==t.next_follow_status,type:"date",placeholder:"选择日期"},model:{value:t.info.next_follow_day,callback:function(e){t.$set(t.info,"next_follow_day",e)},expression:"info.next_follow_day"}}),t._v(" "),i("Checkbox",{staticClass:"ml-3",attrs:{"true-value":1},model:{value:t.next_follow_status,callback:function(e){t.next_follow_status=e},expression:"next_follow_status"}},[t._v("\n\t\t\t\t待定\n\t\t\t")])],1),t._v(" "),i("Form-item",{staticClass:"col-sm-12",attrs:{label:"沟通内容",prop:"content"}},[i("Input",{attrs:{type:"textarea",row:"3"},model:{value:t.info.content,callback:function(e){t.$set(t.info,"content",e)},expression:"info.content"}})],1)],1):t._e(),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{type:"ghost",disabled:t.saving},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),i("Button",{attrs:{type:"primary",loading:t.saving},on:{click:t.ok}},[t._v("确定")])],1)],1)},a=[];s._withStripped=!0;var n={render:s,staticRenderFns:a};e.a=n},448:function(t,e,i){"use strict";var s=i(5),a=i(332),n=i(198),o=i(200),l=i(343),r=i(365);e.a={mixins:[a.a,n.a,o.a],components:{infoModal:r.a,dateRangePicker:l.a},data:function(){return{rest_api:"customer_follow_ups?with=customer",pk:"cfu_id",search_field:{name:"",connect_day:[],next_follow_day:[],intetion_level:0},column_keys:{name:{title:"客户/联系人",show:!0},tel:{title:"电话",show:!0},connect_day:{title:"跟进时间",show:!0},next_follow_day:{title:"下次跟进时间",show:!0},followup_did:{title:"跟进方式",show:!0},intetion_level:{title:"意向级别",show:!0},content:{title:"沟通内容",show:!0}},column_render:{name:function(t,e){return t("span",s.a.sprintf("【%s】-%s",e.row.customer.name,e.row.customer.contact))},tel:function(t,e){return t("span",e.row.customer.tel)},connect_day:function(t,e){var i="————";return i=this.$filter("int_date")(e.row.connect_day),t("span",i)},next_follow_day:function(t,e){var i="待定";return i=0===e.row.next_follow_day?"待定":this.$filter("int_date")(e.row.next_follow_day),t("span",i)},followup_did:function(t,e){return t("span",this.labelDicts(e.row.followup_did,"followup"))},intetion_level:function(t,e){return t("Rate",{props:{value:e.row.intetion_level,disabled:!0}})}},operation_keys:{edit:{title:"编辑",type:"edit",per:"employee.edit"},del:{title:"删除",type:"ios-trash",per:"employee.delete"}},operation_func:{edit:function(t){this.editInfo(t.row)},del:function(t){this.delInfo(t.row)}}}},mounted:function(){this.init_data()},methods:{addInfo:function(){this.$refs.info.show("添加跟进记录","add")},editInfo:function(t){s.a.sprintf("修改跟进记录【%s】",t.customer.name);this.$refs.info.edit(t)},delInfo:function(t){var e=this,i=s.a.sprintf("确定删除员工【%s】吗？",t.customer.name);this.confirm(i).then(function(){e.delete(t)})},resetSearch:function(){this.$form("ref_search").reset(),this.init_data()},hook_get_param:function(t){var e=s.a.copy(this.search_field);for(var i in e){var a=e[i];"connect_day"==i||"next_follow_day"==i?","!=a&&a.length>0&&(t[i]=s.a.sprintf("[Between,%s]",a.join(","))):a&&(t[i]=a)}}}}},449:function(t,e,i){"use strict";var s=i(542);e.a={components:{list:s.a}}},542:function(t,e,i){"use strict";var s=i(448),a=i(610),n=i(16),o=n(s.a,a.a,!1,null,null,null);o.options.__file="src/views/crm/follow/list.vue",e.a=o.exports},575:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("list")},a=[];s._withStripped=!0;var n={render:s,staticRenderFns:a};e.a=n},610:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"c-grid"},[i("div",{staticClass:"box box-query"},[i("Form",{ref:"ref_search",staticClass:"filter-form row",attrs:{model:t.search_field,"label-width":70}},[i("Form-item",{staticClass:"col-md-3 col-sm-6",attrs:{label:"姓名",prop:"name"}},[i("Input",{attrs:{placeholder:"请输入客户名"},model:{value:t.search_field.name,callback:function(e){t.$set(t.search_field,"name",e)},expression:"search_field.name"}})],1),t._v(" "),i("Form-item",{staticClass:"col-md-3 col-sm-6",attrs:{label:"跟进日期",prop:"connect_day"}},[i("date-range-picker",{staticStyle:{width:"100%"},attrs:{label:"选择日期",placement:"bottom"},on:{"on-change":t.init_data},model:{value:t.search_field.connect_day,callback:function(e){t.$set(t.search_field,"connect_day",e)},expression:"search_field.connect_day"}})],1),t._v(" "),i("Form-item",{staticClass:"col-md-3 col-sm-6",attrs:{label:"下次跟进",prop:"next_follow_day"}},[i("date-range-picker",{staticStyle:{width:"100%"},attrs:{label:"选择日期",placement:"bottom"},on:{"on-change":t.init_data},model:{value:t.search_field.next_follow_day,callback:function(e){t.$set(t.search_field,"next_follow_day",e)},expression:"search_field.next_follow_day"}})],1),t._v(" "),i("Form-item",{staticClass:"col-md-3 col-sm-6",attrs:{label:"意向级别",prop:"intetion_level"}},[i("Rate",{model:{value:t.search_field.intetion_level,callback:function(e){t.$set(t.search_field,"intetion_level",e)},expression:"search_field.intetion_level"}})],1)],1),t._v(" "),i("Row",{staticClass:"basic"},[i("Col",{staticClass:"mt-2",attrs:{span:"24"}},[i("Button-group",[i("Button",{staticClass:"ml-2",attrs:{type:"primary",icon:"ios-search"},on:{click:t.init_data}},[t._v("查询")])],1),t._v(" "),i("Button",{attrs:{type:"primary",icon:"refresh"},on:{click:t.resetSearch}},[t._v("重置")])],1)],1)],1),t._v(" "),i("div",{staticClass:"box box-result"},[i("div",{staticClass:"toolbar"},[i("Button",{directives:[{name:"per",rawName:"v-per",value:"employee.add",expression:"'employee.add'"}],attrs:{type:"primary",icon:"plus"},on:{click:t.addInfo}},[t._v("添加跟进")]),t._v(" "),i("filter-column",{attrs:{keys:t.column_keys}})],1),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"content-body"},[i("Table",{directives:[{name:"loading",rawName:"v-loading.like",value:"customer_follow_ups",expression:"'customer_follow_ups'",modifiers:{like:!0}}],ref:"tableExcel",attrs:{"page-size":t.pageSize,page:t.pageIndex,border:!0,stripe:!0,"show-header":!0,data:t.data,columns:t.columns,"no-data-text":t.$store.state.config.EMPTY_DATA_TEXT,"no-filtered-data-text":t.$store.state.config.EMPTY_FILTER_DATA_TEXT},on:{"on-sort-change":t.sortChange}})],1),t._v(" "),i("div",{staticClass:"content-footer"},[i("div",{staticClass:"pagenation"},[i("Page",{attrs:{total:t.total,current:t.pageIndex,"show-sizer":!0,"page-size":t.pageSize,"show-total":!0},on:{"on-change":t.pagenation,"on-page-size-change":t.pagesize}})],1)])])]),t._v(" "),i("info-modal",{ref:"info",on:{"on-success":t.init_data}})],1)},a=[];s._withStripped=!0;var n={render:s,staticRenderFns:a};e.a=n}});