"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[999],{673:function(n,t,e){e.d(t,{Z:function(){return f}});var r,o,c=e(871),a=e(168),i=e(31),u=i.ZP.button(r||(r=(0,a.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  background-color: lightyellow;\n  border-radius: 10%;\n"]))),l=i.ZP.span(o||(o=(0,a.Z)(["\n  margin-left: 10px;\n  color: darkblue;\n  font-weight: 700;\n"]))),s=e(494),d=e(184);function f(n){var t=n.onClick,e=(0,c.s0)();return console.log(e),(0,d.jsxs)(u,{type:"button",onClick:t,children:[(0,d.jsx)(s.Fjg,{fill:"darkblue",size:"32"})," ",(0,d.jsx)(l,{children:" GO BACK"})]})}},207:function(n,t,e){e.d(t,{IQ:function(){return d},Jh:function(){return f},UN:function(){return s},YJ:function(){return g},dU:function(){return p}});var r=e(861),o=e(757),c=e.n(o),a="https://api.themoviedb.org/3",i="b799de2e1359641dffd47460cedfbdc0";function u(){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(c().mark((function n(){var t,e,r,o=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",e=o.length>1&&void 0!==o[1]?o[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),l.apply(this,arguments)}function s(n){return u("".concat(a,"/search/movie?&query=").concat(n,"&api_key=").concat(i,"&language=en-US&page=1&include_adult=false"))}function d(n){return u("".concat(a,"/movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"))}function f(n){return u("".concat(a,"/movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"))}function p(){return u("".concat(a,"/trending/movie/day?api_key=").concat(i))}function g(n){return u("".concat(a,"/movie/").concat(n,"?api_key=").concat(i))}},999:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,o,c,a,i=e(885),u=e(791),l=e(871),s=e(673),d=e(207),f=e(168),p=e(31),g=p.ZP.ul(r||(r=(0,f.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),h=p.ZP.h3(o||(o=(0,f.Z)(["\n  color: red;\n  font-weight: bold;\n"]))),m=p.ZP.p(c||(c=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  color: darkblue;\n  font-weight: bold;\n"]))),x=p.ZP.span(a||(a=(0,f.Z)(["\n  color: blue;\n  font-weight: bold;\n"]))),b=e(184);function v(){var n=(0,l.UO)();console.log(n);var t=(0,l.UO)().movieId,e=(0,u.useState)(null),r=(0,i.Z)(e,2),o=r[0],c=r[1],a=(0,l.s0)();console.log(a),(0,u.useEffect)((function(){d.IQ(t).then((function(n){return c(n.cast)}))}),[t]),console.log(o);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s.Z,{onClick:function(){return a(-1)}}),o&&(0,b.jsx)(g,{children:o.map((function(n){return(0,b.jsxs)("li",{children:[(0,b.jsx)("img",{src:"".concat((t=n.profile_path,null===t?"https://wipfilms.net/wp-content/data/posters/tt0338683.jpg":"https://image.tmdb.org/t/p/w300".concat(t))),alt:n.name,width:"240"}),(0,b.jsx)(h,{children:n.name}),(0,b.jsxs)(m,{children:[" ","Character:",(0,b.jsxs)(x,{children:[" ",n.character," "]})," "]})]},n.id);var t}))})]})}}}]);
//# sourceMappingURL=999.7c2fe86d.chunk.js.map