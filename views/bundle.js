!function(t){var e={};function n(o){if(e[o])return e[o].exports;var l=e[o]={i:o,l:!1,exports:{}};return t[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)n.d(o,l,function(e){return t[e]}.bind(null,l));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(4)},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";function o(){}n.r(e);function l(t){return t()}function r(){return Object.create(null)}function a(t){t.forEach(l)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}new Set;function c(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function g(){return h(" ")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.data!==e&&(t.data=e)}function $(t,e){(null!=e||t.value)&&(t.value=e)}function x(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function y(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}new Set;let w;function _(t){w=t}function k(){if(!w)throw new Error("Function called outside component initialization");return w}function T(t){k().$$.on_mount.push(t)}const D=[],S=[],E=[],F=[],O=Promise.resolve();let M=!1;function P(){M||(M=!0,O.then(N))}function A(t){E.push(t)}let q=!1;const C=new Set;function N(){if(!q){q=!0;do{for(let t=0;t<D.length;t+=1){const e=D[t];_(e),j(e.$$)}for(D.length=0;S.length;)S.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];C.has(e)||(C.add(e),e())}E.length=0}while(D.length);for(;F.length;)F.pop()();M=!1,q=!1,C.clear()}}function j(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const L=new Set;let B;function H(t,e){t&&t.i&&(L.delete(t),t.i(e))}function z(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),B.c.push(()=>{L.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}"undefined"!=typeof window?window:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let I;function R(t){t&&t.c()}function U(t,e,n){const{fragment:o,on_mount:r,on_destroy:s,after_update:c}=t.$$;o&&o.m(e,n),A(()=>{const e=r.map(l).filter(i);s?s.push(...e):a(e),t.$$.on_mount=[]}),c.forEach(A)}function Y(t,e){const n=t.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e,n,l,i,s,c=[-1]){const u=w;_(t);const d=e.props||{},p=t.$$={fragment:null,ctx:null,props:s,update:o,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:c};let h=!1;if(p.ctx=n?n(t,d,(e,n,...o)=>{const l=o.length?o[0]:n;return p.ctx&&i(p.ctx[e],p.ctx[e]=l)&&(p.bound[e]&&p.bound[e](l),h&&function(t,e){-1===t.$$.dirty[0]&&(D.push(t),P(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n}):[],p.update(),h=!0,a(p.before_update),p.fragment=!!l&&l(p.ctx),e.target){if(e.hydrate){const t=(g=e.target,Array.from(g.childNodes));p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();e.intro&&H(t.$$.fragment),U(t,e.target,e.anchor),N()}var g;_(u)}"function"==typeof HTMLElement&&(I=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){Y(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class J{$destroy(){Y(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}n(3);function V(t,e,n){const o=t.slice();return o[57]=e[n],o}function X(t,e,n){const o=t.slice();return o[54]=e[n],o}function K(t,e,n){const o=t.slice();return o[57]=e[n],o}function Q(t,e,n){const o=t.slice();return o[62]=e[n],o}function W(t){let e,n,o,l=t[8],r=[];for(let e=0;e<l.length;e+=1)r[e]=Z(Q(t,l,e));return{c(){e=p("select"),n=p("optgroup");for(let t=0;t<r.length;t+=1)r[t].c();v(n,"label",t[7]),x(e,"max-width","200px"),x(e,"margin-right","1%"),void 0===t[6]&&A(()=>t[44].call(e))},m(l,i,s){u(l,e,i),c(e,n);for(let t=0;t<r.length;t+=1)r[t].m(n,null);y(e,t[6]),s&&a(o),o=[m(e,"change",t[44]),m(e,"change",t[45])]},p(t,o){if(256&o[0]){let e;for(l=t[8],e=0;e<l.length;e+=1){const a=Q(t,l,e);r[e]?r[e].p(a,o):(r[e]=Z(a),r[e].c(),r[e].m(n,null))}for(;e<r.length;e+=1)r[e].d(1);r.length=l.length}128&o[0]&&v(n,"label",t[7]),64&o[0]&&y(e,t[6])},d(t){t&&f(e),d(r,t),a(o)}}}function Z(t){let e,n,o,l=t[62]+"";return{c(){e=p("option"),n=h(l),e.__value=o=t[62],e.value=e.__value},m(t,o){u(t,e,o),c(e,n)},p(t,r){256&r[0]&&l!==(l=t[62]+"")&&b(n,l),256&r[0]&&o!==(o=t[62])&&(e.__value=o),e.value=e.__value},d(t){t&&f(e)}}}function tt(t){let e,n;return{c(){e=p("input"),x(e,"margin-right","1%"),v(e,"placeholder","Search...")},m(o,l,r){u(o,e,l),$(e,t[9]),r&&a(n),n=[m(e,"keyup",t[46]),m(e,"input",t[47])]},p(t,n){512&n[0]&&e.value!==t[9]&&$(e,t[9])},d(t){t&&f(e),a(n)}}}function et(t){let e,n,o,l;return{c(){e=p("input"),n=g(),o=p("input"),x(e,"margin-right","2%"),v(e,"type","date"),v(e,"id","dateFrom"),v(e,"title","Date From"),e.value=t[12],v(e,"min",t[10]),v(e,"max",t[11]),v(o,"type","date"),v(o,"id","dateTo"),v(o,"title","Date To"),v(o,"min",t[14]),v(o,"max",t[11]),o.value=t[13]},m(r,i,s){u(r,e,i),t[48](e),u(r,n,i),u(r,o,i),t[50](o),s&&a(l),l=[m(e,"change",t[49]),m(o,"change",t[51])]},p(t,n){4096&n[0]&&(e.value=t[12]),1024&n[0]&&v(e,"min",t[10]),2048&n[0]&&v(e,"max",t[11]),16384&n[0]&&v(o,"min",t[14]),2048&n[0]&&v(o,"max",t[11]),8192&n[0]&&(o.value=t[13])},d(r){r&&f(e),t[48](null),r&&f(n),r&&f(o),t[50](null),a(l)}}}function nt(t){let e,n,o,l,r=t[57].charAt(0).toUpperCase()+t[57].slice(1)+"";function a(...e){return t[52](t[57],...e)}return{c(){e=p("th"),n=h(r),o=h("↑↓"),x(e,"cursor","pointer"),v(e,"class","svelte-17ee2qa")},m(t,r,i){u(t,e,r),c(e,n),c(e,o),i&&l(),l=m(e,"click",a)},p(e,o){t=e,8&o[0]&&r!==(r=t[57].charAt(0).toUpperCase()+t[57].slice(1)+"")&&b(n,r)},d(t){t&&f(e),l()}}}function ot(t){let e,n,o=(void 0!==t[54][t[57]]?t[54][t[57]]:"")+"";return{c(){e=p("td"),n=h(o),v(e,"class","svelte-17ee2qa")},m(t,o){u(t,e,o),c(e,n)},p(t,e){262156&e[0]&&o!==(o=(void 0!==t[54][t[57]]?t[54][t[57]]:"")+"")&&b(n,o)},d(t){t&&f(e)}}}function lt(t){let e,n,o=t[3],l=[];for(let e=0;e<o.length;e+=1)l[e]=ot(V(t,o,e));return{c(){e=p("tr");for(let t=0;t<l.length;t+=1)l[t].c();n=g(),v(e,"class","svelte-17ee2qa")},m(t,o){u(t,e,o);for(let t=0;t<l.length;t+=1)l[t].m(e,null);c(e,n)},p(t,r){if(262156&r[0]){let a;for(o=t[3],a=0;a<o.length;a+=1){const i=V(t,o,a);l[a]?l[a].p(i,r):(l[a]=ot(i),l[a].c(),l[a].m(e,n))}for(;a<l.length;a+=1)l[a].d(1);l.length=o.length}},d(t){t&&f(e),d(l,t)}}}function rt(t){let e,n;return{c(){e=p("button"),e.textContent="Load more...",x(e,"width","100%")},m(o,l,r){u(o,e,l),r&&n(),n=m(e,"click",t[25])},p:o,d(t){t&&f(e),n()}}}function at(t){let e;return{c(){e=p("p"),e.textContent="Loading ...",x(e,"text-align","center")},m(t,n){u(t,e,n)},d(t){t&&f(e)}}}function it(t){let e,n,l,r,a,i,s,h,m,b,$,y,w,_=t[4]&&W(t),k=t[5]&&tt(t),T=t[15]&&et(t),D=t[3],S=[];for(let e=0;e<D.length;e+=1)S[e]=nt(K(t,D,e));let E=t[2].slice(0,t[18]),F=[];for(let e=0;e<E.length;e+=1)F[e]=lt(X(t,E,e));let O=t[20]&!t[19]&&rt(t),M=t[1]&&at();return{c(){e=p("section"),n=p("div"),_&&_.c(),l=g(),k&&k.c(),r=g(),T&&T.c(),a=g(),i=p("div"),s=p("table"),h=p("thead"),m=p("tr");for(let t=0;t<S.length;t+=1)S[t].c();b=g(),$=p("tbody");for(let t=0;t<F.length;t+=1)F[t].c();y=g(),O&&O.c(),w=g(),M&&M.c(),v(m,"class","svelte-17ee2qa"),v(h,"class","svelte-17ee2qa"),v(s,"class","svelte-17ee2qa"),x(i,"width","100%"),x(i,"max-height","500px"),x(i,"overflow","auto"),v(n,"id","data-visualization"),x(n,"text-align","center"),v(n,"class","svelte-17ee2qa"),v(e,"class","moveable")},m(o,f){u(o,e,f),c(e,n),_&&_.m(n,null),c(n,l),k&&k.m(n,null),c(n,r),T&&T.m(n,null),c(n,a),c(n,i),c(i,s),c(s,h),c(h,m);for(let t=0;t<S.length;t+=1)S[t].m(m,null);c(s,b),c(s,$);for(let t=0;t<F.length;t+=1)F[t].m($,null);c(i,y),O&&O.m(i,null),c(n,w),M&&M.m(n,null),t[53](e)},p(t,e){if(t[4]?_?_.p(t,e):(_=W(t),_.c(),_.m(n,l)):_&&(_.d(1),_=null),t[5]?k?k.p(t,e):(k=tt(t),k.c(),k.m(n,r)):k&&(k.d(1),k=null),t[15]?T?T.p(t,e):(T=et(t),T.c(),T.m(n,a)):T&&(T.d(1),T=null),2097160&e[0]){let n;for(D=t[3],n=0;n<D.length;n+=1){const o=K(t,D,n);S[n]?S[n].p(o,e):(S[n]=nt(o),S[n].c(),S[n].m(m,null))}for(;n<S.length;n+=1)S[n].d(1);S.length=D.length}if(262156&e[0]){let n;for(E=t[2].slice(0,t[18]),n=0;n<E.length;n+=1){const o=X(t,E,n);F[n]?F[n].p(o,e):(F[n]=lt(o),F[n].c(),F[n].m($,null))}for(;n<F.length;n+=1)F[n].d(1);F.length=E.length}t[20]&!t[19]?O?O.p(t,e):(O=rt(t),O.c(),O.m(i,null)):O&&(O.d(1),O=null),t[1]?M||(M=at(),M.c(),M.m(n,null)):M&&(M.d(1),M=null)},i:o,o:o,d(n){n&&f(e),_&&_.d(),k&&k.d(),T&&T.d(),d(S,n),d(F,n),O&&O.d(),M&&M.d(),t[53](null)}}}function st(t){let e=""+t;return t<10&&(e="0"+e),e}function ct(t,e,n){let o,{customData:l}=e;function r(){l&&l.customTarget&&o.setAttribute("custom-target",l.customTarget)}T(()=>{r()});let a,i,s,c,u,f,d,p,h,g,m,v,b,$=!0,x=[],y=[],w=!1,_=!1,k=[],D={},E=!1,F=50,O=50,M=!1,P=30;function A(t){let e;n(3,y=[]),t.length>0&&(e=t[0]);for(let t in e)c&&c===t||y.push(t);a={col:y[0],ascending:!1}}let q=t=>{a.col===t?a.ascending=!a.ascending:(a.col=t,a.ascending=!0);let e=a.ascending?1:-1;n(2,x=x.sort((n,o)=>n[t]<o[t]?-1*e:n[t]>o[t]?1*e:0))};function C(t,e,o){console.log("Retrieving data from "+t),n(1,$=!0),i=[];var l=new XMLHttpRequest;l.onreadystatechange=function(){4==this.readyState&&200==this.status&&(console.log("Data retrieved!"),i=JSON.parse(this.responseText),n(2,x=function(t,e){let n=t.split("."),o=!1,l=[];for(var r in n){if(!(e=e[n[r]]))return!1;Array.isArray(e)?(l=e,e=e[0],o=!0):o=!1}return!!o&&l}(e,i)),w&&c?(n(8,k=[]),N(c,x),j(o)):(n(6,s="all"),D.all=x),A(x),m&&setMinMaxVaaluesOfData(x.slice()),n(1,$=!1))},l.open("GET",t,!0),l.send()}function N(t,e){e.forEach((function(e){const n=e[t];n&&(k.includes(n)||(k.push(n),D[n]=[]),D[n].push(e))})),k.sort(),n(6,s=k[0])}function j(t){Object.keys(D).length>0&&(void 0===t?t=s:n(6,s=t),n(2,x=D[t]),_&&n(9,u=""),m&&I(x.slice()),n(18,F=O))}function L(t){if(n(18,F=O),""==u)return void n(2,x=D[s]);let e=[];n(2,x=D[s]);for(let t=0;t<x.length;++t)for(let n=0;n<y.length;++n)if(x[t][y[n]]&&x[t][y[n]].toString().indexOf(u)>-1){e.push(x[t]);break}0==e.length?n(2,x=[B()]):n(2,x=e)}function B(){let t={};return y.forEach((function(e){t[e]="-"})),t}function H(t){n(18,F=O),"dateTo"===t.target.id?n(13,h=t.target.value):"dateFrom"===t.target.id&&n(12,p=t.target.value),n(14,g=p),p>h&&n(13,h=p),z(p,h),n(9,u="")}function z(t,e){n(2,x=D[s]);let o=[];for(let n=0;n<x.length;++n)x[n][m]&&x[n][m].substr(0,10)>=t&&x[n][m].substr(0,10)<=e&&o.push(x[n]);0==o.length?n(2,x=[B()]):n(2,x=o)}function I(t){if(t&&t.length>0){let e,o;t.sort((function(t,e){return new Date(t[m])-new Date(e[m])}));for(let n=0;n<t.length;++n)if(t[n][m]){const o=new Date(t[n][m]);if(!isNaN(o)){e=o;break}}for(let e=t.length-1;e>=0;--e)if(t[e][m]){const n=new Date(t[e][m]);if(!isNaN(n)){o=n;break}}if(void 0===o||void 0===e)return n(16,v.disabled=!0,v),void n(17,b.disabled=!0,b);n(16,v.disabled=!1,v),n(17,b.disabled=!1,b);const l=e.getFullYear()+"-"+st(e.getMonth()+1)+"-"+st(e.getDate()),r=o.getFullYear()+"-"+st(o.getMonth()+1)+"-"+st(o.getDate());n(12,p=n(10,f=n(14,g=l))),n(13,h=n(11,d=r))}}function R(){l&&(l.selectBoxField&&(n(7,c=l.selectBoxField),n(4,w=!0)),l.searchBox&&n(5,_=!0),l.datePickersField&&(m=l.datePickersField,n(15,E=!0)),l.defaultSize&&(O=l.defaultSize,n(18,F=O)),l.monitoring&&n(19,M=!0),l.refreshTime&&(P=l.refreshTime))}function U(){R(),C(l.url,l.path)}let Y=1;setInterval((function(){if(M)if(Y==P){const t=s;Y=0,C(l.url,t)}else Y++}),1e3),U();let G;return t.$set=t=>{"customData"in t&&n(26,l=t.customData)},t.$$.update=()=>{262148&t.$$.dirty[0]&&n(20,G=x.length>F)},[o,$,x,y,w,_,s,c,k,u,f,d,p,h,g,E,v,b,F,M,G,q,j,L,H,function(){n(18,F+=50)},l,a,i,D,m,O,P,Y,r,[],A,C,N,B,z,I,R,U,function(){s=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(6,s),n(8,k)},()=>{j(s)},t=>L(),function(){u=this.value,n(9,u)},function(t){S[t?"unshift":"push"](()=>{n(17,b=t)})},t=>{H(t)},function(t){S[t?"unshift":"push"](()=>{n(16,v=t)})},t=>{H(t)},t=>q(t),function(t){S[t?"unshift":"push"](()=>{n(0,o=t)})}]}var ut=class extends J{constructor(t){super(),G(this,t,ct,it,s,{customData:26},[-1,-1,-1])}};n(2);function ft(t){let e;return{c(){e=p("section"),e.innerHTML='<div class="footer_container svelte-1a30oxp"><div class="link_container svelte-1a30oxp">\n      European Factory Platform © 2021\n      <div class="vs svelte-1a30oxp"></div> \n      <a href="https://www.efpf.org/home" target="_blank" class="svelte-1a30oxp">Home</a> \n      <div class="vs svelte-1a30oxp"></div> \n      <a href="https://www.efpf.org/federation" target="_blank" class="svelte-1a30oxp">Federation</a> \n      <div class="vs svelte-1a30oxp"></div> \n      <a href="https://www.efpf.org/platform" target="_blank" class="svelte-1a30oxp">Platform</a> \n      <div class="vs svelte-1a30oxp"></div> \n      <a href="https://www.efpf.org/offering" target="_blank" class="svelte-1a30oxp">Offering</a> \n      <div class="vs svelte-1a30oxp"></div> \n      <a href="https://www.efpf.org/partners" target="_blank" class="svelte-1a30oxp">Partners</a> \n      <div class="vs svelte-1a30oxp"></div> \n      <a href="https://www.efpf.org/eff" target="_blank" class="svelte-1a30oxp">EFF</a> \n      <div class="vs svelte-1a30oxp"></div> \n      <a href="https://www.efpf.org/privacy-policy" target="_blank" class="svelte-1a30oxp">Privacy Notice</a></div> \n    <img src="./logo_white_nolabel.png" alt="logo" class="svelte-1a30oxp"></div>',v(e,"class","moveable")},m(n,o){u(n,e,o),t[3](e)},p:o,i:o,o:o,d(n){n&&f(e),t[3](null)}}}function dt(t,e,n){let o,{customData:l}=e;function r(){l&&l.customTarget&&o.setAttribute("custom-target",l.customTarget)}return T(()=>{n(0,o.id="footer",o),r()}),t.$set=t=>{"customData"in t&&n(1,l=t.customData)},[o,l,r,function(t){S[t?"unshift":"push"](()=>{n(0,o=t)})}]}var pt=class extends J{constructor(t){super(),G(this,t,dt,ft,s,{customData:1})}};n(1);function ht(t){let e;return{c(){e=p("section"),e.innerHTML='<div class="navbar-fixed-top svelte-1b1okkv"><div class="logo svelte-1b1okkv"><img src="./header_logo.png" alt="European Factory Platform" class="svelte-1b1okkv"></div></div> \n  <div style="margin-top:106px;"></div>',v(e,"class","moveable")},m(n,o){u(n,e,o),t[3](e)},p:o,i:o,o:o,d(n){n&&f(e),t[3](null)}}}function gt(t,e,n){let o,{customData:l}=e;function r(){l&&l.customTarget&&o.setAttribute("custom-target",l.customTarget)}return T(()=>{n(0,o.id="header",o),r()}),t.$set=t=>{"customData"in t&&n(1,l=t.customData)},[o,l,r,function(t){S[t?"unshift":"push"](()=>{n(0,o=t)})}]}var mt=class extends J{constructor(t){super(),G(this,t,gt,ht,s,{customData:1})}};function vt(t){let e,n,l,r,a;const i=new mt({}),s=new pt({}),d=new ut({props:{customData:{url:"https://efpf.caixamagica.pt/efpftempapp/api/getAllSamples",path:"list_of_rows",preview:{id:"7",timestamp:"2021-09-03 14:39:32.823",sensor:"efpftempsensor",temperature:"48"},defaultSize:50}}});return{c(){e=p("main"),n=p("input"),R(i.$$.fragment),l=g(),R(s.$$.fragment),r=g(),R(d.$$.fragment),v(n,"type","hidden"),n.value="f503c9e3-b20d-49e5-adb7-121141567909"},m(t,o){u(t,e,o),c(e,n),U(i,e,null),c(e,l),U(s,e,null),c(e,r),U(d,e,null),a=!0},p:o,i(t){a||(H(i.$$.fragment,t),H(s.$$.fragment,t),H(d.$$.fragment,t),a=!0)},o(t){z(i.$$.fragment,t),z(s.$$.fragment,t),z(d.$$.fragment,t),a=!1},d(t){t&&f(e),Y(i),Y(s),Y(d)}}}function bt(t,e){let n=!1;const o=t.childNodes;let l,r=0;for(;r<o.length;++r)if(o[r].id===e){l=o[r];break}let a=r+1;for(;a<o.length;)o[a].id===e?(o[a].remove(),n=!0):a++;if("header"===e)t.insertBefore(l,o[0]);else{t.insertBefore(l,void 0);const e=l.offsetTop;e<200?l.style.marginTop="450px":e<300||e<400?l.style.marginTop="350px":e<500&&(l.style.marginTop="150px")}return n}function $t(t,e,n){let{name:o}=e;return T(()=>{!function(){const t=document.getElementsByClassName("moveable");for(let e=0;e<t.length;e++){const n=t[e],o=document.getElementById(n.getAttribute("custom-target")+"$container");o&&o.appendChild(n)}let e=0;for(;e<t.length;){const n=t[e],o=n.parentNode;let l=!1;"footer"===n.id?l=bt(o,"footer"):"header"===n.id&&(l=bt(o,"header")),l?e=0:++e}}()}),t.$set=t=>{"name"in t&&n(0,o=t.name)},[o]}const xt=new class extends J{constructor(t){super(),G(this,t,$t,vt,s,{name:0})}}({target:document.body,props:{name:"world"}});window.app=xt;e.default=xt}]);