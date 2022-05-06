"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[491],{207:function(n,e,t){t.d(e,{IQ:function(){return d},Jh:function(){return l},UN:function(){return s},YJ:function(){return h},dU:function(){return f}});var r=t(861),i=t(757),o=t.n(i),a="https://api.themoviedb.org/3",c="b799de2e1359641dffd47460cedfbdc0";function u(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(o().mark((function n(){var e,t,r,i=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"",t=i.length>1&&void 0!==i[1]?i[1]:{},n.next=4,fetch(e,t);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function s(n){return u("".concat(a,"/search/movie?&query=").concat(n,"&api_key=").concat(c,"&language=en-US&page=1&include_adult=false"))}function d(n){return u("".concat(a,"/movie/").concat(n,"/credits?api_key=").concat(c,"&language=en-US"))}function l(n){return u("".concat(a,"/movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"))}function f(){return u("".concat(a,"/trending/movie/day?api_key=").concat(c))}function h(n){return u("".concat(a,"/movie/").concat(n,"?api_key=").concat(c))}},177:function(n,e,t){t.d(e,{I6:function(){return s},Se:function(){return u},Zx:function(){return p}});var r,i,o,a=t(168),c=t(31),u=c.ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  margin-bottom: 10px;\n  /* border-bottom: 1px solid #2a363b; */\n"]))),p=c.ZP.div(i||(i=(0,a.Z)(["\n  display: block;\n  margin-left: 20px;\n"]))),s=c.ZP.div(o||(o=(0,a.Z)(["\n  height: 12px;\n  border: 0;\n  box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);\n"])))},491:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,i,o,a,c,u=t(885),p=t(791),s=t(501),d=t(871),l=t(577),f=t(168),h=t(31),x=t(50),g=(h.ZP.header(r||(r=(0,f.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),h.ZP.form(i||(i=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 10px;\n  max-width: 600px;\n  background-color: #fff;\n  border: 2px solid gray;\n  border-radius: 3px;\n  overflow: hidden;\n"])))),A=h.ZP.button(o||(o=(0,f.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url(",");\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"])),x),b=h.ZP.span(a||(a=(0,f.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),m=h.ZP.input(c||(c=(0,f.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),v=t(184);function y(n){var e=(0,p.useState)(n.searchMovie),t=(0,u.Z)(e,2),r=t[0],i=t[1];return(0,v.jsxs)(g,{onSubmit:function(e){e.preventDefault(),""!==r.trim()?n.inSubmit(r):l.Am.error("Please enter your query")},children:[(0,v.jsx)(A,{type:"submit",children:(0,v.jsx)(b,{children:"Search"})}),(0,v.jsx)(m,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:r,onChange:function(n){i(n.currentTarget.value.toLowerCase())}})]})}var k=t(207),Z=t(177);function w(){var n=(0,s.lr)(),e=(0,u.Z)(n,1)[0],t=(0,p.useState)(e.get("query")||""),r=(0,u.Z)(t,2),i=r[0],o=r[1],a=(0,p.useState)([]),c=(0,u.Z)(a,2),f=c[0],h=c[1],x=(0,d.s0)();console.log(f),(0,p.useEffect)((function(){i&&k.UN(i).then((function(n){if(0===n.results.length)return l.Am.info("Sorry, there are no movies matching your search query. Please try again.");h(n.results)}))}),[i]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(y,{inSubmit:function(n){console.log(n),x("/movies/?query=".concat(n)),o(n),h([])},searchMovie:i}),(0,v.jsx)(Z.I6,{}),f&&(0,v.jsx)("ul",{children:f.map((function(n){return(0,v.jsx)(s.OL,{to:"/movies/".concat(n.id),className:"Link",children:(0,v.jsx)("p",{children:n.title})},n.id)}))})]})}},50:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAbwAAAG8B8aLcQwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAE0SURBVDiNjdM/L4NRFAbwX1tpkw4WSaduVhLxZ2xiM4qhTXVjsdosvoCuEt/ALhZMvgDSjiQ2Qohg8ifiGt5beVVfdZKznHuf55xzn+cKIeglqmjjGI84xy5a6Xs/MCnwKp5whHXMo4Et3OMA1YEEEfyc1QkV7OMC5b4z1di5hUmMZ5AU0cV2P0E7jj2KKyxl7ss0PjHWq+UxF/dbxgP2ZEQI4Qx3mO3V8phCJ65yGnpzZUcnYsBIZKxgJxIOi0rEfE9wgpkQwk0I4fovZC6XK2EiYr6jJdG5kvV4qUfcxCUK/T44kOhc/AO8iDfUBhmpKjFJF9N9wFLs/IYPLGdZuYxtic63OMQZ3uPYNYnUr2j+IkgRjWEBG1iRuLOQOm9GksZAgv+k5JO9oJ4b7ptMSetY+wJ0YlmA2shGCAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=491.29796bc9.chunk.js.map