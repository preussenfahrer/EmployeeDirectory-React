(this["webpackJsonpemployeedirectory-react"]=this["webpackJsonpemployeedirectory-react"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(16),i=n.n(s),j=(n(22),n(23),n(3)),a=n(4),l=n(6),o=n(5),d=n(0),b=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(d.jsx)("tr",{children:Object(d.jsx)("td",{})})}}]),n}(r.a.Component),u=n(17),h=n.n(u),O=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this,e)).state={users:[]},c}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.fetchUsers()}},{key:"fetchUsers",value:function(){var e=this;h.a.get("https://randomuser.me/api/?results=5&gender,name,location,email").then((function(t){e.setState((function(e,n){return{users:t.data.results}})),console.log(e.state)}))}},{key:"render",value:function(){return Object(d.jsxs)("table",{className:"table mt-3",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Gender"}),Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Location"}),Object(d.jsx)("th",{children:"Email"})]})}),Object(d.jsx)("tbody",{children:Object(d.jsx)(b,{})})]})}}]),n}(c.Component);var x=function(){return Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("h1",{children:"Employee Directory"})})};var m=function(e){return Object(d.jsx)("table",{className:"table mt-3",children:Object(d.jsx)("tbody",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Gender"}),Object(d.jsx)("td",{children:"Name"}),Object(d.jsx)("td",{children:"Location"}),Object(d.jsx)("td",{children:"Email"})]})})})},f=function(e){return Object(d.jsx)("form",{className:"mt-3 d-flex justify-content-center",id:"input",children:Object(d.jsx)("label",{children:Object(d.jsx)("input",{type:"text",placeholder:"Search",name:"name"})})})};var p=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(x,{}),Object(d.jsx)(f,{}),Object(d.jsx)(O,{}),Object(d.jsx)(m,{})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};n(43);i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),y()}},[[44,1,2]]]);
//# sourceMappingURL=main.dcc2020e.chunk.js.map