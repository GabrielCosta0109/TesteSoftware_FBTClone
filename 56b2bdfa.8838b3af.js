/*! For license information please see 56b2bdfa.8838b3af.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),f=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=f(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=f(r),d=n,b=p["".concat(a,".").concat(d)]||p[d]||s[d]||i;return r?o.a.createElement(b,c(c({ref:t},l),{},{components:r})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},101:function(e,t,r){"use strict";e.exports=r(102)},102:function(e,t,r){"use strict";var n=r(103),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function _(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||v}function O(){}function g(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||v}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=_.prototype;var w=g.prototype=new O;w.constructor=g,n(w,_.prototype),w.isPureReactComponent=!0;var k={current:null},S=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var n,o={},a=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,n)&&!E.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var l=Array(u),f=0;f<u;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:i,type:e,key:a,ref:c,props:o,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var x=/\/+/g,N=[];function $(e,t,r,n){if(N.length){var o=N.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function T(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case i:case a:c=!0}}if(c)return r(n,e,""===t?"."+D(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=t+D(o=e[u],u);c+=T(o,l,r,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=m&&e[m]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),u=0;!(o=e.next()).done;)c+=T(o=o.value,l=t+D(o,u++),r,n);else if("object"===o)throw r=""+e,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return c}function I(e,t,r){return null==e?0:T(e,"",t,r)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+r)),n.push(e))}function M(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace(x,"$&/")+"/"),I(e,U,t=$(t,i,n,o)),R(t)}var V={current:null};function q(){var e=V.current;if(null===e)throw Error(h(321));return e}var F={ReactCurrentDispatcher:V,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return M(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,A,t=$(null,null,t,r)),R(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(h(143));return e}},t.Component=_,t.Fragment=c,t.Profiler=l,t.PureComponent=g,t.StrictMode=u,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var o=n({},e.props),a=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in t)S.call(t,f)&&!E.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==l?l[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){l=Array(f);for(var p=0;p<f;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:i,type:e.type,key:a,ref:c,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return q().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,r){return q().useReducer(e,t,r)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.14.0"},103:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,c,u=a(e),l=1;l<arguments.length;l++){for(var f in r=Object(arguments[l]))o.call(r,f)&&(u[f]=r[f]);if(n){c=n(r);for(var p=0;p<c.length;p++)i.call(r,c[p])&&(u[c[p]]=r[c[p]])}}return u}},70:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return f}));var n=r(1),o=r(6),i=(r(101),r(100)),a={id:"implicit_params",title:"Implicit parameters",sidebar_label:"Implicit parameters"},c={unversionedId:"implicit_params",id:"implicit_params",isDocsHomePage:!1,title:"Implicit parameters",description:"Viewer Gender",source:"@site/../docs/implicit_params.md",slug:"/implicit_params",permalink:"/fbt/docs/implicit_params",version:"current",lastUpdatedBy:"John Watson",lastUpdatedAt:1616548980,sidebar_label:"Implicit parameters",sidebar:"docs",previous:{title:"Parameters and interpolation",permalink:"/fbt/docs/params"},next:{title:"Plurals",permalink:"/fbt/docs/plurals"}},u=[{value:"Viewer Gender",id:"viewer-gender",children:[{value:"The hidden <code>__viewing_user__</code> token",id:"the-hidden-__viewing_user__-token",children:[]}]},{value:"Subject",id:"subject",children:[{value:"The hidden <code>__subject__</code> token",id:"the-hidden-__subject__-token",children:[]}]}],l={rightToc:u};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"viewer-gender"},"Viewer Gender"),Object(i.b)("h3",{id:"the-hidden-__viewing_user__-token"},"The hidden ",Object(i.b)("inlineCode",{parentName:"h3"},"__viewing_user__")," token"),Object(i.b)("p",null,"If a token of ",Object(i.b)("inlineCode",{parentName:"p"},"__viewing_user__")," is provided, it is expected to have the\ncorresponding ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"translating"}),Object(i.b)("inlineCode",{parentName:"a"},"type"))," of ",Object(i.b)("inlineCode",{parentName:"p"},"IntlVariations.GENDER*"),". When\nprovided, at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"translating"}),"translation")," time, ",Object(i.b)("inlineCode",{parentName:"p"},"JSFbtBuilder")," will\ncreate a special key in its table payload which signals to the runtime\nto check the gender of ",Object(i.b)("inlineCode",{parentName:"p"},"IntlVariations.GENDER")," in order to variate on\ngender."),Object(i.b)("h2",{id:"subject"},"Subject"),Object(i.b)("h3",{id:"the-hidden-__subject__-token"},"The hidden ",Object(i.b)("inlineCode",{parentName:"h3"},"__subject__")," token"),Object(i.b)("p",null,"Similar to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"implicit_params#viewer-gender"}),"viewer gender"),", this is an\nimplicit variation based on gender.  Whether the variation is provided\nis determined at the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"translating"}),"translation")," level.  A translator\nmay choose to variate on ",Object(i.b)("inlineCode",{parentName:"p"},"__subject__")," or not."),Object(i.b)("p",null,"Unlike viewer gender, subject requires that the ",Object(i.b)("inlineCode",{parentName:"p"},"fbt")," callsite provide it via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"api_intro#optional-attributes"}),"optional argument")),Object(i.b)("p",null,"E.g"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"let actorMarkupUsedElsewhere = <a href=#\">...</a>\n<fbt\n  subject={subjectGender} \n  desc={'There is an implicit actor here. ' +\n        \"Like: '{name} translated your string.'\"}>\n  translated your string.\n</fbt>\n")),Object(i.b)("p",null,"The above will variate correctly, provided there are separate translations for the ",Object(i.b)("inlineCode",{parentName:"p"},"__subject__")," token."))}f.isMDXComponent=!0}}]);