webpackJsonp([225],{1545:function(t,s,i){"use strict";var a=i(6);s.a={data:function(){return{show_flag:!1}},methods:{ok:function(){this.show_flag=!1,a.a.localStorage.set("guide_visited",1),this.$store.state.layout.startGuide()},show:function(){this.show_flag=!0},skip:function(){this.show_flag=!1,a.a.localStorage.set("guide_visited",1),this.$store.state.layout.isSetup()}}}},2089:function(t,s){},2090:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.show_flag?a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],staticClass:"guide-modal",attrs:{width:"500"}},[a("div",{staticClass:"ivu-modal-mask",staticStyle:{"z-index":"2060"}}),t._v(" "),a("div",{staticClass:"ivu-modal-wrap",staticStyle:{"z-index":"2061"}},[a("div",{staticClass:"btn-wrap"},[a("img",{staticClass:"skip-img mr-3",attrs:{src:i(2091)},on:{click:t.skip}}),t._v(" "),a("img",{staticClass:"ok-img ",attrs:{src:i(2092)},on:{click:t.ok}})])])]):t._e()},e=[];a._withStripped=!0;var c={render:a,staticRenderFns:e};s.a=c},2091:function(t,s,i){t.exports=i.p+"cc655844908142ff0100c33cc8a30304.png"},2092:function(t,s,i){t.exports=i.p+"9456b9630bcf7ca3429c154644c6021f.png"},384:function(t,s,i){"use strict";function a(t){o||i(2089)}Object.defineProperty(s,"__esModule",{value:!0});var e=i(1545),c=i(2090),o=!1,n=i(11),r=a,l=n(e.a,c.a,!1,r,null,null);l.options.__file="src/views/common/modal/guide-confirm.vue",s.default=l.exports}});