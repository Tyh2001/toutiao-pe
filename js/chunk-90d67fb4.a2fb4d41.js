(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90d67fb4"],{"230c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"articleIndex"}},[n("van-nav-bar",{attrs:{title:"文章详情","left-arrow":""},on:{"click-left":function(e){return t.$router.back()}}}),n("div",{staticClass:"ArticleContent"},[n("h1",{staticClass:"title"},[t._v(t._s(t.article.title))]),n("van-cell",{attrs:{center:""}},[n("div",{staticClass:"userName",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.article.aut_name))]),n("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[t._v(t._s(t._f("relativeTime")(t.article.pubdate)))]),n("van-image",{staticClass:"userImg",attrs:{slot:"icon",round:"",src:t.article.aut_photo},slot:"icon"}),n("van-button",{staticClass:"followBtn",attrs:{type:t.article.is_followed?"default":"danger",size:"mini",icon:t.article.is_followed?"":"plus",round:"",loading:t.BtnLoading},on:{click:t.onFollow}},[t._v(t._s(t.article.is_followed?"已关注":"关注"))])],1),n("div",{ref:"article-content",staticClass:"markdown-body",domProps:{innerHTML:t._s(t.article.content)}}),n("CommentList",{attrs:{source:t.articleId,commentList:t.commentList},on:{total_count:function(e){t.totalCountItem=e},"reply-click":t.onReplyClick}})],1),n("van-cell",{staticClass:"bottomBox",attrs:{center:""}},[n("van-button",{staticClass:"commentBtn",attrs:{type:"default",size:"mini",round:""},on:{click:function(e){t.commentShow=!0}}},[t._v("写评论")]),n("van-icon",{attrs:{"class-prefix":"toutiao",name:"pinglun",badge:t.totalCountItem}}),n("van-icon",{attrs:{name:1===t.article.attitude?"good-job":"good-job-o",color:1===t.article.attitude?"orange":""},on:{click:t.onAttitude}}),n("van-icon",{attrs:{name:t.article.is_collected?"star":"star-o",color:t.article.is_collected?"orange":""},on:{click:t.onCollectionsArticle}}),n("van-icon",{attrs:{"class-prefix":"toutiao",name:"fenxiang"}})],1),n("van-popup",{attrs:{position:"bottom"},model:{value:t.commentShow,callback:function(e){t.commentShow=e},expression:"commentShow"}},[n("CommentPost",{attrs:{target:t.articleId},on:{"post-success":t.onPostSuccess}})],1),n("van-popup",{attrs:{position:"bottom"},model:{value:t.commentReplyShow,callback:function(e){t.commentReplyShow=e},expression:"commentReplyShow"}},[t.commentReplyShow?n("CommentReply",{attrs:{comment:t.replyComment,articleId:t.articleId},on:{close:function(e){t.commentReplyShow=!1}}}):t._e()],1)],1)},o=[],a=n("1da1"),c=(n("96cf"),n("a9e3"),n("4160"),n("159b"),n("b0dd"),n("2423")),i=n("28a2"),s=n("c24f"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-cell",{attrs:{title:"全部评论"}}),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.commentList,(function(e,r){return n("CommentItem",{key:r,attrs:{comment:e},on:{"reply-click":function(e){return t.$emit("reply-click",e)}}})})),1)],1)},l=[],m=n("2909"),d=(n("d3b7"),n("25f0"),n("b775")),f=function(t){return Object(d["a"])({method:"GET",url:"/app/v1_0/comments",params:t})},p=function(t){return Object(d["a"])({method:"POST",url:"/app/v1_0/comment/likings",data:{target:t}})},v=function(t){return Object(d["a"])({method:"DELETE",url:"/app/v1_0/comment/likings/".concat(t)})},b=function(t){return Object(d["a"])({method:"POST",url:"/app/v1_0/comments",data:t})},h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"CommentItem"}},[n("div",{staticClass:"userPhotoBox"},[n("van-image",{staticClass:"userPhoto",attrs:{slot:"icon",round:"",src:t.comment.aut_photo},slot:"icon"})],1),n("div",{staticClass:"rightBox"},[n("div",{staticClass:"commentItem"},[n("div",{staticClass:"userName"},[t._v(t._s(t.comment.aut_name))]),n("div",{staticClass:"content"},[t._v(t._s(t.comment.content))]),n("div",{staticClass:"TimeBtn"},[n("span",{staticClass:"time"},[t._v(t._s(t._f("dataTime")(t.comment.pubdate,"MM-DD HH:mm")))]),n("van-button",{staticClass:"replyBtn",attrs:{type:"default",round:"",size:"mini"},on:{click:function(e){return t.$emit("reply-click",t.comment)}}},[t._v(" "+t._s(t.comment.reply_count)+"回复 ")])],1)]),n("div",{staticClass:"likeBox",on:{click:t.onCommentLike}},[n("van-icon",{attrs:{color:t.comment.is_liking?"orange":"",name:t.comment.is_liking?"good-job":"good-job-o"}}),n("span",{staticClass:"like_count"},[t._v(t._s(t.comment.like_count))])],1)])])},g=[],_={name:"CommentItem",props:{comment:{type:Object,required:!0}},data:function(){return{}},methods:{onCommentLike:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.comment.com_id.toString(),!t.comment.is_liking){e.next=7;break}return e.next=4,v(n);case 4:t.comment.like_count--,e.next=10;break;case 7:return e.next=9,p(n);case 9:t.comment.like_count++;case 10:t.comment.is_liking=!t.comment.is_liking;case 11:case"end":return e.stop()}}),e)})))()}}},y=_,w=(n("4f44"),n("2877")),C=Object(w["a"])(y,h,g,!1,null,"201a24be",null),x=C.exports,k={name:"commentList",components:{CommentItem:x},props:{source:{type:[Number,Object,String],required:!0},commentList:{type:Array,default:function(){return[]}},type:{type:String,default:"a"}},data:function(){return{loading:!1,finished:!1,offset:null,limit:10}},methods:{onLoad:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f({type:t.type,source:t.source.toString(),offset:t.offset,limit:t.limit});case 2:r=e.sent,o=r.data,t.$emit("total_count",o.data.total_count),a=o.data.results,(n=t.commentList).push.apply(n,Object(m["a"])(a)),t.loading=!1,a.length?t.offset=o.data.last_id:t.finished=!0;case 9:case"end":return e.stop()}}),e)})))()}}},O=k,j=Object(w["a"])(O,u,l,!1,null,"2418ae22",null),S=j.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"CommentPost"}},[n("van-field",{attrs:{autosize:"",type:"textarea",maxlength:"50","show-word-limit":""},model:{value:t.message,callback:function(e){t.message="string"===typeof e?e.trim():e},expression:"message"}}),n("div",{staticClass:"releaseBtn",on:{click:t.onPost}},[t._v("发布")])],1)},E=[],A={name:"CommentPost",props:{target:{type:[String,Number,Object],required:!0},articleId:{type:[String,Number,Object],default:null}},data:function(){return{message:""}},methods:{onPost:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b({target:t.target.toString(),content:t.message,art_id:null===t.articleId?null:t.articleId.toString()});case 2:n=e.sent,r=n.data,t.$emit("post-success",r.data.new_obj),t.message="",t.$toast.success("发布成功");case 7:case"end":return e.stop()}}),e)})))()}}},R=A,L=(n("ac2b"),Object(w["a"])(R,I,E,!1,null,"3d1c2dbc",null)),T=L.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"CommentReply"}},[n("van-nav-bar",{staticClass:"vanNavBar",attrs:{title:t.comment.reply_count+" 条回复"}},[n("div",{attrs:{slot:"left"},slot:"left"},[n("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.$emit("close")}}})],1)]),n("CommentItem",{attrs:{comment:t.comment}}),n("p",{staticClass:"allComment"},[t._v("全部评论")]),n("CommentList",{attrs:{source:t.comment.com_id,type:"c",list:t.commentList}}),n("div",{staticClass:"bottomBox"},[n("van-button",{staticClass:"commentBtn",attrs:{type:"default",size:"mini",round:""},on:{click:function(e){t.commentShow=!0}}},[t._v("写评论")])],1),n("van-popup",{attrs:{position:"bottom"},model:{value:t.commentShow,callback:function(e){t.commentShow=e},expression:"commentShow"}},[n("CommentPost",{attrs:{target:t.comment.com_id,articleId:t.articleId},on:{"post-success":t.onPostSuccess}})],1)],1)},N=[],B={name:"CommentReply",props:{comment:{type:Object,required:!0},articleId:{type:[Object,String,Number],required:!0}},components:{CommentItem:x,CommentList:S,CommentPost:T},data:function(){return{commentShow:!1,commentList:[]}},methods:{onPostSuccess:function(t){this.commentList.unshift(t),this.comment.reply_count++,this.commentShow=!1}}},$=B,G=(n("dd82"),Object(w["a"])($,P,N,!1,null,"3d16e9a6",null)),M=G.exports,F={name:"articleIndex",props:{articleId:{type:[String,Number,Object],required:!0}},components:{CommentList:S,CommentPost:T,CommentReply:M},data:function(){return{article:{},BtnLoading:!1,commentShow:!1,commentList:[],totalCountItem:0,commentReplyShow:!1,replyComment:{}}},created:function(){this.loadgetArticleById()},methods:{loadgetArticleById:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["d"])(t.articleId);case 2:n=e.sent,r=n.data,t.article=r.data,t.$nextTick((function(){t.handlePerviewImage()}));case 6:case"end":return e.stop()}}),e)})))()},handlePerviewImage:function(){var t=this.$refs["article-content"],e=t.querySelectorAll("img"),n=[];e.forEach((function(t,e){n.push(t.src),t.onclick=function(){Object(i["a"])({images:n,startPosition:e})}}))},onFollow:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.BtnLoading=!0,!t.article.is_followed){e.next=6;break}return e.next=4,Object(s["a"])(t.article.aut_id);case 4:e.next=8;break;case 6:return e.next=8,Object(s["d"])({target:t.article.aut_id});case 8:t.BtnLoading=!1,t.article.is_followed=!t.article.is_followed;case 10:case"end":return e.stop()}}),e)})))()},onCollectionsArticle:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.article.is_collected){e.next=5;break}return e.next=3,Object(c["a"])(t.article.art_id);case 3:e.next=7;break;case 5:return e.next=7,Object(c["c"])({target:t.article.art_id});case 7:t.article.is_collected=!t.article.is_collected;case 8:case"end":return e.stop()}}),e)})))()},onAttitude:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==t.article.attitude&&-1!==t.article.attitude){e.next=6;break}return e.next=3,Object(c["f"])({target:t.article.art_id});case 3:t.article.attitude=1,e.next=9;break;case 6:return e.next=8,Object(c["b"])(t.article.art_id);case 8:t.article.attitude=0;case 9:case"end":return e.stop()}}),e)})))()},onPostSuccess:function(t){this.commentList.unshift(t),this.commentShow=!1,this.totalCountItem++},onReplyClick:function(t){this.replyComment=t,this.commentReplyShow=!0}}},q=F,z=(n("9fec"),Object(w["a"])(q,r,o,!1,null,"d18caffa",null));e["default"]=z.exports},2423:function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return i})),n.d(e,"f",(function(){return s})),n.d(e,"b",(function(){return u}));var r=n("b775"),o=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_1/articles",params:t})},a=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/articles/".concat(t)})},c=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/article/collections",data:t})},i=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/article/collections/".concat(t)})},s=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/article/likings",data:t})},u=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/article/likings/".concat(t)})}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),o=n("825a"),a=n("d039"),c=n("ad6d"),i="toString",s=RegExp.prototype,u=s[i],l=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),m=u.name!=i;(l||m)&&r(RegExp.prototype,i,(function(){var t=o(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?c.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},2909:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t){if(Array.isArray(t))return r(t)}n.d(e,"a",(function(){return s}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("fb6a");function c(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return o(t)||a(t)||c(t)||i()}},"4df4":function(t,e,n){"use strict";var r=n("0366"),o=n("7b0b"),a=n("9bdd"),c=n("e95a"),i=n("50c4"),s=n("8418"),u=n("35a1");t.exports=function(t){var e,n,l,m,d,f,p=o(t),v="function"==typeof this?this:Array,b=arguments.length,h=b>1?arguments[1]:void 0,g=void 0!==h,_=u(p),y=0;if(g&&(h=r(h,b>2?arguments[2]:void 0,2)),void 0==_||v==Array&&c(_))for(e=i(p.length),n=new v(e);e>y;y++)f=g?h(p[y],y):p[y],s(n,y,f);else for(m=_.call(p),d=m.next,n=new v;!(l=d.call(m)).done;y++)f=g?a(m,h,[l.value,y],!0):l.value,s(n,y,f);return n.length=y,n}},"4f44":function(t,e,n){"use strict";n("b1f6")},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),o=n("5899"),a="["+o+"]",c=RegExp("^"+a+a+"*"),i=RegExp(a+a+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(i,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(t,e,n){var r=n("861d"),o=n("d2bb");t.exports=function(t,e,n){var a,c;return o&&"function"==typeof(a=e.constructor)&&a!==n&&r(c=a.prototype)&&c!==n.prototype&&o(t,c),t}},"8f43":function(t,e,n){},"9bdd":function(t,e,n){var r=n("825a"),o=n("2a62");t.exports=function(t,e,n,a){try{return a?e(r(n)[0],n[1]):e(n)}catch(c){throw o(t),c}}},"9fec":function(t,e,n){"use strict";n("8f43")},a630:function(t,e,n){var r=n("23e7"),o=n("4df4"),a=n("1c7e"),c=!a((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:c},{from:o})},a9e3:function(t,e,n){"use strict";var r=n("83ab"),o=n("da84"),a=n("94ca"),c=n("6eeb"),i=n("5135"),s=n("c6b6"),u=n("7156"),l=n("c04e"),m=n("d039"),d=n("7c73"),f=n("241c").f,p=n("06cf").f,v=n("9bf2").f,b=n("58a8").trim,h="Number",g=o[h],_=g.prototype,y=s(d(_))==h,w=function(t){var e,n,r,o,a,c,i,s,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=b(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+u}for(a=u.slice(2),c=a.length,i=0;i<c;i++)if(s=a.charCodeAt(i),s<48||s>o)return NaN;return parseInt(a,r)}return+u};if(a(h,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var C,x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(y?m((function(){_.valueOf.call(n)})):s(n)!=h)?u(new g(w(e)),n,x):w(e)},k=r?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;k.length>O;O++)i(g,C=k[O])&&!i(x,C)&&v(x,C,p(g,C));x.prototype=_,_.constructor=x,c(o,h,x)}},ac2b:function(t,e,n){"use strict";n("efe9")},b0dd:function(t,e,n){},b1f6:function(t,e,n){},c24f:function(t,e,n){"use strict";n.d(e,"h",(function(){return o})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return c})),n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"c",(function(){return m})),n.d(e,"b",(function(){return d}));var r=n("b775"),o=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/authorizations",data:t})},a=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/sms/codes/".concat(t)})},c=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user"})},i=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/channels"})},s=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/user/followings",data:t})},u=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/user/followings/".concat(t)})},l=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/profile"})},m=function(t){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/profile",data:t})},d=function(t){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/photo",data:t})}},c66b:function(t,e,n){},dd82:function(t,e,n){"use strict";n("c66b")},efe9:function(t,e,n){},fb6a:function(t,e,n){"use strict";var r=n("23e7"),o=n("861d"),a=n("e8b5"),c=n("23cb"),i=n("50c4"),s=n("fc6a"),u=n("8418"),l=n("b622"),m=n("1dde"),d=m("slice"),f=l("species"),p=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var n,r,l,m=s(this),d=i(m.length),b=c(t,d),h=c(void 0===e?d:e,d);if(a(m)&&(n=m.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?o(n)&&(n=n[f],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return p.call(m,b,h);for(r=new(void 0===n?Array:n)(v(h-b,0)),l=0;b<h;b++,l++)b in m&&u(r,l,m[b]);return r.length=l,r}})}}]);
//# sourceMappingURL=chunk-90d67fb4.a2fb4d41.js.map