"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{135:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(885),a=t(628),i=t(731),c=t(739),s=t(791),u="MovieDetails_img__uOAom",o="MovieDetails_card__pqAte",p="MovieDetails_container__Ys+c9",l="MovieDetails_link__U+v+7",f=t(340),h=t(184);function d(){var e,n,t=(0,s.useState)(""),d=(0,r.Z)(t,2),v=d[0],m=d[1],x=(0,c.UO)().moviesId;(0,s.useEffect)((function(){(0,a.Y5)(x).then((function(e){m(e)}))}),[x]);var j=v.poster_path,g=v.title,_=v.original_title,w=v.vote_average,k=v.overview,y=null!==(e=null===(n=(0,c.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:p,children:[(0,h.jsx)(i.rU,{to:y,children:"Go back"}),(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("img",{className:u,src:j?a._n+j:f,alt:g}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:_}),(0,h.jsxs)("p",{children:["User Score: ",w]}),(0,h.jsx)("h2",{children:"Overview"}),(0,h.jsx)("p",{children:k}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("p",{children:function(){if(""!==v)return v.genres.map((function(e){return e.name})).join(" ")}()})]})]})]}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(i.rU,{to:"cast",className:l,state:{from:y},children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(i.rU,{to:"reviews",className:l,state:{from:y},children:"Reviews"})})]}),(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading..."}),children:(0,h.jsx)(c.j3,{})})]})}},628:function(e,n,t){function r(e,n,t,r,a,i,c){try{var s=e[i](c),u=s.value}catch(o){return void t(o)}s.done?n(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(a,i){var c=e.apply(n,t);function s(e){r(c,a,i,s,u,"next",e)}function u(e){r(c,a,i,s,u,"throw",e)}s(void 0)}))}}t.d(n,{_n:function(){return u},PQ:function(){return h},Y5:function(){return l},Bt:function(){return v},Ai:function(){return x},Tg:function(){return o}});var i=t(757),c=t.n(i),s="4023fc4c5ca1260d3fd50ec2a2da6087",u="https://image.tmdb.org/t/p/w500";function o(){return p.apply(this,arguments)}function p(){return(p=a(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s));case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=a(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=a(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=a(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return j.apply(this,arguments)}function j(){return(j=a(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},340:function(e,n,t){e.exports=t.p+"static/media/defaultImage.4850e48a3b1e283607a9.jpg"}}]);
//# sourceMappingURL=135.e21b2e13.chunk.js.map