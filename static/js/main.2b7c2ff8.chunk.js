(this.webpackJsonpdyrtsearch=this.webpackJsonpdyrtsearch||[]).push([[0],{28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r,a=n(0),i=n.n(a),c=n(5),o=n.n(c),s=(n(28),n(4)),d=n(3),l=void 0,u=1100,h=1500,p=("(max-width: ".concat(550/16,"rem)"),"(max-width: ".concat(u/16,"rem)"),"(max-width: ".concat(h/16,"rem)"),{hate:"\ud83d\udd25\ud83d\udca9\ud83d\udd25",0:"\ud83d\udca9",1:"\u2b50",2:"\u2b50\u2b50",3:"\u2b50\u2b50\u2b50",4:"\u2b50\u2b50\u2b50\u2b50",5:"\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f"}),j=n(13),m=n(10),f=n(20),x=n(38),b=n(1),g=["id","size","strokeWidth"],v={compass:x.a},O=d.a.div(r||(r=Object(j.a)(["\n  width: var(--size);\n  height: var(--size);\n\n  */ & > svg {\n    display: block;\n    stroke-width: var(--stroke-width);\n  }\n"]))),y=function(e){var t=e.id,n=e.size,r=e.strokeWidth,a=void 0===r?1:r,i=Object(f.a)(e,g),c=v[t];if(!c)throw new Error("No icon found for ID: ".concat(t));return Object(b.jsx)(O,Object(m.a)(Object(m.a)({style:{"--size":n+"px","--stroke-width":a+"px"}},i),{},{children:Object(b.jsx)(c,{color:"currentColor",size:n})}))},w=n(19),C=n(17),S=(n(34),function(e){var t=e.result,n=e.setModal,r=t._score,a=t.name,c=t.region_name,o=(t.photoUrl,i.a.useState(!1)),d=Object(s.a)(o,2),l=d[0],u=d[1],h=function(){return u(!1),n(null)};i.a.useEffect((function(){t&&u(!0)}),[t]);var j=Math.round(r),m=p[j];return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:[" ",Object(b.jsxs)(w.a,{isOpen:l,onDismiss:h,children:[" ",Object(b.jsxs)("button",{className:"close-button",onClick:h,children:[" ",Object(b.jsx)(C.a,{children:"Close"})," ",Object(b.jsx)("span",{"aria-hidden":!0,children:"\xd7"})," "]})," ",Object(b.jsx)("div",{children:m}),Object(b.jsx)("div",{children:a}),Object(b.jsx)("div",{children:c})]})," "]})})}),_=function(e){var t=e.fetcher,n=e.icon,r=e.statusCapture,a=e.setStatusCapture,c=i.a.useState(""),o=Object(s.a)(c,2),d=o[0],u=o[1],h=i.a.useState([]),p=Object(s.a)(h,2),j=p[0],m=p[1],f=i.a.useState(null),x=Object(s.a)(f,2),g=x[0],v=x[1];function O(e){return u(e.target.value),e.target.value.length>=3?function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];clearTimeout(t),t=setTimeout((function(){e.apply(l,a)}),n)}}(w(),350):""===e.target.value?m([]):void 0}function w(){var e=encodeURIComponent(d);t(e).then((function(e){return e.json()})).then((function(e){return m(e)})).catch((function(e){a({status:"error",error:e.message})}))}var C=r.status,_=r.error;if("error"===C)throw new Error("Sorry, something went wrong: ".concat(_));return Object(b.jsxs)(z,{children:[Object(b.jsx)("label",{"aria-label":"camp-site-search",children:"Find a camp site"}),Object(b.jsx)("form",{name:"camp-site-search",onSubmit:function(){return w()},children:Object(b.jsx)(I,{value:d,onChange:function(e){return O(e)},placeholder:"Moon river"})}),Object(b.jsx)(k,{children:Object(b.jsx)(T,{children:j.map((function(e){var t=e.name;return Object(b.jsxs)(N,{onClick:function(t){return function(e,t){return e.preventDefault(),v(t)}(t,e)},children:[g?Object(b.jsx)(S,{result:g,setModal:v}):null,Object(b.jsx)(A,{children:Object(b.jsx)(y,{id:n,size:24})}),Object(b.jsx)(D,{children:t})]})}))})})]})},z=d.a.div.withConfig({displayName:"TypeAheadSearch__Wrapper",componentId:"sc-195m1tz-0"})(["position:relative;display:flex;flex-direction:column;"]),I=d.a.input.withConfig({displayName:"TypeAheadSearch__SearchInput",componentId:"sc-195m1tz-1"})(["margin-top:5px;font-size:1rem;padding:4px 8px;border-radius:5px;"]),k=d.a.div.withConfig({displayName:"TypeAheadSearch__ResultsDropDown",componentId:"sc-195m1tz-2"})(["height:400px;width:600px;overflow-y:auto;top:80px;left:-80px;position:absolute;"]),T=d.a.ul.withConfig({displayName:"TypeAheadSearch__ResultsDropDownList",componentId:"sc-195m1tz-3"})([""]),N=d.a.div.withConfig({displayName:"TypeAheadSearch__SingleResultWrapper",componentId:"sc-195m1tz-4"})(["width:400px;padding:8px;border-radius:5px;font-size:18px;cursor:pointer;display:flex;align-items:center;&:hover{background-color:",";}"],"hsl(185deg, 5%, 95%)"),A=d.a.span.withConfig({displayName:"TypeAheadSearch__ResultIcon",componentId:"sc-195m1tz-5"})(["align-items:center;display:flex;justify-content:center;margin-right:0.5rem;width:2rem;"]),D=d.a.li.withConfig({displayName:"TypeAheadSearch__SingleResult",componentId:"sc-195m1tz-6"})(["list-style:none;"]),R=function(e){var t=encodeURIComponent(e);return fetch("https://thedyrt.com/api/v4/autocomplete/campgrounds?q=".concat(t))},E=n(18),F=function(e){var t=e.error,n=e.resetErrorBoundary;return Object(b.jsxs)("div",{role:"alert",children:[Object(b.jsx)("p",{children:"Something went wrong:"}),Object(b.jsx)("pre",{children:t.message}),Object(b.jsx)("button",{onClick:n,children:"Try again"})]})};var M=function(){var e=i.a.useState({status:"",error:""}),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(b.jsx)(W,{children:Object(b.jsx)(E.ErrorBoundary,{FallbackComponent:F,onReset:function(){return r({status:"",error:""})},children:Object(b.jsx)(_,{fetcher:R,icon:"compass",statusCapture:n,setStatusCapture:r})})})},W=d.a.div.withConfig({displayName:"App__Wrapper",componentId:"sc-113ax1u-0"})(["padding-top:200px;margin:0 auto;display:flex;flex-direction:column;align-items:center;"]),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};o.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(M,{})}),document.getElementById("root")),B()}},[[35,1,2]]]);
//# sourceMappingURL=main.2b7c2ff8.chunk.js.map