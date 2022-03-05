(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(6),a=(n(0),n(97)),i={id:"common",title:"Common FBT strings",sidebar_label:"Common strings"},c={unversionedId:"common",id:"common",isDocsHomePage:!1,title:"Common FBT strings",description:"The fbt framework provides a way to define common simple strings in one shared location.  The expected format is as a text to description map.",source:"@site/../docs/commmon.md",slug:"/common",permalink:"/fbt/docs/common",version:"current",lastUpdatedBy:"John Watson",lastUpdatedAt:1587178436,sidebar_label:"Common strings",sidebar:"docs",previous:{title:"Auto-parameterization",permalink:"/fbt/docs/autoparam"},next:{title:"Runtime Utilities",permalink:"/fbt/docs/utilities"}},l=[{value:"FBT Transform",id:"fbt-transform",children:[]},{value:"Runtime API",id:"runtime-api",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"fbt")," framework provides a way to define common simple strings in one shared location.  The expected format is as a text to description map."),Object(a.b)("p",null,"E.g"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'// OurCommonStrings.js\nmodule.exports = {\n  "Photo": "Still image ...",\n  "Video": "Moving pictures ...",\n  ...\n};\n')),Object(a.b)("h2",{id:"fbt-transform"},"FBT Transform"),Object(a.b)("p",null,"It accepts these common strings via the main Babel transform, ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/8a3145030074162f8ecbfb7374dafac03661a3a0/packages/babel-plugin-fbt/FbtCommon.js#L22-L24"}),Object(a.b)("inlineCode",{parentName:"a"},"babel-plugin-fbt")),", as a plugin option."),Object(a.b)("p",null,"Example Babel setup:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'{\n  plugins: [\n    [\'babel-plugin-fbt\', {\n      fbtCommonPath: "/path/to/OurCommonStrings.js",\n      // OR inlined...\n      fbtCommon: {\n        "Photo": "...",\n        ...\n      },\n      ...\n    }],\n    ...\n  ]\n}\n')),Object(a.b)("h2",{id:"runtime-api"},"Runtime API"),Object(a.b)("p",null,"To use the strings at runtime, there is the ",Object(a.b)("inlineCode",{parentName:"p"},"fbt.c(...)")," function call or the ",Object(a.b)("inlineCode",{parentName:"p"},"<fbt common=true>...</fbt>")," JSX API."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"NOTE: The transform will throw if it encounters a common string "),"not",Object(a.b)("em",{parentName:"strong"}," in the map provided."))),Object(a.b)("p",null,"E.g."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"<button>\n  {fbt.c('Photo')}\n</button>\n")),Object(a.b)("p",null,"or"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"<button>\n  <fbt common={true}>Photo</fbt>\n</button>\n")),Object(a.b)("p",null,"Both examples above function as if the engineer had also included the description with the text."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'  <fbt desc="Still image ...">Photo</fbt>\n')),Object(a.b)("p",null,"All of these instances would produce the same identifying hash at collection time, and thus coalesce into the same translation."))}s.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,f=p["".concat(i,".").concat(u)]||p[u]||m[u]||a;return n?o.a.createElement(f,c(c({ref:t},b),{},{components:n})):o.a.createElement(f,c({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<a;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);