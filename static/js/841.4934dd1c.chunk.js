"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[841],{841:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});var r=e(885),c=e(739),a=e(731),u=e(791),i=e(628),o=e(184);function s(){var t=(0,u.useState)([]),n=(0,r.Z)(t,2),e=n[0],s=n[1],p=(0,c.TH)();return(0,u.useEffect)((function(){(0,i.Tg)().then((function(t){s(t.results)})).catch((function(t){return console.log(t)}))}),[]),(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Trending today"}),(0,o.jsx)("ul",{children:e.map((function(t){var n=t.original_title,e=t.id;return(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:p},children:n})},e)}))})]})}},628:function(t,n,e){function r(t,n,e,r,c,a,u){try{var i=t[a](u),o=i.value}catch(s){return void e(s)}i.done?n(o):Promise.resolve(o).then(r,c)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(c,a){var u=t.apply(n,e);function i(t){r(u,c,a,i,o,"next",t)}function o(t){r(u,c,a,i,o,"throw",t)}i(void 0)}))}}e.d(n,{_n:function(){return o},PQ:function(){return l},Y5:function(){return f},Bt:function(){return v},Ai:function(){return g},Tg:function(){return s}});var a=e(757),u=e.n(a),i="4023fc4c5ca1260d3fd50ec2a2da6087",o="https://image.tmdb.org/t/p/w500";function s(){return p.apply(this,arguments)}function p(){return(p=c(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,t.next=5,n.json();case 5:return e=t.sent,t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=c(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=c(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=c(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return x.apply(this,arguments)}function x(){return(x=c(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=841.4934dd1c.chunk.js.map