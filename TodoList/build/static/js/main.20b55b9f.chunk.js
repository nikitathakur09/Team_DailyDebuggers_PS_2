(this.webpackJsonpkeeper=this.webpackJsonpkeeper||[]).push([[0],{52:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(7),i=n.n(r),j=n(38),a=n(22),o=n.p+"static/media/logo.e03e0f67.png",s=n(2);var l=function(){return Object(s.jsx)("header",{children:Object(s.jsx)("h1",{children:Object(s.jsx)("img",{src:o})})})};var u=function(){var e=(new Date).getFullYear();return Object(s.jsx)("footer",{children:Object(s.jsxs)("p",{children:["Copyright \u24d2 ",e]})})},b=n(35),O=n.n(b);var d=function(e){return Object(s.jsxs)("div",{className:"note",children:[Object(s.jsx)("h1",{children:e.title}),Object(s.jsx)("p",{children:e.content}),Object(s.jsx)("button",{onClick:function(){e.onDelete(e.id)},children:Object(s.jsx)(O.a,{})})]})},h=n(26),x=n(31),f=n(37),p=n.n(f),v=n(71),m=n(72);var g=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),r=n[0],i=n[1],j=Object(c.useState)({title:"",content:""}),o=Object(a.a)(j,2),l=o[0],u=o[1];function b(e){var t=e.target,n=t.name,c=t.value;u((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(h.a)({},n,c))}))}return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{className:"create-note",children:[r&&Object(s.jsx)("input",{name:"title",onChange:b,value:l.title,placeholder:"Title"}),Object(s.jsx)("textarea",{name:"content",onClick:function(){i(!0)},onChange:b,value:l.content,placeholder:"Take a note...",rows:r?3:1}),Object(s.jsx)(m.a,{in:r,children:Object(s.jsx)(v.a,{onClick:function(t){e.onAdd(l),u({title:"",content:""}),t.preventDefault()},children:Object(s.jsx)(p.a,{})})})]})})};var k=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1];function i(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(s.jsxs)("div",{children:[Object(s.jsx)(l,{}),Object(s.jsx)(g,{onAdd:function(e){r((function(t){return[].concat(Object(j.a)(t),[e])}))}}),n.map((function(e,t){return Object(s.jsx)(d,{id:t,title:e.title,content:e.content,onDelete:i},t)})),Object(s.jsx)(u,{})]})};n(52);i.a.render(Object(s.jsx)(k,{}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.20b55b9f.chunk.js.map