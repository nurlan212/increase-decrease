(this.webpackJsonp67_1=this.webpackJsonp67_1||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c,r,a=n(0),o=n(7),u=n.n(o),s=(n(28),n(29),n(4)),i=n(6),b=n.n(i),j=n(13),l="FETCH_COUNTER_REQUEST",d="FETCH_COUNTER",O="FETCH_COUNTER_ERROR",f="INCREASE_COUNTER",_="DECREASE_COUNTER",p="ADD",h="SUBTRACT",x="CLOSE_MODAL",v=n(8),w=n.n(v),C=w.a.create({baseURL:"https://nuralmkz-default-rtdb.firebaseio.com/"}),k=function(e){return{type:O,error:e}},E=(n(55),n(1)),g=function(){return Object(E.jsx)("div",{className:"Preloader"})},m=(n(57),function(e){var t=e.text,n=e.onClickBtn;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"Modal__backdrop"}),Object(E.jsxs)("div",{className:"Modal__window",children:[Object(E.jsx)("div",{className:"Modal__window__header",children:Object(E.jsx)("button",{className:"Modal__window__btn Modal__window__btn-close",onClick:n,children:"\u2715"})}),Object(E.jsx)("p",{className:"Modal__window__text",children:t}),Object(E.jsx)("button",{className:"Modal__window__btn Modal__window__btn-ok",onClick:n,children:"Ok"})]})]})}),T=function(){var e=Object(s.c)((function(e){return e.counter})),t=Object(s.c)((function(e){return e.isLoading})),n=Object(s.c)((function(e){return e.error})),o=Object(s.c)((function(e){return e.errorShowed})),u=Object(s.b)();return Object(a.useEffect)((function(){u(function(){var e=Object(j.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:l}),e.prev=1,e.next=4,C.get("/67_1.json");case 4:r=e.sent,c=Object.keys(r.data)[0],t((n=r.data[c].counter,{type:d,counter:n})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(k(e.t0));case 12:case"end":return e.stop()}var n}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}())}),[u]),Object(a.useEffect)((function(){var t;u((t=e,function(){var e=Object(j.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=11;break}return"undefined"!=typeof r&&r.cancel("Operation canceled due to new request."),r=w.a.CancelToken.source(),e.prev=3,e.next=6,C.put("/67_1/".concat(c,".json"),{counter:t},{cancelToken:r.token});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),n(k(e.t0));case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}()))}),[e,u]),Object(E.jsxs)(E.Fragment,{children:[o?Object(E.jsx)(m,{text:n.message,onClickBtn:function(){u({type:x})}}):null,t?Object(E.jsx)(g,{}):null,Object(E.jsx)("h1",{children:e}),Object(E.jsx)("button",{onClick:function(){u({type:f})},children:"Increase"}),Object(E.jsx)("button",{onClick:function(){u({type:_})},children:"Decrease"}),Object(E.jsxs)("button",{onClick:function(){u({type:p,value:20})},children:["Add ",20]}),Object(E.jsxs)("button",{onClick:function(){u({type:h,value:20})},children:["Subtract ",20]})]})};var y=function(){return Object(E.jsx)("div",{className:"App",children:Object(E.jsx)(T,{})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))},R=n(5),S=n(2),L={counter:3,isLoading:!1,error:null,errorShowed:!1},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(S.a)(Object(S.a)({},e),{},{isLoading:!0});case d:return Object(S.a)(Object(S.a)({},e),{},{counter:t.counter,isLoading:!1});case O:return Object(S.a)(Object(S.a)({},e),{},{error:t.error,errorShowed:!0,isLoading:!1});case x:return Object(S.a)(Object(S.a)({},e),{},{errorShowed:!1});case f:return Object(S.a)(Object(S.a)({},e),{},{counter:e.counter+1});case _:return e.counter>0?Object(S.a)(Object(S.a)({},e),{},{counter:e.counter-1}):e;case p:return Object(S.a)(Object(S.a)({},e),{},{counter:e.counter+t.value});case h:return e.counter>=t.value?Object(S.a)(Object(S.a)({},e),{},{counter:e.counter-t.value}):e;default:return e}},M=n(23),U=Object(R.c)(F,Object(R.a)(M.a)),A=Object(E.jsx)(s.a,{store:U,children:Object(E.jsx)(y,{})});u.a.render(A,document.getElementById("root")),N()}},[[58,1,2]]]);
//# sourceMappingURL=main.8d04814d.chunk.js.map