(this.webpackJsonppersonnummer=this.webpackJsonppersonnummer||[]).push([[0],{10:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var r=t(1),s=t.n(r),c=t(3),a=t.n(c),i=(t(9),t(10),t(4)),o=t(0);function u(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],s=n[1];function c(e){var n=e.substr(10,1);return parseInt(n)%2===0?"\u2640":"\u2642"}return Object(r.useEffect)((function(){fetch("https://skatteverket.entryscape.net/rowstore/dataset/b4de7df7-63c0-4e7e-bb59-1f156a591763?_limit=10&_offset=".concat(Math.floor(2e4*Math.random())),{method:"GET",headers:new Headers({Accept:"application/json"})}).then((function(e){return e.json()})).then((function(e){s(e.results),console.log(e)})).catch((function(e){return console.log(e)}))}),[]),Object(o.jsxs)("div",{className:"maindiv",children:[Object(o.jsx)("h1",{children:"Personnummer f\xf6r test fr\xe5n Skatteverket"}),Object(o.jsxs)("p",{children:["H\xe4r kan du h\xe4mta testpersonummer fr\xe5n Skatteverkets databas som kan anv\xe4ndas till testning eller f\xf6r \xf6vning i t.ex l\xf6ne program som Visma. Du kan ",Object(o.jsx)("b",{children:"skapa nya"})," personnummer genom att ladda om sidan: (Ctrl)+(r)"]}),Object(o.jsx)("ul",{children:t.map((function(e,n){return Object(o.jsxs)("li",{children:[" ",c(e.testpersonnummer),"  ",e.testpersonnummer]},n)}))}),Object(o.jsx)("p",{children:"Om n\xe4st sista siffran i personnummret \xe4r j\xe4mnt tillh\xf6r det en kvinna och \xe4r siffran udda en man. "}),Object(o.jsx)("h5",{children:Object(o.jsx)("strong",{children:"\xa9 Jens Lundeqvist"})})]})}var d=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(u,{})})},l=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(n){var t=n.getCLS,r=n.getFID,s=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),r(e),s(e),c(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),l()},9:function(e,n,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.20d6626f.chunk.js.map