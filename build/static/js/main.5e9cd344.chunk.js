(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={button:"HeaderCartButton_button__1qVzz",icon:"HeaderCartButton_icon__2xLx5",badge:"HeaderCartButton_badge__3W1er",bump:"HeaderCartButton_bump__20U-U",title:"HeaderCartButton_title__3iKIN"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2u9IK",total:"Cart_total__HHJ14",actions:"Cart_actions__1lEk8","button--alt":"Cart_button--alt__3UwL1",button:"Cart_button__2I1Zt"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__LPr-B",summary:"CartItem_summary__47U66",price:"CartItem_price__228XX",amount:"CartItem_amount__O72AY",actions:"CartItem_actions__o45Xd"}},,,,function(e,t,n){e.exports={meal:"MealItem_meal__1tdZS",description:"MealItem_description__1RU0h",price:"MealItem_price__3UhcG"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2Ij6s",modal:"Modal_modal__3HvKx","slide-down":"Modal_slide-down__3dzuF"}},function(e,t,n){e.exports={header:"Header_header__CIt0q","main-image":"Header_main-image__gUbJI"}},,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__F-9Ms"}},function(e,t,n){e.exports={card:"Card_card__2s5Bz"}},function(e,t,n){e.exports={input:"Input_input__1AEdI"}},function(e,t,n){e.exports={form:"MealItemForm_form__OvgjW"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2pV9c","meals-appear":"AvailableMeals_meals-appear__cKDjk"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(15),c=n.n(a),i=(n(28),n(3)),r=n(1),s=n.n(r),o=n(16),l=n.n(o),d=n(0),u=function(){return Object(d.jsxs)("section",{className:l.a.summary,children:[Object(d.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(d.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(d.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},m=n(17),j=n.n(m),b=function(e){return Object(d.jsx)("div",{className:j.a.card,children:e.children})},x=n(2),O=n(18),p=n.n(O),h=s.a.forwardRef((function(e,t){return Object(d.jsxs)("div",{className:p.a.input,children:[Object(d.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(d.jsx)("input",Object(x.a)({ref:t},e.input))]})})),_=n(19),f=n.n(_),v=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(d.jsxs)("form",{className:f.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(d.jsx)(h,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(d.jsx)("button",{children:"+ Add"}),!a&&Object(d.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},C=n(10),g=n.n(C),I=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),N=function(e){var t=Object(r.useContext)(I),n="Rs. ".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:g.a.meal,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("div",{className:g.a.description,children:e.description}),Object(d.jsx)("div",{className:g.a.price,children:n})]}),Object(d.jsx)("div",{children:Object(d.jsx)(v,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},A=n(20),y=n.n(A),k=[{id:"m1",name:"Pav Bhaji",description:"Finest bread and veggies",price:99.99},{id:"m2",name:"Smoky Pizza",description:"A Italian specialty!",price:136.5},{id:"m3",name:"Barbecue Burger",description:"Desi, raw veggies, paneer",price:72.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:149.99}],H=function(){var e=k.map((function(e){return Object(d.jsx)(N,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(d.jsx)("section",{className:y.a.meals,children:Object(d.jsx)(b,{children:Object(d.jsx)("ul",{children:e})})})},w=function(){return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)(u,{}),Object(d.jsx)(H,{})]})},M=n.p+"static/media/food.a41894a1.jpg",B=n(12),F=n.n(B),R=function(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},S=n(4),z=n.n(S),D=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(I).items,o=s.reduce((function(e,t){return e+t.amount}),0),l="".concat(z.a.button," ").concat(a?z.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(d.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(d.jsx)("span",{className:z.a.icon,children:Object(d.jsx)(R,{})}),Object(d.jsx)("span",{className:z.a.title,children:"Your Cart"}),Object(d.jsx)("span",{className:z.a.badge,children:o})]})},E=function(e){return Object(d.jsxs)(s.a.Fragment,{children:[Object(d.jsxs)("header",{className:F.a.header,children:[Object(d.jsx)("h1",{children:"SnackHub"}),Object(d.jsx)(D,{onClick:e.onShowCart})]}),Object(d.jsx)("div",{className:F.a["main-image"],children:Object(d.jsx)("img",{src:M,alt:"A table full of delicious food!"})})]})},P=n(8),U=n.n(P),T=n(11),V=n.n(T),J=function(e){return Object(d.jsx)("div",{className:V.a.backdrop,onClick:e.onClose})},K=function(e){return Object(d.jsx)("div",{className:V.a.modal,children:Object(d.jsx)("div",{className:V.a.content,children:e.children})})},q=document.getElementById("overlays"),L=function(e){return Object(d.jsxs)(r.Fragment,{children:[U.a.createPortal(Object(d.jsx)(J,{onClose:e.onClose}),q),U.a.createPortal(Object(d.jsx)(K,{children:e.children}),q)]})},X=n(5),Y=n.n(X),G=n(6),W=n.n(G),Z=function(e){var t="Rs. ".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:W.a["cart-item"],children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsxs)("div",{className:W.a.summary,children:[Object(d.jsx)("span",{className:W.a.price,children:t}),Object(d.jsxs)("span",{className:W.a.amount,children:["x ",e.amount]})]})]}),Object(d.jsxs)("div",{className:W.a.actions,children:[Object(d.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(d.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Q=function(e){var t=Object(r.useContext)(I),n="Rs. ".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(x.a)(Object(x.a)({},e),{},{amount:1}))},s=Object(d.jsx)("ul",{className:Y.a["cart-items"],children:t.items.map((function(e){return Object(d.jsx)(Z,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(d.jsxs)(L,{onClose:e.onClose,children:[s,Object(d.jsxs)("div",{className:Y.a.total,children:[Object(d.jsx)("span",{children:"Total Amount"}),Object(d.jsx)("span",{children:n})]}),Object(d.jsxs)("div",{className:Y.a.actions,children:[Object(d.jsx)("button",{className:Y.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(d.jsx)("button",{className:Y.a.button,children:"Order"})]})]})},$=n(13),ee={items:[],totalAmount:0},te=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(x.a)(Object(x.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object($.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],d=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var u=Object(x.a)(Object(x.a)({},l),{},{amount:l.amount-1});(s=Object($.a)(e.items))[o]=u}return{items:s,totalAmount:d}}return ee},ne=function(e){var t=Object(r.useReducer)(te,ee),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(d.jsx)(I.Provider,{value:s,children:e.children})};var ae=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)(ne,{children:[n&&Object(d.jsx)(Q,{onClose:function(){a(!1)}}),Object(d.jsx)(E,{onShowCart:function(){a(!0)}}),Object(d.jsx)("main",{children:Object(d.jsx)(w,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(ae,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.5e9cd344.chunk.js.map