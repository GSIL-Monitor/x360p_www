webpackJsonp([141],{1251:function(t,e,i){"use strict";function n(t){return t.replace("{{bs.qrcode}}",l)}var s=i(33),r=i.n(s),a=i(54),o=i.n(a),l='<img qrcode="true" src="/static/img/mpqr.jpg" height="110px" width="110px"/>';e.a={name:"Umeditor",props:{value:{type:String,default:""},umeditorPath:{type:String,default:"/static/umeditor/"},config:{type:Object,default:function(){return{}}},toolbar:{type:Array,default:function(){return[]}}},data:function(){return{um:null,domId:"J_UMeditor",defaultToolbar:["source","|"," undo redo","|"," bold italic underline strikethrough horizontal","|"," forecolor backcolor","|","insertorderedlist insertunorderedlist","|","paragraph fontfamily fontsize","|","justifyleft justifycenter justifyright justifyjustify","|","link unlink","|"," removeformat","|","image"],defaultConfig:o()({imageUrl:"",zIndex:1050,initialFrameWidth:"100%",initialFrameHeight:200,autoClearinitialContent:!0},"zIndex",2999),scriptTagStatus:0}},created:function(){void 0!==window.UM?(this.scriptTagStatus=2,this.init()):this.insertScriptTag()},methods:{insertScriptTag:function(){var t=this,e=document.getElementById("editorScriptTag"),i=document.getElementById("configScriptTag"),n=document.getElementById("editorCssTag");if(null===e){n=document.createElement("link"),n.type="text/css",n.rel="stylesheet",n.href=this.umeditorPath+"themes/default/css/umeditor.min.css",i=document.createElement("script"),i.type="text/javascript",i.src=this.umeditorPath+"umeditor.config.js",i.id="umconfigScriptTag",e=document.createElement("script"),e.type="text/javascript",e.src=this.umeditorPath+"umeditor.min.js",e.id="umeditorScriptTag";var s=document.getElementsByTagName("head")[0];s.appendChild(n),s.appendChild(i),s.appendChild(e)}i.loaded?this.scriptTagStatus++:i.addEventListener("load",function(){t.scriptTagStatus++,i.loaded=!0}),e.loaded?this.scriptTagStatus++:e.addEventListener("load",function(){t.scriptTagStatus++,e.loaded=!0,t.init()})},init:function(){var t=this;this.domId=this.getUID(this.domId);var e={};this.defaultConfig.imageUrl=this.serverUrl,r()(e,this.defaultConfig,this.config),e.toolbar=this.toolbar.length>0?this.toolbar:this.defaultToolbar,this.$nextTick(function(){t.initEditor(t.domId,e)})},initEditor:function(t,e){this.um=window.UM.getEditor(t,e),this.bind()},bind:function(){var t=this;this.um.ready(function(){t.um.setContent(t.value)}),this.um.addListener("contentChange",function(){var e=t.getContent();-1!==e.indexOf("{{bs.qrcode}}")&&(e=n(e),t.um.setContent(e)),t.$emit("input",e)})},getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},reset:function(){this.um.reset(),this.um.setContent("")},destroy:function(){this.um.destroy()},setContent:function(t){this.um.setContent(t)},getContent:function(){return this.um.getContent()},droptext:function(t){"{{bs.qrcode}}"==t.dataTransfer.getData("text")&&($(t.target).append(l),t.preventDefault())}},watch:{value:function(t){t!=this.getContent()&&this.um.setContent(t)}},computed:{serverUrl:function(){return"/api/umeditor?token="+this.$store.state.user.token}}}},1337:function(t,e,i){"use strict";var n=i(1251),s=i(1385),r=i(11),a=r(n.a,s.a,!1,null,null,null);a.options.__file="src/views/components/UmEditor.vue",e.a=a.exports},1385:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:t.domId},on:{drop:t.droptext}})},s=[];n._withStripped=!0;var r={render:n,staticRenderFns:s};e.a=r},1992:function(t,e,i){"use strict";var n=i(2959),s=i(2972);e.a={components:{pay:n.a,refund:s.a},data:function(){return{tabs:"pay"}}}},1993:function(t,e,i){"use strict";var n=i(207),s=i(1994);e.a={mixins:[n.a],components:{printTplDesigner:s.a},created:function(){this.init_data()},data:function(){return{bill_type:1,format:"1"}},methods:{init_data:function(){var t=this,e=this.$store.state.gvars.print_tpls.list,i=e.find(function(e){return e.bid==t.bid$&&e.bill_type==t.bill_type&&1==e.is_default})||{};i&&(this.format=String(i.format))}}}},1994:function(t,e,i){"use strict";function n(t){a||i(2960)}var s=i(1995),r=i(2970),a=!1,o=i(11),l=n,u=o(s.a,r.a,!1,l,null,null);u.options.__file="src/views/system/configs/print/tpl-designer.vue",e.a=u.exports},1995:function(t,e,i){"use strict";var n=i(2961),s=i(2964),r=i(2966);e.a={name:"printTplDesigner",components:{printTplDesignerOne:n.a,printTplDesignerTwo:s.a,printTplDesignerThree:r.a},props:{type:{type:[String,Number],default:1},format:{type:[String,Number],default:1}}}},1996:function(t,e,i){"use strict";var n=(i(6),i(207)),s=i(208),r=(i(1),i(1337));e.a={name:"printTplDesignerOne",mixins:[n.a,s.a],props:{type:{type:[Number,String],default:1}},components:{Umeditor:r.a},data:function(){return{format:1,content:"",pt_id:0}},created:function(){this.init_content()},computed:{fields:function(){return this.$store.state.gvars.print_tpls.default[this.type].fields}},methods:{printView:function(){this.print_preview.set("info",this.content).set("width",800).printView()},init_content:function(){var t=this,e=this.$store.state.gvars.print_tpls,i=e.list,n=e.default[this.type][1].content;if(i.length>0){var s=e.list.find(function(e){return e.bid==t.bid$&&e.bill_type==t.type&&e.format==t.format});s&&(this.pt_id=s.pt_id,n=s.json.content)}this.content=n},save:function(){var t=this,e={bid:this.bid$,bill_type:this.type,format:this.format,is_default:1,json:{content:this.content}},i="post",n="print_tpls";this.pt_id>0&&(i="put",n="print_tpls/"+this.pt_id),this.$rest(n)[i](e).success(function(e){t.$store.dispatch("updateGlobalVar","print_tpls").then(function(e){t.init_content}),t.$Message.success("保存成功")}).error(function(e){t.$Message.error(e.body.message||"保存失败")})},setCopyData:function(t,e,i){t.dataTransfer.setData("text","{{"+i+"."+e.field+"}}")},clearCopyData:function(t){t.dataTransfer.clearData("text")}}}},1997:function(t,e,i){"use strict";var n=i(207),s=i(208),r=(i(1),i(1337));e.a={name:"printTplDesignerTwo",mixins:[n.a,s.a],props:{type:{type:[Number,String],default:1}},components:{Umeditor:r.a},data:function(){return{format:2,content:""}},created:function(){this.init_content()},computed:{fields:function(){return this.$store.state.gvars.print_tpls.default[this.type].fields}},methods:{printView:function(){this.print_preview.set("info",this.content).set("width",280).printView()},init_content:function(){var t=this,e=this.$store.state.gvars.print_tpls,i=e.list,n=e.default[this.type][2].content;if(i.length>0){var s=e.list.find(function(e){return e.bid==t.bid$&&e.bill_type==t.type&&e.format==t.format});s&&(this.pt_id=s.pt_id,n=s.json.content)}this.content=n},save:function(){var t=this,e={bid:this.bid$,bill_type:this.type,format:this.format,is_default:1,json:{content:this.content}},i="post",n="print_tpls";this.pt_id>0&&(i="put",n="print_tpls/"+this.pt_id),this.$rest(n)[i](e).success(function(e){t.$store.dispatch("updateGlobalVar","print_tpls").then(function(e){t.init_content}),t.$Message.success("保存成功")}).error(function(e){t.$Message.error(e.body.message||"保存失败")})},setCopyData:function(t,e,i){t.dataTransfer.setData("text","{{"+i+"."+e.field+"}}")},clearCopyData:function(t){t.dataTransfer.clearData("text")}}}},1998:function(t,e,i){"use strict";var n=i(6),s=i(207),r=i(208),a=i(1),o=i(2968),l=i.n(o),u={width:140,height:20,left:0,top:0,font_size:0,letter_spacing:0};e.a={name:"printTplDesignerThree",mixins:[s.a,r.a],props:{type:{type:[Number,String],default:1}},components:{vueDraggableResizable:l.a},data:function(){return{format:3,deleting:!1,content:{items:[],paper_width:150,paper_height:150,print_bg:""},pt_id:0,currentItem:{},currentItemIndex:-1,font_size_list:["12px","14px","16px","18px","20px","22px","24px"],letter_spacing_list:["0px","2px","4px","6px","8px","10px","12px","14px","16px"]}},created:function(){this.init_content()},computed:{_currentItem:{get:function(){return this.currentItem},set:function(t){this.currentItem=t}},upload_header:function(){return{"x-token":this.$store.state.user.token,"x-file-key":"file"}},upload_post:function(){return{mod:"lesson_cover_picture"}},fields:function(){return this.$store.state.gvars.print_tpls.default[this.type].fields}},methods:{print:function(){this.print_preview.lprint(this.content)},handleUploadSuccess:function(t,e){e.url=t.data.file_url,e.name=t.data.file_name,n.a.set(this.content,"print_bg",t.data.file_url)},handleUploadError:function(t,e){this.$Notice.warning({title:"文件上传失败",desc:"文件 "+e.name+" 上传失败"})},handleFormatError:function(t){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+t.name+" 格式不正确，请上传 jpg 或 png 格式的图片。"})},bold:function(){"bold"==this.currentItem.bold?this.currentItem.bold="normal":n.a.set(this.currentItem,"bold","bold")},italic:function(){"italic"==this.currentItem.italic?this.currentItem.italic="normal":n.a.set(this.currentItem,"italic","italic")},fontSize:function(t){this.currentItem.font_size?this.currentItem.font_size=t:n.a.set(this.currentItem,"font_size","0"==t?"inherit":t)},letterSpacing:function(t){this.currentItem.letter_spacing?this.currentItem.letter_spacing=t:n.a.set(this.currentItem,"letter_spacing",t)},init_content:function(){var t=this,e=this.$store.state.gvars.print_tpls,i=e.list,n=e.default[this.type][3].content;if(i.length>0){var s=e.list.find(function(e){return e.bid==t.bid$&&e.bill_type==t.type&&e.format==t.format});s&&(this.pt_id=s.pt_id,n=s.json.content)}n.print_bg=n.print_bg||"/static/img/printbg.jpg",this.content=n},setCurrentItemIndex:function(t,e){this.currentItem=t,this.currentItemIndex=e},onResize:function(t,e,i,n){this.content.items[this.currentItemIndex];this.currentItem.width=i,this.currentItem.height=n},onDrag:function(t,e){this.content.items[this.currentItemIndex];this.currentItem.left=t,this.currentItem.top=e},addItem:function(t){var e=[t.value.split("-")[1],t.value.split("-")[0],t.label],i=e[0],n=e[1],s=e[2],r=a.b.copy(u);this.content.items.find(function(t){return t.field==i})||(r.field=i,r.text=s,r.type=n,this.content.items.push(r),this.currentItem=r)},del:function(t){var e=this;this.deleting=!0,this.$nextTick(function(){e.currentItemIndex=-1,e.content.items.splice(t,1),e.deleting=!1})},save:function(){var t=this,e={bid:this.bid$,bill_type:this.type,format:this.format,is_default:1,json:{content:this.content}},i="post",n="print_tpls";this.pt_id>0&&(i="put",n="print_tpls/"+this.pt_id),this.$rest(n)[i](e).success(function(e){t.$store.dispatch("updateGlobalVar","print_tpls").then(function(e){t.init_content}),t.$Message.success("保存成功")}).error(function(e){t.$Message.error(e.body.message||"保存失败")})},jsonItems:function(t){var e=this,i=this.$store.state.gvars.print_tpls;if(i.list>0){var n=i.list.find(function(t){return t.bid==e.bid$&&t.bill_type==e.type&&t.format==e.format});if(n)return n.json.content.items.filter(function(e){return e.type==t})}return i.default[this.type][3].content.items.filter(function(e){return e.type==t})}}}},1999:function(t,e,i){"use strict";var n=i(207),s=i(1994);e.a={mixins:[n.a],components:{printTplDesigner:s.a},created:function(){this.init_data()},data:function(){return{bill_type:2,format:"1"}},methods:{init_data:function(){var t=this,e=this.$store.state.gvars.print_tpls.list,i=e.find(function(e){return e.bid==t.bid$&&e.bill_type==t.bill_type&&1==e.is_default});i&&(this.format=String(i.format))}}}},2958:function(t,e){},2959:function(t,e,i){"use strict";var n=i(1993),s=i(2971),r=i(11),a=r(n.a,s.a,!1,null,null,null);a.options.__file="src/views/system/configs/print/pay.vue",e.a=a.exports},2960:function(t,e){},2961:function(t,e,i){"use strict";function n(t){a||i(2962)}var s=i(1996),r=i(2963),a=!1,o=i(11),l=n,u=o(s.a,r.a,!1,l,null,null);u.options.__file="src/views/system/configs/print/tpl-designer-one.vue",e.a=u.exports},2962:function(t,e){},2963:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mt-3 row"},[i("div",{staticClass:"col-sm-2"},[i("Card",{staticClass:"x-ivu-card",attrs:{"dis-hover":""}},[i("span",{attrs:{slot:"title"},slot:"title"},[t._v("可用变量")]),t._v(" "),i("div",{staticClass:"p-0"},[i("ul",{staticClass:"x-field"},[i("li",{staticClass:"title"},[t._v("系统变量")]),t._v(" "),t._l(t.fields.sys,function(e,n){return i("li",[i("span",{attrs:{draggable:"true"},on:{dragstart:function(i){t.setCopyData(i,e,"sys")},dragend:t.clearCopyData}},[i("em",[t._v("{{sys.")]),t._v("\r\n\t\t\t\t\t\t"+t._s(e.field)+"\r\n\t\t\t\t\t\t"),i("em",[t._v("}}")])]),t._v(" "),i("code",[t._v(t._s(e.text))])])}),t._v(" "),i("li",{staticClass:"title"},[t._v("基础变量")]),t._v(" "),t._l(t.fields.bs,function(e,n){return i("li",[i("span",{attrs:{draggable:"true"},on:{dragstart:function(i){t.setCopyData(i,e,"bs")},dragend:t.clearCopyData}},[i("em",[t._v("{{bs.")]),t._v("\r\n\t\t\t\t\t\t"+t._s(e.field)+"\r\n\t\t\t\t\t\t"),i("em",[t._v("}}")])]),t._v(" "),i("code",[t._v(t._s(e.text))])])}),t._v(" "),i("li",{staticClass:"title"},[t._v("列表变量")]),t._v(" "),t._l(t.fields.bm,function(e,n){return i("li",[i("span",{attrs:{draggable:"true"},on:{dragstart:function(i){t.setCopyData(i,e,"item")},dragend:t.clearCopyData}},[i("em",[t._v("{{item.")]),t._v("\r\n\t\t\t\t\t\t"+t._s(e.field)+"\r\n\t\t\t\t\t\t"),i("em",[t._v("}}")])]),t._v(" "),i("code",[t._v(t._s(e.text))])])})],2)])])],1),t._v(" "),i("div",{staticClass:"col-sm-10"},[i("umeditor",{model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),i("div",{staticClass:"footer-btn mt-3 pl-3"},[i("Button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")]),t._v(" "),i("Button",{staticClass:"ml-3",attrs:{type:"info"},on:{click:t.printView}},[t._v("打印预览")])],1)])},s=[];n._withStripped=!0;var r={render:n,staticRenderFns:s};e.a=r},2964:function(t,e,i){"use strict";var n=i(1997),s=i(2965),r=i(11),a=r(n.a,s.a,!1,null,null,null);a.options.__file="src/views/system/configs/print/tpl-designer-two.vue",e.a=a.exports},2965:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mt-3 row"},[i("div",{staticClass:"col-sm-2"},[i("Card",{staticClass:"x-ivu-card",attrs:{"dis-hover":""}},[i("span",{attrs:{slot:"title"},slot:"title"},[t._v("可用变量")]),t._v(" "),i("div",{staticClass:"p-0"},[i("ul",{staticClass:"x-field"},[i("li",{staticClass:"title"},[t._v("系统变量")]),t._v(" "),t._l(t.fields.sys,function(e,n){return i("li",[i("span",{attrs:{draggable:"true"},on:{dragstart:function(i){t.setCopyData(i,e,"sys")},dragend:t.clearCopyData}},[i("em",[t._v("{{sys.")]),t._v("\r\n\t\t\t\t\t\t"+t._s(e.field)+"\r\n\t\t\t\t\t\t"),i("em",[t._v("}}")])]),t._v(" "),i("code",[t._v(t._s(e.text))])])}),t._v(" "),i("li",{staticClass:"title"},[t._v("基础变量")]),t._v(" "),t._l(t.fields.bs,function(e,n){return i("li",[i("span",{attrs:{draggable:"true"},on:{dragstart:function(i){t.setCopyData(i,e,"bs")},dragend:t.clearCopyData}},[i("em",[t._v("{{bs.")]),t._v("\r\n\t\t\t\t\t\t"+t._s(e.field)+"\r\n\t\t\t\t\t\t"),i("em",[t._v("}}")])]),t._v(" "),i("code",[t._v(t._s(e.text))])])}),t._v(" "),i("li",{staticClass:"title"},[t._v("列表变量")]),t._v(" "),t._l(t.fields.bm,function(e,n){return i("li",[i("span",{attrs:{draggable:"true"},on:{dragstart:function(i){t.setCopyData(i,e,"item")},dragend:t.clearCopyData}},[i("em",[t._v("{{item.")]),t._v("\r\n\t\t\t\t\t\t"+t._s(e.field)+"\r\n\t\t\t\t\t\t"),i("em",[t._v("}}")])]),t._v(" "),i("code",[t._v(t._s(e.text))])])})],2)])])],1),t._v(" "),i("div",{staticClass:"col-sm-10"},[i("umeditor",{attrs:{config:{initialFrameWidth:320}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),i("div",{staticClass:"footer-btn mt-3 pl-3"},[i("Button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")]),t._v(" "),i("Button",{staticClass:"ml-3",attrs:{type:"info"},on:{click:t.printView}},[t._v("打印预览")])],1)])},s=[];n._withStripped=!0;var r={render:n,staticRenderFns:s};e.a=r},2966:function(t,e,i){"use strict";function n(t){a||i(2967)}var s=i(1998),r=i(2969),a=!1,o=i(11),l=n,u=o(s.a,r.a,!1,l,null,null);u.options.__file="src/views/system/configs/print/tpl-designer-three.vue",e.a=u.exports},2967:function(t,e){},2968:function(t,e,i){!function(e,i){t.exports=i()}(0,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,i){i(7);var n=i(5)(i(1),i(6),"data-v-2bcd502f",null);n.options.__file="/Applications/MAMP/htdocs/vdr/src/components/vue-draggable-resizable.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] vue-draggable-resizable.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={replace:!0,name:"vue-draggable-resizable",props:{active:{type:Boolean,default:!1},draggable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},w:{type:Number,default:200,validator:function(t){return t>0}},h:{type:Number,default:200,validator:function(t){return t>0}},minw:{type:Number,default:50,validator:function(t){return t>0}},minh:{type:Number,default:50,validator:function(t){return t>0}},x:{type:Number,default:0,validator:function(t){return"number"==typeof t}},y:{type:Number,default:0,validator:function(t){return"number"==typeof t}},z:{type:[String,Number],default:"auto",validator:function(t){return"string"==typeof t?"auto"===t:t>=0}},handles:{type:Array,default:function(){return["tl","tm","tr","mr","br","bm","bl","ml"]}},axis:{type:String,default:"both",validator:function(t){return-1!==["x","y","both"].indexOf(t)}},grid:{type:Array,default:function(){return[1,1]}},parent:{type:Boolean,default:!1},maximize:{type:Boolean,default:!1}},created:function(){this.parentX=0,this.parentW=9999,this.parentY=0,this.parentH=9999,this.mouseX=0,this.mouseY=0,this.lastMouseX=0,this.lastMouseY=0,this.mouseOffX=0,this.mouseOffY=0,this.elmX=0,this.elmY=0,this.elmW=0,this.elmH=0},mounted:function(){document.documentElement.addEventListener("mousemove",this.handleMove,!0),document.documentElement.addEventListener("mousedown",this.deselect,!0),document.documentElement.addEventListener("mouseup",this.handleUp,!0),this.elmX=parseInt(this.$el.style.left),this.elmY=parseInt(this.$el.style.top),this.elmW=this.$el.offsetWidth||this.$el.clientWidth,this.elmH=this.$el.offsetHeight||this.$el.clientHeight,this.reviewDimensions()},beforeDestroy:function(){document.documentElement.removeEventListener("mousemove",this.handleMove,!0),document.documentElement.removeEventListener("mousedown",this.deselect,!0),document.documentElement.removeEventListener("mouseup",this.handleUp,!0)},data:function(){return{top:this.y,left:this.x,width:this.w,height:this.h,resizing:!1,dragging:!1,enabled:this.active,handle:null,zIndex:this.z}},methods:{reviewDimensions:function(){if(this.minw>this.w&&(this.width=this.minw),this.minh>this.h&&(this.height=this.minh),this.parent){var t=parseInt(this.$el.parentNode.clientWidth,10),e=parseInt(this.$el.parentNode.clientHeight,10);this.parentW=t,this.parentH=e,this.w>this.parentW&&(this.width=t),this.h>this.parentH&&(this.height=e),this.x+this.w>this.parentW&&(this.width=t-this.x),this.y+this.h>this.parentH&&(this.height=e-this.y),this.elmW=this.width,this.elmH=this.height}this.$emit("resizing",this.left,this.top,this.width,this.height)},elmDown:function(t){var e=t.target||t.srcElement;this.$el.contains(e)&&(this.reviewDimensions(),this.enabled||(this.enabled=!0,this.$emit("activated"),this.$emit("update:active",!0)),this.draggable&&(this.dragging=!0))},deselect:function(t){this.mouseX=t.pageX||t.clientX+document.documentElement.scrollLeft,this.mouseY=t.pageY||t.clientY+document.documentElement.scrollTop,this.lastMouseX=this.mouseX,this.lastMouseY=this.mouseY;var e=t.target||t.srcElement,i=new RegExp("handle-([trmbl]{2})","");this.$el.contains(e)||i.test(e.className)||this.enabled&&(this.enabled=!1,this.$emit("deactivated"),this.$emit("update:active",!1))},handleDown:function(t,e){this.handle=t,e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),this.resizing=!0},fillParent:function(t){var e=this;if(this.parent&&this.resizable&&this.maximize){var i=!1,n=function t(){i||window.requestAnimationFrame(t),"x"===e.axis?e.width===e.parentW&&e.left===e.parentX&&(i=!0):"y"===e.axis?e.height===e.parentH&&e.top===e.parentY&&(i=!0):"both"===e.axis&&e.width===e.parentW&&e.height===e.parentH&&e.top===e.parentY&&e.left===e.parentX&&(i=!0),"x"!==e.axis&&"both"!==e.axis||(e.width<e.parentW&&(e.width++,e.elmW++),e.left>e.parentX&&(e.left--,e.elmX--)),"y"!==e.axis&&"both"!==e.axis||(e.height<e.parentH&&(e.height++,e.elmH++),e.top>e.parentY&&(e.top--,e.elmY--)),e.$emit("resizing",e.left,e.top,e.width,e.height)};window.requestAnimationFrame(n)}},handleMove:function(t){this.mouseX=t.pageX||t.clientX+document.documentElement.scrollLeft,this.mouseY=t.pageY||t.clientY+document.documentElement.scrollTop;var e=this.mouseX-this.lastMouseX+this.mouseOffX,i=this.mouseY-this.lastMouseY+this.mouseOffY;this.mouseOffX=this.mouseOffY=0,this.lastMouseX=this.mouseX,this.lastMouseY=this.mouseY;var n=e,s=i;this.resizing?(this.handle.indexOf("t")>=0&&(this.elmH-s<this.minh?this.mouseOffY=s-(i=this.elmH-this.minh):this.elmY+s<this.parentY&&(this.mouseOffY=s-(i=this.parentY-this.elmY)),this.elmY+=i,this.elmH-=i),this.handle.indexOf("b")>=0&&(this.elmH+s<this.minh?this.mouseOffY=s-(i=this.minh-this.elmH):this.elmY+this.elmH+s>this.parentH&&(this.mouseOffY=s-(i=this.parentH-this.elmY-this.elmH)),this.elmH+=i),this.handle.indexOf("l")>=0&&(this.elmW-n<this.minw?this.mouseOffX=n-(e=this.elmW-this.minw):this.elmX+n<this.parentX&&(this.mouseOffX=n-(e=this.parentX-this.elmX)),this.elmX+=e,this.elmW-=e),this.handle.indexOf("r")>=0&&(this.elmW+n<this.minw?this.mouseOffX=n-(e=this.minw-this.elmW):this.elmX+this.elmW+n>this.parentW&&(this.mouseOffX=n-(e=this.parentW-this.elmX-this.elmW)),this.elmW+=e),this.left=Math.round(this.elmX/this.grid[0])*this.grid[0],this.top=Math.round(this.elmY/this.grid[1])*this.grid[1],this.width=Math.round(this.elmW/this.grid[0])*this.grid[0],this.height=Math.round(this.elmH/this.grid[1])*this.grid[1],this.$emit("resizing",this.left,this.top,this.width,this.height)):this.dragging&&(this.parent&&(this.elmX+n<this.parentX?this.mouseOffX=n-(e=this.parentX-this.elmX):this.elmX+this.elmW+n>this.parentW&&(this.mouseOffX=n-(e=this.parentW-this.elmX-this.elmW)),this.elmY+s<this.parentY?this.mouseOffY=s-(i=this.parentY-this.elmY):this.elmY+this.elmH+s>this.parentH&&(this.mouseOffY=s-(i=this.parentH-this.elmY-this.elmH))),this.elmX+=e,this.elmY+=i,"x"!==this.axis&&"both"!==this.axis||(this.left=Math.round(this.elmX/this.grid[0])*this.grid[0]),"y"!==this.axis&&"both"!==this.axis||(this.top=Math.round(this.elmY/this.grid[1])*this.grid[1]),this.$emit("dragging",this.left,this.top))},handleUp:function(t){this.handle=null,this.resizing&&(this.resizing=!1,this.$emit("resizestop",this.left,this.top,this.width,this.height)),this.dragging&&(this.dragging=!1,this.$emit("dragstop",this.left,this.top)),this.elmX=this.left,this.elmY=this.top}},computed:{style:function(){return{top:this.top+"px",left:this.left+"px",width:this.width+"px",height:this.height+"px",zIndex:this.zIndex}}},watch:{active:function(t){this.enabled=t},z:function(t){(t>=0||"auto"===t)&&(this.zIndex=t)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=i.n(n);i.d(e,"default",function(){return s.a})},function(t,e,i){e=t.exports=i(4)(),e.push([t.i,"\n.vdr[data-v-2bcd502f] {\n  position: absolute;\n  box-sizing: border-box;\n}\n.draggable[data-v-2bcd502f]:hover {\n  cursor: move;\n}\n.handle[data-v-2bcd502f] {\n  box-sizing: border-box;\n  display: none;\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  font-size: 1px;\n  background: #EEE;\n  border: 1px solid #333;\n}\n.handle-tl[data-v-2bcd502f] {\n  top: -10px;\n  left: -10px;\n  cursor: nw-resize;\n}\n.handle-tm[data-v-2bcd502f] {\n  top: -10px;\n  left: 50%;\n  margin-left: -5px;\n  cursor: n-resize;\n}\n.handle-tr[data-v-2bcd502f] {\n  top: -10px;\n  right: -10px;\n  cursor: ne-resize;\n}\n.handle-ml[data-v-2bcd502f] {\n  top: 50%;\n  margin-top: -5px;\n  left: -10px;\n  cursor: w-resize;\n}\n.handle-mr[data-v-2bcd502f] {\n  top: 50%;\n  margin-top: -5px;\n  right: -10px;\n  cursor: e-resize;\n}\n.handle-bl[data-v-2bcd502f] {\n  bottom: -10px;\n  left: -10px;\n  cursor: sw-resize;\n}\n.handle-bm[data-v-2bcd502f] {\n  bottom: -10px;\n  left: 50%;\n  margin-left: -5px;\n  cursor: s-resize;\n}\n.handle-br[data-v-2bcd502f] {\n  bottom: -10px;\n  right: -10px;\n  cursor: se-resize;\n}\n",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(n[r]=!0)}for(s=0;s<e.length;s++){var a=e[s];"number"==typeof a[0]&&n[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),t.push(a))}},t}},function(t,e){t.exports=function(t,e,i,n){var s,r=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,r=t.default);var o="function"==typeof r?r.options:r;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),i&&(o._scopeId=i),n){var l=Object.create(o.computed||null);Object.keys(n).forEach(function(t){var e=n[t];l[t]=function(){return e}}),o.computed=l}return{esModule:s,exports:r,options:o}}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vdr",class:{draggable:t.draggable,resizable:t.resizable,active:t.enabled,dragging:t.dragging,resizing:t.resizing},style:t.style,on:{mousedown:function(e){e.stopPropagation(),t.elmDown(e)},dblclick:t.fillParent}},[t._l(t.handles,function(e){return t.resizable?i("div",{staticClass:"handle",class:"handle-"+e,style:{display:t.enabled?"block":"none"},on:{mousedown:function(i){i.stopPropagation(),i.preventDefault(),t.handleDown(e,i)}}}):t._e()}),t._v(" "),t._t("default")],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,i){var n=i(3);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),i(8)("4764308c",n,!1)},function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=c[i.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](i.parts[s]);for(;s<i.parts.length;s++)n.parts.push(r(i.parts[s]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var a=[],s=0;s<i.parts.length;s++)a.push(r(i.parts[s]));c[i.id]={id:i.id,refs:1,parts:a}}}}function s(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function r(t){var e,i,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(f)return m;n.parentNode.removeChild(n)}if(v){var r=h++;n=p||(p=s()),e=a.bind(null,n,r,!1),i=a.bind(null,n,r,!0)}else n=s(),e=o.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function a(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=_(e,s);else{var r=document.createTextNode(s),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function o(t,e){var i=e.css,n=e.media,s=e.sourceMap;if(n&&t.setAttribute("media",n),s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=i(9),c={},d=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,h=0,f=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){f=i;var s=u(t,e);return n(s),function(e){for(var i=[],r=0;r<s.length;r++){var a=s[r],o=c[a.id];o.refs--,i.push(o)}e?(s=u(t,e),n(s)):s=[];for(var r=0;r<i.length;r++){var o=i[r];if(0===o.refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete c[o.id]}}}};var _=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var i=[],n={},s=0;s<e.length;s++){var r=e[s],a=r[0],o=r[1],l=r[2],u=r[3],c={id:t+":"+s,css:o,media:l,sourceMap:u};n[a]?n[a].parts.push(c):i.push(n[a]={id:a,parts:[c]})}return i}}])})},2969:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"row mt-3 m-0"},[i("Input",{staticClass:"col-sm-3",model:{value:t.content.paper_width,callback:function(e){t.$set(t.content,"paper_width",e)},expression:"content.paper_width"}},[i("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("纸张宽度")]),t._v(" "),i("span",{attrs:{slot:"append"},slot:"append"},[t._v("mm")])]),t._v(" "),i("Input",{staticClass:"col-sm-3 ml-3",model:{value:t.content.paper_height,callback:function(e){t.$set(t.content,"paper_height",e)},expression:"content.paper_height"}},[i("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("纸张高度")]),t._v(" "),i("span",{attrs:{slot:"append"},slot:"append"},[t._v("mm")])]),t._v(" "),i("Upload",{ref:"upload",staticClass:"ml-3",staticStyle:{display:"inline-block"},attrs:{headers:t.upload_header,"show-upload-list":!1,"on-success":t.handleUploadSuccess,"on-error":t.handleUploadError,format:["jpg","jpeg","png"],"on-format-error":t.handleFormatError,action:"/api/upload",data:t.upload_post,"max-size":2048,name:"file",type:"select"}},[i("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[t._v("更换单据背景图")])],1)],1),t._v(" "),i("div",{staticClass:"mt-3"},[i("Select",{staticStyle:{width:"180px"},attrs:{"label-in-value":!0},on:{"on-change":t.addItem}},[i("OptionGroup",{attrs:{label:"系统变量"}},t._l(t.fields.sys,function(e,n){return i("Option",{key:n,attrs:{value:"sys-"+e.field}},[t._v(t._s(e.text))])})),t._v(" "),i("OptionGroup",{attrs:{label:"主要变量"}},t._l(t.fields.bs,function(e,n){return i("Option",{key:n,attrs:{value:"bs-"+e.field}},[t._v(t._s(e.text))])})),t._v(" "),i("OptionGroup",{attrs:{label:"列表变量"}},t._l(t.fields.bm,function(e,n){return i("Option",{key:n,attrs:{value:"bm-"+e.field}},[t._v(t._s(e.text))])}))],1),t._v(" "),i("Select",{staticStyle:{width:"150px"},attrs:{value:t.currentItem.font_size},on:{"on-change":t.fontSize}},[i("Option",{attrs:{value:0}},[t._v("字体大小")]),t._v(" "),t._l(t.font_size_list,function(e,n){return i("Option",{key:n,attrs:{value:e}},[t._v(t._s(e))])})],2),t._v(" "),i("Select",{staticStyle:{width:"150px"},attrs:{value:t.currentItem.letter_spacing},on:{"on-change":t.letterSpacing}},[i("Option",{attrs:{value:0}},[t._v("文字间距")]),t._v(" "),t._l(t.letter_spacing_list,function(e,n){return i("Option",{key:n,attrs:{value:e}},[t._v(t._s(e))])})],2),t._v(" "),i("Button",{attrs:{type:"bold"==t.currentItem.bold?"primary":"ghost"},on:{click:t.bold}},[t._v("B")]),t._v(" "),i("Button",{attrs:{type:"italic"==t.currentItem.italic?"primary":"ghost"},on:{click:t.italic}},[t._v("I")]),t._v("\r\n    \t左偏移："),i("InputNumber",{attrs:{max:1e3,min:0},model:{value:t._currentItem.left,callback:function(e){t.$set(t._currentItem,"left",e)},expression:"_currentItem.left"}}),t._v("px\r\n    \t上偏移："),i("InputNumber",{attrs:{max:1e3,min:0},model:{value:t._currentItem.top,callback:function(e){t.$set(t._currentItem,"top",e)},expression:"_currentItem.top"}}),t._v("px\r\n    \t宽："),i("InputNumber",{attrs:{max:1e3,min:0},model:{value:t._currentItem.width,callback:function(e){t.$set(t._currentItem,"width",e)},expression:"_currentItem.width"}}),t._v("px\r\n    \t高："),i("InputNumber",{attrs:{max:1e3,min:0},model:{value:t._currentItem.height,callback:function(e){t.$set(t._currentItem,"height",e)},expression:"_currentItem.height"}}),t._v("px\r\n\t")],1),t._v(" "),i("div",{staticClass:"editor-container mt-3"},[i("div",{staticClass:"print-bg"},[i("img",{attrs:{src:t.content.print_bg}})]),t._v(" "),t._l(t.content.items,function(e,n){return[t.deleting?t._e():i("vue-draggable-resizable",{staticClass:"print-item",staticStyle:{border:"1px solid"},attrs:{parent:!0,resizable:!0,minh:18,minw:50,w:e.width,h:e.height,x:e.left,y:e.top},on:{resizestop:t.onResize,dragstop:t.onDrag,activated:function(i){t.setCurrentItemIndex(e,n)}}},[i("Icon",{staticClass:"print-item-del",attrs:{type:"close"},nativeOn:{click:function(e){e.stopPropagation(),e.preventDefault(),t.del(n)}}}),t._v(" "),i("textarea",{style:{lineHeight:e.height+"px",fontSize:e.font_size,letterSpacing:e.letter_spacing,fontStyle:e.italic,fontWeight:e.bold},attrs:{readonly:""},domProps:{value:e.field}})],1)]})],2),t._v(" "),i("div",{staticClass:"footer-btn mt-3"},[i("Button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")]),t._v(" "),i("Button",{staticClass:"ml-3",attrs:{type:"info"},on:{click:t.print}},[t._v("打印")])],1)])},s=[];n._withStripped=!0;var r={render:n,staticRenderFns:s};e.a=r},2970:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[1==t.format?i("print-tpl-designer-one",{attrs:{type:t.type}}):t._e(),t._v(" "),2==t.format?i("print-tpl-designer-two",{attrs:{type:t.type}}):t._e(),t._v(" "),3==t.format?i("print-tpl-designer-three",{attrs:{type:t.type}}):t._e()],1)},s=[];n._withStripped=!0;var r={render:n,staticRenderFns:s};e.a=r},2971:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Card",{attrs:{"dis-hover":""}},[i("div",{attrs:{slot:"title"},slot:"title"},[t._v("收费模板")]),t._v(" "),i("div",{},[i("RadioGroup",{attrs:{type:"button"},model:{value:t.format,callback:function(e){t.format=e},expression:"format"}},[i("Radio",{attrs:{label:"1"}},[t._v("白单")]),t._v(" "),i("Radio",{attrs:{label:"2"}},[t._v("小票")]),t._v(" "),i("Radio",{attrs:{label:"3"}},[t._v("针式套打")])],1),t._v(" "),i("print-tpl-designer",{attrs:{type:t.bill_type,format:t.format}})],1)])},s=[];n._withStripped=!0;var r={render:n,staticRenderFns:s};e.a=r},2972:function(t,e,i){"use strict";var n=i(1999),s=i(2973),r=i(11),a=r(n.a,s.a,!1,null,null,null);a.options.__file="src/views/system/configs/print/refund.vue",e.a=a.exports},2973:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Card",{attrs:{"dis-hover":""}},[i("div",{attrs:{slot:"title"},slot:"title"},[t._v("退费模板")]),t._v(" "),i("div",{},[i("RadioGroup",{attrs:{type:"button"},model:{value:t.format,callback:function(e){t.format=e},expression:"format"}},[i("Radio",{attrs:{label:"1"}},[t._v("白单")]),t._v(" "),i("Radio",{attrs:{label:"2"}},[t._v("小票")]),t._v(" "),i("Radio",{attrs:{label:"3"}},[t._v("针式套打")])],1),t._v(" "),i("print-tpl-designer",{attrs:{type:t.bill_type,format:t.format}})],1)])},s=[];n._withStripped=!0;var r={render:n,staticRenderFns:s};e.a=r},2974:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Tabs",{model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[i("TabPane",{staticClass:"x-fixed-parent",attrs:{name:"pay",label:"缴费模板"}},["pay"==t.tabs?i("pay"):t._e()],1),t._v(" "),i("TabPane",{staticClass:"x-fixed-parent",attrs:{name:"refund",label:"退费模板"}},["refund"==t.tabs?i("refund"):t._e()],1)],1)},s=[];n._withStripped=!0;var r={render:n,staticRenderFns:s};e.a=r},570:function(t,e,i){"use strict";function n(t){a||i(2958)}Object.defineProperty(e,"__esModule",{value:!0});var s=i(1992),r=i(2974),a=!1,o=i(11),l=n,u=o(s.a,r.a,!1,l,null,null);u.options.__file="src/views/system/configs/print.vue",e.default=u.exports}});