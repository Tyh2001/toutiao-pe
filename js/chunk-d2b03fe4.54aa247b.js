(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d2b03fe4"],{"9ed6":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loginIndex"},[n("van-nav-bar",{attrs:{title:"登录","left-arrow":""},on:{"click-left":function(t){return e.$router.back()}}}),n("van-form",{ref:"login-form",attrs:{"show-error":!1,"show-error-message":!1,"validate-first":""},on:{submit:e.onLogin,failed:e.onFailed}},[n("van-field",{attrs:{clearable:"","icon-prefix":"toutiao","left-icon":"shouji",name:"mobile",placeholder:"请输入手机号",rules:e.formRules.mobile},model:{value:e.user.mobile,callback:function(t){e.$set(e.user,"mobile",t)},expression:"user.mobile"}}),n("van-field",{attrs:{"icon-prefix":"toutiao","left-icon":"yanzhengma",placeholder:"请输入验证码",rules:e.formRules.code},scopedSlots:e._u([{key:"button",fn:function(){return[e.showTime?n("van-count-down",{attrs:{time:6e4,format:"ss s",center:""},on:{finish:function(t){e.showTime=!1}}}):e._e(),e.showTime?e._e():n("van-button",{staticClass:"obtainBtn",attrs:{size:"small",loading:e.loading,round:"",center:""},on:{click:function(t){return t.preventDefault(),e.onSendSms(t)}}},[e._v("获取验证码")])]},proxy:!0}]),model:{value:e.user.code,callback:function(t){e.$set(e.user,"code",t)},expression:"user.code"}}),n("div",{staticClass:"btnBox"},[n("van-button",{attrs:{type:"info",block:""}},[e._v("登录")])],1)],1),n("p",{staticClass:"describe"},[e._v("任何手机号都可以登录")]),n("p",{staticClass:"describe"},[e._v("接收验证码时间可能会较长")]),n("p",{staticClass:"describe"},[e._v("可以使用万能验证码 246810")])],1)},o=[],a=n("1da1"),s=(n("96cf"),n("c24f")),i=n("d399"),u={name:"loginIndex",data:function(){return{user:{mobile:"13911111112",code:"246810"},formRules:{mobile:[{required:!0,message:"请输入手机号"},{pattern:/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,message:"手机号格式错误"}],code:[{required:!0,message:"请输入验证码"},{pattern:/^[0-9]{6}$/,message:"验证码格式错误"}]},showTime:!1,loading:!1}},methods:{onLogin:function(){var e=this;i["a"].loading({message:"登录中...",forbidClick:!0,duration:0}),Object(s["h"])(this.user).then((function(t){Object(i["a"])({message:"登录成功",icon:"success"}),e.$store.commit("setUser",t.data.data),e.$store.commit("clearCachePages","layoutIndex"),e.$router.push("/")})).catch((function(e){i["a"].fail("登录失败，手机号或验证码错误"),console.log(e)}))},onFailed:function(e){e.errors[0]&&Object(i["a"])({position:"top",message:e.errors[0].message})},onSendSms:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.$refs["login-form"].validate("mobile");case 4:return t.next=6,Object(s["i"])(e.user.mobile);case 6:e.showTime=!0,t.next=15;break;case 9:t.prev=9,t.t0=t["catch"](1),n="",n=t.t0&&t.t0.request&&429===t.t0.request.status?"操作频繁":"mobile"===t.t0.name?t.t0.message:"系统异常，稍后再试",Object(i["a"])({position:"top",message:n}),e.loading=!1;case 15:case"end":return t.stop()}}),t,null,[[1,9]])})))()}}},c=u,l=(n("dfaa"),n("2877")),d=Object(l["a"])(c,r,o,!1,null,"5e8cda58",null);t["default"]=d.exports},ae0a:function(e,t,n){},c24f:function(e,t,n){"use strict";n.d(t,"h",(function(){return o})),n.d(t,"i",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n("b775"),o=function(e){return Object(r["a"])({method:"POST",url:"/app/v1_0/authorizations",data:e})},a=function(e){return Object(r["a"])({method:"GET",url:"/app/v1_0/sms/codes/".concat(e)})},s=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user"})},i=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/channels"})},u=function(e){return Object(r["a"])({method:"POST",url:"/app/v1_0/user/followings",data:e})},c=function(e){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/user/followings/".concat(e)})},l=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/profile"})},d=function(e){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/profile",data:e})},f=function(e){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/photo",data:e})}},dfaa:function(e,t,n){"use strict";n("ae0a")}}]);
//# sourceMappingURL=chunk-d2b03fe4.54aa247b.js.map