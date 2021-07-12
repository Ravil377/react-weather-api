(this["webpackJsonpreact-weather-api"]=this["webpackJsonpreact-weather-api"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),r=n(6),c=n.n(r),s=(n(14),n(9)),o=n(2),u=(n(15),n.p+"static/media/settings.4564248b.png"),l=n.p+"static/media/navigation-cursor.d54c7a4e.svg",d=n(0);var h=function(t){var e=t.city,n=e.name,i=e.visibility,a=e.main,r=e.sys,c=e.wind,s=e.weather,o={transform:"rotate(".concat(180+(null===c||void 0===c?void 0:c.deg),"deg)")};return Object(d.jsx)("div",{className:"weather",children:Object(d.jsxs)("ul",{className:"weather__items",children:[Object(d.jsxs)("li",{className:"weather__item",children:[Object(d.jsxs)("h4",{className:"weather__title",children:[n,", ",null===r||void 0===r?void 0:r.country]}),0===t.isCount&&Object(d.jsx)("img",{src:u,alt:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",className:"weather__setting",onClick:function(){t.isOpenSetting()}})]}),Object(d.jsxs)("li",{className:"weather__item weather__image",children:[Object(d.jsx)("img",{className:"weather__icon",src:"http://openweathermap.org/img/wn/".concat(s&&s[0].icon,"@2x.png"),alt:s&&s[0].description}),Object(d.jsxs)("p",{className:"weather__temperature",children:[Math.floor(null===a||void 0===a?void 0:a.temp),"\xb0C"]})]}),Object(d.jsx)("li",{className:"weather__item",children:Object(d.jsxs)("p",{className:"weather__description",children:["\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",Math.floor(null===a||void 0===a?void 0:a.feels_like),"\xb0C. ",s&&s[0].description]})}),Object(d.jsxs)("li",{className:"weather__item",children:[Object(d.jsxs)("div",{className:"weather__wind",children:[Object(d.jsx)("img",{src:l,alt:"arrow wind",className:"weather__description-wind-arrow",style:o}),Object(d.jsx)("p",{className:"weather__description"}),Object(d.jsxs)("p",{className:"weather__description",children:[null===c||void 0===c?void 0:c.speed,"m/s"]})]}),Object(d.jsxs)("p",{className:"weather__description",children:[null===a||void 0===a?void 0:a.pressure,"hPa"]})]}),Object(d.jsxs)("li",{className:"weather__item",children:[Object(d.jsxs)("p",{className:"weather__description",children:["Humidity: ",null===a||void 0===a?void 0:a.humidity,"%"]}),Object(d.jsx)("p",{className:"weather__description",children:"Dew point: 0C"})]}),Object(d.jsx)("li",{className:"weather__item",children:Object(d.jsxs)("p",{className:"weather__description",children:["Visibility: ",Math.floor(i/1e3),".0km"]})})]})})},m=(n(17),n.p+"static/media/hamburger-menu.5ab0a901.svg"),j=n.p+"static/media/loading.6b77aa8a.svg";n(18);var g=function(){return Object(d.jsx)("img",{src:j,alt:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",className:"loading"})};var b=function(t){var e=a.a.useState(),n=Object(o.a)(e,2),i=n[0],r=n[1],c=t.onDragStart,s=t.onDragEnd,u=t.onDragOver,l=t.onDrop,h=t.isLoading,j=t.isError,b=function(t,e){c(t,e)},f=function(t){s(t)},p=function(t){t.preventDefault(),u(t)},_=function(t,e){t.preventDefault(),l(t,e)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"setting",children:[Object(d.jsx)("h4",{className:"setting__title",children:"Settings"}),Object(d.jsx)("button",{type:"button",className:"setting__button-close",onClick:function(){t.isOpenSetting()}}),Object(d.jsx)("ul",{className:"setting__list",children:t.citys.map((function(e){var n=e.id,i=e.name,a=e.sys;return Object(d.jsxs)("li",{className:"setting__list-item",draggable:"true",onDragStart:function(t){return b(t,e)},onDragEnd:function(t){return f(t)},onDragLeave:function(t){return f(t)},onDragOver:function(t){return p(t)},onDrop:function(t){return _(t,e)},children:[Object(d.jsx)("img",{src:m,className:"setting__list-burger",alt:"\u0411\u0443\u0440\u0433\u0435\u0440"}),Object(d.jsxs)("p",{className:"setting__list-city",children:[i,", ",a.country]}),Object(d.jsx)("button",{type:"button",className:"setting__button-remove",onClick:function(){return function(e){t.onClick(e)}(n)}})]},n)}))}),h&&Object(d.jsx)(g,{}),Object(d.jsxs)("div",{className:"setting__form-container",children:[Object(d.jsx)("h4",{className:"setting__title",children:"Add Location:"}),Object(d.jsxs)("form",{name:"addCity",className:"setting__form",onSubmit:function(e){e.preventDefault(),t.onSubmit(i),r("")},children:[Object(d.jsx)("input",{type:"text",name:"city",placeholder:"\u0413\u043e\u0440\u043e\u0434",className:"setting__input ".concat(j&&"setting__input-error"),minLength:"2",maxLength:"40",value:i||"",onChange:function(t){r(t.target.value)},required:!0}),Object(d.jsx)("button",{type:"submit",className:"setting__button-city-enter"})]})]})]})})},f=n(7),p=n(8),_=new(function(){function t(e){Object(f.a)(this,t),this._options=e}return Object(p.a)(t,[{key:"_answerForServer",value:function(t){return t.ok?t.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(t.status))}},{key:"getWeatherByCity",value:function(t){var e=this;return fetch("".concat(this._options.baseUrl,"weather?q=").concat(t,"&appid=").concat(this._options.authorization,"&units=metric&lang=ru")).then((function(t){return e._answerForServer(t)}))}},{key:"getIp",value:function(){var t=this;return fetch("https://ipinfo.io/json?token=6d7db8beb65196").then((function(e){return t._answerForServer(e)}))}}]),t}())({baseUrl:"https://api.openweathermap.org/data/2.5/",authorization:"43a03cf95baf7c1e3256b0f6aa9a38d7"});var O=function(){var t=a.a.useState(!1),e=Object(o.a)(t,2),n=e[0],i=e[1],r=a.a.useState([]),c=Object(o.a)(r,2),u=c[0],l=c[1],m=a.a.useState(),j=Object(o.a)(m,2),g=j[0],f=j[1],p=a.a.useState(!1),O=Object(o.a)(p,2),v=O[0],x=O[1],w=a.a.useState(!1),y=Object(o.a)(w,2),N=y[0],S=y[1];document.addEventListener("DOMContentLoaded",(function(){var t=localStorage.getItem("myWeather");null!==t?(t=JSON.parse(t),l(t)):_.getIp().then((function(t){k(t.city)})).catch((function(t){return i(!0)}))})),window.addEventListener("beforeunload",(function(t){localStorage.removeItem("myWeather"),u.length>0&&localStorage.setItem("myWeather",JSON.stringify(u))}));var D=function(){u.length>0&&x((function(t){return!t}))},C=function(){i(!0),S((function(t){return!t})),setTimeout((function(){return i(!1)}),500)},k=function(t){S((function(t){return!t})),_.getWeatherByCity(t).then((function(t){!function(t){return u.length>0&&u.find((function(e){return e.id===t.id}))}(t)?(l((function(e){return[].concat(Object(s.a)(e),[t])})),S((function(t){return!t}))):C()})).catch((function(t){return C()}))};return Object(d.jsx)(d.Fragment,{children:v&&u?Object(d.jsx)(b,{isOpenSetting:D,onSubmit:k,citys:u,onClick:function(t){return l((function(){return u.filter((function(e){return e.id!==t}))}))},onDragStart:function(t,e){return f(e)},onDragEnd:function(t){return t.target.style.background="#ececec"},onDragOver:function(t){return t.target.style.background="lightblue"},onDrop:function(t,e){l(u.map((function(t){return t.id===e.id?g:t.id===g.id?e:t}))),t.target.style.background="#ececec"},isLoading:N,isError:n}):u.map((function(t,e){return Object(d.jsx)(h,{isOpenSetting:D,city:t,isCount:e},t.id)}))})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),r(t),c(t)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),v()}},[[19,1,2]]]);
//# sourceMappingURL=main.3596acb6.chunk.js.map