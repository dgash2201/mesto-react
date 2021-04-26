(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(7),o=n.n(s),r=(n(6),n(10)),i=n(2),l=n(0);var u=function(){return Object(l.jsx)("footer",{className:"footer page__footer",children:Object(l.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})},p=n.p+"static/media/header-logo.03b78ada.svg";var d=function(){return Object(l.jsx)("header",{className:"header page__header",children:Object(l.jsx)("img",{className:"logo header__logo",src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto"})})},_=c.a.createContext();function h(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,s=e.onCardDelete,o=c.a.useContext(_),r=t.owner._id===o._id,i="card__remove ".concat(r?"card__remove_visible":"card__remove_hidden"),u=t.likes.some((function(e){return e._id===o._id})),p="card__like ".concat(u?"card__like_active":"");return Object(l.jsxs)("li",{className:"card",children:[Object(l.jsx)("img",{className:"card__image",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(l.jsx)("button",{className:i,onClick:function(){s(t._id)}}),Object(l.jsxs)("div",{className:"card__description",children:[Object(l.jsx)("h2",{className:"card__title",children:t.name}),Object(l.jsxs)("div",{className:"card__like-container",children:[Object(l.jsx)("button",{className:p,type:"button","aria-label":"\u041b\u0430\u0439\u043a",onClick:function(){a(t)}}),Object(l.jsx)("p",{className:"card__like-counter",children:t.likes.length})]})]})]})}function j(e){var t=c.a.useContext(_);return Object(l.jsxs)("main",{className:"content page__content",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsxs)("div",{className:"profile__avatar-container",children:[Object(l.jsx)("div",{className:"profile__overlay",onClick:e.onEditAvatar}),Object(l.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})]}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsx)("h1",{className:"profile__name",children:t.name}),Object(l.jsx)("button",{className:"profile__edit-button",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:e.onEditProfile}),Object(l.jsx)("p",{className:"profile__status",children:t.about})]}),Object(l.jsx)("button",{className:"profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:e.onAddPlace})]}),Object(l.jsx)("section",{className:"cards page__cards",children:Object(l.jsx)("ul",{className:"cards__list",children:e.cards.map((function(t){return Object(l.jsx)(h,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})}function b(e){return Object(l.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(l.jsxs)("div",{className:"popup__container",children:[Object(l.jsx)("button",{className:"popup__close-button",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),Object(l.jsx)("h2",{className:"popup__title",children:e.title}),Object(l.jsxs)("form",{className:"popup__form",name:e.name,onSubmit:e.onSubmit,action:"#",noValidate:!0,children:[e.children,Object(l.jsx)("button",{className:"popup__save-button",type:"submit",children:e.buttonText})]})]})})}function m(e){return Object(l.jsx)("div",{className:"popup popup_type_image ".concat(e.card._id&&"popup_opened"),children:Object(l.jsxs)("div",{className:"popup__container popup__container_type_image",children:[Object(l.jsx)("button",{className:"popup__close-button",onClick:e.onClose}),Object(l.jsxs)("figure",{className:"popup__figure",children:[Object(l.jsx)("img",{className:"popup__image",src:e.card.link,alt:e.card.name}),Object(l.jsx)("figcaption",{className:"popup__caption",children:e.card.name})]})]})})}function f(e){var t=c.a.useContext(_),n=c.a.useState(""),a=Object(i.a)(n,2),s=a[0],o=a[1],r=c.a.useState(""),u=Object(i.a)(r,2),p=u[0],d=u[1];return c.a.useEffect((function(){o(t.name),d(t.about)}),[t,e.isOpen]),Object(l.jsxs)(b,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:p})},children:[Object(l.jsxs)("label",{className:"popup__field",children:[Object(l.jsx)("input",{className:"popup__input popup__input_type_name",type:"text",name:"username",id:"username",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0,value:s||"",onChange:function(e){o(e.target.value)}}),Object(l.jsx)("span",{className:"popup__input-error username-error"})]}),Object(l.jsxs)("label",{className:"popup__field",children:[Object(l.jsx)("input",{className:"popup__input popup__input_type_status",type:"text",name:"status",id:"status",placeholder:"\u0421\u0442\u0430\u0442\u0443\u0441",minLength:"2",maxLength:"200",required:!0,value:p||"",onChange:function(e){d(e.target.value)}}),Object(l.jsx)("span",{className:"popup__input-error status-error"})]})]})}function O(e){var t=c.a.useRef();return Object(l.jsx)(b,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:Object(l.jsxs)("label",{className:"popup__field",children:[Object(l.jsx)("input",{className:"popup__input popup__input_type_link",type:"url",name:"link",id:"avatar-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",minLength:"2",maxLength:"200",required:!0,ref:t}),Object(l.jsx)("span",{className:"popup__input-error avatar-link-error"})]})})}function x(e){var t=c.a.useState(""),n=Object(i.a)(t,2),a=n[0],s=n[1],o=c.a.useState(""),r=Object(i.a)(o,2),u=r[0],p=r[1];return c.a.useEffect((function(){s(""),p("")}),[e.isOpen]),Object(l.jsxs)(b,{name:"add-place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:u})},children:[Object(l.jsxs)("label",{className:"popup__field",children:[Object(l.jsx)("input",{className:"popup__input popup__input_type_name",type:"text",name:"name",id:"place-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0,value:a,onChange:function(e){s(e.target.value)}}),Object(l.jsx)("span",{className:"popup__input-error place-name-error"})]}),Object(l.jsxs)("label",{className:"popup__field",children:[Object(l.jsx)("input",{className:"popup__input popup__input_type_link",type:"url",name:"link",id:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:u,onChange:function(e){p(e.target.value)}}),Object(l.jsx)("span",{className:"popup__input-error link-error"})]})]})}var v=n(8),k=n(9),g=new(function(){function e(t){Object(v.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(k.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addCardLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteCardLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){var n=t?"DELETE":"PUT";return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:n,headers:this._headers}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-21",headers:{authorization:"61dd454c-d1c5-452b-8062-22ed0eb542c2","Content-Type":"application/json"}});function C(){var e=c.a.useState(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),o=Object(i.a)(s,2),p=o[0],h=o[1],v=c.a.useState(!1),k=Object(i.a)(v,2),C=k[0],N=k[1],y=c.a.useState({_id:0}),U=Object(i.a)(y,2),S=U[0],L=U[1],E=c.a.useState({}),P=Object(i.a)(E,2),T=P[0],A=P[1],D=c.a.useState([]),R=Object(i.a)(D,2),I=R[0],q=R[1];function w(){N(!1),h(!1),a(!1),L({_id:0})}c.a.useEffect((function(){var e=[g.getUserInfo(),g.getInitialCards()];Promise.all(e).then((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];A(n),q(a)})).catch((function(e){return console.log(e)}))}),[]);return Object(l.jsx)("div",{className:"page",children:Object(l.jsxs)(_.Provider,{value:T,children:[Object(l.jsx)(d,{}),Object(l.jsx)(j,{cards:I,onEditProfile:function(){a(!0)},onAddPlace:function(){N(!0)},onEditAvatar:function(){h(!0)},onCardClick:function(e){L(e)},onCardDelete:function(e){g.deleteCard(e).then((function(){return q(I.filter((function(t){return t._id!==e})))})).catch((function(e){return console.log(e)}))},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===T._id}));g.changeLikeCardStatus(e._id,t).then((function(t){q((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(u,{}),Object(l.jsx)(f,{isOpen:n,onClose:w,onUpdateUser:function(e){g.setUserInfo(e).then((function(e){A(e),w()})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(x,{isOpen:C,onClose:w,onAddPlace:function(e){g.addCard(e).then((function(e){q([e].concat(Object(r.a)(I))),w()})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(O,{isOpen:p,onClose:w,onUpdateAvatar:function(e){g.setUserAvatar(e).then((function(e){A(e),w()})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(m,{card:S,onClose:w}),Object(l.jsx)(b,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"})]})})}var N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),N()},6:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.6116f741.chunk.js.map