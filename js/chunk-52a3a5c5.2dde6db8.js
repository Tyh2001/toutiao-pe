(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52a3a5c5"],{"21d1":function(t,e,n){"use strict";n("d7c5")},2423:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return o})),n.d(e,"b",(function(){return u}));var a=n("b775"),r=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_1/articles",params:t})},i=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/articles/".concat(t)})},c=function(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/article/collections",data:t})},s=function(t){return Object(a["a"])({method:"DELETE",url:"/app/v1_0/article/collections/".concat(t)})},o=function(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/article/likings",data:t})},u=function(t){return Object(a["a"])({method:"DELETE",url:"/app/v1_0/article/likings/".concat(t)})}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),r=n("5899"),i="["+r+"]",c=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),o=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},"7abe":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"topBar"},[n("van-button",{attrs:{type:"default","icon-prefix":"toutiao",icon:"sousuo",round:"",to:"/search"}},[t._v(" 搜索 ")])],1),n("van-tabs",{attrs:{"title-active-color":"#333333"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-icon",{staticClass:"hamburgerBtn",attrs:{"class-prefix":"toutiao",name:"gengduo"},on:{click:t.ChannelEditShow}}),t._l(t.channels,(function(t){return n("van-tab",{key:t.id,attrs:{title:t.name}},[n("ArticleList",{attrs:{channel:t}})],1)}))],2),n("van-popup",{style:{top:"0"},attrs:{position:"bottom",round:"",closeable:"","close-icon-position":"top-left","get-container":"body"},model:{value:t.isChannelEditShow,callback:function(e){t.isChannelEditShow=e},expression:"isChannelEditShow"}},[n("ChannelEdit",{attrs:{userChannels:t.channels,active:t.active},on:{close:function(e){t.isChannelEditShow=!1},updateActive:function(e){t.active=e}}})],1)],1)},r=[],i=n("1da1"),c=n("5530"),s=(n("96cf"),n("c24f")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"article-list",attrs:{id:"ArticleList"}},[n("van-pull-refresh",{attrs:{"success-text":t.successText,"success-duration":"1500"},on:{refresh:t.onRefresh},model:{value:t.isPullDownLoading,callback:function(e){t.isPullDownLoading=e},expression:"isPullDownLoading"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.articles,(function(t,e){return n("ArticleItem",{key:e,attrs:{article:t}})})),1)],1)],1)},u=[],l=n("2909"),d=n("2423"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-cell-group",[n("van-cell",{attrs:{to:{name:"article",params:{articleId:t.article.art_id}}}},[n("div",{staticClass:"title van-multi-ellipsis--l2",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.article.title))]),n("div",{attrs:{slot:"label"},slot:"label"},[3===t.article.cover.type?n("div",{staticClass:"coverWrap"},t._l(t.article.cover.images,(function(t,e){return n("van-image",{key:e,staticClass:"itemImg",attrs:{src:t}})})),1):t._e(),n("div",[n("span",{staticClass:"explain"},[t._v(t._s(t.article.aut_name))]),n("span",{staticClass:"explain"},[t._v(t._s(t.article.comm_count))]),n("span",{staticClass:"explain"},[t._v(t._s(t._f("relativeTime")(t.article.pubdate)))])])]),n("div",{staticClass:"imagesBox",attrs:{slot:"default"},slot:"default"},[1===t.article.cover.type?n("van-image",{staticClass:"images",attrs:{src:t.article.cover.images[0]}}):t._e()],1)])],1)],1)},h=[],p={name:"ArticleItem",props:{article:{type:Object,required:!0}},data:function(){return{}}},v=p,m=(n("a06a"),n("2877")),b=Object(m["a"])(v,f,h,!1,null,"093f9705",null),g=b.exports,_=n("2ef0"),C={name:"ArticleList",props:{channel:{type:Object,required:!0}},components:{ArticleItem:g},data:function(){return{articles:[],loading:!1,finished:!1,timestamp:null,isPullDownLoading:!1,successText:"",scrollTop:0}},mounted:function(){var t=this,e=this.$refs["article-list"];e.onscroll=Object(_["debounce"])((function(){t.scrollTop=e.scrollTop}),50)},activated:function(){this.$refs["article-list"].scrollTop=this.scrollTop},methods:{onLoad:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["e"])({channel_id:t.channel.id,timestamp:t.timestamp||Date.now(),with_top:1});case 2:a=e.sent,r=a.data,i=r.data.results,(n=t.articles).push.apply(n,Object(l["a"])(i)),t.loading=!1,i.length?t.timestamp=r.data.pre_timestamp:t.finished=!0;case 8:case"end":return e.stop()}}),e)})))()},onRefresh:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["e"])({channel_id:t.channel.id,timestamp:Date.now(),with_top:1});case 2:a=e.sent,r=a.data,i=r.data.results,(n=t.articles).unshift.apply(n,Object(l["a"])(i)),t.isPullDownLoading=!1,t.successText="已更新".concat(i.length,"条数据");case 8:case"end":return e.stop()}}),e)})))()}}},E=C,O=(n("21d1"),Object(m["a"])(E,o,u,!1,null,"48e5d94a",null)),x=O.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"channelEdit"}},[n("van-cell",{attrs:{center:"",border:!1}},[n("div",{attrs:{slot:"title"},slot:"title"},[t._v("我的频道")]),n("van-button",{attrs:{plain:"",type:"danger",size:"mini",round:""},on:{click:function(e){t.isEdit=!t.isEdit}}},[t._v(" "+t._s(t.isEdit?"完成":"编辑")+" ")])],1),n("van-grid",{attrs:{gutter:10}},t._l(t.userChannels,(function(e,a){return n("van-grid-item",{key:a,staticClass:"gridItem",class:{active:a===t.active},attrs:{text:e.name,icon:t.isEdit&&0!==a?"close":""},on:{click:function(n){return t.onUserChannelClick(e,a)}}})})),1),n("van-cell",{attrs:{center:"",border:!1}},[n("div",{attrs:{slot:"title"},slot:"title"},[t._v("频道推荐")])]),n("van-grid",{attrs:{gutter:10}},t._l(t.recommendChannels,(function(e,a){return n("van-grid-item",{key:a,attrs:{text:e.name},on:{click:function(n){return t.onAddChannel(e)}}})})),1)],1)},j=[],k=(n("a9e3"),n("4160"),n("159b"),n("a434"),n("b775")),T=function(){return Object(k["a"])({method:"GET",url:"/app/v1_0/channels"})},A=function(t){return Object(k["a"])({method:"PATCH",url:"/app/v1_0/user/channels",data:t})},I=function(t){return Object(k["a"])({method:"DELETE",url:"/app/v1_0/user/channels/".concat(t)})},y=n("2f62"),N=n("5d2d"),S={name:"ChannelEdit",props:{userChannels:{type:Array,required:!0},active:{type:Number,required:!0}},data:function(){return{allChannels:[],isEdit:!1}},computed:Object(c["a"])(Object(c["a"])({},Object(y["b"])(["user"])),{},{recommendChannels:function(){var t=this,e=[];return this.allChannels.forEach((function(n){for(var a=!1,r=0;r<t.userChannels.length;r++)if(t.userChannels[r].id===n.id){a=!0;break}a||e.push(n)})),e}}),created:function(){this.loadgetAllChannels()},methods:{loadgetAllChannels:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:n=e.sent,a=n.data,t.allChannels=a.data.channels;case 5:case"end":return e.stop()}}),e)})))()},onAddChannel:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.userChannels.push(t),!e.user){n.next=6;break}return n.next=4,A({channels:[{id:t.id,seq:e.userChannels.length}]});case 4:n.next=7;break;case 6:Object(N["b"])("user-channels",e.userChannels);case 7:case"end":return n.stop()}}),n)})))()},onUserChannelClick:function(t,e){this.isEdit&&0!==e?this.deleteChannel(t,e):this.switchChannel(e)},deleteChannel:function(t,e){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e<=n.active&&n.$emit("updateActive",n.active-1),n.userChannels.splice(e,1),!n.user){a.next=7;break}return a.next=5,I(t.id);case 5:a.next=8;break;case 7:Object(N["b"])("user-channels",n.userChannels);case 8:case"end":return a.stop()}}),a)})))()},switchChannel:function(t){this.$emit("updateActive",t),this.$emit("close")}}},L=S,R=(n("b9ca"),Object(m["a"])(L,w,j,!1,null,"e7a74484",null)),P=R.exports,D={name:"homeIndex",components:{ArticleList:x,ChannelEdit:P},data:function(){return{active:0,channels:[],isChannelEditShow:!1}},computed:Object(c["a"])({},Object(y["b"])(["user"])),created:function(){this.loadChanndls()},methods:{loadChanndls:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=[],!t.user){e.next=9;break}return e.next=4,Object(s["e"])();case 4:a=e.sent,r=a.data,n=r.data.channels,e.next=19;break;case 9:if(i=Object(N["a"])("user-channels"),!i){e.next=14;break}n=i,e.next=19;break;case 14:return e.next=16,Object(s["e"])();case 16:c=e.sent,o=c.data,n=o.data.channels;case 19:t.channels=n;case 20:case"end":return e.stop()}}),e)})))()},ChannelEditShow:function(){this.isChannelEditShow=!0}}},G=D,$=(n("9250"),Object(m["a"])(G,a,r,!1,null,"301125d0",null));e["default"]=$.exports},9250:function(t,e,n){"use strict";n("ac59")},9494:function(t,e,n){},a06a:function(t,e,n){"use strict";n("9494")},a9e3:function(t,e,n){"use strict";var a=n("83ab"),r=n("da84"),i=n("94ca"),c=n("6eeb"),s=n("5135"),o=n("c6b6"),u=n("7156"),l=n("c04e"),d=n("d039"),f=n("7c73"),h=n("241c").f,p=n("06cf").f,v=n("9bf2").f,m=n("58a8").trim,b="Number",g=r[b],_=g.prototype,C=o(f(_))==b,E=function(t){var e,n,a,r,i,c,s,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=m(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+u}for(i=u.slice(2),c=i.length,s=0;s<c;s++)if(o=i.charCodeAt(s),o<48||o>r)return NaN;return parseInt(i,a)}return+u};if(i(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var O,x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(C?d((function(){_.valueOf.call(n)})):o(n)!=b)?u(new g(E(e)),n,x):E(e)},w=a?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),j=0;w.length>j;j++)s(g,O=w[j])&&!s(x,O)&&v(x,O,p(g,O));x.prototype=_,_.constructor=x,c(r,b,x)}},ac59:function(t,e,n){},acc7:function(t,e,n){},b9ca:function(t,e,n){"use strict";n("acc7")},c24f:function(t,e,n){"use strict";n.d(e,"h",(function(){return r})),n.d(e,"i",(function(){return i})),n.d(e,"f",(function(){return c})),n.d(e,"e",(function(){return s})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return f}));var a=n("b775"),r=function(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/authorizations",data:t})},i=function(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/sms/codes/".concat(t)})},c=function(){return Object(a["a"])({method:"GET",url:"/app/v1_0/user"})},s=function(){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/channels"})},o=function(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/user/followings",data:t})},u=function(t){return Object(a["a"])({method:"DELETE",url:"/app/v1_0/user/followings/".concat(t)})},l=function(){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/profile"})},d=function(t){return Object(a["a"])({method:"PATCH",url:"/app/v1_0/user/profile",data:t})},f=function(t){return Object(a["a"])({method:"PATCH",url:"/app/v1_0/user/photo",data:t})}},d7c5:function(t,e,n){}}]);
//# sourceMappingURL=chunk-52a3a5c5.2dde6db8.js.map