webpackJsonp([202],{1150:function(t,e,i){"use strict";function n(t){return t.replace("{{bs.qrcode}}",l)}var o=i(33),r=i.n(o),a=i(54),s=i.n(a),l='<img qrcode="true" src="/static/img/mpqr.jpg" height="110px" width="110px"/>';e.a={name:"Umeditor",props:{value:{type:String,default:""},umeditorPath:{type:String,default:"/static/umeditor/"},config:{type:Object,default:function(){return{}}},toolbar:{type:Array,default:function(){return[]}}},data:function(){return{um:null,domId:"J_UMeditor",defaultToolbar:["source","|"," undo redo","|"," bold italic underline strikethrough horizontal","|"," forecolor backcolor","|","insertorderedlist insertunorderedlist","|","paragraph fontfamily fontsize","|","justifyleft justifycenter justifyright justifyjustify","|","link unlink","|"," removeformat","|","image"],defaultConfig:s()({imageUrl:"",zIndex:1050,initialFrameWidth:"100%",initialFrameHeight:200,autoClearinitialContent:!0},"zIndex",2999),scriptTagStatus:0}},created:function(){void 0!==window.UM?(this.scriptTagStatus=2,this.init()):this.insertScriptTag()},methods:{insertScriptTag:function(){var t=this,e=document.getElementById("editorScriptTag"),i=document.getElementById("configScriptTag"),n=document.getElementById("editorCssTag");if(null===e){n=document.createElement("link"),n.type="text/css",n.rel="stylesheet",n.href=this.umeditorPath+"themes/default/css/umeditor.min.css",i=document.createElement("script"),i.type="text/javascript",i.src=this.umeditorPath+"umeditor.config.js",i.id="umconfigScriptTag",e=document.createElement("script"),e.type="text/javascript",e.src=this.umeditorPath+"umeditor.min.js",e.id="umeditorScriptTag";var o=document.getElementsByTagName("head")[0];o.appendChild(n),o.appendChild(i),o.appendChild(e)}i.loaded?this.scriptTagStatus++:i.addEventListener("load",function(){t.scriptTagStatus++,i.loaded=!0}),e.loaded?this.scriptTagStatus++:e.addEventListener("load",function(){t.scriptTagStatus++,e.loaded=!0,t.init()})},init:function(){var t=this;this.domId=this.getUID(this.domId);var e={};this.defaultConfig.imageUrl=this.serverUrl,r()(e,this.defaultConfig,this.config),e.toolbar=this.toolbar.length>0?this.toolbar:this.defaultToolbar,this.$nextTick(function(){t.initEditor(t.domId,e)})},initEditor:function(t,e){this.um=window.UM.getEditor(t,e),this.bind()},bind:function(){var t=this;this.um.ready(function(){t.um.setContent(t.value)}),this.um.addListener("contentChange",function(){var e=t.getContent();-1!==e.indexOf("{{bs.qrcode}}")&&(e=n(e),t.um.setContent(e)),t.$emit("input",e)})},getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},reset:function(){this.um.reset(),this.um.setContent("")},destroy:function(){this.um.destroy()},setContent:function(t){this.um.setContent(t)},getContent:function(){return this.um.getContent()},droptext:function(t){"{{bs.qrcode}}"==t.dataTransfer.getData("text")&&($(t.target).append(l),t.preventDefault())}},watch:{value:function(t){t!=this.getContent()&&this.um.setContent(t)}},computed:{serverUrl:function(){return"/api/umeditor?token="+this.$store.state.user.token}}}},1230:function(t,e,i){"use strict";var n=i(1150),o=i(1231),r=i(11),a=r(n.a,o.a,!1,null,null,null);a.options.__file="src/views/components/Umeditor.vue",e.a=a.exports},1231:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:t.domId},on:{drop:t.droptext}})},o=[];n._withStripped=!0;var r={render:n,staticRenderFns:o};e.a=r},1567:function(t,e,i){"use strict";var n=i(667),o=i.n(n),r=i(1),a=i(211),s=i(209),l=i(1230),u={is_cate:0,parent_pid:0,thumb_url:"",title:"",content:""};e.a={mixins:[s.a,a.a],components:{Umeditor:l.a},data:function(){return{upload_percent:0,upload_process:!1,parent_pid:0,info:r.b.copy(u),rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}]}}},computed:{upload_header:function(){return{"x-token":this.$store.state.user.token,"x-file-key":"file"}},upload_post:function(){return{mod:"page_thumb_url"}}},watch:{"modal$.show":function(t){t||(this.info=r.b.copy(u))},parent_pid:function(t){this.info.parent_pid=t}},methods:{ok:function(){var t=this;this.$form("form").check().then(function(){var e="add"==t.modal$.action?["pages","post","添加成功！"]:["pages/"+t.info.page_id,"put","修改成功！"],i=o()(e,3),n=i[0],r=i[1],a=i[2];t.$rest(n)[r](t.info).success(function(e){t.$Message.success(a),t.$emit("on-success"),t.close()}).error(function(e){t.$Message.error(e.body.message||"添加失败！")})})},handleUploadSuccess:function(t,e){this.upload_process=!1,e.url=t.data.file_url,e.name=t.data.file_name,this.info.thumb_url=t.data.file_url},handleUploadError:function(t,e){this.$Notice.warning({title:"文件上传失败",desc:"文件 "+e.name+" 上传失败"})},handleUploadBefore:function(t){this.upload_process=!0,this.upload_percent=0},handleUploadProgress:function(t,e,i){this.upload_percent=t.percent},handleFormatError:function(t){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+t.name+" 格式不正确，请上传 jpg 或 png 格式的图片。"})},handleMaxSize:function(t){this.$Notice.warning({title:"超出文件大小限制",desc:"文件 "+t.name+" 太大，不能超过 2M。"})}}}},2128:function(t,e){},2129:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Modal",{directives:[{name:"drag-modal",rawName:"v-drag-modal"}],attrs:{title:t.modal$.title,"mask-closable":!1,width:"800"},model:{value:t.modal$.show,callback:function(e){t.$set(t.modal$,"show",e)},expression:"modal$.show"}},[t.modal$.show?[i("Form",{ref:"form",attrs:{"label-width":80,rules:t.rules,model:t.info}},[i("Form-item",{attrs:{label:"标题",prop:"title"}},[i("Input",{staticStyle:{display:"inline-block",width:"400px"},attrs:{placeholder:"请输入标题"},model:{value:t.info.title,callback:function(e){t.$set(t.info,"title",e)},expression:"info.title"}}),t._v(" "),i("Checkbox",{staticClass:"mb-0 ml-3",staticStyle:{display:"inline-block"},attrs:{"true-value":1,"false-value":0},model:{value:t.info.is_cate,callback:function(e){t.$set(t.info,"is_cate",e)},expression:"info.is_cate"}},[t._v("是否分类")])],1),t._v(" "),i("Form-item",{directives:[{name:"help",rawName:"v-help",value:"微信分享朋友圈封面图",expression:"'微信分享朋友圈封面图'"}],attrs:{label:"缩略图",prop:"thumb_url"}},[i("div",{staticClass:"img-upload"},[i("div",{staticClass:"img-thumb"},[""==t.info.thumb_url?i("Icon",{staticStyle:{"line-height":"inherit"},attrs:{type:"camera",size:"30"}}):i("img",{attrs:{src:t.info.thumb_url},on:{click:function(e){t.picturePreview(t.info.thumb_url)}}})],1),t._v(" "),t.upload_process?i("Progress",{attrs:{percent:t.upload_percent,"stroke-width":5}}):t._e()],1),t._v(" "),i("Upload",{ref:"upload",staticStyle:{display:"inline-block"},attrs:{headers:t.upload_header,"show-upload-list":!1,"on-success":t.handleUploadSuccess,"on-error":t.handleUploadError,format:["jpg","jpeg","png"],"max-size":2048,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,data:t.upload_post,"on-progress":t.handleUploadProgress,"before-upload":t.handleUploadBefore,name:"file",type:"select",action:"/api/upload"}},[i("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline",size:"small"}},[t._v("上传")])],1)],1),t._v(" "),0==t.info.is_cate?i("Form-item",{attrs:{label:"内容",prop:"content"}},[i("umeditor",{model:{value:t.info.content,callback:function(e){t.$set(t.info,"content",e)},expression:"info.content"}})],1):t._e()],1)]:t._e(),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{type:"ghost"},on:{click:t.close}},[t._v("关闭")]),t._v(" "),i("Button",{attrs:{type:"primary"},on:{click:t.ok}},[t._v("确定")])],1)],2)},o=[];n._withStripped=!0;var r={render:n,staticRenderFns:o};e.a=r},394:function(t,e,i){"use strict";function n(t){a||i(2128)}Object.defineProperty(e,"__esModule",{value:!0});var o=i(1567),r=i(2129),a=!1,s=i(11),l=n,u=s(o.a,r.a,!1,l,null,null);u.options.__file="src/views/basic/mobile-page/info-modal.vue",e.default=u.exports},667:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=i(674),r=n(o),a=i(212),s=n(a);e.default=function(){function t(t,e){var i=[],n=!0,o=!1,r=void 0;try{for(var a,l=(0,s.default)(t);!(n=(a=l.next()).done)&&(i.push(a.value),!e||i.length!==e);n=!0);}catch(t){o=!0,r=t}finally{try{!n&&l.return&&l.return()}finally{if(o)throw r}}return i}return function(e,i){if(Array.isArray(e))return e;if((0,r.default)(Object(e)))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},674:function(t,e,i){t.exports={default:i(675),__esModule:!0}},675:function(t,e,i){i(36),i(27),t.exports=i(676)},676:function(t,e,i){var n=i(56),o=i(4)("iterator"),r=i(18);t.exports=i(2).isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||r.hasOwnProperty(n(e))}}});