"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[413],{7841:function(e,a,t){t.r(a);var r=t(885),n=t(2791),s=t(2981),l=t(2138),c=t(8737),o=t(5006),i=function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t},m=(0,n.memo)((function(e){var a=e.kcContext,t=e.i18n,c=i(e,["kcContext","i18n"]),o=a.url,m=a.messagesPerField,p=a.recaptchaRequired,d=a.recaptchaSiteKey,k=t.msg,b=t.msgStr,g=(0,l.R)(),f=g.cx,v=g.css,C=(0,n.useMemo)((function(){return Object.assign(Object.assign({},c),{kcFormGroupClass:f(c.kcFormGroupClass,v({marginBottom:20}))})}),[f,v]),E=(0,n.useState)(!1),y=(0,r.Z)(E,2),h=y[0],N=y[1];return n.createElement(s.Z,Object.assign({},Object.assign({kcContext:a,i18n:t},C),{displayMessage:m.exists("global"),displayRequiredFields:!0,doFetchDefaultThemeResources:!0,headerNode:k("registerTitle"),formNode:n.createElement("form",{id:"kc-register-form",className:f(C.kcFormClass),action:o.registrationAction,method:"post"},n.createElement(u,Object.assign({kcContext:a,onIsFormSubmittableValueChange:N,i18n:t},C)),p&&n.createElement("div",{className:"form-group"},n.createElement("div",{className:f(C.kcInputWrapperClass)},n.createElement("div",{className:"g-recaptcha","data-size":"compact","data-sitekey":d}))),n.createElement("div",{className:f(C.kcFormGroupClass)},n.createElement("div",{id:"kc-form-options",className:f(C.kcFormOptionsClass)},n.createElement("div",{className:f(C.kcFormOptionsWrapperClass)},n.createElement("span",null,n.createElement("a",{href:o.loginUrl},k("backToLogin"))))),n.createElement("div",{id:"kc-form-buttons",className:f(C.kcFormButtonsClass)},n.createElement("input",{className:f(C.kcButtonClass,C.kcButtonPrimaryClass,C.kcButtonBlockClass,C.kcButtonLargeClass),type:"submit",value:b("doRegister"),disabled:!h}))))}))})),u=(0,n.memo)((function(e){var a=e.kcContext,t=e.onIsFormSubmittableValueChange,s=e.i18n,m=i(e,["kcContext","onIsFormSubmittableValueChange","i18n"]),u=(0,l.R)(),p=u.cx,d=u.css,k=s.advancedMsg,b=(0,o.H)({kcContext:a,i18n:s}),g=b.formValidationState,f=g.fieldStateByAttributeName,v=g.isFormSubmittable,C=b.formValidationReducer,E=b.attributesWithPassword;(0,n.useEffect)((function(){t(v)}),[v]);var y=(0,c.useCallbackFactory)((function(e,a){var t=(0,r.Z)(e,1)[0],n=(0,r.Z)(a,1)[0].target.value;return C({action:"update value",name:t,newValue:n})})),h=(0,c.useCallbackFactory)((function(e){var a=(0,r.Z)(e,1)[0];return C({action:"focus lost",name:a})})),N="";return n.createElement(n.Fragment,null,E.map((function(e,a){var t,r=e.group,s=void 0===r?"":r,l=e.groupDisplayHeader,c=void 0===l?"":l,o=e.groupDisplayDescription,i=void 0===o?"":o,u=f[e.name],b=u.value,g=u.displayableErrors,v=p(m.kcFormGroupClass,0!==g.length&&m.kcFormGroupErrorClass);return n.createElement(n.Fragment,{key:a},s!==N&&""!==(N=s)&&n.createElement("div",{className:v},n.createElement("div",{className:p(m.kcContentWrapperClass)},n.createElement("label",{id:"header-".concat(s),className:p(m.kcFormGroupHeader)},k(c)||N)),""!==i&&n.createElement("div",{className:p(m.kcLabelWrapperClass)},n.createElement("label",{id:"description-".concat(s),className:"".concat(p(m.kcLabelClass))},k(i)))),n.createElement("div",{className:v},n.createElement("div",{className:p(m.kcLabelWrapperClass)},n.createElement("label",{htmlFor:e.name,className:p(m.kcLabelClass)},k(null!==(t=e.displayName)&&void 0!==t?t:"")),e.required&&n.createElement(n.Fragment,null,"*")),n.createElement("div",{className:p(m.kcInputWrapperClass)},function(){var a=e.validators.options;return void 0!==a?n.createElement("select",{id:e.name,name:e.name,onChange:y(e.name),onBlur:h(e.name),value:b},a.options.map((function(e){return n.createElement("option",{key:e,value:e},e)}))):n.createElement("input",{type:function(){switch(e.name){case"password-confirm":case"password":return"password";default:return"text"}}(),id:e.name,name:e.name,value:b,onChange:y(e.name),className:p(m.kcInputClass),"aria-invalid":0!==g.length,disabled:e.readOnly,autoComplete:e.autocomplete,onBlur:h(e.name)})}(),0!==g.length&&n.createElement("span",{id:"input-error-".concat(e.name),className:p(m.kcInputErrorMessageClass,d({position:1===g.length?"absolute":void 0,"& > span":{display:"block"}})),"aria-live":"polite"},g.map((function(e){return e.errorMessage}))))))})))}));a.default=m}}]);
//# sourceMappingURL=413.f17a93d6.chunk.js.map