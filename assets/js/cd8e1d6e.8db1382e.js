(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var i=n(3),r=(n(0),n(133));const a={id:"plugin_list_delete",title:"ListDelete Plugin",sidebar_label:"ListDelete Plugin",slug:"/plugins/listDelete"},o={unversionedId:"plugin_list_delete",id:"plugin_list_delete",isDocsHomePage:!1,title:"ListDelete Plugin",description:"Use cases",source:"@site/docs/plugin_list_delete.md",slug:"/plugins/listDelete",permalink:"/react-rocketjump/docs/next/plugins/listDelete",editUrl:"https://github.com/inmagik/react-rocketjump/edit/master/website/docs/plugin_list_delete.md",version:"current",sidebar_label:"ListDelete Plugin",sidebar:"someSidebar",previous:{title:"ListUpdate Plugin",permalink:"/react-rocketjump/docs/next/plugins/listUpdate"},next:{title:"Map Plugin",permalink:"/react-rocketjump/docs/next/plugins/map"}},l=[{value:"Use cases",id:"use-cases",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Actions",id:"actions",children:[]}],c={toc:l};function s({components:e,...t}){return Object(r.b)("wrapper",Object(i.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"use-cases"},"Use cases"),Object(r.b)("p",null,"This plugin provides support for deleting items in list-based states. It must be used with care on paginated lists, because it will likely break pagination (i.e. it removes from the current page, likely leaving it with one item less than page size)"),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"This plugin supports some configuration options:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"path"),": the path, relative to the state root, where the list is stored (defaults to 'data')"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"identity"),": this function is called once for every element in the list, and is expected to return ",Object(r.b)("inlineCode",{parentName:"li"},"true")," if the item passed in along with the deleting action is the target of the delete operation (",Object(r.b)("inlineCode",{parentName:"li"},"(action, listItem) => bool")," ). Default value is ",Object(r.b)("inlineCode",{parentName:"li"},"(action, listItem) => action.item.id === listItem.id"))),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { rj } from 'react-rocketjump'\nimport rjPlainList from 'react-rocketjump/plugins/plainList'\nimport rjListDelete from 'react-rocketjump/plugins/listDelete'\n\nconst listState = rj(\n  rjPlainList(),\n  rjListDelete({\n    identity: (action, listItem) => listItem.id === action.meta.name,\n  }),\n  {\n    effect: () => fetch(`http://example.com/items`).then(({ body }) => body),\n  }\n)\n")),Object(r.b)("p",null,"This plugin is already included in rjPlainList and even in rjList (even if it should be used with care), but you may want to customize, for instance, the identity function. It is possible to add it explicitly to a RocketJump in order to override the behaviour of the provided one."),Object(r.b)("h2",{id:"actions"},"Actions"),Object(r.b)("p",null,"This plugin injects in the ",Object(r.b)("inlineCode",{parentName:"p"},"actions")," bag the following action creators:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"deleteItem")," (",Object(r.b)("inlineCode",{parentName:"li"},"deleteItem(item)"),"): deletes zero or more items from the list, according to the ",Object(r.b)("inlineCode",{parentName:"li"},"identity")," function")))}s.isMDXComponent=!0},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=i,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||a;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);