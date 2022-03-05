(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return c}));var a=t(1),r=t(6),l=(t(0),t(97)),o={id:"plurals",title:"Plurals",sidebar_label:"Plurals"},i={unversionedId:"plurals",id:"plurals",isDocsHomePage:!1,title:"Plurals",description:"fbt:plural provides you with a shorthand way for plural variations.",source:"@site/../docs/plurals.md",slug:"/plurals",permalink:"/fbt/docs/plurals",version:"current",lastUpdatedBy:"David Han Sze Chuen",lastUpdatedAt:1618533842,sidebar_label:"Plurals",sidebar:"docs",previous:{title:"Implicit parameters",permalink:"/fbt/docs/implicit_params"},next:{title:"Enumerations",permalink:"/fbt/docs/enums"}},p=[],b={rightToc:p};function c(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"fbt:plural")," provides you with a shorthand way for plural variations."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),'<fbt desc="plural example">\n  You have\n  <fbt:plural\n    count={getLikeCount()}\n    name="number of likes"\n    showCount="ifMany"\n    many="likes">\n     a like\n  </fbt:plural>\n  on your\n  <fbt:plural\n    count={getPhotoCount()}\n    showCount="no">\n     photo\n  </fbt:plural>.\n</fbt>\n')),Object(l.b)("p",null,"OR"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"fbt(\n  'You have ' +\n    fbt.plural('a like', getLikeCount(), {\n      name: 'number of likes',\n      showCount: 'ifMany',\n      many: 'likes',\n    }) +\n    ' on your ' +\n    fbt.plural('photo', getPhotoCount()),\n  'plural example',\n);\n")),Object(l.b)("p",null,"Both the above examples generate the following during ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"collection"}),"collection"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'"phrases": [\n  {\n    "hashToLeaf": {\n      "bae7d2f1abd57d08a9dca0b5d05edee8": {\n        "text": "You have {number of likes} likes on your photos",\n        "desc": "plural example",\n      },\n      "3306b396e08398f28d921b46039f008c": {\n        "text": "You have {number of likes} likes on your photo",\n        "desc": "plural example",\n      },\n      "c9e4b5b48f38634ffecaf34956a4b186": {\n        "text": "You have a like on your photos",\n        "desc": "plural example",\n      },\n      "cb49d6d764ea8aabdca0e9db7f10ba34": {\n        "text": "You have a like on your photo"\n        "desc": "plural example",\n      },\n    },\n    "type": "table",\n    ...\n  }\n]\n')),Object(l.b)("h4",{id:"required-arguments"},"Required arguments:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"singular phrase")," ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": JSX child in ",Object(l.b)("inlineCode",{parentName:"li"},"<fbt:plural>")," and argument 1 in ",Object(l.b)("inlineCode",{parentName:"li"},"fbt.plural")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"count")," ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": ",Object(l.b)("inlineCode",{parentName:"li"},"count")," in ",Object(l.b)("inlineCode",{parentName:"li"},"<fbt:plural>")," and argument 2 in ",Object(l.b)("inlineCode",{parentName:"li"},"fbt.plural"))),Object(l.b)("h4",{id:"optional-arguments"},"Optional arguments:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"many")," ",Object(l.b)("inlineCode",{parentName:"p"},"string"),": Represents the plural form of the string in English.  Default is ",Object(l.b)("inlineCode",{parentName:"p"},"{singular} + 's'"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"showCount")," ",Object(l.b)("inlineCode",{parentName:"p"},'"yes"|"no"|"ifMany"'),": Whether to show the ",Object(l.b)("inlineCode",{parentName:"p"},"{number}")," in the string.\n",Object(l.b)("em",{parentName:"p"},"Note that the singular phrase never has a token, but inlines to ",Object(l.b)("inlineCode",{parentName:"em"},"1"),". This is to account for languages like Hebrew for which showing the actual number isn't appropriate")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},'"no"'),": (",Object(l.b)("em",{parentName:"li"},"DEFAULT"),") Don't show the count"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},'"ifMany"'),": Show the count only in plural case"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},'"yes"'),": Show the count in all cases"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"name")," ",Object(l.b)("inlineCode",{parentName:"p"},"string"),": Name of the token where count shows up. (",Object(l.b)("em",{parentName:"p"},"Default"),": ",Object(l.b)("inlineCode",{parentName:"p"},'"number"'),")")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"value")," ",Object(l.b)("inlineCode",{parentName:"p"},"mixed"),": For overriding the displayed ",Object(l.b)("inlineCode",{parentName:"p"},"number")))))}c.isMDXComponent=!0},97:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),c=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,d=u["".concat(o,".").concat(m)]||u[m]||s[m]||l;return t?r.a.createElement(d,i(i({ref:n},b),{},{components:t})):r.a.createElement(d,i({ref:n},b))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<l;b++)o[b]=t[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);