(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),o=n.n(s),i=(n(29),n(22)),r=n(2),l=n(13),u=n(14),p=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(l.a)(this,e),this._baseUrl=n,this._headers=a}return Object(u.a)(e,[{key:"getResponse",value:function(e){if(e.ok)return e.json();Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"onRegister",value:function(e,t){return fetch("".concat(this._baseUrl,"/signup"),{method:"POST",headers:this._headers,body:JSON.stringify({password:e,email:t})}).then(this.getResponse)}},{key:"onLogin",value:function(e,t){return fetch("".concat(this._baseUrl,"/signin"),{method:"POST",credentials:"include",headers:this._headers,body:JSON.stringify({password:e,email:t})}).then(this.getResponse)}},{key:"getUser",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",credentials:"include"}).then(this.getResponse)}},{key:"logout",value:function(e){return fetch("".concat(this._baseUrl,"/logout"),{method:"DELETE",credentials:"include",body:JSON.stringify({_id:e})}).then(this.getResponse)}}]),e}())({baseUrl:"https://api.kleepers.mesto.nomoredomains.club",headers:{"Content-Type":"application/json",Accept:"application/json"}}),d=n.p+"static/media/logo.494f10bc.svg",h=n(3),_=n(8),j=c.a.createContext({}),b=n(0);function m(e){var t=c.a.useContext(j);return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("img",{className:"header__logo",src:d,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f"}),Object(b.jsxs)(h.d,{children:[Object(b.jsx)(h.b,{path:"/sign-in",children:Object(b.jsx)(_.b,{className:"header__button",to:"sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(b.jsx)(h.b,{path:"/sign-up",children:Object(b.jsx)(_.b,{className:"header__button",to:"sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(b.jsxs)(h.b,{exact:!0,path:"/",children:[Object(b.jsx)("p",{className:"header__email",children:t.email}),Object(b.jsx)(_.b,{className:"header__button",to:"sign-in",onClick:e.onLogout,children:"\u0412\u044b\u0439\u0442\u0438"})]})]})]})}function f(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,s=e.onCardDelete,o=c.a.useContext(j),i=t.likes.some((function(e){return e._id===o._id})),r=t.owner._id===o._id,l="element__delete-btn ".concat(r?"element__delete-btn_active":""),u="element__like-btn ".concat(i?"element__like-btn_active":"");return Object(b.jsxs)("article",{className:"element",children:[Object(b.jsx)("button",{"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",className:l,onClick:function(){s(t._id)}}),Object(b.jsx)("img",{src:t.link,alt:t.name,className:"element__photo",onClick:function(){return n(t)}}),Object(b.jsxs)("div",{className:"element__info",children:[Object(b.jsx)("h3",{className:"element__title",children:t.name}),Object(b.jsxs)("div",{className:"element__like",children:[Object(b.jsx)("button",{type:"button","aria-label":"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",className:u,onClick:function(){a(t)}}),Object(b.jsx)("p",{className:"element__like-count",children:t.likes.length})]})]})]})}function O(e){var t=c.a.useContext(j);return Object(b.jsxs)("main",{className:"content",children:[Object(b.jsxs)("section",{className:"profile",children:[Object(b.jsxs)("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(t.avatar,")")},onClick:e.onEditAvatar,children:[Object(b.jsx)("button",{className:"profile__edit-avatar"}),Object(b.jsx)("div",{className:"profile__avatar-overlay"})]}),Object(b.jsxs)("div",{className:"profile__info",children:[Object(b.jsxs)("div",{className:"profile__nickname",children:[Object(b.jsx)("h1",{className:"profile__name",children:t.name}),Object(b.jsx)("button",{type:"button",className:"profile__edit-btn profile__popup-btn",onClick:e.onEditProfile})]}),Object(b.jsx)("h2",{className:"profile__description",children:t.about})]}),Object(b.jsx)("button",{type:"button",className:"profile__add-btn profile__popup-btn",onClick:e.onAddPlace})]}),Object(b.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(b.jsx)(f,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})}function g(){return Object(b.jsx)("footer",{className:"footer",children:Object(b.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})}function x(e){var t=e.isOpen?"popup_opened":"";return Object(b.jsx)("div",{className:"popup popup_area_".concat(e.name," ").concat(t),children:Object(b.jsxs)("form",{className:"popup__content popup__validation",name:"".concat(e.name),onSubmit:e.onSubmit,children:[Object(b.jsx)("button",{type:"reset",className:"popup__close popup__close_place_".concat(e.name),onClick:e.onClose,"aria-label":"Close"}),Object(b.jsx)("h2",{className:"popup__heading",children:e.title}),e.children,Object(b.jsx)("button",{type:"submit",className:"popup__submit popup__submit_place_".concat(e.name),children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})]})})}function v(e){var t=e.card.name?"popup_opened":"";return Object(b.jsx)("div",{className:"popup popup_area_photo ".concat(t),children:Object(b.jsxs)("div",{className:"popup__content popup__content_place_photo",children:[Object(b.jsx)("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f",className:"popup__close popup__close_place_photo",onClick:e.onClose}),Object(b.jsx)("img",{src:e.card.link,alt:e.card.name,className:"popup__photo"}),Object(b.jsx)("h2",{className:"popup__heading popup__heading_place_photo",children:e.card.name})]})})}var N=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(l.a)(this,e),this._baseUrl=n,this._headers=a}return Object(u.a)(e,[{key:"getResponse",value:function(e){if(e.ok)return e.json();Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",credentials:"include",headers:this._headers}).then(this.getResponse)}},{key:"getUserInfoApi",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",credentials:"include",headers:this._headers}).then(this.getResponse)}},{key:"updateUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",credentials:"include",headers:this._headers,body:JSON.stringify({name:e.name,about:e.info})}).then(this.getResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",credentials:"include",headers:this._headers,body:JSON.stringify({name:e.place,link:e.image})}).then(this.getResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",credentials:"include",headers:this._headers}).then(this.getResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:t?"PUT":"DELETE",credentials:"include",headers:this._headers}).then(this.getResponse)}},{key:"updateUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",credentials:"include",headers:this._headers,body:JSON.stringify({avatar:e.link})}).then(this.getResponse)}}]),e}())({baseUrl:"https://api.kleepers.mesto.nomoredomains.club",headers:{authorization:"f2168467-af30-4c44-aa31-04a8fed6c871","Content-Type":"application/json"}});function C(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],o=c.a.useState(""),i=Object(r.a)(o,2),l=i[0],u=i[1],p=c.a.useContext(j);return c.a.useEffect((function(){s(p.name),u(p.about)}),[p,e.isOpen]),Object(b.jsxs)(x,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:a,info:l})},children:[Object(b.jsx)("input",{type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",id:"popup__name",value:a||"",onChange:function(e){s(e.target.value)},className:"popup__input popup__input_value_name",name:"name",required:!0,minLength:"2",maxLength:"40"}),Object(b.jsx)("span",{className:"popup__input-error popup__name-error"}),Object(b.jsx)("input",{type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",id:"popup__info",value:l||"",onChange:function(e){u(e.target.value)},className:"popup__input popup__input_value_info",name:"info",required:!0,minLength:"2",maxLength:"200"}),Object(b.jsx)("span",{className:"popup__input-error popup__info-error"})]})}function k(e){var t=c.a.useRef();return Object(b.jsxs)(x,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({link:t.current.value})},children:[Object(b.jsx)("input",{className:"popup__input popup__input_value_avatar",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"popup__avatar",name:"avatar",required:!0,ref:t}),Object(b.jsx)("span",{className:"popup__input-error popup__avatar-error"})]})}function y(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],o=c.a.useState(""),i=Object(r.a)(o,2),l=i[0],u=i[1];return c.a.useEffect((function(){s(""),u("")}),[e.isOpen]),Object(b.jsxs)(x,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({place:a,image:l})},children:[Object(b.jsx)("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",id:"popup__place",className:"popup__input popup__input_value_place",name:"place",required:!0,minLength:"2",maxLength:"30",value:a,onChange:function(e){s(e.target.value)}}),Object(b.jsx)("span",{className:"popup__input-error popup__place-error"}),Object(b.jsx)("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"popup__image",className:"popup__input popup__input_value_image",name:"image",required:!0,value:l,onChange:function(e){u(e.target.value)}}),Object(b.jsx)("span",{className:"popup__input-error popup__image-error"})]})}var S=Object(h.g)((function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],o=c.a.useState(""),i=Object(r.a)(o,2),l=i[0],u=i[1];return c.a.useEffect((function(){u(""),s("")}),[e.cleaner]),Object(b.jsxs)("form",{className:"auth-form",onSubmit:function(t){t.preventDefault(),e.onLogin(l,a)},children:[Object(b.jsx)("p",{className:"auth-form__title",children:"\u0412\u0445\u043e\u0434"}),Object(b.jsx)("input",{className:"auth-form__input",type:"email",placeholder:"Email",onChange:function(e){s(e.target.value)},value:a||""}),Object(b.jsx)("input",{className:"auth-form__input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){u(e.target.value)},value:l||""}),Object(b.jsx)("button",{className:"auth-form__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})}));var U=Object(h.g)((function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],o=c.a.useState(""),i=Object(r.a)(o,2),l=i[0],u=i[1];return Object(b.jsxs)("form",{className:"auth-form",onSubmit:function(t){t.preventDefault(),e.onRegister(l,a)},children:[Object(b.jsx)("p",{className:"auth-form__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(b.jsx)("input",{className:"auth-form__input",type:"email",placeholder:"Email",onChange:function(e){s(e.target.value)},value:a}),Object(b.jsx)("input",{className:"auth-form__input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){u(e.target.value)},value:l}),Object(b.jsx)("button",{className:"auth-form__button",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(b.jsx)(_.b,{className:"auth-form__text",to:"/sign-in",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})})),E=n(23),L=n(24),R=["component"],P=function(e){var t=e.component,n=Object(L.a)(e,R);return Object(b.jsx)(h.b,{children:function(){return n.loggedIn?Object(b.jsx)(t,Object(E.a)({},n)):Object(b.jsx)(h.a,{to:"./sign-in"})}})},A=n.p+"static/media/Success.1b6082f8.svg",T=n.p+"static/media/Fail.df8eddf6.svg";function D(e){var t=e.isOpen?"popup_opened":"";return Object(b.jsx)("div",{className:"popup ".concat(t),children:Object(b.jsxs)("div",{className:"popup__content",children:[Object(b.jsx)("button",{type:"reset",className:"popup__close popup__close_place_".concat(e.name),onClick:e.onClose,"aria-label":"Close"}),e.isError?Object(b.jsx)("img",{src:T,className:"popup__image",alt:"\u041e\u0448\u0438\u0431\u043a\u0430"}):Object(b.jsx)("img",{src:A,className:"popup__image",alt:"\u0423\u0441\u043f\u0435\u0445"}),Object(b.jsx)("p",{className:"popup__text",children:e.isError?"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.":"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})]})})}var w=Object(h.g)((function(e){var t=c.a.useState(!1),n=Object(r.a)(t,2),a=n[0],s=n[1],o=c.a.useState(!1),l=Object(r.a)(o,2),u=l[0],d=l[1],_=c.a.useState(!1),f=Object(r.a)(_,2),E=f[0],L=f[1],R=c.a.useState(!1),A=Object(r.a)(R,2),T=A[0],w=A[1],I=c.a.useState(!1),J=Object(r.a)(I,2),q=J[0],F=J[1],G=c.a.useState(!1),z=Object(r.a)(G,2),B=z[0],H=z[1],M=c.a.useState(!1),K=Object(r.a)(M,2),Q=K[0],V=K[1],W=c.a.useState(""),X=Object(r.a)(W,2),Y=X[0],Z=X[1],$=c.a.useState({name:"",link:""}),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ae=c.a.useState({name:"",link:"",avatar:""}),ce=Object(r.a)(ae,2),se=ce[0],oe=ce[1],ie=c.a.useState([]),re=Object(r.a)(ie,2),le=re[0],ue=re[1];function pe(e){H(e),F(!0)}function de(e){V(e)}function he(){s(!1),d(!1),L(!1),w(!1),F(!1),ne({name:"",link:""})}return c.a.useEffect((function(){p.getUser().then((function(t){401===t.status||403===t.status?(V(!1),Z(""),e.history.push("/signin")):(V(!0),e.history.push("/"))})).catch((function(e){return console.error(e)}))}),[]),c.a.useEffect((function(){Promise.all([N.getUserInfoApi(),N.getInitialCards()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];n&&a&&(ue(a),oe(n))})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445: ".concat(e))}))}),[Q]),Object(b.jsx)(j.Provider,{value:se,children:Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)(m,{onLogout:function(){p.logout(se._id).then((function(t){console.log(t),t.ok?(de(!1),Z(""),e.history.push("signin")):console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043b\u043e\u0433\u0430\u0443\u0442\u0435")}))}}),Object(b.jsxs)(h.d,{children:[Object(b.jsx)(h.b,{path:"/sign-in",children:Object(b.jsx)(S,{onAuthorization:de,onLogin:function(t,n){p.onLogin(t,n).then((function(){de(!0),e.history.push("/"),Z(n)})).catch((function(e){console.log(e),Z(""),F(!0),H(!0)}))},cleaner:Y})}),Object(b.jsx)(h.b,{path:"/sign-up",children:Object(b.jsx)(U,{onRegister:function(t,n){p.onRegister(t,n).then((function(t){console.log(t),"undefined"===typeof t?pe(!0):(pe(!1),e.history.push("/sign-in"))})).catch((function(e){return console.log(e)}))}})}),Object(b.jsx)(P,{exact:!0,path:"/",loggedIn:Q,component:O,onEditProfile:function(){s(!0)},onAddPlace:function(){L(!0)},onEditAvatar:function(){d(!0)},onCardClick:function(e){ne(e)},onCardDelete:function(e){N.deleteCard(e).then((function(){ue(le.filter((function(t){return t._id!==e})))})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===se._id}));N.changeLikeCardStatus(e._id,!t).then((function(t){ue((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},cards:le})]}),Object(b.jsx)(g,{}),Object(b.jsx)(C,{onClose:he,isOpen:a,onUpdateUser:function(e){N.updateUserInfo(e).then((function(e){oe(e),he()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(b.jsx)(y,{onClose:he,isOpen:E,onAddPlace:function(e){N.addNewCard(e).then((function(e){ue([e].concat(Object(i.a)(le))),he()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(b.jsx)(k,{onClose:he,isOpen:u,onUpdateAvatar:function(e){N.updateUserAvatar(e).then((function(e){oe(e),he()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(b.jsx)(x,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:T,onClose:he}),Object(b.jsx)(v,{card:te,onClose:he}),Object(b.jsx)(D,{isOpen:q,isError:B,onClose:he})]})})})),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(_.a,{children:Object(b.jsx)(w,{})})}),document.getElementById("root")),I()}},[[36,1,2]]]);
//# sourceMappingURL=main.19b574bb.chunk.js.map