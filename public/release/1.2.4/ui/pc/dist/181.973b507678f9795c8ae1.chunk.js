webpackJsonp([181],{1229:function(t,a,e){"use strict";a.a={props:{config:{type:Object,default:function(){return{}}},value:{type:String,default:"1"}},data:function(){return{tabValue:this.value}},watch:{tabValue:function(t){this.$emit("input",t)}},methods:{dateChange:function(t,a){console.log(t,a)},nlbr:function(t){return t.replace(/[\n\r]+/g,"<br>")},handleSuccess:function(t,a){this.config.banner=t.data.file_url},handleSuccess1:function(t,a){this.config.logo=t.data.file_url},handleFormatError:function(t){var a=["image","jpg","jpeg","png","bmp"].join(",");this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+t.name+" 格式不正确，请上传 "+a+" 格式的文件。"})},save:function(){this.handleSubmit()}},computed:{upload_header:function(){return{"x-token":this.$store.state.user.token,"x-file-key":"file"}},upload_post:function(){return{mod:"correct_upload"}}}}},1230:function(t,a,e){"use strict";a.a={props:{config:{type:Object,default:function(){return{}}},tab:{type:String,default:"1"}},data:function(){return{tabValue:this.value}},computed:{enableFieldsList:function(){return this.config.fields.filter(function(t){return t.enable})}}}},1363:function(t,a,e){"use strict";function s(t){l||e(1364)}var i=e(1229),n=e(1365),l=!1,c=e(11),o=s,r=c(i.a,n.a,!1,o,"data-v-5719aeb3",null);r.options.__file="src/views/system/configs/qrsign/setting.vue",a.a=r.exports},1364:function(t,a){},1365:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Tabs",{model:{value:t.tabValue,callback:function(a){t.tabValue=a},expression:"tabValue"}},[e("TabPane",{attrs:{label:"扫码录入设置",name:"1"}},[e("div",{staticClass:"p-3 mb-3 b-b-1"},[e("img",{staticStyle:{width:"375px",height:"190px"},attrs:{src:t.config.banner}}),t._v(" "),e("div",{staticClass:"mt-2"},[e("Upload",{ref:"handupload",attrs:{action:"/api/upload",format:["image","jpg","jpeg","png","bmp"],"show-upload-list":!1,headers:t.upload_header,"on-format-error":t.handleFormatError,data:t.upload_post,"on-success":t.handleSuccess}},[e("Button",{attrs:{type:"primary",icon:"refresh"}},[t._v("更换")]),t._v(" "),e("label",{staticClass:"text-desc"},[t._v("（建议上传750*380大小的图片）")])],1)],1)]),t._v(" "),e("div",{staticClass:"p-3 mb-3 b-b-1"},[e("div",{staticClass:"mb-2"},[t._v("\n\t\t\t\t标题： "),e("Input",{staticStyle:{width:"375px"},attrs:{placeholder:"请输入大标题"},model:{value:t.config.title,callback:function(a){t.$set(t.config,"title",a)},expression:"config.title"}})],1),t._v(" "),e("div",{staticClass:"mb-2"},[t._v("\n\t\t\t\t描述： "),e("Input",{staticStyle:{width:"375px"},attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"请输入描述"},model:{value:t.config.desc,callback:function(a){t.$set(t.config,"desc",a)},expression:"config.desc"}})],1)]),t._v(" "),e("div",{staticClass:"p-3 mb-3 b-b-1"},[e("table",{staticClass:"modal-table"},[e("thead",[e("th",[e("div",{staticClass:"ivu-table-cell"},[t._v("字段")])]),t._v(" "),e("th",[e("div",{staticClass:"ivu-table-cell"},[t._v("类型")])]),t._v(" "),e("th",[e("div",{staticClass:"ivu-table-cell"},[t._v("是否启用")])]),t._v(" "),e("th",[e("div",{staticClass:"ivu-table-cell"},[t._v("默认值")])])]),t._v(" "),t._l(t.config.must_fields,function(a){return e("tr",[e("td",[e("div",{staticClass:"ivu-table-cell"},[t._v(t._s(a.label))])]),t._v(" "),e("td",[e("div",{staticClass:"ivu-table-cell text-danger"},[t._v("必填")])]),t._v(" "),e("td",[e("div",{staticClass:"ivu-table-cell"},[e("i-switch",{model:{value:a.enable,callback:function(e){t.$set(a,"enable",e)},expression:"item.enable"}})],1)]),t._v(" "),e("td",[e("div",{staticClass:"ivu-table-cell"},[e("DatePicker",{staticStyle:{width:"200px"},attrs:{value:a.default_value,format:"yyyy-MM-dd",type:"date",placeholder:"Select date"},on:{"on-change":function(t){a.default_value=t}}})],1)])])}),t._v(" "),t._l(t.config.fields,function(a){return e("tr",[e("td",[e("div",{staticClass:"ivu-table-cell"},[t._v(t._s(a.label))])]),t._v(" "),e("td",[e("div",{staticClass:"ivu-table-cell"},[t._v("选填")])]),t._v(" "),e("td",[e("div",{staticClass:"ivu-table-cell"},[e("i-switch",{model:{value:a.enable,callback:function(e){t.$set(a,"enable",e)},expression:"item.enable"}})],1)]),t._v(" "),e("td",[e("div",{staticClass:"ivu-table-cell"},[e("Input",{attrs:{placeholder:"请输入字段默认值"},model:{value:a.default_value,callback:function(e){t.$set(a,"default_value",e)},expression:"item.default_value"}})],1)])])})],2)]),t._v(" "),e("div",{staticClass:"p-3"},[e("img",{staticStyle:{"max-width":"140px","max-height":"40px"},attrs:{src:t.config.logo}}),t._v(" "),e("div",{staticClass:"mt-2"},[e("Upload",{ref:"handupload",attrs:{action:"/api/upload",format:["image","jpg","jpeg","png","bmp"],"show-upload-list":!1,headers:t.upload_header,"on-format-error":t.handleFormatError,data:t.upload_post,"on-success":t.handleSuccess1}},[e("Button",{attrs:{type:"primary",icon:"refresh"}},[t._v("更换")]),t._v(" "),e("label",{staticClass:"text-desc"},[t._v("（建议上传140*40大小的图片）")])],1)],1)])]),t._v(" "),e("TabPane",{attrs:{label:"录入成功设置",name:"2"}},[e("div",{staticClass:"p-3 mb-3 b-b-1"},[e("div",{staticClass:"mb-2"},[t._v("\n\t\t\t\t标　　题： "),e("Input",{staticStyle:{width:"375px"},attrs:{placeholder:"请输入大标题"},model:{value:t.config.msg.title,callback:function(a){t.$set(t.config.msg,"title",a)},expression:"config.msg.title"}})],1),t._v(" "),e("div",{staticClass:"mb-2"},[t._v("\n\t\t\t\t描　　述： "),e("Input",{staticStyle:{width:"375px"},attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"请输入描述"},model:{value:t.config.msg.description,callback:function(a){t.$set(t.config.msg,"description",a)},expression:"config.msg.description"}})],1),t._v(" "),e("div",{staticClass:"mb-2"},[t._v("\n\t\t\t\t跳转链接： "),e("Input",{staticStyle:{width:"375px"},attrs:{placeholder:"请输入跳转链接"},model:{value:t.config.msg.redirect_url,callback:function(a){t.$set(t.config.msg,"redirect_url",a)},expression:"config.msg.redirect_url"}})],1)])])],1)},i=[];s._withStripped=!0;var n={render:s,staticRenderFns:i};a.a=n},1366:function(t,a,e){"use strict";function s(t){l||e(1367)}var i=e(1230),n=e(1368),l=!1,c=e(11),o=s,r=c(i.a,n.a,!1,o,"data-v-116c082b",null);r.options.__file="src/views/system/configs/qrsign/preview.vue",a.a=r.exports},1367:function(t,a){},1368:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[t._v("效果预览")]),t._v(" "),1==t.tab?e("div",{staticClass:"x-container"},[e("div",{staticClass:"bg-header",style:{backgroundImage:"url("+t.config.banner+")"}}),t._v(" "),e("div",{staticClass:"x-content"},[e("div",{staticClass:"x-form"},[e("div",{staticClass:"form-title"},[t._v("\n\t\t\t\t\t"+t._s(t.config.title)+"\n\t\t\t\t\t"),e("p",{staticClass:"desc"},[t._v("\n\t\t\t\t\t\t"+t._s(t.config.desc)+"\n\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"form-body"},[e("div",{staticClass:"form-item"},[e("label",{staticClass:"form-item-label"},[t._v("姓　　名:")]),t._v(" "),e("div",{staticClass:"form-item-content"},[e("input",{staticClass:"x-input",attrs:{readonly:"",placeholder:"请输入姓名"}})])]),t._v(" "),e("div",{staticClass:"form-item"},[e("label",{staticClass:"form-item-label"},[t._v("性　　别:")]),t._v(" "),e("div",{staticClass:"form-item-content text-left"},[e("span",{staticClass:"x-radio checked"},[e("span",{staticClass:"x-radio-icon"}),t._v(" "),e("span",{staticClass:"x-radio-label"},[t._v("男")])]),t._v(" "),e("span",{staticClass:"x-radio"},[e("span",{staticClass:"x-radio-icon"}),t._v(" "),e("span",{staticClass:"x-radio-label"},[t._v("女")])])])]),t._v(" "),e("div",{staticClass:"form-item"},[e("label",{staticClass:"form-item-label"},[t._v("电话号码:")]),t._v(" "),e("div",{staticClass:"form-item-content"},[e("input",{staticClass:"x-input",attrs:{readonly:"",placeholder:"请输入电话号码"}})])]),t._v(" "),t._l(t.config.must_fields,function(a){return a.enable?e("div",{staticClass:"form-item text-left mt-1"},[e("label",{staticClass:"form-item-label"},[t._v(t._s(a.label)+":")]),t._v(" "),e("div",{staticClass:"form-item-content"},[e("input",{staticClass:"x-input",attrs:{readonly:"",placeholder:a.placeholder},domProps:{value:a.default_value}})])]):t._e()}),t._v(" "),t.enableFieldsList.length>0?e("div",{staticClass:"mt-3 mb-2"},[e("p",{staticClass:"x-divider"},[e("span",[t._v("以下选填")])])]):t._e(),t._v(" "),t._l(t.config.fields,function(a){return a.enable?e("div",{staticClass:"form-item text-left mt-1"},[e("label",{staticClass:"form-item-label"},[t._v(t._s(a.label)+":")]),t._v(" "),e("div",{staticClass:"form-item-content"},[e("input",{staticClass:"x-input",attrs:{readonly:"",placeholder:a.placeholder},domProps:{value:a.default_value}})])]):t._e()})],2)]),t._v(" "),e("Button",{staticClass:"x-btn-submit",attrs:{type:"primary",long:""}},[t._v("提交")]),t._v(" "),e("img",{staticClass:"logo",staticStyle:{"max-width":"140px","max-height":"40px"},attrs:{src:t.config.logo}})],1)]):e("div",{staticClass:"x-container"},[e("div",{staticClass:"x-msg-container"},[e("div",{staticClass:"icon-area"},[e("img",{attrs:{src:"/static/img/org/wxicon-success.png"}})]),t._v(" "),e("div",{staticClass:"text-area"},[e("h2",{staticClass:"title"},[t._v(t._s(t.config.msg.title))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(t.config.msg.description))])]),t._v(" "),e("Button",{staticClass:"mt-3",attrs:{type:"primary",long:""}},[t._v("（5s后自动跳转） 确定")])],1)])])},i=[];s._withStripped=!0;var n={render:s,staticRenderFns:i};a.a=n},2077:function(t,a,e){"use strict";var s=e(909),i=e(207),n=e(1363),l=e(1366);a.a={mixins:[i.a,s.a],components:{QrsignSetting:n.a,QrsignPreview:l.a},data:function(){return{tab:"1",cfg_name:"qrsign",config:{banner:"/static/img/org/qrsign-bg.png",logo:"/static/img/logo.png",title:"市场名单资料",desc:"提交信息后我们的工作人员将会在3个工作日内联系您",fields:[{field:"grade",label:"年　　级",placeholder:"请输入年级",enable:!0,default_value:""},{field:"email",label:"邮　　箱",placeholder:"请输入邮箱",enable:!0,default_value:""}],must_fields:[{field:"birth_time",label:"出生日期",placeholder:"请选择日期",enable:!0,default_value:"2012-01-01"}],msg:{title:"操作成功",description:"您的信息我们已经收到，我们会尽快与您联系!",redirect_url:""}}}},methods:{save:function(){this.handleSubmit()}},computed:{}}},3133:function(t,a){},3134:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-sm-12"},[e("qrsign-setting",{attrs:{config:t.config},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}})],1),t._v(" "),e("div",{staticClass:"col-md-6 col-sm-12"},[e("qrsign-preview",{attrs:{config:t.config,tab:t.tab}})],1)]),t._v(" "),e("div",{staticClass:"mt-3 footer-btn",staticStyle:{"padding-left":"0"}},[e("Button",{attrs:{type:"primary"},on:{click:function(a){t.save()}}},[t._v("保存配置")])],1)])},i=[];s._withStripped=!0;var n={render:s,staticRenderFns:i};a.a=n},605:function(t,a,e){"use strict";function s(t){l||e(3133)}Object.defineProperty(a,"__esModule",{value:!0});var i=e(2077),n=e(3134),l=!1,c=e(11),o=s,r=c(i.a,n.a,!1,o,"data-v-7cc0e5f2",null);r.options.__file="src/views/system/configs/qrsign.vue",a.default=r.exports},673:function(t,a,e){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}a.__esModule=!0;var i=e(679),n=s(i),l=e(210),c=s(l);a.default=function(){function t(t,a){var e=[],s=!0,i=!1,n=void 0;try{for(var l,o=(0,c.default)(t);!(s=(l=o.next()).done)&&(e.push(l.value),!a||e.length!==a);s=!0);}catch(t){i=!0,n=t}finally{try{!s&&o.return&&o.return()}finally{if(i)throw n}}return e}return function(a,e){if(Array.isArray(a))return a;if((0,n.default)(Object(a)))return t(a,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},679:function(t,a,e){t.exports={default:e(680),__esModule:!0}},680:function(t,a,e){e(36),e(26),t.exports=e(681)},681:function(t,a,e){var s=e(56),i=e(3)("iterator"),n=e(18);t.exports=e(2).isIterable=function(t){var a=Object(t);return void 0!==a[i]||"@@iterator"in a||n.hasOwnProperty(s(a))}},909:function(t,a,e){"use strict";var s=e(673),i=e.n(s),n=e(1);a.a={data:function(){return{cfg_name:"",cfg_id:0,config:{},action:"edit",loading:!0}},mounted:function(){this.init_config_data()},methods:{init_config_data:function(){var t=this;this.loading=!0,this.$http.get("configs?cfg_name="+this.cfg_name).then(function(a){if(n.a.isArray(a.body.data)&&0===a.body.data.length)t.action="add";else{0==a.body.data.cfg_id&&(t.action="add");for(var e in a.body.data.cfg_value)t.$set(t.config,e,a.body.data.cfg_value[e]);t.cfg_id=a.body.data.cfg_id}t.initFinished(),t.loading=!1}).catch(function(a){t.$Message.error(a.message)})},initFinished:function(){},handleSubmit:function(){var t=this,a="add"===this.action?["post","configs"]:["put","configs/"+this.cfg_id],e=i()(a,2),s=e[0],l=e[1],c={cfg_name:this.cfg_name,cfg_value:this.config};this.loading=!0,this.$http[s](l,c).then(function(a){var e=t.cfg_name;"lesson"==e&&(e="lesson_config"),"params"==e&&(e="configs"),"org_pc_ui"==e&&(e="quick_navs"),t.$Message.success("保存成功!"),n.a.isDefined(t.$store.state.gvars[e])&&t.$store.dispatch("updateGlobalVar",e),t.init_config_data()}).catch(function(a){t.$Message.error(a.message)})},restoreDefault:function(){var t=this;this.confirm("你确定恢复默认设置吗？").then(function(){t.loading=!0,t.$rest("configs").delete(t.cfg_id).success(function(a){t.$Message.success("恢复成功");var e="";"org_pc_ui"==t.cfg_name&&(e="quick_navs"),"params"==t.cfg_name&&(e="configs"),""!==e&&t.$store.dispatch("updateGlobalVar",e),t.init_config_data()}).error(function(a){t.$Message.error(a.body.message)})})}}}}});