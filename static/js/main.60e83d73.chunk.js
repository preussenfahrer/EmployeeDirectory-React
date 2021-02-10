(this["webpackJsonpemployeedirectory-react"]=this["webpackJsonpemployeedirectory-react"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n.n(r),c=n(16),i=n.n(c),a=(n(22),n(23),n(3)),o=n(4),u=n(6),l=n(5),j=n(0),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:this.props.user.gender}),Object(j.jsxs)("td",{children:[this.props.user.name.first," ",this.props.user.name.last]}),Object(j.jsx)("td",{children:this.props.user.location.city}),Object(j.jsx)("td",{children:this.props.user.email})]})}}]),n}(s.a.Component),d=n(17),b=n.n(d),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={users:[]},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.fetchUsers()}},{key:"fetchUsers",value:function(){var e=this;b.a.get("https://randomuser.me/api/?results=5&gender,name,location,email").then((function(t){console.log(t.data.results),e.setState((function(e,n){return{users:t.data.results}})),console.log(e.state)}))}},{key:"sortColumn",value:function(e){var t;switch(console.log(e),e){case"gender":t=this.state.users.sort((function(e,t){return e>t?1:-1}))}this.setState((function(e){return{users:t}}))}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("table",{className:"table mt-3",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{onClick:function(){return e.sortColumn("gender")},children:"Gender"}),Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Location"}),Object(j.jsx)("th",{children:"Email"})]})}),Object(j.jsx)("tbody",{children:this.state.users.map((function(e){return Object(j.jsx)(h,{user:e},e.email)}))})]})}}]),n}(r.Component);var f=function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("h1",{children:"Employee Directory"})})},p=function(e){return Object(j.jsx)("form",{className:"mt-3 d-flex justify-content-center",id:"input",children:Object(j.jsx)("label",{children:Object(j.jsx)("input",{type:"text",placeholder:"Search",name:"name"})})})};var m=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{}),Object(j.jsx)(p,{}),Object(j.jsx)(O,{})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),c(e),i(e)}))};n(43);i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),x()}},[[44,1,2]]]);
//# sourceMappingURL=main.60e83d73.chunk.js.map