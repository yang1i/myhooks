(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"1DhI":function(e,t,n){"use strict";var a=n("ahKI"),r=n("sJN1");function u(e){var t=Object(r["a"])(e);Object(a["useEffect"])((()=>()=>{t.current()}),[])}t["a"]=u},"82LI":function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),u=n.n(r),c=n("L2hj");t["default"]=()=>{var e=Object(c["a"])(),t=Object(a["a"])(e,2),n=t[0],r=t[1],l=r.toggle,o=r.setLeft,i=r.setRight;return u.a.createElement("div",null,u.a.createElement("p",null,"\u5f53\u524d state \u7684\u503c\u4e3a: ","".concat(n)),u.a.createElement("p",null,u.a.createElement("button",{type:"button",onClick:l},"toggle \u5207\u6362"),u.a.createElement("button",{type:"button",onClick:o},"setLeft \u5207\u6362"),u.a.createElement("button",{type:"button",onClick:i},"setRight \u5207\u6362")))}},"CyT/":function(e,t,n){"use strict";var a=n("iojd"),r=n("ahKI"),u=n("L2hj");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(u["a"])(!!e),n=Object(a["a"])(t,2),c=n[0],l=n[1],o=l.toggle,i=l.set,s=Object(r["useMemo"])((()=>{var e=()=>i(!0),t=()=>i(!1);return{toggle:o,setTrue:e,setFalse:t,set:e=>i(!!e)}}),[]);return[c,s]}t["a"]=c},"Dr+N":function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),u=n.n(r),c=n("L2hj");t["default"]=()=>{var e=Object(c["a"])("\u663e\u793a","\u9690\u85cf"),t=Object(a["a"])(e,2),n=t[0],r=t[1],l=r.toggle,o=r.setLeft,i=r.setRight;return u.a.createElement("div",null,u.a.createElement("p",null,"\u5f53\u524d state \u7684\u503c\u4e3a: ","".concat(n)),u.a.createElement("p",null,u.a.createElement("button",{type:"button",onClick:l},"toggle \u5207\u6362"),u.a.createElement("button",{type:"button",onClick:o},"setLeft \u5207\u6362"),u.a.createElement("button",{type:"button",onClick:i},"setRight \u5207\u6362")))}},INwW:function(e,t,n){"use strict";n.r(t);var a=n("ahKI"),r=n.n(a),u=n("iojd");function c(){var e=Object(a["useState"])({}),t=Object(u["a"])(e,2),n=t[1];return()=>n({})}var l=c;t["default"]=()=>{var e=l();return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"\u66f4\u65b0\u65f6\u95f4: ",Date.now()),r.a.createElement("button",{onClick:e},"\u66f4\u65b0"))}},L2hj:function(e,t,n){"use strict";var a=n("iojd"),r=n("ahKI");function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=Object(r["useState"])(e),u=Object(a["a"])(n,2),c=u[0],l=u[1],o=Object(r["useMemo"])((()=>{var n=t||!e,a=()=>l((t=>t===e?n:e)),r=()=>l(e),u=()=>l(n),c=e=>l(e);return{toggle:a,setLeft:r,setRight:u,set:c}}),[]);return[c,o]}t["a"]=u},OCTU:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),u=n.n(r),c=n("sJN1");t["default"]=()=>{var e=Object(r["useState"])(0),t=Object(a["a"])(e,2),n=t[0],l=t[1],o=Object(c["a"])(n);return Object(r["useEffect"])((()=>{var e=setInterval((()=>{console.log("countRef",o.current),l(o.current+1)}),1e3);return()=>clearInterval(e)}),[]),u.a.createElement("p",null,"count: ",n)}},aFWa:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),u=n.n(r),c=n("1DhI");function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=Object(r["useState"])(e),u=Object(a["a"])(n,2),l=u[0],o=u[1],i=Object(r["useRef"])(),s=Object(r["useRef"])(),f=Object(r["useRef"])(!1);return Object(r["useEffect"])((()=>{if(i.current)s.current=e,f.current=!0;else{o(e);var n=()=>{f.current?(f.current=!1,o(s.current),i.current=setTimeout(n,t)):i.current=void 0};i.current=setTimeout(n,t)}}),[e]),Object(c["a"])((()=>{i.current&&clearTimeout(i.current)})),l}var o=l;t["default"]=()=>{var e=Object(r["useState"])(""),t=Object(a["a"])(e,2),n=t[0],c=t[1],l=o(n,500);return u.a.createElement("div",null,u.a.createElement("input",{value:n,onChange:e=>c(e.target.value),style:{width:280}}),u.a.createElement("p",{style:{marginTop:20}},"throttleValue: ",l))}},dA01:function(e,t,n){"use strict";n.r(t);var a=n("ahKI"),r=n.n(a),u=n("1DhI"),c=!("undefined"===typeof window||!window.document||!window.document.createElement),l=c;function o(e,t){var n=Object(a["useRef"])(l?document.title:"");Object(a["useEffect"])((()=>{document.title=e}),[e]),Object(u["a"])((()=>{null!==t&&void 0!==t&&t.restoreOnUnmount&&(document.title=n.current)}))}var i=o;t["default"]=()=>(i("page title"),r.a.createElement("div",null,r.a.createElement("p",null,"Set title of the page")))},eWij:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),u=n.n(r);function c(e,t){var n=Object(r["useState"])(e),u=Object(a["a"])(n,2),c=u[0],l=u[1];return Object(r["useEffect"])((()=>{var n=setTimeout((()=>{l(e)}),t);return()=>clearTimeout(n)}),[e,t]),c}var l=c;t["default"]=()=>{var e=Object(r["useState"])(""),t=Object(a["a"])(e,2),n=t[0],c=t[1],o=l(n,1e3);return u.a.createElement("div",null,u.a.createElement("input",{style:{width:200},value:n,onChange:e=>c(e.target.value)}),u.a.createElement("p",{style:{marginTop:20}},"DebouncedValue: ",o))}},sJN1:function(e,t,n){"use strict";var a=n("ahKI");function r(e){var t=Object(a["useRef"])(e);return t.current=e,t}t["a"]=r},x7FD:function(e,t,n){"use strict";n.r(t);var a=n("ahKI"),r=n.n(a),u=n("iojd");function c(e){var t=Object(a["useState"])(e),n=Object(u["a"])(t,2),r=n[0],c=n[1],l=Object(a["useRef"])(),o=Object(a["useCallback"])((()=>{l.current&&window.clearTimeout(l.current)}),[]);return Object(a["useEffect"])((()=>{if(!(e<=0)){var t=e;return n(),()=>{o()}}function n(){o(),l.current=setTimeout((()=>{t>0?(t-=1e3,c(t),n()):o()}),1e3)}}),[e]),r}var l=c;t["default"]=()=>{var e=l(6e3);return r.a.createElement("p",null,"\u5012\u8ba1\u65f6: ",e/1e3)}},y7Gi:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),u=n.n(r),c=n("f7UK"),l=n("CyT/"),o=n("1DhI");t["default"]=()=>{var e=Object(l["a"])(!0),t=Object(a["a"])(e,2),n=t[0],r=t[1].toggle;return Object(o["a"])((()=>{c["a"].info("unmount")})),u.a.createElement("div",null,u.a.createElement("button",{onClick:r},n?"unmount":"mount"),n&&u.a.createElement("p",null,"Hello world"))}},yoie:function(e,t,n){"use strict";n.r(t);var a=n("iojd"),r=n("ahKI"),u=n.n(r),c=n("CyT/");t["default"]=()=>{var e=Object(c["a"])(!0),t=Object(a["a"])(e,2),n=t[0],r=t[1],l=r.toggle,o=r.setTrue,i=r.setFalse;return u.a.createElement("div",null,u.a.createElement("p",null,"Effect: ",JSON.stringify(n)),u.a.createElement("p",null,u.a.createElement("button",{onClick:l},"Toggle")),u.a.createElement("p",null,u.a.createElement("button",{onClick:o},"setTrue")),u.a.createElement("p",null,u.a.createElement("button",{onClick:i},"setFlase")))}}}]);