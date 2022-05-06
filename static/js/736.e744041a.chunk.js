"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{673:function(n,e,t){t.d(e,{Z:function(){return f}});var r,c,i=t(871),o=t(168),a=t(31),s=a.ZP.button(r||(r=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  background-color: lightyellow;\n  border-radius: 10%;\n"]))),u=a.ZP.span(c||(c=(0,o.Z)(["\n  margin-left: 10px;\n  color: darkblue;\n  font-weight: 700;\n"]))),l=t(494),d=t(184);function f(n){var e=n.onClick,t=(0,i.s0)();return console.log(t),(0,d.jsxs)(s,{type:"button",onClick:e,children:[(0,d.jsx)(l.Fjg,{fill:"darkblue",size:"32"})," ",(0,d.jsx)(u,{children:" GO BACK"})]})}},207:function(n,e,t){t.d(e,{IQ:function(){return d},Jh:function(){return f},UN:function(){return l},YJ:function(){return p},dU:function(){return x}});var r=t(861),c=t(757),i=t.n(c),o="https://api.themoviedb.org/3",a="b799de2e1359641dffd47460cedfbdc0";function s(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(i().mark((function n(){var e,t,r,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(e,t);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),u.apply(this,arguments)}function l(n){return s("".concat(o,"/search/movie?&query=").concat(n,"&api_key=").concat(a,"&language=en-US&page=1&include_adult=false"))}function d(n){return s("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(a,"&language=en-US"))}function f(n){return s("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(a,"&language=en-US&page=1"))}function x(){return s("".concat(o,"/trending/movie/day?api_key=").concat(a))}function p(n){return s("".concat(o,"/movie/").concat(n,"?api_key=").concat(a))}},736:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r,c=t(885),i=t(168),o=t(791),a=t(871),s=t(501),u=t(234),l=t(673),d=t(207),f=t(31),x=t(177),p=t(184),h=f.ZP.div(r||(r=(0,i.Z)(["\n  display: inline-block;\n  text-decoration: none;\n  padding: 12px;\n  font-weight: 500;\n  color: #2a363b;\n  font-size: 18px;\n"])));function g(){var n=(0,a.UO)().movieId,e=(0,o.useState)(null),t=(0,c.Z)(e,2),r=t[0],i=t[1],f=(0,a.s0)();console.log(f);var g=a.TH;console.log(g),(0,o.useEffect)((function(){d.YJ(n).then((function(n){return i(n)}))}),[n]);var v,j;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(x.I6,{}),r&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.Z,{onClick:function(){return f(-1)}}),(0,p.jsx)(u.Z,{text:"".concat(r.title)}),(0,p.jsx)(x.I6,{}),(0,p.jsxs)(x.Se,{children:[(0,p.jsx)("img",{src:"".concat((j=r.poster_path,null===j?"https://wipfilms.net/wp-content/data/posters/tt0338683.jpg":"https://image.tmdb.org/t/p/w300".concat(j))),alt:r.title}),(0,p.jsxs)(x.Zx,{children:[(0,p.jsxs)("h2",{children:[" ",r.title," "]}),(0,p.jsx)("h3",{children:" Overview: "}),(0,p.jsxs)("p",{children:[" ",r.overview," "]}),(0,p.jsxs)("p",{children:[" User score: ","".concat((v=r.vote_average,10*v+"%"))," "]}),(0,p.jsx)("h3",{children:" Genres: "}),(0,p.jsx)("p",{children:"".concat(function(n){if(null!==n)return n.map((function(n){return n.name})).join(", ")}(r.genres))})]})]}),(0,p.jsx)(x.I6,{}),(0,p.jsx)("h2",{children:" Additional information "}),(0,p.jsx)(h,{children:(0,p.jsx)(s.OL,{to:"/movies/".concat(r.id,"/cast"),className:"Link",children:(0,p.jsx)(u.Z,{text:"Cast"})})}),(0,p.jsx)(h,{children:(0,p.jsx)(s.OL,{to:"/movies/".concat(r.id,"/reviews"),className:"Link",children:(0,p.jsx)(u.Z,{text:"Reviews"})})}),(0,p.jsx)(a.j3,{})]})]})}},177:function(n,e,t){t.d(e,{I6:function(){return l},Se:function(){return s},Zx:function(){return u}});var r,c,i,o=t(168),a=t(31),s=a.ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  margin-bottom: 10px;\n  /* border-bottom: 1px solid #2a363b; */\n"]))),u=a.ZP.div(c||(c=(0,o.Z)(["\n  display: block;\n  margin-left: 20px;\n"]))),l=a.ZP.div(i||(i=(0,o.Z)(["\n  height: 12px;\n  border: 0;\n  box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);\n"])))}}]);
//# sourceMappingURL=736.e744041a.chunk.js.map