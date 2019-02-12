webpackJsonp([146,217],{1002:function(t,e,i){"use strict";function s(t){a||i(1114)}var o=i(976),n=i(1115),a=!1,r=i(11),l=s,c=r(o.a,n.a,!1,l,"data-v-38934f7e",null);c.options.__file="src/views/components/FileItem.vue",e.a=c.exports},1114:function(t,e){},1115:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.file_list("voice").length>0?i("div",{staticClass:"p-3"},[i("div",{staticClass:"pd-10 file-list-container"},t._l(t.file_list("voice"),function(e,s){return i("div",{key:s,class:s>0?"ml-3":"",attrs:{align:"center"}},[i("div",{staticClass:"review-upload-list"},[i("play-voice",{staticClass:"voice-s",attrs:{src:e.file_url,active:s===t.active_voice},nativeOn:{click:function(e){t.active_voice=s}}},[t.clearable?i("span",{staticClass:"image-close",on:{click:function(i){i.stopPropagation(),t.delFile(e)}}},[t._v("X")]):t._e()])],1)])}))]):t._e(),t._v(" "),t.file_list("image").length>0?i("div",{staticClass:"p-3"},[i("div",{staticClass:"pd-10 file-list-container"},t._l(t.file_list("image"),function(e,s){return i("div",{key:s,class:s>0?"ml-3":"",attrs:{align:"center"}},[i("div",{staticClass:"review-upload-list",on:{click:function(i){t.picturePreview(e.file_url)}}},[i("img",{attrs:{src:e.file_url}}),t._v(" "),t.clearable?i("span",{staticClass:"image-close",on:{click:function(i){i.stopPropagation(),t.delFile(e)}}},[t._v("X")]):t._e()])])}))]):t._e(),t._v(" "),t.file_list("video").length>0?i("div",{staticClass:"p-3"},[i("div",{staticClass:"pd-10 file-list-container"},t._l(t.file_list("video"),function(e,s){return i("div",{key:s,class:s>0?"ml-3":"",attrs:{align:"center"}},[i("div",{staticClass:"video video-item",on:{click:function(i){t.previewVideo(e)}}},[i("img",{attrs:{src:e.file_url+"?vframe/jpg/offset/1/w/130/h/130"}}),t._v(" "),i("span",{staticClass:"video-play ivu-icon ivu-icon-play",staticStyle:{"font-size":"25px"}}),t._v(" "),t.clearable?i("span",{staticClass:"image-close",on:{click:function(i){i.stopPropagation(),t.delFile(e)}}},[t._v("X")]):t._e()])])}))]):t._e(),t._v(" "),t.file_list("file").length>0?i("div",{staticClass:"p-3"},[i("div",{staticClass:"pd-10 file-list-container"},t._l(t.file_list("file"),function(e,s){return i("div",{key:s,class:s>0?"ml-3":"",attrs:{align:"center"}},[i("div",{staticClass:"review-upload-list"},[i("a",{attrs:{href:e.file_url,title:e.file_name}},[i("img",{attrs:{src:t.replaceFileImage(e)}}),t._v(" "),t.clearable?i("span",{staticClass:"image-close",on:{click:function(i){i.stopPropagation(),t.delFile(e)}}},[t._v("X")]):t._e()])])])}))]):t._e(),t._v(" "),i("video-preview",{ref:"videoPreview"})],1)},o=[];s._withStripped=!0;var n={render:s,staticRenderFns:o};e.a=n},1883:function(t,e,i){"use strict";var s=(i(1),i(207)),o=i(208),n=i(690),a=i(744),r=i(1002);e.a={mixins:[s.a,o.a],components:{FileItem:r.a,dataReady:n.a,playVoice:a.a},data:function(){return{info:{int_day:0,int_start_hour:0,int_end_hour:0,content:"",course_prepare_attachment:[]},id:this.$route.params.id,tags:[]}},methods:{initTags:function(){var t=this.info,e=[];0==t.lesson_type?((0==t.ca_id||t.cid>0)&&(name=t.one_class.class_name),e=[{name:t.one_class.class_name}]):t.students.length&&(1==t.lesson_type?e=[{name:t.students[0].student_name}]:t.students.forEach(function(t){e.push({name:t.student_name})})),this.tags=e},getInnerHTML:function(t){return t="string"==typeof t?t:"",t.replace(/<[^>]+>/g,"")},dataReady:function(t){this.info=t[0],this.initTags()},refresh:function(t){this.info=t.response},refreshData:function(){this.$r("dr").refreshData(this.info_url[0])},back:function(){this.$router.go(-1)}},computed:{info_url:function(){return["course_prepares/"+this.id+"?with=course_arrange"]}}}},2737:function(t,e){},2738:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"c-grid"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-12"},[i("Button",{attrs:{type:"primary",icon:"reply",size:"small"},on:{click:t.back}}),t._v(" "),i("Button",{attrs:{type:"primary",icon:"refresh",size:"small"},on:{click:t.refreshData}})],1),t._v(" "),i("data-ready",{ref:"dr",staticClass:"col-sm-12 mt-3",attrs:{cache:!1,data:t.info_url},on:{refresh:t.refresh,ready:t.dataReady}},[i("Card",{attrs:{"dis-hover":""}},[i("div",{attrs:{slot:"title"},slot:"title"},[t._v("备课详情")]),t._v(" "),i("Row",{attrs:{gutter:16}},[i("Col",{attrs:{span:"8"}},[i("Form",{attrs:{"label-width":80}},[i("Form-item",{staticClass:"mb-0",attrs:{label:"备课标题："}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.info.title)+"\n\t\t\t\t\t\t\t")]),t._v(" "),i("Form-item",{staticClass:"mb-0",attrs:{label:"上课对象："}},[i("Tag",{attrs:{color:"blue"}},[0==t.info.lesson_type?i("span",[t._v("班")]):1==t.info.lesson_type?i("span",[t._v("一")]):i("span",[t._v("多")])]),t._v(" "),t._l(t.tags,function(e){return i("Tag",[t._v(t._s(e.name))])})],2),t._v(" "),i("Form-item",{staticClass:"mb-0",attrs:{label:"课程："}},[t._v("\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t"+t._s(t._f("lesson_name")(t.info.lid))+"\n\t\t\t\t\t\t\t")]),t._v(" "),i("Form-item",{staticClass:"mb-0",attrs:{label:"科目："}},[t._v("\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t"+t._s(t._f("subject_name")(t.info.sj_id))+"\n\t\t\t\t\t\t\t")]),t._v(" "),i("Form-item",{staticClass:"mb-0",attrs:{label:"上课日期："}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t._f("int_date")(t.info.int_day))+"\n\t\t\t\t\t\t\t")]),t._v(" "),i("Form-item",{staticClass:"mb-0",attrs:{label:"上课时间："}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t._f("int_hour")(t.info.int_start_hour))+"~"+t._s(t._f("int_hour")(t.info.int_end_hour))+"\n\t\t\t\t\t\t\t")]),t._v(" "),i("Form-item",{staticClass:"mb-0",attrs:{label:"推送状态："}},[i("span",{class:t.info.is_push?"text-success":""},[t._v(t._s(t.info.is_push?"已推送":"待推送"))])])],1)],1),t._v(" "),i("Col",{attrs:{span:"16"}},[i("Card",[i("div",{staticClass:"clearfloat",attrs:{slot:"title"},slot:"title"},[i("Icon",{staticStyle:{"vertical-align":"middle"},attrs:{size:"24",type:"android-list"}}),t._v("\n\t\t\t\t\t\t\t\t备课内容\n\t\t\t\t\t\t\t")],1),t._v(" "),i("div",{staticClass:"homework-content",domProps:{innerHTML:t._s(t.info.content)}})]),t._v(" "),i("Card",{staticClass:"mt-3"},[i("div",{staticClass:"clearfloat",attrs:{slot:"title"},slot:"title"},[i("Icon",{staticStyle:{"vertical-align":"middle"},attrs:{size:"24",type:"images"}}),t._v("\n\t\t\t\t\t\t\t\t备课附件\n\t\t\t\t\t\t\t")],1),t._v(" "),i("file-item",{attrs:{list:t.info.course_prepare_attachment}})],1)],1)],1)],1)],1)],1)])},o=[];s._withStripped=!0;var n={render:s,staticRenderFns:o};e.a=n},340:function(t,e,i){"use strict";function s(t){a||i(924)}Object.defineProperty(e,"__esModule",{value:!0});var o=i(867),n=i(925),a=!1,r=i(11),l=s,c=r(o.a,n.a,!1,l,null,null);c.options.__file="src/views/components/VideoPreview.vue",e.default=c.exports},547:function(t,e,i){"use strict";function s(t){a||i(2737)}Object.defineProperty(e,"__esModule",{value:!0});var o=i(1883),n=i(2738),a=!1,r=i(11),l=s,c=r(o.a,n.a,!1,l,null,null);c.options.__file="src/views/service/bclass/prepare/prepare-detail.vue",e.default=c.exports},682:function(t,e,i){"use strict";function s(t){var e=[v.a.state.branch.mode,v.a.state.branch.id],i=e[0],s=e[1];return"multi"==i&&(s=v.a.state.branch.ids.join("-")),c.b.sprintf("%s-%s-%s",i,s,t)}function o(t,e){return e=!!c.a.isUndefined(e)||e,new l.a(function(i,o){var n=s(t);!c.a.isUndefined(u[n])&&e?i(u[n]):Object(d.a)(t).get().success(function(t){u[n]=t,i(t)}).error(function(t){o(t)})})}var n=i(211),a=i.n(n),r=i(9),l=i.n(r),c=i(1),d=i(34),v=i(24),u={};e.a={name:"DataReady",props:{data:{type:Array,default:function(){return[]}},cache:{type:Boolean,default:!1},fromLayout:{type:Boolean,default:!1}},mounted:function(){this.init_data()},data:function(){return{ready:!1}},computed:{loading:function(){return!1===this.ready}},watch:{data:function(t,e){a()(t[0])!=a()(e[0])&&this.init_data()}},methods:{init_data:function(){var t=this;if(0==this.data.length)return void(this.ready=!0);var e=[];this.data.forEach(function(i){c.a.isString(i)?""==i?e.push(i):e.push(o(i,t.cache)):c.a.isFunction(i)?e.push(i()):e.push(i)}),l.a.all(e).then(function(e){t.fromLayout?setTimeout(function(){t.ready=!0,t.$emit("ready",e)},1200):(t.ready=!0,t.$emit("ready",e))},function(e){t.$emit("error",e)})},getData:function(t,e){return o(t,e)},refreshData:function(t){var e=this;return new l.a(function(i,o){var n=s(t);Object(d.a)(t).get().success(function(s){u[n]=s,i(s),e.$emit("refresh",{url:t,response:s})}).error(function(t){o(t)})})}}}},690:function(t,e,i){"use strict";function s(t){a||i(704)}var o=i(682),n=i(705),a=!1,r=i(11),l=s,c=r(o.a,n.a,!1,l,null,null);c.options.__file="src/views/components/DataReady.vue",e.a=c.exports},700:function(t,e,i){"use strict";e.a={props:{src:{type:String,default:""},active:{type:Boolean,default:!1}},data:function(){return{isPlaying:!1}},watch:{active:function(t){t?this.play():this.ended()}},methods:{togglePlay:function(){this.isPlaying=!this.isPlaying,this.isPlaying?this.play():this.stop()},play:function(){this.isPlaying=!0,this.$refs.player.play()},stop:function(){this.$refs.player.pause()},ended:function(){this.$refs.player.currentTime=0,this.isPlaying=!1,this.$refs.player.pause()}}}},702:function(t,e,i){t.exports=i.p+"27c88f0834d64f4eb6e8c6ed65cbbc01.gif"},704:function(t,e){},705:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.ready?[t._t("default")]:s("Spin",{attrs:{fix:""}},[t.fromLayout?s("img",{attrs:{src:i(702)}}):s("Icon",{staticClass:"demo-spin-icon-load",attrs:{type:"load-c",size:"18"}}),t._v(" "),s("div",[t._v("数据加载中...")])],1)],2)},o=[];s._withStripped=!0;var n={render:s,staticRenderFns:o};e.a=n},744:function(t,e,i){"use strict";function s(t){a||i(755)}var o=i(700),n=i(756),a=!1,r=i(11),l=s,c=r(o.a,n.a,!1,l,null,null);c.options.__file="src/views/components/playVoice.vue",e.a=c.exports},754:function(t,e,i){"use strict";var s=function(t){return"x"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"x")?t.pageX:t.pageY},o=function(t){return t=Math.floor(t),t<10?"0"+t:t+""},n=function(t){var e=0;return e=Math.floor(t/60),t-=60*e,o(e)+":"+o(t)};e.a={name:"vueVideo",props:{sources:Array,options:{type:Object,default:function(){return{autoplay:!1,volume:.9,poster:""}}}},data:function(){return{$video:null,video:{$videoSlider:null,len:0,current:0,loaded:0,moving:!1,displayTime:"00:00",pos:{start:0,width:0,innerWidth:0,current:0}},volume:{$volBox:null,muted:!1,percent:60,moving:!1,pos:{start:0,width:0,innerWidth:0,current:0}},player:{$player:null,pos:null},tmp:{contrlHideTimer:null},state:{contrlShow:!1,vol:.5,currentTime:0,fullScreen:!1,playing:!1}}},ready:function(){this.init()},mounted:function(){this.init()},beforeDestroy:function(){document.body.removeEventListener("mousemove",this.mouseMoveAction),document.body.removeEventListener("mouseup",this.mouseUpAction)},methods:{init:function(){this.$video=this.$el.getElementsByTagName("video")[0],this.initCore(),this.options.autoplay&&this.play(),document.body.addEventListener("mousemove",this.mouseMoveAction,!1),document.body.addEventListener("mouseup",this.mouseUpAction,!1)},initCore:function(){this.initVol(),this.initVideo(),this.initPlayer();var t=this.options.volume||.9;this.setVol(t)},initPlayer:function(){var t=this.$el.getElementsByClassName("__cov-video-container")[0];this.player.pos=t.getBoundingClientRect(),this.player.$player=t},initVol:function(){var t=this.$el.getElementsByClassName("__cov-contrl-vol-slider")[0],e=t.getElementsByClassName("__cov-contrl-vol-inner")[0];this.volume.$volBox=t,this.volume.pos.innerWidth=e.getBoundingClientRect().width,this.volume.pos.start=t.getBoundingClientRect().left,this.volume.pos.width=t.getBoundingClientRect().width-this.volume.pos.innerWidth},initVideo:function(){var t=this.$el.getElementsByClassName("__cov-contrl-video-slider")[0],e=t.getElementsByClassName("__cov-contrl-video-inner")[0];this.$videoSlider=t,this.video.pos.start=t.getBoundingClientRect().left,this.video.pos.innerWidth=e.getBoundingClientRect().width,this.video.pos.width=t.getBoundingClientRect().width-this.video.pos.innerWidth,this.getTime()},mouseEnterVideo:function(){this.tmp.contrlHideTimer&&(clearTimeout(this.tmp.contrlHideTimer),this.tmp.contrlHideTimer=null),this.state.contrlShow=!0},mouseLeaveVideo:function(t){var e=this;this.tmp.contrlHideTimer&&clearTimeout(this.tmp.contrlHideTimer),this.tmp.contrlHideTimer=setTimeout(function(){e.state.contrlShow=!1,e.tmp.contrlHideTimer=null},2e3)},toggleContrlShow:function(){this.state.contrlShow=!this.state.contrlShow},getTime:function(){var t=this;this.$video.addEventListener("durationchange",function(t){console.log(t)}),this.$video.addEventListener("progress",function(e){t.video.loaded=100*(t.$video.buffered.end(0)/t.$video.duration-1)}),this.video.len=this.$video.duration},setVideoByTime:function(t){this.$video.currentTime=Math.floor(t*this.video.len)},play:function(){var t=this;this.state.playing=!this.state.playing,this.$video&&(this.state.playing?(this.$video.play(),this.mouseLeaveVideo(),this.$video.addEventListener("timeupdate",this.timeline),this.$video.addEventListener("ended",function(e){t.state.playing=!1,t.video.pos.current=0,t.$video.currentTime=0})):this.$video.pause())},timeline:function(){var t=this.$video.currentTime/this.$video.duration;this.video.pos.current=(this.video.pos.width*t).toFixed(3),this.video.displayTime=n(this.$video.duration-this.$video.currentTime)},volMove:function(t){this.initVol(),this.volume.moving=!0},videoMove:function(t){this.initVideo(),this.video.moving=!0},slideClick:function(t){this.videoSlideMove(t)},volSlideClick:function(t){this.volSlideMove(t)},volMuted:function(){this.$video.muted=!this.$video.muted,this.volume.muted=this.$video.muted},setVol:function(t){this.$video&&(this.volume.pos.current=t*this.volume.pos.width,this.volume.percent=100*t,this.$video.volume=t)},fullScreen:function(){this.state.fullScreen?(this.state.fullScreen=!1,document.webkitCancelFullScreen()):(this.state.fullScreen=!0,this.$video.webkitRequestFullScreen()),setTimeout(this.initVideo,200)},mouseMoveAction:function(t){this.volume.moving&&this.volSlideMove(t),this.video.moving&&this.videoSlideMove(t),this.contrlHider(t)},contrlHider:function(t){var e=s(t,"x"),i=s(t,"y");if(this.player.pos)return e>this.player.pos.left&&e<this.player.pos.left+this.player.pos.width&&i>this.player.pos.top+.6*this.player.pos.height&&i<this.player.pos.top+this.player.pos.height?this.mouseEnterVideo():this.mouseLeaveVideo()},volSlideMove:function(t){var e=s(t)-this.volume.pos.start;e>0&&e<this.volume.pos.width&&this.setVol(e/this.volume.pos.width)},videoSlideMove:function(t){var e=s(t)-this.video.pos.start;e>0&&e<this.video.pos.width&&(this.video.pos.current=e,this.setVideoByTime(e/this.video.pos.width))},mouseUpAction:function(t){this.volume.moving=!1,this.video.moving=!1}}}},755:function(t,e){},756:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"voice",class:t.isPlaying?"active":"",on:{click:t.togglePlay}},[i("audio",{ref:"player",staticStyle:{display:"none"},attrs:{controls:"controls",preload:"auto",src:t.src},on:{ended:t.ended}})])},o=[];s._withStripped=!0;var n={render:s,staticRenderFns:o};e.a=n},762:function(t,e,i){"use strict";function s(t){a||i(881)}var o=i(754),n=i(882),a=!1,r=i(11),l=s,c=r(o.a,n.a,!1,l,null,null);c.options.__file="src/views/components/vueVideo.vue",e.a=c.exports},867:function(t,e,i){"use strict";var s=i(1),o=i(209),n=i(762);e.a={mixins:[o.a],components:{VueVideo:n.a},data:function(){return{video:{file_url:"http://125.39.7.18/vweixinp.tc.qq.com/1007_a8e5faf4b42b4e6f8246570f5c43f482.f10.mp4?vkey=0B62697DBA6B65E78A0FA819D33A6022A47F0DE7D71C11F9583492EAA12099E2C08E3D36036C672A2EF3338F1A2FF2F86B7A0233386BABB1207C49B145C90163AC09E3CAD833C4360F0F4C5094E029162BD019D3DC6EA319&sha=0&save=1",file_size:1371058}}},methods:{getVOptions:function(t){return{autoplay:!1,volume:.6,poster:t.src+"?vframe/jpg/offset/1/w/300/h/200"}}},computed:{sources:function(){var t=this.video,e=[];return s.a.isEmpty(t)||(e=[{src:t.file_url,size:t.file_size,type:"video/mp4"}]),e}}}},881:function(t,e){},882:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"__cov-video-container",on:{mouseenter:t.mouseEnterVideo,mouseleave:t.mouseLeaveVideo}},[i("video",{staticClass:"__cov-video",class:{"hide-cursor":!t.state.contrlShow},attrs:{poster:t.options.poster}},t._l(t.sources,function(t){return i("source",{attrs:{src:t.src,type:t.type}})})),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.state.contrlShow,expression:"state.contrlShow"}],staticClass:"__cov-contrl-content",attrs:{transition:"fade"}},[i("button",{staticClass:"__cov-contrl-play-btn",on:{click:t.play}},[i("svg",{directives:[{name:"show",rawName:"v-show",value:!t.state.playing,expression:"!state.playing"}],staticClass:"__cov-contrl-play-btn-icon",attrs:{viewBox:"0 0 47 57",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[i("title",[t._v("Triangle 1")]),t._v(" "),i("desc",[t._v("Created with Sketch.")]),t._v(" "),i("defs"),t._v(" "),i("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[i("polygon",{attrs:{id:"Triangle-1",stroke:"#FFFFFF",fill:"#FFFFFF",points:"1 56 1 1 47 28.5"}})])]),t._v(" "),i("svg",{directives:[{name:"show",rawName:"v-show",value:t.state.playing,expression:"state.playing"}],staticClass:"__cov-contrl-play-btn-icon",attrs:{viewBox:"0 0 15 22",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[i("title",[t._v("Combined Shape")]),t._v(" "),i("desc",[t._v("Created with Sketch.")]),t._v(" "),i("defs",[i("path",{attrs:{d:"M0,0.979149244 L5,0.979149244 L5,22 L0,22 L0,0.979149244 Z M10,0.979149244 L15,0.979149244 L15,22 L10,22 L10,0.979149244 Z",id:"path-1"}}),t._v(" "),i("mask",{attrs:{id:"mask-2",maskContentUnits:"userSpaceOnUse",maskUnits:"objectBoundingBox",x:"0",y:"0",width:"15",height:"21.0208508",fill:"white"}},[i("use",{attrs:{"xlink:href":"#path-1"}})])]),t._v(" "),i("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[i("use",{attrs:{id:"Combined-Shape",stroke:"#FFFFFF",mask:"url(#mask-2)","stroke-width":"2",fill:"#FFFFFF","xlink:href":"#path-1"}})])])]),t._v(" "),i("div",{staticClass:"__cov-contrl-video-slider",on:{click:t.slideClick,mousedown:t.videoMove}},[i("div",{staticClass:"__cov-contrl-video-inner",style:{transform:"translate3d("+t.video.pos.current+"px, 0, 0)"}}),t._v(" "),i("div",{staticClass:"__cov-contrl-video-rail"},[i("div",{staticClass:"__cov-contrl-video-rail-inner",style:{transform:"translate3d("+t.video.loaded+"%, 0, 0)"}})])]),t._v(" "),i("div",{staticClass:"__cov-contrl-video-time"},[i("span",{staticClass:"__cov-contrl-video-time-text"},[t._v(t._s(t.video.displayTime))])]),t._v(" "),i("div",{staticClass:"__cov-contrl-vol-box"},[i("button",{staticClass:"__cov-contrl-play-btn",on:{click:t.volMuted}},[i("svg",{staticClass:"__cov-contrl-vol-btn-icon",attrs:{viewBox:"0 0 41 44",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[i("title",[t._v("vol")]),t._v(" "),i("desc",[t._v("Created with Sketch.")]),t._v(" "),i("defs",[i("path",{attrs:{d:"M8.61522369,12 L20,0.615223689 L20,37.3847763 L8.61522369,26 L1.99201702,26 C0.891856397,26 0,25.1029399 0,23.9941413 L0,14.0058587 C0,12.8980535 0.900176167,12 1.99201702,12 L8.61522369,12 L8.61522369,12 Z",id:"cov-vol"}})]),t._v(" "),i("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"2",fill:"none","fill-rule":"evenodd"}},[i("g",{attrs:{id:"vol",transform:"translate(2.000000, 3.000000)"}},[i("g",{attrs:{id:"cov-vol-icon"}},[i("g",{attrs:{id:"Combined-Shape-Clipped"}},[i("path",{directives:[{name:"show",rawName:"v-show",value:t.volume.percent>1&&!t.volume.muted,expression:"volume.percent > 1 && !volume.muted"}],attrs:{d:"M25,29.5538997 C28.4589093,27.6757536 31.2629093,23.2984641 31.2629093,19.7769499 C31.2629093,16.2554357 28.4589093,11.8781461 25,10",id:"vol-range-2",stroke:"#FFFFFF"}}),t._v(" "),i("path",{directives:[{name:"show",rawName:"v-show",value:t.volume.percent>70&&!t.volume.muted,expression:"volume.percent > 70 && !volume.muted"}],attrs:{d:"M28,35.5538997 C33.5816016,32.5231573 38.1063837,25.4595762 38.1063837,19.7769499 C38.1063837,14.0943235 33.5816016,7.03074247 28,4",id:"vol-range-2",stroke:"#FFFFFF"}}),t._v(" "),i("mask",{attrs:{id:"mask-2",fill:"white"}},[i("use",{attrs:{"xlink:href":"#cov-vol"}})]),t._v(" "),i("use",{attrs:{id:"vol-path",stroke:"#FFFFFF","stroke-width":"3","xlink:href":"#cov-vol"}}),t._v(" "),i("g",{attrs:{id:"Combined-Shape",mask:"url(#mask-2)",stroke:"#FFFFFF","stroke-width":"2",fill:"#FFFFFF"}},[i("path",{attrs:{d:"M8.61522369,12 L20,0.615223689 L20,37.3847763 L8.61522369,26 L1.99201702,26 C0.891856397,26 0,25.1029399 0,23.9941413 L0,14.0058587 C0,12.8980535 0.900176167,12 1.99201702,12 L8.61522369,12 L8.61522369,12 Z",id:"cov-vol"}})])])])])])])]),t._v(" "),i("div",{staticClass:"__cov-contrl-vol-slider",on:{click:t.volSlideClick,mousedown:t.volMove}},[i("div",{staticClass:"__cov-contrl-vol-inner",style:{transform:"translate3d("+t.volume.pos.current+"px, 0, 0)"}}),t._v(" "),i("div",{staticClass:"__cov-contrl-vol-rail"})])]),t._v(" "),i("button",{staticClass:"__cov-contrl-play-btn",on:{click:t.fullScreen}},[i("svg",{staticClass:"__cov-contrl-vol-btn-icon",attrs:{viewBox:"0 0 33 33",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[i("defs"),t._v(" "),i("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[i("path",{attrs:{d:"M31.1682064,22 L31.1682064,31.0073537 L22,31.0073537 M22,1 L31.0073537,1 L31.0073537,10.1682064 M1,10.0073537 L1,1 L10.1682064,1 M10.0073537,31.1682064 L1,31.1682064 L1,22",id:"Combined-Shape",stroke:"#FFFFFF","stroke-width":"2"}})])])])])])])},o=[];s._withStripped=!0;var n={render:s,staticRenderFns:o};e.a=n},924:function(t,e){},925:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Modal",{directives:[{name:"drag-modal",rawName:"v-drag-modal"}],attrs:{title:t.modal$.title,"mask-closable":!1,width:"600"},model:{value:t.modal$.show,callback:function(e){t.$set(t.modal$,"show",e)},expression:"modal$.show"}},[t.modal$.show?i("vue-video",{staticClass:"custom-video",staticStyle:{height:"400px"},attrs:{sources:t.sources,options:t.getVOptions(t.sources[0])}}):t._e(),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{type:"ghost"},on:{click:t.close}},[t._v("关闭")])],1)],1)},o=[];s._withStripped=!0;var n={render:s,staticRenderFns:o};e.a=n},976:function(t,e,i){"use strict";var s=i(209),o=i(207),n=i(744),a=i(762),r=i(340);e.a={mixins:[o.a,s.a],components:{PlayVoice:n.a,VueVideo:a.a,VideoPreview:r.default},props:{list:{type:Array,default:function(){return[]}},clearable:{type:Boolean,default:!1}},data:function(){return{active_voice:-1}},methods:{file_list:function(t){var e=[[],this.list],i=e[0],s=e[1];return s.length>0&&(i=s.filter(function(e){return e.media_type==t})),i},previewVideo:function(t){this.$refs.videoPreview.set("video",t).show("播放视频")},delFile:function(t){var e=this.list.indexOf(t);e>-1&&this.list.splice(e,1)}}}}});