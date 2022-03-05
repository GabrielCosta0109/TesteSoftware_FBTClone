(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var a=t(1),r=t(6),o=(t(0),t(97)),i={id:"autoparam",title:"Auto-parameterization",sidebar_label:"Auto-parameterization"},c={unversionedId:"autoparam",id:"autoparam",isDocsHomePage:!1,title:"Auto-parameterization",description:"`` will automatically wrap any non-fbt children in the top-level",source:"@site/../docs/autoparam.md",slug:"/autoparam",permalink:"/fbt/docs/autoparam",version:"current",lastUpdatedBy:"David Han Sze Chuen",lastUpdatedAt:1618533842,sidebar_label:"Auto-parameterization",sidebar:"docs",previous:{title:"Pronouns",permalink:"/fbt/docs/pronouns"},next:{title:"Common FBT strings",permalink:"/fbt/docs/common"}},p=[],l={rightToc:p};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"<fbt>")," will automatically wrap any non-fbt children in the top-level\n",Object(o.b)("inlineCode",{parentName:"p"},"<fbt>")," as though they were written with an ",Object(o.b)("inlineCode",{parentName:"p"},"<fbt:param>")," with a\n",Object(o.b)("inlineCode",{parentName:"p"},"name")," attribute containing the child's text.  It will pull any child\ntext into the parameter name, including those of recursive structures."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"JSX fbt syntax:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<fbt desc="auto-wrap example">\n  Go on an\n  <a href="#">\n    <span>awesome</span> vacation\n  </a>\n</fbt>\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Function syntax:")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"fbt(\n  [\n    'Go on an',\n    <a href=\"#\">\n      <span>awesome</span> vacation\n    </a>,\n  ],\n  'auto-wrap example',\n);\n")),Object(o.b)("p",null,"When extracted for translation, the result is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n "phrases": [\n  {\n   "hashToLeaf": {\n    "V2xk3OfcDrMIA7HC/rIXIg==": {\n     "text": "Go on an {=awesome vacation}",\n     "desc": "auto-wrap example"\n    }\n   },\n   // ...\n  },\n  {\n   "hashToLeaf": {\n    "feX2lgKwwomWUYP5/78klg==": {\n     "text": "{=awesome} vacation",\n     "desc": "In the phrase: \\"Go on an {=awesome vacation}\\""\n    }\n   },\n   // ...\n  },\n  {\n   "hashToLeaf": {\n    "a7sBUhipyZur9yE8H6dk2A==": {\n     "text": "awesome",\n     "desc": "In the phrase: \\"Go on an {=awesome} vacation\\""\n    }\n   },\n   // ...\n  }\n ],\n "childParentMappings": {\n  "1": 0,\n  "2": 1\n }\n}\n\n')),Object(o.b)("p",null,'Notice the description for "vacation" is auto-generated with an ',Object(o.b)("inlineCode",{parentName:"p"},'"In\nthe phrase: ..."')," prefix.  Additionally, we use a convention of an ",Object(o.b)("inlineCode",{parentName:"p"},"="),"\nprefix in the interpolation ",Object(o.b)("inlineCode",{parentName:"p"},"{=awesome vacation}")," to signal to the\ntranslator that this exact word or phrase goes in the associated outer\nsentence."),Object(o.b)("p",null,"Furthermore, we provide a mapping ",Object(o.b)("inlineCode",{parentName:"p"},"{<childIndex>: <parentIndex>}")," in\nthe collection output ",Object(o.b)("inlineCode",{parentName:"p"},"childParentMappings"),".  At Facebook, we use\nthese to display all relevant inner and outer strings when translating\nany given piece of text.  We recommend you do the same in whatever\ntranslation framework you use.  Context is crucial for accurate\ntranslations."))}s.isMDXComponent=!0},97:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),s=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return t?r.a.createElement(d,c(c({ref:n},l),{},{components:t})):r.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);