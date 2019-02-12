webpackJsonp([197],{2017:function(t,e,i){"use strict";var s=i(902),n=i(207);e.a={mixins:[n.a,s.a],components:{},data:function(){return{info:"",cfg_name:"recommend_rule",config:{banner:"/static/img/recommend-banner.png",rules:[]}}},methods:{nlbr:function(t){return t.replace(/[\n\r]+/g,"<br>")},handleSuccess:function(t,e){this.config.banner=t.data.file_url},handleFormatError:function(t){var e=["image","jpg","jpeg","png","bmp"].join(",");this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+t.name+" 格式不正确，请上传 "+e+" 格式的文件。"})},save:function(){if(!this.config.rules.length)return void this.$Message.error("请添加推荐规则");this.handleSubmit()},addRule:function(){this.config.rules.push({title:"奖励规则",desc:"规则描述"})},delRule:function(t){var e=this.config.rules.indexOf(t);e>-1&&this.config.rules.splice(e,1)}},computed:{upload_header:function(){return{"x-token":this.$store.state.user.token,"x-file-key":"file"}},upload_post:function(){return{mod:"correct_upload"}}}}},3019:function(t,e){},3020:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6 col-sm-12"},[i("div",{staticClass:"rule-item mb-3"},[i("img",{staticStyle:{width:"375px",height:"190px"},attrs:{src:t.config.banner}}),t._v(" "),i("div",{staticClass:"mt-2"},[i("Upload",{ref:"handupload",attrs:{action:"/api/upload",format:["image","jpg","jpeg","png","bmp"],"show-upload-list":!1,headers:t.upload_header,"on-format-error":t.handleFormatError,data:t.upload_post,"on-success":t.handleSuccess}},[i("Button",{attrs:{type:"primary",icon:"refresh"}},[t._v("更换")]),t._v(" "),i("label",{staticClass:"text-desc"},[t._v("（建议上传750*380大小的图片）")])],1)],1)]),t._v(" "),i("div",{staticClass:"rule-item"},[i("div",{staticClass:"mb-2"},[t._v("\n\t\t\t\t\t大标题： "),i("Input",{staticStyle:{width:"280px"},attrs:{placeholder:"请输入大标题"},model:{value:t.config.title,callback:function(e){t.$set(t.config,"title",e)},expression:"config.title"}})],1)]),t._v(" "),t._l(t.config.rules,function(e){return i("div",{staticClass:"rule-item"},[i("div",{staticClass:"mb-2"},[t._v("\n\t\t\t\t\t标题： "),i("Input",{staticStyle:{width:"280px"},attrs:{placeholder:"请输入规则标题"},model:{value:e.title,callback:function(i){t.$set(e,"title",i)},expression:"item.title"}})],1),t._v(" "),i("div",{},[t._v("\n\t\t\t\t\t描述： "),i("Input",{staticStyle:{width:"360px"},attrs:{type:"textarea",autosize:{minRows:2,maxRows:3},placeholder:"请输入规则详情"},model:{value:e.desc,callback:function(i){t.$set(e,"desc",i)},expression:"item.desc"}}),t._v(" "),i("Button",{staticClass:"pull-right",attrs:{type:"ghost",icon:"ios-trash",title:"删除"},on:{click:function(i){t.delRule(e)}}})],1)])}),t._v(" "),i("div",{staticClass:"text-right mt-3"},[i("Button",{attrs:{type:"ghost",icon:"plus"},on:{click:t.addRule}},[t._v("添加")])],1)],2),t._v(" "),i("div",{staticClass:"col-md-6 col-sm-12"},[i("Card",[i("p",{attrs:{slot:"title"},slot:"title"},[t._v("效果预览")]),t._v(" "),i("div",{staticClass:"x-container"},[i("div",{staticClass:"x-banner",style:{backgroundImage:"url("+t.config.banner+")"}}),t._v(" "),i("div",{staticClass:"x-title"},[t._v(t._s(t.config.title))]),t._v(" "),i("div",{staticClass:"x-rules"},t._l(t.config.rules,function(e){return i("div",{staticClass:"x-rule-item"},[i("div",{staticClass:"x-rule-title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"x-rule-desc",domProps:{innerHTML:t._s(t.nlbr(e.desc))}})])})),t._v(" "),i("div",{staticClass:"footer"},[i("button",{staticClass:"x-btn"},[t._v("我要推荐")]),t._v(" "),i("div",{staticClass:"text-right mt-1"},[i("span",{staticClass:"x-link"},[t._v("我的推荐")])])])])])],1)]),t._v(" "),i("div",{staticClass:"mt-3 footer-btn",staticStyle:{"padding-left":"0"}},[i("Button",{attrs:{type:"primary"},on:{click:function(e){t.save()}}},[t._v("保存配置")])],1)])},n=[];s._withStripped=!0;var a={render:s,staticRenderFns:n};e.a=a},576:function(t,e,i){"use strict";function s(t){r||i(3019)}Object.defineProperty(e,"__esModule",{value:!0});var n=i(2017),a=i(3020),r=!1,c=i(11),o=s,l=c(n.a,a.a,!1,o,"data-v-0a34b4d8",null);l.options.__file="src/views/system/configs/recommend.vue",e.default=l.exports},651:function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var n=i(658),a=s(n),r=i(210),c=s(r);e.default=function(){function t(t,e){var i=[],s=!0,n=!1,a=void 0;try{for(var r,o=(0,c.default)(t);!(s=(r=o.next()).done)&&(i.push(r.value),!e||i.length!==e);s=!0);}catch(t){n=!0,a=t}finally{try{!s&&o.return&&o.return()}finally{if(n)throw a}}return i}return function(e,i){if(Array.isArray(e))return e;if((0,a.default)(Object(e)))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},658:function(t,e,i){t.exports={default:i(659),__esModule:!0}},659:function(t,e,i){i(36),i(26),t.exports=i(660)},660:function(t,e,i){var s=i(56),n=i(3)("iterator"),a=i(18);t.exports=i(2).isIterable=function(t){var e=Object(t);return void 0!==e[n]||"@@iterator"in e||a.hasOwnProperty(s(e))}},902:function(t,e,i){"use strict";var s=i(651),n=i.n(s),a=i(1);e.a={data:function(){return{cfg_name:"",cfg_id:0,config:{},action:"edit"}},mounted:function(){this.init_config_data()},methods:{init_config_data:function(){var t=this;this.$http.get("configs?cfg_name="+this.cfg_name).then(function(e){if(a.a.isArray(e.body.data)&&0===e.body.data.length)t.action="add";else{0==e.body.data.cfg_id&&(t.action="add");for(var i in e.body.data.cfg_value)t.$set(t.config,i,e.body.data.cfg_value[i]);t.cfg_id=e.body.data.cfg_id}t.initFinished()}).catch(function(e){t.$Message.error(e.message)})},initFinished:function(){},handleSubmit:function(){var t=this,e="add"===this.action?["post","configs"]:["put","configs/"+this.cfg_id],i=n()(e,2),s=i[0],r=i[1],c={cfg_name:this.cfg_name,cfg_value:this.config};this.$http[s](r,c).then(function(e){var i=t.cfg_name;"lesson"==i&&(i="lesson_config"),"params"==i&&(i="configs"),"org_pc_ui"==i&&(i="quick_navs"),t.$Message.success("保存成功!"),a.a.isDefined(t.$store.state.gvars[i])&&t.$store.dispatch("updateGlobalVar",i),t.init_config_data()}).catch(function(e){t.$Message.error(e.message)})},restoreDefault:function(){var t=this;this.confirm("你确定恢复默认设置吗？").then(function(){t.$rest("configs").delete(t.cfg_id).success(function(e){t.$Message.success("恢复成功");var i="";"org_pc_ui"==t.cfg_name&&(i="quick_navs"),"params"==t.cfg_name&&(i="configs"),""!==i&&t.$store.dispatch("updateGlobalVar",i),t.init_config_data()}).error(function(e){t.$Message.error(e.body.message)})})}}}}});