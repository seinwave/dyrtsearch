(this.webpackJsonpdyrtsearch=this.webpackJsonpdyrtsearch||[]).push([[0],{28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),i=n(5),o=n.n(i),s=(n(28),n(4)),d=n(3),l=void 0,u=1100,h=1500,p=("(max-width: ".concat(550/16,"rem)"),"(max-width: ".concat(u/16,"rem)"),"(max-width: ".concat(h/16,"rem)"),{hate:"\ud83d\udd25\ud83d\udca9\ud83d\udd25",0:"\ud83d\udca9",1:"\u2b50",2:"\u2b50\u2b50",3:"\u2b50\u2b50\u2b50",4:"\u2b50\u2b50\u2b50\u2b50",5:"\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f"}),j=n(13),m=n(10),f=n(20),b=n(38),x=n(1),g=["id","size","strokeWidth"],v={compass:b.a},O=d.a.div(r||(r=Object(j.a)(["\n  width: var(--size);\n  height: var(--size);\n\n  */ & > svg {\n    display: block;\n    stroke-width: var(--stroke-width);\n  }\n"]))),y=function(e){var t=e.id,n=e.size,r=e.strokeWidth,c=void 0===r?1:r,a=Object(f.a)(e,g),i=v[t];if(!i)throw new Error("No icon found for ID: ".concat(t));return Object(x.jsx)(O,Object(m.a)(Object(m.a)({style:{"--size":n+"px","--stroke-width":c+"px"}},a),{},{children:Object(x.jsx)(i,{color:"currentColor",size:n})}))},w=n(19),C=n(17);n(34);function S(e){var t=e.result,n=e.setModal,r=t._score,c=t.name,i=t.region_name,o=a.a.useState(!1),d=Object(s.a)(o,2),l=d[0],u=d[1],h=function(){return u(!1),n(null)};return a.a.useEffect((function(){t&&u(!0)}),[t]),Object(x.jsx)("div",{children:Object(x.jsxs)("div",{children:[" ",Object(x.jsxs)(w.a,{isOpen:l,onDismiss:h,children:[" ",Object(x.jsxs)("button",{className:"close-button",onClick:h,children:[" ",Object(x.jsx)(C.a,{children:"Close"})," ",Object(x.jsx)("span",{"aria-hidden":!0,children:"\xd7"})," "]})," ",Object(x.jsx)("div",{children:p["".concat(Math.round(r))]}),Object(x.jsx)("div",{children:c}),Object(x.jsx)("div",{children:i})]})," "]})})}var _=function(e){var t=e.fetcher,n=e.icon,r=e.statusCapture,c=e.setStatusCapture,i=a.a.useState(""),o=Object(s.a)(i,2),d=o[0],u=o[1],h=a.a.useState([]),p=Object(s.a)(h,2),j=p[0],m=p[1],f=a.a.useState(null),b=Object(s.a)(f,2),g=b[0],v=b[1];function O(e){return u(e.target.value),e.target.value.length>=3?function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];clearTimeout(t),t=setTimeout((function(){e.apply(l,c)}),n)}}(w(),350):""===e.target.value?m([]):void 0}function w(){var e=encodeURIComponent(d);t(e).then((function(e){return e.json()})).then((function(e){return m(e)})).catch((function(e){c({status:"error",error:e.message})}))}var C=r.status,_=r.error;if("error"===C)throw new Error("Sorry, something went wrong: ".concat(_));return console.log(g),Object(x.jsxs)(z,{children:[Object(x.jsx)("label",{"aria-label":"camp-site-search",children:"Find a camp site"}),Object(x.jsx)("form",{name:"camp-site-search",onSubmit:function(){return w()},children:Object(x.jsx)(I,{value:d,onChange:function(e){return O(e)},placeholder:"Moon river"})}),Object(x.jsx)(k,{children:j.map((function(e){var t=e.name;return Object(x.jsxs)(T,{onClick:function(t){return function(e,t){return e.preventDefault(),v(t)}(t,e)},children:[g?Object(x.jsx)(S,{result:g,setModal:v}):null,Object(x.jsx)(N,{children:Object(x.jsx)(y,{id:n,size:24})}),Object(x.jsx)(A,{children:t})]})}))})]})},z=d.a.div.withConfig({displayName:"TypeAheadSearch__Wrapper",componentId:"sc-195m1tz-0"})(["position:relative;display:flex;flex-direction:column;"]),I=d.a.input.withConfig({displayName:"TypeAheadSearch__SearchInput",componentId:"sc-195m1tz-1"})(["margin-top:5px;font-size:1rem;padding:4px 8px;border-radius:5px;"]),k=d.a.ul.withConfig({displayName:"TypeAheadSearch__ResultsDropDown",componentId:"sc-195m1tz-2"})(["position:absolute;top:60px;left:-48px;"]),T=d.a.div.withConfig({displayName:"TypeAheadSearch__SingleResultWrapper",componentId:"sc-195m1tz-3"})(["width:400px;padding:8px;border-radius:5px;font-size:18px;cursor:pointer;display:flex;align-items:center;&:hover{background-color:",";}"],"hsl(185deg, 5%, 95%)"),N=d.a.span.withConfig({displayName:"TypeAheadSearch__ResultIcon",componentId:"sc-195m1tz-4"})(["align-items:center;display:flex;justify-content:center;margin-right:0.5rem;width:2rem;"]),A=d.a.li.withConfig({displayName:"TypeAheadSearch__SingleResult",componentId:"sc-195m1tz-5"})(["list-style:none;"]),R=function(e){var t=encodeURIComponent(e);return fetch("https://thedyrt.com/api/v4/autocomplete/campgrounds?q=".concat(t))},D=n(18),E=function(e){var t=e.error,n=e.resetErrorBoundary;return Object(x.jsxs)("div",{role:"alert",children:[Object(x.jsx)("p",{children:"Something went wrong:"}),Object(x.jsx)("pre",{children:t.message}),Object(x.jsx)("button",{onClick:n,children:"Try again"})]})};var F=function(){var e=a.a.useState({status:"",error:""}),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(x.jsx)(M,{children:Object(x.jsx)(D.ErrorBoundary,{FallbackComponent:E,onReset:function(){return r({status:"",error:""})},children:Object(x.jsx)(_,{fetcher:R,icon:"compass",statusCapture:n,setStatusCapture:r})})})},M=d.a.div.withConfig({displayName:"App__Wrapper",componentId:"sc-113ax1u-0"})(["padding:300px;display:flex;flex-direction:column;justify-content:center;align-items:center;"]),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};o.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(F,{})}),document.getElementById("root")),W()}},[[35,1,2]]]);
//# sourceMappingURL=main.6aba9761.chunk.js.map