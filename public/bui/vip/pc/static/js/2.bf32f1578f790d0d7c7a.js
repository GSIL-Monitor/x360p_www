webpackJsonp([2],{"/ZpJ":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={data:function(){return{data:[{gid:1,unit:200,num:1,img:"",title:"考勤读卡器",desc:"即插即用无需安装"},{gid:2,unit:200,num:1,img:"",title:"小票打印机",desc:"热敏打印吊炸天"}],gids:[1,2]}},methods:{onChange:function(t,s){var i=this.gids.indexOf(s.gid);t&&-1===i&&this.gids.push(s.gid),i>-1&&!t&&this.gids.splice(i,1)},sum:function(t){var s=t.num,i=t.unit;return parseFloat(s*i).toFixed(2)}},computed:{amount:function(){var t=this,s=0;return this.gids.forEach(function(i){s=parseFloat(s)+parseFloat(t.sum(t.data.find(function(t){return t.gid===i})))}),parseFloat(s).toFixed(2)}}},e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticStyle:{"max-height":"185px",overflow:"auto"}},[a("table",{staticClass:"x-cart-table"},t._l(t.data,function(s){return a("tr",[a("td",[a("div",{staticClass:"ivu-table-cell"},[a("Checkbox",{attrs:{value:t.gids.indexOf(s.gid)>-1},on:{"on-change":function(i){t.onChange(i,s)}}})],1)]),t._v(" "),a("td",[a("div",{staticClass:"ivu-table-cell"},[a("div",{staticClass:"cart-item clearfloat"},[t._m(0,!0),t._v(" "),a("div",{staticClass:"pull-left ml-3 cart-item-content"},[a("span",{staticClass:"cart-item-title"},[t._v(t._s(s.title))]),t._v(" "),a("span",{staticClass:"cart-item-desc",attrs:{title:s.desc}},[t._v(t._s(s.desc))]),t._v(" "),a("div",{staticClass:"mt-2"},[a("InputNumber",{attrs:{min:0,max:9999},model:{value:s.num,callback:function(i){t.$set(s,"num",i)},expression:"item.num"}})],1)])])])]),t._v(" "),a("td",[a("div",{staticClass:"ivu-table-cell text-right"},[a("Button",{attrs:{size:"small",type:"ghost",shape:"circle",icon:"ios-trash"}}),t._v(" "),a("p",{staticClass:"money mt-2"},[t._v("￥"+t._s(t.sum(s)))])],1)])])}))]),t._v(" "),a("Card",{staticClass:"mt-3 b-dashed m-auto",staticStyle:{width:"80%","border-color":"#666666"},attrs:{"dis-hover":"",bordered:""}},[a("div",{staticClass:"text-center money font-weight-bold"},[t._v("\n\t\t\t￥"+t._s(t.amount)+"\n\t\t")]),t._v(" "),a("Row",{staticClass:"mt-2"},[a("Col",{attrs:{span:"12"}},[a("div",{staticClass:"pay-item"},[a("div",{staticClass:"item-img"},[a("img",{attrs:{src:i("Popt")}})]),t._v(" "),a("Button",{staticClass:"mt-3",attrs:{type:"primary"}},[t._v("微信支付")])],1)]),t._v(" "),a("Col",{attrs:{span:"12"}},[a("div",{staticClass:"pay-item"},[a("div",{staticClass:"item-img"},[a("img",{attrs:{src:i("7/84")}})]),t._v(" "),a("Button",{staticClass:"mt-3",attrs:{type:"primary"}},[t._v("支付宝支付")])],1)])],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"thumb-img pull-left"},[s("img",{attrs:{src:i("2ohS")}})])}]},n=i("8AGX")(a,e,!1,null,null,null);s.default=n.exports},"2ohS":function(t,s,i){t.exports=i.p+"static/img/good1.1b7ed48.png"},Popt:function(t,s,i){t.exports=i.p+"static/img/qrcode.45d8d6b.png"}});
//# sourceMappingURL=2.bf32f1578f790d0d7c7a.js.map