webpackJsonp([92],{1137:function(t,e,n){"use strict";var o=n(1162);e.a={mixins:[o.a],props:{info:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{handleUploadSuccess:function(t,e){this.upload_process=!1,this.info.logo=t.data.file_url}}}},1138:function(t,e,n){"use strict";e.a={props:{info:{type:Object,default:function(){return{}}}}}},1139:function(t,e,n){var o,i,a;!function(r,s){i=[t,n(1140),n(1142),n(1143)],o=s,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function c(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=i(e),u=i(n),p=i(o),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),h=function(t){function e(t,n){a(this,e);var o=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return s(e,t),d(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===f(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,p.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return c("action",t)}},{key:"defaultTarget",value:function(t){var e=c("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return c("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(u.default);t.exports=h})},1140:function(t,e,n){var o,i,a;!function(r,s){i=[t,n(1141)],o=s,void 0!==(a="function"==typeof o?o.apply(e,i):o)&&(t.exports=a)}(0,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(t){return t&&t.__esModule?t:{default:t}}(e),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=function(){function t(e){n(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=r})},1141:function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(t),o.removeAllRanges(),o.addRange(i),e=o.toString()}return e}t.exports=n},1142:function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){i.off(t,o),e.apply(n,arguments)}var i=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;for(o;o<i;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var a=0,r=o.length;a<r;a++)o[a].fn!==e&&o[a].fn._!==e&&i.push(o[a]);return i.length?n[t]=i:delete n[t],this}},t.exports=n},1143:function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!s.string(e))throw new TypeError("Second argument must be a String");if(!s.fn(n))throw new TypeError("Third argument must be a Function");if(s.node(t))return i(t,e,n);if(s.nodeList(t))return a(t,e,n);if(s.string(t))return r(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function a(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function r(t,e,n){return c(document.body,t,e,n)}var s=n(1144),c=n(1145);t.exports=o},1144:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},1145:function(t,e,n){function o(t,e,n,o,i){var r=a.apply(this,arguments);return t.addEventListener(n,r,i),{destroy:function(){t.removeEventListener(n,r,i)}}}function i(t,e,n,i,a){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return o(t,e,n,i,a)}))}function a(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}var r=n(1146);t.exports=i},1146:function(t,e){function n(t,e){for(;t&&t.nodeType!==o;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var o=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}t.exports=n},1162:function(t,e,n){"use strict";e.a={data:function(){return{upload_process:!1,upload_percent:0}},computed:{upload_header:function(){return{"x-token":this.$store.state.user.token,"x-file-key":"file"}},pcUrl:function(){var t=this.$store.state.user.info.product_url,e=this.$store.state.user.info.x_sub_host;return t.split("//")[0]+"//"+e+"."+t.split("//")[1]},mobileUrl:function(){var t=this.$store.state.user.info.product_url,e=this.$store.state.user.info.x_sub_host;return t.split("//")[0]+"//"+e+"."+t.split("//")[1]+"/student/login"}},methods:{save:function(){this.$emit("on-save")},handleUploadError:function(t,e){this.$Notice.warning({title:"文件上传失败",desc:"文件 "+e.name+" 上传失败"})},handleUploadBefore:function(t){this.upload_process=!0,this.upload_percent=0},handleUploadProgress:function(t,e,n){this.upload_percent=t.percent},handleFormatError:function(t){this.upload_process=!1,this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+t.name+" 格式不正确，请上传 jpg 或 png 格式的图片。"})},handleMaxSize:function(t){this.$Notice.warning({title:"超出文件大小限制",desc:"文件 "+t.name+" 太大，不能超过 2M。"})}}}},1309:function(t,e,n){"use strict";function o(t){r||n(1310)}var i=n(1137),a=n(1311),r=!1,s=n(11),c=o,l=s(i.a,a.a,!1,c,null,null);l.options.__file="src/views/system/configs/ui/tab-mobile.vue",e.a=l.exports},1310:function(t,e){},1311:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Form",{attrs:{"label-position":"top"}},[n("Form-item",{attrs:{label:"登录地址"}},[n("Input",{attrs:{value:t.mobileUrl,disabled:""}},[n("Button",{staticClass:"copy-btn",attrs:{slot:"append",type:"ghost","data-clipboard-text":t.mobileUrl},slot:"append"},[t._v("复制")])],1)],1),t._v(" "),n("Form-item",{attrs:{label:"系统名称(登录页及标题栏显示)"}},[n("Input",{attrs:{placeholder:"请输入系统名称"},model:{value:t.info.system_name,callback:function(e){t.$set(t.info,"system_name",e)},expression:"info.system_name"}})],1),t._v(" "),n("Form-item",{attrs:{label:"顶部Logo(格式:.jpg格式,尺寸:200px*50px,文件大小:<= 200KB)"}},[n("img",{staticStyle:{width:"50px",height:"50px",background:"#03a9f3"},attrs:{src:t.info.logo}}),n("br"),t._v(" "),n("Upload",{ref:"upload",attrs:{headers:t.upload_header,"show-upload-list":!1,"on-success":t.handleUploadSuccess,"on-error":t.handleUploadError,format:["jpg","jpeg","png"],"max-size":1024,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"on-progress":t.handleUploadProgress,"before-upload":t.handleUploadBefore,name:"file",type:"select",action:"/api/upload"}},[n("Button",{staticClass:"mt-2",attrs:{loading:t.upload_process,type:"ghost",icon:"ios-cloud-upload-outline"}},[t._v("更换顶部LOGO")])],1)],1),t._v(" "),n("Form-item",[n("Button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")])],1)],1)},i=[];o._withStripped=!0;var a={render:o,staticRenderFns:i};e.a=a},1312:function(t,e,n){"use strict";function o(t){r||n(1313)}var i=n(1138),a=n(1314),r=!1,s=n(11),c=o,l=s(i.a,a.a,!1,c,"data-v-a5a40784",null);l.options.__file="src/views/system/configs/ui/preview-mobile.vue",e.a=l.exports},1313:function(t,e){},1314:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-layout"},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:t.info.logo}})]),t._v(" "),t._m(0)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form"},[n("div",{staticClass:"x-login-box"},[n("div",[n("input",{attrs:{readonly:"",type:"text",placeholder:"手机号"}})]),t._v(" "),n("div",[n("input",{attrs:{readonly:"",placeholder:"密码"}})])]),t._v(" "),n("div",{staticClass:"bottom"},[n("button",{staticClass:"x-btn x-btn-lg",attrs:{type:"primary"}},[t._v("登录")])]),t._v(" "),n("div",{staticClass:"bottom-link"},[n("a",[t._v("注册账号")]),t._v(" "),n("span",[t._v("|")]),t._v(" "),n("a",[t._v("忘记密码?")])])])}];o._withStripped=!0;var a={render:o,staticRenderFns:i};e.a=a},1707:function(t,e,n){"use strict";var o=n(555),i=n.n(o),a=(n(1),n(207)),r=n(2596),s=n(1309),c=n(2599),l=n(1312),u=n(1139),p=n.n(u),f=null;e.a={mixins:[a.a],components:{tabPc:r.a,tabMobile:s.a,previewPc:c.a,previewMobile:l.a},data:function(){return{tab:"pc"}},mounted:function(){var t=this;f=new p.a(".copy-btn"),f.on("success",function(e){t.$Message.success("复制成功！"),e.clearSelection()})},destroyed:function(){f.destroy()},computed:{info:function(){return this.$store.state.client.params}},methods:{handleSubmit:function(){var t=this,e="add"===this.action?["post","configs/edit_center_params"]:["put","configs/edit_center_params"],n=i()(e,2),o=n[0],a=n[1],r={cid:this.$store.state.client.cid,params:{}};r.params[this.tab]=this.info[this.tab],this.$http[o](a,r).then(function(e){var n={client:{params:t.info}};t.$Message.success("保存成功!"),t.$store.commit("updateUserInfo",{user:n,action:"changeUI"})},function(e){t.$Message.error(e.message)})}}}},1708:function(t,e,n){"use strict";var o=n(1162);e.a={mixins:[o.a],props:{info:{type:Object,default:function(){return{}}}},data:function(){return{upload_process:!1,upload_percent:0}},methods:{handleUploadSuccess1:function(t,e){this.upload_process=!1,this.info.login_img=t.data.file_url},handleUploadSuccess2:function(t,e){this.upload_process=!1,this.info.big_logo=t.data.file_url},handleUploadSuccess3:function(t,e){this.upload_process=!1,this.info.small_logo=t.data.file_url}}}},1709:function(t,e,n){"use strict";var o=n(54);e.a={mixins:[o.a],props:{info:{type:Object,default:function(){return{}}}},data:function(){return{accountFocus:!1,captchaFocus:!1,passwordFocus:!1,formLogin:{account:"",password:"",captcha:""},captchaUrl:"/api/captcha"}},methods:{inputFocus:function(t,e){var n=t.target.parentNode.style;if(n.borderColor="#5cadff",n.color="#5cadff",e){this[e+"Focus"]=!0}},inputBlur:function(t,e){var n=t.target.parentNode.style;if(n.borderColor="#DDDDDD",n.color="#c5c5c5",e){this[e+"Focus"]=!1}},clearPw:function(){this.formLogin.password="",this.focus("password")},clearAccount:function(){this.formLogin.account="",this.focus("account")}}}},2595:function(t,e){},2596:function(t,e,n){"use strict";function o(t){r||n(2597)}var i=n(1708),a=n(2598),r=!1,s=n(11),c=o,l=s(i.a,a.a,!1,c,null,null);l.options.__file="src/views/system/configs/ui/tab-pc.vue",e.a=l.exports},2597:function(t,e){},2598:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Form",{attrs:{"label-position":"top"}},[n("Form-item",{attrs:{label:"界面风格"}},[n("RadioGroup",{attrs:{type:"button"},model:{value:t.info.theme,callback:function(e){t.$set(t.info,"theme",e)},expression:"info.theme"}},[n("Radio",{attrs:{label:"default"}},[t._v("暗黑")]),t._v(" "),n("Radio",{attrs:{label:"light"}},[t._v("亮白")])],1)],1),t._v(" "),n("Form-item",{attrs:{label:"登录地址"}},[n("Input",{attrs:{value:t.pcUrl,disabled:""}},[n("Button",{staticClass:"copy-btn",attrs:{slot:"append",type:"ghost","data-clipboard-text":t.pcUrl},slot:"append"},[t._v("复制")])],1)],1),t._v(" "),n("Form-item",{attrs:{label:"系统名称(登录页及标题栏显示)"}},[n("Input",{attrs:{placeholder:"请输入系统名称"},model:{value:t.info.system_name,callback:function(e){t.$set(t.info,"system_name",e)},expression:"info.system_name"}})],1),t._v(" "),n("Form-item",{attrs:{label:"版权信息"}},[n("Input",{attrs:{placeholder:"请输入系统名称"},model:{value:t.info.copyright,callback:function(e){t.$set(t.info,"copyright",e)},expression:"info.copyright"}})],1),t._v(" "),n("Form-item",{attrs:{label:"登录页背景图(格式:jpg格式,尺寸:1280px*720px,文件大小:<=300KB)"}},[n("img",{staticStyle:{height:"120px"},attrs:{src:t.info.login_img}}),n("br"),t._v(" "),n("Upload",{ref:"upload",attrs:{headers:t.upload_header,"show-upload-list":!1,"on-success":t.handleUploadSuccess1,"on-error":t.handleUploadError,format:["jpg","jpeg","png"],"max-size":1024,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"on-progress":t.handleUploadProgress,"before-upload":t.handleUploadBefore,name:"file",type:"select",action:"/api/upload"}},[n("Button",{staticClass:"mt-2",attrs:{loading:t.upload_process,type:"ghost",icon:"ios-cloud-upload-outline"}},[t._v("更换登录页背景图")])],1)],1),t._v(" "),n("Form-item",{attrs:{label:"顶部Logo(展开)(格式:png(透明).jpg格式,尺寸:200px*50px,文件大小:<= 200KB)"}},[n("img",{staticStyle:{width:"200px",height:"50px",background:"#03a9f3"},attrs:{src:t.info.big_logo}}),n("br"),t._v(" "),n("Upload",{ref:"upload",attrs:{headers:t.upload_header,"show-upload-list":!1,"on-success":t.handleUploadSuccess2,"on-error":t.handleUploadError,format:["jpg","jpeg","png"],"max-size":1024,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"on-progress":t.handleUploadProgress,"before-upload":t.handleUploadBefore,name:"file",type:"select",action:"/api/upload"}},[n("Button",{staticClass:"mt-2",attrs:{loading:t.upload_process,type:"ghost",icon:"ios-cloud-upload-outline"}},[t._v("更换顶部LOGO(展开)")])],1)],1),t._v(" "),n("Form-item",{attrs:{label:"顶部Logo(折叠)(格式:png(透明).jpg格式,尺寸:60px*50px,文件大小:<=100KB)"}},[n("img",{staticStyle:{height:"50px",background:"#03a9f3"},attrs:{src:t.info.small_logo}}),n("br"),t._v(" "),n("Upload",{ref:"upload",attrs:{headers:t.upload_header,"show-upload-list":!1,"on-success":t.handleUploadSuccess3,"on-error":t.handleUploadError,format:["jpg","jpeg","png"],"max-size":1024,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"on-progress":t.handleUploadProgress,"before-upload":t.handleUploadBefore,name:"file",type:"select",action:"/api/upload"}},[n("Button",{staticClass:"mt-2",attrs:{loading:t.upload_process,type:"ghost",icon:"ios-cloud-upload-outline"}},[t._v("更换顶部LOGO(收起)")])],1)],1),t._v(" "),n("Form-item",[n("Button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")])],1)],1)},i=[];o._withStripped=!0;var a={render:o,staticRenderFns:i};e.a=a},2599:function(t,e,n){"use strict";function o(t){r||n(2600)}var i=n(1709),a=n(2601),r=!1,s=n(11),c=o,l=s(i.a,a.a,!1,c,"data-v-7c380b0f",null);l.options.__file="src/views/system/configs/ui/preview-pc.vue",e.a=l.exports},2600:function(t,e){},2601:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box",style:{background:"url("+t.info.login_img+") no-repeat center center"}},[n("div",{staticClass:"box-login"},[n("div",{staticClass:"login-contanier"},[n("p",{staticClass:"login-header"},[t._v(t._s(t.info.system_name))]),t._v(" "),n("div",{staticClass:"login-content"},[n("div",{staticClass:"input-container user-container"},[n("div",{staticClass:"input-box"},[n("span",{staticClass:"input-placeholder",class:(o={},o.focus=t.accountFocus,o.fill=t.formLogin.account,o)},[t._v("\n\t\t          \t\t账号\n\t\t\t          ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formLogin.account,expression:"formLogin.account"},{name:"focusme",rawName:"v-focusme",value:"account",expression:"'account'"}],staticClass:"box-input",attrs:{type:"text"},domProps:{value:t.formLogin.account},on:{focus:function(e){t.inputFocus(e,"account")},blur:function(e){t.inputBlur(e,"account")},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;e.preventDefault(),t.focus("password")},input:function(e){e.target.composing||t.$set(t.formLogin,"account",e.target.value)}}}),t._v(" "),""!==t.formLogin.account?n("Icon",{staticClass:"input-icon",attrs:{type:"ios-close-empty"},nativeOn:{click:function(e){t.clearAccount(e)}}}):t._e()],1)]),t._v(" "),n("div",{staticClass:"input-container password-container"},[n("div",{staticClass:"input-box"},[n("span",{staticClass:"input-placeholder",class:(i={},i.focus=t.passwordFocus,i.fill=t.formLogin.password,i)},[t._v("\n\t\t\t\t         \t 密码\n\t\t\t          ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formLogin.password,expression:"formLogin.password"},{name:"focusme",rawName:"v-focusme",value:"password",expression:"'password'"}],staticClass:"box-input",attrs:{type:"password"},domProps:{value:t.formLogin.password},on:{focus:function(e){t.inputFocus(e,"password")},blur:function(e){t.inputBlur(e,"password")},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;e.preventDefault(),t.focus("captcha")},input:function(e){e.target.composing||t.$set(t.formLogin,"password",e.target.value)}}}),t._v(" "),""!==t.formLogin.password?n("Icon",{staticClass:"input-icon",attrs:{type:"ios-close-empty"},nativeOn:{click:function(e){t.clearPw(e)}}}):t._e()],1)]),t._v(" "),n("div",{staticClass:"input-container captcha-contanier"},[n("div",{staticClass:"input-box captcha-wrap"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formLogin.captcha,expression:"formLogin.captcha"},{name:"focusme",rawName:"v-focusme",value:"captcha",expression:"'captcha'"}],staticClass:"box-input",attrs:{type:"text",placeholder:"计算结果"},domProps:{value:t.formLogin.captcha},on:{focus:function(e){t.inputFocus(e,"captcha")},blur:function(e){t.inputBlur(e,"captcha")},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;e.preventDefault(),t.login(e)},input:function(e){e.target.composing||t.$set(t.formLogin,"captcha",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"img-wrap"},[n("img",{attrs:{src:t.captchaUrl}})])]),t._v(" "),n("button",{staticClass:"btn-login mb-2"},[t._v("登录")]),t._v(" "),n("div",{staticClass:"forget_pw cursor text-info pull-right"},[t._v("忘记密码?")]),t._v(" "),n("footer",{staticClass:"footer"},[n("span",{domProps:{innerHTML:t._s(t.info.copyright)}})])])])])]);var o,i},i=[];o._withStripped=!0;var a={render:o,staticRenderFns:i};e.a=a},2602:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row m-0"},[n("div",{staticClass:"col-md-6"},[n("Tabs",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("TabPane",{attrs:{label:"校务系统界面设置",name:"pc"}},[n("tab-pc",{attrs:{info:t.info.pc},on:{"on-save":t.handleSubmit}})],1),t._v(" "),n("TabPane",{attrs:{label:"学习管家界面设置",name:"mobile"}},[n("tab-mobile",{attrs:{info:t.info.mobile},on:{"on-save":t.handleSubmit}})],1)],1)],1),t._v(" "),n("div",{staticClass:"col-md-6"},[n("Card",{staticStyle:{height:"100%"},attrs:{"dis-hover":""}},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("登录界面预览")]),t._v(" "),n("div",{staticClass:"login-contanier"},["pc"==t.tab?n("preview-pc",{attrs:{info:t.info.pc}}):n("preview-mobile",{attrs:{info:t.info.mobile}})],1)])],1)])])},i=[];o._withStripped=!0;var a={render:o,staticRenderFns:i};e.a=a},492:function(t,e,n){"use strict";function o(t){r||n(2595)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1707),a=n(2602),r=!1,s=n(11),c=o,l=s(i.a,a.a,!1,c,null,null);l.options.__file="src/views/system/configs/ui.vue",e.default=l.exports},555:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(562),a=o(i),r=n(210),s=o(r);e.default=function(){function t(t,e){var n=[],o=!0,i=!1,a=void 0;try{for(var r,c=(0,s.default)(t);!(o=(r=c.next()).done)&&(n.push(r.value),!e||n.length!==e);o=!0);}catch(t){i=!0,a=t}finally{try{!o&&c.return&&c.return()}finally{if(i)throw a}}return n}return function(e,n){if(Array.isArray(e))return e;if((0,a.default)(Object(e)))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},562:function(t,e,n){t.exports={default:n(563),__esModule:!0}},563:function(t,e,n){n(36),n(26),t.exports=n(564)},564:function(t,e,n){var o=n(55),i=n(3)("iterator"),a=n(18);t.exports=n(2).isIterable=function(t){var e=Object(t);return void 0!==e[i]||"@@iterator"in e||a.hasOwnProperty(o(e))}}});