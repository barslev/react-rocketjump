(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var i=n(3),r=n(7),o=(n(0),n(125)),a={id:"plugin_list_insert",title:"ListInsert Plugin",sidebar_label:"ListInsert Plugin",slug:"/plugin-listinsert"},s={unversionedId:"plugin_list_insert",id:"version-2.x/plugin_list_insert",isDocsHomePage:!1,title:"ListInsert Plugin",description:"Use cases",source:"@site/versioned_docs/version-2.x/plugin_list_insert.md",slug:"/plugin-listinsert",permalink:"/react-rocketjump/docs/plugin-listinsert",editUrl:"https://github.com/inmagik/react-rocketjump/edit/master/website/versioned_docs/version-2.x/plugin_list_insert.md",version:"2.x",sidebar_label:"ListInsert Plugin",sidebar:"version-2.x/someSidebar",previous:{title:"PlainList Plugin",permalink:"/react-rocketjump/docs/plugin-plainlist"},next:{title:"ListUpdate Plugin",permalink:"/react-rocketjump/docs/plugin-listupdate"}},l=[{value:"Use cases",id:"use-cases",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Actions",id:"actions",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"use-cases"},"Use cases"),Object(o.b)("p",null,"This plugin provides support for insertion of items in list-based states. It must be used with care on paginated lists, because it will likely break pagination (i.e. it adds to the current page, even if it is full, thus violating the size of the page)"),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"This plugin supports some configuration options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"path"),": the path, relative to the state root, where the list is stored (defaults to 'data')"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"merge"),": the function used to add an item to the list (",Object(o.b)("inlineCode",{parentName:"li"},"(action, list) => nextList"),"), defaults to appending")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { rj } from 'react-rocketjump'\nimport rjPlainList from 'react-rocketjump/plugins/plainList'\nimport rjListInsert from 'react-rocketjump/plugins/listInsert'\n\nconst listState = rj(\n        rjPlainList(),\n        rjListInsert({\n            merge: (action, list) => [action.payload.params.item, ...list]\n        }),\n        {\n            effect: () => fetch(`http://example.com/items`).then(({ body }) => body)\n        }\n    )\n")),Object(o.b)("p",null,"This plugin is already included in rjPlainList and even in rjList (even if it should be used with care), but you may want to customize, for instance, the merge function. It is possible to add it explicitly to a RocketJump in order to override the behaviour of the provided one."),Object(o.b)("h2",{id:"actions"},"Actions"),Object(o.b)("p",null,"This plugin injects in the ",Object(o.b)("inlineCode",{parentName:"p"},"actions")," bag the following action creators:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"insertItem")," (",Object(o.b)("inlineCode",{parentName:"li"},"insertItem(item)"),"): inserts a new item in the list, according to the ",Object(o.b)("inlineCode",{parentName:"li"},"merge")," function")))}u.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=i,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);