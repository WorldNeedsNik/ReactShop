(this.webpackJsonpreactshop=this.webpackJsonpreactshop||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var n=c(1),i=c.n(n),a=c(7),s=c.n(a),r=(c(13),c(14),c(8)),o=c(2),l=c(3),u=c(0);var d=function(t){var e=t.id,c=t.name,n=t.description,i=t.price,a=t.full_background,s=t.addToBusket,r=void 0===s?Function.prototype:s,o=t.setAlert;return void 0===o&&Function.prototype,Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card-image",children:Object(u.jsx)("img",{src:a,alt:c})}),Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsx)("span",{className:"card-title",children:c}),Object(u.jsx)("p",{children:n})]}),Object(u.jsxs)("div",{className:"card-action",children:[Object(u.jsx)("button",{className:"btn",onClick:function(){return r({id:e,name:c,price:i})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(u.jsxs)("span",{className:"right",style:{fontSize:"1.8rem"},children:[i," \u0440\u0443\u0431."]})]})]})};var j=function(t){var e=t.goods,c=void 0===e?[]:e,n=t.addToBusket,i=void 0===n?Function.prototype:n,a=t.setAlert,s=void 0===a?Function.prototype:a;return c.length?Object(u.jsx)("div",{className:"goods",children:c.map((function(t){return Object(u.jsx)(d,Object(o.a)(Object(o.a)({},t),{},{addToBusket:i,setAlert:s}),t.id)}))}):Object(u.jsx)("h3",{children:"Nothing here"})};var b=function(t){var e=t.quantity,c=void 0===e?0:e,n=t.showBusket,i=void 0===n?Function.prototype:n;return Object(u.jsxs)("div",{className:"cart blue darken-4 white-text",onClick:i,children:[Object(u.jsx)("i",{className:"material-icons",children:"shopping_cart"}),c?Object(u.jsx)("span",{className:"cart-quantity",children:c}):0]})};function O(){return Object(u.jsx)("div",{class:"preloader-wrapper big active",children:Object(u.jsxs)("div",{class:"spinner-layer spinner-blue-only",children:[Object(u.jsx)("div",{class:"circle-clipper left",children:Object(u.jsx)("div",{class:"circle"})}),Object(u.jsx)("div",{class:"gap-patch",children:Object(u.jsx)("div",{class:"circle"})}),Object(u.jsx)("div",{class:"circle-clipper right",children:Object(u.jsx)("div",{class:"circle"})})]})})}function p(t){var e=t.id,c=t.name,n=t.price,i=t.quantity,a=t.delInBusket,s=void 0===a?Function.prototype:a,r=t.inqQuantity,o=void 0===r?Function.prototype:r,l=t.decQuantity,d=void 0===l?Function.prototype:l;return Object(u.jsxs)("li",{className:"collection-item lictive",children:[c," x ",i," = ",i*n," ",Object(u.jsx)("button",{class:"material-icons",onClick:function(){return o(e)},children:"add"})," ",Object(u.jsx)("button",{class:"material-icons",onClick:function(){return d(e)},children:"remove_circle_outline"}),Object(u.jsx)("span",{className:"secondary-content",children:Object(u.jsx)("i",{class:"material-icons basket-delete",onClick:function(){return s(e)},children:"close"})})]})}function h(t){var e=t.orders,c=void 0===e?[]:e,n=t.showBusket,i=void 0===n?Function.prototype:n,a=t.delInBusket,s=void 0===a?Function.prototype:a,r=t.inqQuantity,o=void 0===r?Function.prototype:r,l=t.decQuantity,d=void 0===l?Function.prototype:l,j=c.reduce((function(t,e){return t+e.price*e.quantity}),0);return Object(u.jsxs)("ul",{className:"collection basket-list",children:[Object(u.jsx)("li",{className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 "}),c.length?c.map((function(t){return Object(u.jsx)(p,{id:t.id,name:t.name,price:t.price,quantity:t.quantity,delInBusket:s,decQuantity:d,inqQuantity:o})})):Object(u.jsx)("li",{className:"collection-item ",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(u.jsxs)("li",{className:"collection-item",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",j," "]}),Object(u.jsx)("i",{class:"material-icons basket-close",onClick:i,children:"close"})]})}var v=function(t){var e=t.name,c=void 0===e?"":e,i=t.handleAlert,a=void 0===i?Function.prototype:i;return Object(n.useEffect)((function(){var t=setTimeout(a,3e3);return function(){clearTimeout(t)}}),[c]),Object(u.jsx)("div",{id:"toast-container",children:Object(u.jsxs)("div",{className:"toast",children:[c," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})};function f(){var t=Object(n.useState)([]),e=Object(l.a)(t,2),c=e[0],i=e[1],a=Object(n.useState)(!0),s=Object(l.a)(a,2),d=s[0],p=s[1],f=Object(n.useState)([]),m=Object(l.a)(f,2),x=m[0],y=m[1],k=Object(n.useState)(!1),N=Object(l.a)(k,2),g=N[0],q=N[1],B=Object(n.useState)(""),F=Object(l.a)(B,2),w=F[0],Q=F[1];Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=en&=",{headers:{Authorization:"59daafa2-2276f836-62cd21c1-b7de8e42"}}).then((function(t){return t.json()})).then((function(t){return i(t.featured)})),p(!1)}),[]);var S=function(){q(!g)};return Object(u.jsxs)("div",{className:"container content",children:[Object(u.jsx)(b,{quantity:x.length,showBusket:S}),d?Object(u.jsx)(O,{}):Object(u.jsx)(j,{goods:c,addToBusket:function(t){var e=x.findIndex((function(e){return e.id===t.id}));if(e<0){var c=Object(o.a)(Object(o.a)({},t),{},{quantity:1});y([].concat(Object(r.a)(x),[c]))}else{var n=x.map((function(t,c){return c===e?Object(o.a)(Object(o.a)({},t),{},{quantity:t.quantity+1}):t}));y(n)}Q(t.name)}}),g?Object(u.jsx)(h,{orders:x,showBusket:S,delInBusket:function(t){var e=x.filter((function(e){return e.id!==t}));y(e)},inqQuantity:function(t){var e=x.map((function(e){if(e.id===t){var c=e.quantity+1;return Object(o.a)(Object(o.a)({},e),{},{quantity:c})}return e}));y(e)},decQuantity:function(t){var e=x.map((function(e){if(e.id===t){var c=e.quantity-1;return Object(o.a)(Object(o.a)({},e),{},{quantity:c<=0?0:c})}return e}));y(e)}}):null,w&&Object(u.jsx)(v,{name:w,handleAlert:function(){Q("")}})]})}function m(){return Object(u.jsx)("nav",{children:Object(u.jsx)("div",{classNameName:"nav-wrapper",children:Object(u.jsx)("a",{href:"#",className:"brand-logo",children:"React Shop"})})})}var x=function(){return Object(u.jsxs)("div",{className:"App ",children:[Object(u.jsx)(m,{}),Object(u.jsx)(f,{})]})};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a994d7fc.chunk.js.map