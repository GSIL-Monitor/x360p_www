webpackJsonp([46],{"+/Ky":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"my-header"},[n("div",{staticClass:"content"},[n("div",{staticClass:"avatar header-avatar pull-left"},[n("img",{attrs:{src:e.user$.avatar?e.user$.avatar:"http://s1.xiao360.com/common_img/avatar.jpg"}})]),e._v(" "),n("div",{staticClass:"header-info pull-left"},[n("span",[e._v(e._s(e.user$.name))]),e._v(" "),n("p",{staticClass:"mg-t-10"},[e._v(e._s(e.user$.mobile))])])])]),e._v(" "),n("group",[e.bids.length>0?n("cell",{attrs:{title:"校区","is-link":""},nativeOn:{click:function(t){return e.changeBranch(t)}}},[n("i",{staticClass:"icon icon-ios-home cell-icon",attrs:{slot:"icon"},slot:"icon"}),e._v(" "),n("span",{staticClass:"text-disable",attrs:{slot:"value"},slot:"value"},[e._v(e._s(e.currentBidText))])]):e._e(),e._v(" "),n("cell",{attrs:{title:"头像","is-link":""},nativeOn:{click:function(t){return e.changeAvatar(t)}}},[n("i",{staticClass:"icon icon-ios-camera-outline cell-icon",attrs:{slot:"icon"},slot:"icon"})]),e._v(" "),n("cell",{attrs:{title:"修改昵称","is-link":""},nativeOn:{click:function(t){e.show_popup("changeName")}}},[n("i",{staticClass:"icon icon-android-happy cell-icon",attrs:{slot:"icon"},slot:"icon"}),e._v(" "),n("span",{staticClass:"text-disable",attrs:{slot:"value"},slot:"value"},[e._v(e._s(e.user.nick_name))])]),e._v(" "),n("cell",{attrs:{title:"手机号绑定","is-link":""},nativeOn:{click:function(t){e.show_popup("changeMobile")}}},[n("i",{staticClass:"icon icon-iphone cell-icon",attrs:{slot:"icon"},slot:"icon"}),e._v(" "),n("span",{staticClass:"text-disable",attrs:{slot:"value"},slot:"value"},[e._v(e._s(e.user.mobile))])]),e._v(" "),n("cell",{attrs:{title:"修改密码","is-link":""},nativeOn:{click:function(t){e.show_popup("changePwd")}}},[n("i",{staticClass:"icon icon-ios-locked-outline cell-icon",attrs:{slot:"icon"},slot:"icon"})])],1),e._v(" "),n("group",[e._l(e.my_menu,function(e){return n("cell",{attrs:{title:e.label,link:e.link}},[e.icon.indexOf(".")>-1?n("img",{staticClass:"cell-icon",attrs:{slot:"icon",src:e.icon},slot:"icon"}):n("i",{staticClass:"icon cell-icon",class:"icon-"+e.icon,attrs:{slot:"icon"},slot:"icon"})])}),e._v(" "),n("cell",{attrs:{title:"我的渠道",link:"/recruit/channel"}},[n("i",{staticClass:"icon cell-icon icon-qr-scanner",attrs:{slot:"icon"},slot:"icon"})])],2),e._v(" "),n("group",[n("cell",{attrs:{title:"退出登录","is-link":""},nativeOn:{click:function(t){return e.logout(t)}}},[n("i",{staticClass:"icon icon-log-out mg-r-10 cell-icon",attrs:{slot:"icon"},slot:"icon"})])],1),e._v(" "),n("popup",{style:{top:e.headerHeight+"px"},attrs:{height:"100%",position:"bottom"},model:{value:e.popup_setting,callback:function(t){e.popup_setting=t},expression:"popup_setting"}},["changeName"==e.action?n("group",[n("x-input",{attrs:{title:"",type:"text",placeholder:"姓名 ",required:!0},model:{value:e.user.newname,callback:function(t){e.$set(e.user,"newname",t)},expression:"user.newname"}})],1):e._e(),e._v(" "),"changeMobile"==e.action?n("group",[n("x-input",{attrs:{title:"",type:"text",placeholder:"请输入手机号",required:!0},model:{value:e.user.newmobile,callback:function(t){e.$set(e.user,"newmobile",t)},expression:"user.newmobile"}},[n("x-button",{staticClass:"x-btn btn-bg-theme",attrs:{slot:"right",type:"primary",mini:"",disabled:e.send.loading},nativeOn:{click:function(t){return e.sendCapt(t)}},slot:"right"},[e._v(e._s(e.send.text))])],1),e._v(" "),n("x-input",{attrs:{title:"",type:"text",placeholder:"请输入验证码 ",required:!0},model:{value:e.user.vcode,callback:function(t){e.$set(e.user,"vcode",t)},expression:"user.vcode"}})],1):e._e(),e._v(" "),"changePwd"==e.action?n("group",[n("x-input",{attrs:{title:"",required:!0,type:"password",placeholder:"初始密码"},model:{value:e.user.oldpassword,callback:function(t){e.$set(e.user,"oldpassword",t)},expression:"user.oldpassword"}}),e._v(" "),n("x-input",{attrs:{title:"",required:!0,type:"password",placeholder:"新密码"},model:{value:e.user.newpassword,callback:function(t){e.$set(e.user,"newpassword",t)},expression:"user.newpassword"}}),e._v(" "),n("x-input",{attrs:{title:"",required:!0,type:"password",placeholder:"再输一遍"},model:{value:e.user.newpassword1,callback:function(t){e.$set(e.user,"newpassword1",t)},expression:"user.newpassword1"}})],1):e._e(),e._v(" "),n("div",{staticClass:"pd-10"},[n("x-button",{staticClass:"bg-blue",attrs:{type:"primary",disabled:e.required},nativeOn:{click:function(t){return e.edit_profile(t)}}},[e._v("确认")]),e._v(" "),n("x-button",{nativeOn:{click:function(t){return e.hide_popup(t)}}},[e._v("取消")])],1)],1)],1)},s=[],o={render:i,staticRenderFns:s};t.a=o},DVlz:function(e,t,n){"use strict";function i(e){n("t45v")}Object.defineProperty(t,"__esModule",{value:!0});var s=n("ohuT");n.n(s);for(var o in s)"default"!==o&&function(e){n.d(t,e,function(){return s[e]})}(o);var a=n("b7CM"),r=n.n(a),c=n("+/Ky"),u=n("C7Lr"),l=i,d=u(r.a,c.a,!1,l,null,null);t.default=d.exports},JaXy:function(e,t,n){t=e.exports=n("UTlt")(!0),t.push([e.i,"\n.my-header {\n  height: 150px;\n  background: url(https://sp1.xiao360.com/static/img/org/bg_banner.png) no-repeat;\n  background-size: 100% 100%;\n  position: relative;\n}\n.my-header .content {\n  padding: 35px 10px 10px 30px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  color: #fff;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n}\n.my-header .header-avatar {\n  width: 70px;\n  height: 70px;\n  margin-right: 15px;\n}\n.my-header .header-info {\n  height: 70px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.my-header .header-info span {\n  font-size: 18px;\n}\n.my-header .header-info span.text-small {\n  font-size: 13px;\n}\n.my-header .header-info p {\n  font-size: 13px;\n}\n.cell-icon {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  display: inline-block;\n  text-align: center;\n  color: #B5B5B5;\n  vertical-align: middle;\n}\n","",{version:3,sources:["/Users/payhon/project/x360p/src/neza_org_mobile/src/views/my/my.vue"],names:[],mappings:";AACA;EACE,cAAc;EACd,gFAAgF;EAChF,2BAA2B;EAC3B,mBAAmB;CACpB;AACD;EACE,6BAA6B;EAC7B,+BAA+B;EAC/B,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,YAAY;EACZ,aAAa;EACb,YAAY;CACb;AACD;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,+BAA+B;UACvB,uBAAuB;CAChC;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,uBAAuB;CACxB",file:"my.vue",sourcesContent:["\n.my-header {\n  height: 150px;\n  background: url(https://sp1.xiao360.com/static/img/org/bg_banner.png) no-repeat;\n  background-size: 100% 100%;\n  position: relative;\n}\n.my-header .content {\n  padding: 35px 10px 10px 30px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  color: #fff;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n}\n.my-header .header-avatar {\n  width: 70px;\n  height: 70px;\n  margin-right: 15px;\n}\n.my-header .header-info {\n  height: 70px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.my-header .header-info span {\n  font-size: 18px;\n}\n.my-header .header-info span.text-small {\n  font-size: 13px;\n}\n.my-header .header-info p {\n  font-size: 13px;\n}\n.cell-icon {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  display: inline-block;\n  text-align: center;\n  color: #B5B5B5;\n  vertical-align: middle;\n}\n"],sourceRoot:""}])},b7CM:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("TVG1"),o=i(s),a=n("t5DY"),r=i(a),c=n("8Llf"),u=i(c),l=n("KUj2"),d=i(l),h=n("/AUM"),p=i(h),m=n("gpPJ"),f=i(m),g=n("CKVb"),v=i(g),w=n("cTn1"),b=i(w),A=n("fvyU"),_=i(A),x=n("IXui"),C=i(x),B={name:"",newname:"",mobile:"",newmobile:"",vcode:"",oldpassword:"",newpassword:"",newpassword1:"",nick_name:""};t.default={mixins:[u.default,d.default,p.default],components:{Cell:f.default,Popup:b.default,Group:v.default,XInput:_.default,XButton:C.default},data:function(){return{popup_setting:!1,action:"",tId:null,send:{text:"发送验证码",loading:!1},user:o.default.copy(B)}},mounted:function(){this.initUser()},computed:{my_menu:function(){return this.$store.state.ui_config.my_menu},bids:function(){return this.user$.employee.bids},required:function(){var e=this.user;return"changeName"==this.action?0===e.newname.length:"changeMobile"==this.action?!/^1[35789]{1}\d{9}$/.test(e.newmobile)||0===e.vcode.length:0===e.oldpassword.length||0===e.newpassword.length||0===e.newpassword1.length}},methods:{changeBranch:function(){this.branch().popupShow=!0},initUser:function(){var e=this.user$;this.user.name=e.name,this.user.mobile=e.mobile,this.user.is_weixin_bind=e.is_weixin_bind,this.user.nick_name=e.employee.nick_name,this.user.newname=e.employee.nick_name},changeAvatar:function(){var e=this;this.chooseImage(1,!0).then(function(t){e.avatarChanged(t[0])})},toggleBindWx:function(){this.user.is_weixin_bind?this.unBindWX():this.bindWX()},unBindWX:function(){var e=this;this.$http.post("users/"+this.user.uid+"/dounbind").then(function(t){e.user.is_weixin_bind=0,e.$store.commit("updateUserInfo",{user:e.user,action:"unbind_wx"})}).catch(function(t){e.$Message.error(t.body.message)})},bindWX:function(){var e=(this.$store.state.user,this.$store),t=this.$route.fullPath;0==this.user.is_weixin_bind&&(location.href=e.state.config.OAUTH_URL+"&p="+t+"&u="+e.state.user.info.uid)},avatarChanged:function(e){this.user.avatar=e.file_url,this.action="changeAvatar",this.edit_profile()},sendCapt:function(){if(!this.checkTel())return!1;this.getCapt()},getCapt:function(){var e=this,t=59;if(this.send.loading)return!1;this.send={loading:!0,text:"60s"},this.tId=setInterval(function(){t<10&&(t="0"+t),e.send.text=t+"s",--t<0&&(clearInterval(e.tId),e.send={loading:!1,text:"发送验证码"})},1e3),this.$rest("open/vcode").post({mobile:this.user.newmobile,type:"change"}).success(function(e){}).error(function(t){e.alert("获取验证码失败",t.body.message),clearInterval(e.tId),e.send={loading:!1,text:"发送验证码"}})},checkTel:function(){var e=this.user.newmobile;return""===e?(this.alert("请先输入手机号","手机号不能为空"),!1):!(""!==e&&!/^1[35789]{1}\d{9}$/.test(e))||(this.alert("请重新输入手机号","手机号格式不正确"),!1)},show_popup:function(e){this.action=e,this.popup_setting=!0},hide_popup:function(){this.user.newmobile="",this.user.newname=this.user.nick_name,this.user.oldpassword="",this.user.newpassword="",this.user.newpassword1="",this.popup_setting=!1,this.send={text:"发送验证码",loading:!1},window.clearInterval(this.tId)},edit_profile:function(){var e=this;if(this.user.newpassword===this.user.newpassword1){var t={action:this.action};"changeName"==this.action?t.nick_name=this.user.newname:"changeMobile"==this.action?(t.mobile=this.user.newmobile,t.vcode=this.user.vcode):"changeAvatar"==this.action?t.avatar=this.user.avatar:(t.oldpassword=this.user.oldpassword,t.newpassword=this.user.newpassword,t.newpassword1=this.user.newpassword1),this.$http.put("profile",t).then(function(t){"changeName"==e.action?(e.user.nick_name=e.user.newname,e.$store.commit("updateUserInfo",{user:e.user,action:"changeName"})):"changeMobile"==e.action?(e.user.mobile=e.user.newmobile,e.$store.commit("updateUserInfo",{user:e.user,action:"changeMobile"})):"changeAvatar"==e.action&&e.$store.commit("updateUserInfo",{user:e.user,action:"changeAvatar"}),e.toast("修改成功","success"),e.hide_popup()}).catch(function(t){e.toast(t.body.message,"warn")})}else this.toast("两次密码不一致","warn")},logout:function(){var e=this;r.default.Logout().then(function(){e.$store.commit("clearLoginInfo"),e.$router.push({path:"/login"})},function(){e.$store.commit("clearLoginInfo"),e.$router.push({path:"/login"})})}}}},ohuT:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("TVG1"),o=i(s),a=n("t5DY"),r=i(a),c=n("8Llf"),u=i(c),l=n("KUj2"),d=i(l),h=n("/AUM"),p=i(h),m=n("gpPJ"),f=i(m),g=n("CKVb"),v=i(g),w=n("cTn1"),b=i(w),A=n("fvyU"),_=i(A),x=n("IXui"),C=i(x),B={name:"",newname:"",mobile:"",newmobile:"",vcode:"",oldpassword:"",newpassword:"",newpassword1:"",nick_name:""};t.default={mixins:[u.default,d.default,p.default],components:{Cell:f.default,Popup:b.default,Group:v.default,XInput:_.default,XButton:C.default},data:function(){return{popup_setting:!1,action:"",tId:null,send:{text:"发送验证码",loading:!1},user:o.default.copy(B)}},mounted:function(){this.initUser()},computed:{my_menu:function(){return this.$store.state.ui_config.my_menu},bids:function(){return this.user$.employee.bids},required:function(){var e=this.user;return"changeName"==this.action?0===e.newname.length:"changeMobile"==this.action?!/^1[35789]{1}\d{9}$/.test(e.newmobile)||0===e.vcode.length:0===e.oldpassword.length||0===e.newpassword.length||0===e.newpassword1.length}},methods:{changeBranch:function(){this.branch().popupShow=!0},initUser:function(){var e=this.user$;this.user.name=e.name,this.user.mobile=e.mobile,this.user.is_weixin_bind=e.is_weixin_bind,this.user.nick_name=e.employee.nick_name,this.user.newname=e.employee.nick_name},changeAvatar:function(){var e=this;this.chooseImage(1,!0).then(function(t){e.avatarChanged(t[0])})},toggleBindWx:function(){this.user.is_weixin_bind?this.unBindWX():this.bindWX()},unBindWX:function(){var e=this;this.$http.post("users/"+this.user.uid+"/dounbind").then(function(t){e.user.is_weixin_bind=0,e.$store.commit("updateUserInfo",{user:e.user,action:"unbind_wx"})}).catch(function(t){e.$Message.error(t.body.message)})},bindWX:function(){var e=(this.$store.state.user,this.$store),t=this.$route.fullPath;0==this.user.is_weixin_bind&&(location.href=e.state.config.OAUTH_URL+"&p="+t+"&u="+e.state.user.info.uid)},avatarChanged:function(e){this.user.avatar=e.file_url,this.action="changeAvatar",this.edit_profile()},sendCapt:function(){if(!this.checkTel())return!1;this.getCapt()},getCapt:function(){var e=this,t=59;if(this.send.loading)return!1;this.send={loading:!0,text:"60s"},this.tId=setInterval(function(){t<10&&(t="0"+t),e.send.text=t+"s",--t<0&&(clearInterval(e.tId),e.send={loading:!1,text:"发送验证码"})},1e3),this.$rest("open/vcode").post({mobile:this.user.newmobile,type:"change"}).success(function(e){}).error(function(t){e.alert("获取验证码失败",t.body.message),clearInterval(e.tId),e.send={loading:!1,text:"发送验证码"}})},checkTel:function(){var e=this.user.newmobile;return""===e?(this.alert("请先输入手机号","手机号不能为空"),!1):!(""!==e&&!/^1[35789]{1}\d{9}$/.test(e))||(this.alert("请重新输入手机号","手机号格式不正确"),!1)},show_popup:function(e){this.action=e,this.popup_setting=!0},hide_popup:function(){this.user.newmobile="",this.user.newname=this.user.nick_name,this.user.oldpassword="",this.user.newpassword="",this.user.newpassword1="",this.popup_setting=!1,this.send={text:"发送验证码",loading:!1},window.clearInterval(this.tId)},edit_profile:function(){var e=this;if(this.user.newpassword===this.user.newpassword1){var t={action:this.action};"changeName"==this.action?t.nick_name=this.user.newname:"changeMobile"==this.action?(t.mobile=this.user.newmobile,t.vcode=this.user.vcode):"changeAvatar"==this.action?t.avatar=this.user.avatar:(t.oldpassword=this.user.oldpassword,t.newpassword=this.user.newpassword,t.newpassword1=this.user.newpassword1),this.$http.put("profile",t).then(function(t){"changeName"==e.action?(e.user.nick_name=e.user.newname,e.$store.commit("updateUserInfo",{user:e.user,action:"changeName"})):"changeMobile"==e.action?(e.user.mobile=e.user.newmobile,e.$store.commit("updateUserInfo",{user:e.user,action:"changeMobile"})):"changeAvatar"==e.action&&e.$store.commit("updateUserInfo",{user:e.user,action:"changeAvatar"}),e.toast("修改成功","success"),e.hide_popup()}).catch(function(t){e.toast(t.body.message,"warn")})}else this.toast("两次密码不一致","warn")},logout:function(){var e=this;r.default.Logout().then(function(){e.$store.commit("clearLoginInfo"),e.$router.push({path:"/login"})},function(){e.$store.commit("clearLoginInfo"),e.$router.push({path:"/login"})})}}}},t45v:function(e,t,n){var i=n("JaXy");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("FIqI")("11e63ffa",i,!0,{})}});
//# sourceMappingURL=46.f37abfffaaaf1013ee07.js.map