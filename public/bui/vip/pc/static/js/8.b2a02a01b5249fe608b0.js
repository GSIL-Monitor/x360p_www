webpackJsonp([8],{"bhD+":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("8Llf"),e=(a("TVG1"),a("Ym9J"),!1),n={mixins:[i.a],data:function(){return{action:"default",num:1,num_changed:!1,order_amount:"",loading:!1,paycode:null,is_pay:!1}},mounted:function(){1==this.$store.state.client.is_init_pay?this.getPaycode():this.push("/base")},beforeDestroy:function(){e=!0},methods:{getPaycode:function(){var t=this;this.loading=!0,this.num_changed=!1,this.$http.post("paycode/expand",{nums:this.num}).then(function(s){t.loading=!1,t.paycode=s.body.data,t.order_amount=t.paycode.total_fee,e=!1,t.check_order()},function(s){t.loading=!1})},push:function(t){this.$router.replace(t)},check_order:function(){var t=this;this.is_pay||e||this.$rest("orders").add_url_param(this.paycode.vo_id).get().success(function(s){1==s.pay_status?(t.is_pay=!0,t.$store.commit("addClientAccountLimitNum",t.year),t.success()):t.th=setTimeout(function(){t.check_order()},3e3)}).error(function(s){t.th=setTimeout(function(){t.check_order()},3e3)})},success:function(){this.action="success"},gosystem:function(){var t=this.$store.state.user.info.product_url.split("://"),s=t[0]+"://"+this.$store.state.client.host+"."+t[1];location.href=s},goalipay:function(){document.forms.alipayform.submit()}},watch:{num:function(t){this.num_changed=!0}},computed:{account_num_limit:function(){return this.$store.state.client.account_num_limit},total_num_limit:function(){return this.$store.state.client.account_num_limit+this.num}}},o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",["default"==t.action?[i("div",[i("label",{staticStyle:{width:"100px",display:"inline-block"}},[t._v("扩充容量")]),t._v(" "),i("InputNumber",{attrs:{min:1,max:1e3},model:{value:t.num,callback:function(s){t.num=s},expression:"num"}}),t._v(" "),i("span",[t._v("（账号许可）")]),t._v(" "),t.num_changed?i("Button",{attrs:{type:"default"},on:{click:t.getPaycode}},[t._v("确定")]):t._e(),t._v(" "),t.loading||""==t.order_amount?t._e():i("span",{staticClass:"money pull-right"},[t._v("￥"+t._s(t.order_amount))]),t._v(" "),i("p",{staticClass:"mt-2",staticStyle:{"text-indent":"100px"}},[t._v("（总账号许可："+t._s(t.total_num_limit)+"）")])],1),t._v(" "),i("p",{staticClass:"mt-3"},[t._v("如果您对以上费用信息有疑问，请停止操作，并直接联系您的客服顾问")]),t._v(" "),t.loading?i("div",{staticClass:"rel-box"},[i("Spin",{attrs:{fix:""}},[t._v("正在加载付款方式，请稍等...")]),t._v(" "),i("span",{staticClass:"money"},[t._v("￥"+t._s(t.amount))])],1):[i("h2",{staticClass:"m-b"},[i("Icon",{attrs:{type:"qr-scanner"}}),t._v(" "),i("strong",[t._v("请选择任意一种方式付款")])],1),t._v(" "),i("Row",[t.paycode&&""!=t.paycode.wxpay_qr_url?i("Col",{attrs:{span:"12"}},[i("div",{staticClass:"pay-code"},[i("img",{staticClass:"t",attrs:{src:a("w5+p")}}),t._v(" "),i("img",{staticClass:"qr",attrs:{src:"/vipapi/open/qrcode?uri="+t.paycode.wxpay_qr_url}}),t._v(" "),i("p",[t._v("请直接用微信扫码付款")])])]):t._e(),t._v(" "),t.paycode&&""!=t.paycode.alipay_qr_url?i("Col",{attrs:{span:"12"}},[i("div",{staticClass:"pay-code"},[i("img",{staticClass:"t",attrs:{src:a("dpI2")}}),t._v(" "),i("img",{staticClass:"qr",attrs:{src:"/vipapi/open/qrcode?uri="+t.paycode.wxpay_qr_url}})])]):t._e(),t._v(" "),t.paycode&&""!=t.paycode.alipay_html?i("Col",{attrs:{span:"12"}},[i("div",{staticClass:"pay-code"},[i("img",{staticClass:"t",attrs:{src:a("dpI2")}}),t._v(" "),i("img",{staticClass:"qr border",attrs:{src:a("7/84")}}),t._v(" "),i("Button",{staticClass:"pay-btn",attrs:{type:"primary"},on:{click:t.goalipay}},[t._v("请点击付款")])],1),t._v(" "),i("div",{staticClass:"pay-form",domProps:{innerHTML:t._s(t.paycode.alipay_html)}})]):t._e()],1)]]:t._e(),t._v(" "),"success"==t.action?[i("Alert",{attrs:{type:"success","show-icon":""}},[t._v("\n\t        扩容成功\n\t        "),i("div",{attrs:{slot:"desc"},slot:"desc"},[i("p",[t._v("您已经完成缴费，并成功将系统扩容"),i("span",{staticClass:"important"},[t._v(t._s(t.year))]),t._v("年，您的系统新的账号许可数是 "),i("span",{staticClass:"important"},[t._v(t._s(t.accont_num_limit))]),t._v("。")]),t._v(" "),i("Button",{attrs:{type:"ghost",size:"small",icon:"log-in"},on:{click:t.gosystem}},[t._v("前往登录")])],1)])]:t._e()],2)},staticRenderFns:[]},c=a("8AGX")(n,o,!1,null,null,null);s.default=c.exports}});
//# sourceMappingURL=8.b2a02a01b5249fe608b0.js.map