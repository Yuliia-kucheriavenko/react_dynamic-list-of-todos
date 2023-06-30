(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1);c(10),c(11);function r(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var i,d=c(3),o=c.n(d),j=c(0),u=function(e){var t=e.todos,c=e.currentTodoId,s=e.setCurrentTodoId;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.completed,n=e.title,l=t===c;return Object(j.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":l}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:t}),a?Object(j.jsx)("td",{className:"is-vcentered",children:Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}):Object(j.jsx)("td",{className:"is-vcentered"}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:o()({"has-text-success":a,"has-text-danger":!a}),children:n})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(l?null:e.id)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:o()("far",{"fa-eye-slash":l,"fa-eye":!l})})})})})]},t)}))})]})},b=(c(13),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),h=function(e){var t=e.currentTodo,c=e.setCurrentTodoId,s=Object(l.useState)(null),a=Object(n.a)(s,2),i=a[0],d=a[1];if(Object(l.useEffect)((function(){var e;t&&(e=t.userId,r("/users/".concat(e))).then((function(e){d(e)}))}),[]),!t)return null;var o=t.completed,u=t.id,h=t.title;return Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),i?Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(u)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){d(null),c(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:h}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[o?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(i.email),children:i.name})]})]})]}):Object(j.jsx)(b,{})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(i||(i={}));var m=function(e){var t=e.query,c=e.setQuery,s=e.setTodoFilter;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){s(e.target.value)},children:[Object(j.jsx)("option",{value:"all",children:i.All}),Object(j.jsx)("option",{value:"active",children:i.Active}),Object(j.jsx)("option",{value:"completed",children:i.Completed})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},O=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(null),d=Object(n.a)(a,2),o=d[0],O=d[1],x=Object(l.useState)(!1),f=Object(n.a)(x,2),p=f[0],v=f[1],N=Object(l.useState)(""),y=Object(n.a)(N,2),g=y[0],C=y[1],T=Object(l.useState)(i.All),k=Object(n.a)(T,2),w=k[0],I=k[1];Object(l.useEffect)((function(){v(!0),r("/todos").then((function(e){s(e)})).finally((function(){v(!1)}))}),[]);var S,A=c.filter((function(e){var t=e.title.toLowerCase().trim().includes(g.toLowerCase().trim());switch(w){case i.All:return e&&t;case i.Completed:return e.completed&&t;case i.Active:return!e.completed&&t;default:throw new Error("Wrong filter, ".concat(I," is not defined"))}}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(m,{query:g,setQuery:C,setTodoFilter:I})}),Object(j.jsx)("div",{className:"block",children:p?Object(j.jsx)(b,{}):Object(j.jsx)(u,{todos:A,currentTodoId:o,setCurrentTodoId:O})})]})})}),o&&Object(j.jsx)(h,{currentTodo:(S=o,A.find((function(e){return e.id===S}))||null),setCurrentTodoId:O})]})};a.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.92679623.chunk.js.map