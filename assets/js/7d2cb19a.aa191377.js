(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=i,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var i=n(3),r=n(7),o=(n(0),n(124)),a={id:"plugin_list_delete",title:"ListDelete Plugin",sidebar_label:"ListDelete Plugin",slug:"/plugin-listdelete"},l={unversionedId:"plugin_list_delete",id:"version-2.x/plugin_list_delete",isDocsHomePage:!1,title:"ListDelete Plugin",description:"Use cases",source:"@site/versioned_docs/version-2.x/plugin_list_delete.md",slug:"/plugin-listdelete",permalink:"/react-rocketjump/docs/plugin-listdelete",editUrl:"https://github.com/inmagik/react-rocketjump/edit/master/website/versioned_docs/version-2.x/plugin_list_delete.md",version:"2.x",sidebar_label:"ListDelete Plugin",sidebar:"version-2.x/someSidebar",previous:{title:"ListUpdate Plugin",permalink:"/react-rocketjump/docs/plugin-listupdate"},next:{title:"Map Plugin",permalink:"/react-rocketjump/docs/plugin-map"}},s=[{value:"Use cases",id:"use-cases",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Actions",id:"actions",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"use-cases"},"Use cases"),Object(o.b)("p",null,"This plugin provides support for deleting items in list-based states. It must be used with care on paginated lists, because it will likely break pagination (i.e. it removes from the current page, likely leaving it with one item less than page size)"),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"This plugin supports some configuration options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"path"),": the path, relative to the state root, where the list is stored (defaults to 'data')"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"identity"),": this function is called once for every element in the list, and is expected to return ",Object(o.b)("inlineCode",{parentName:"li"},"true")," if the item passed in along with the deleting action is the target of the delete operation (",Object(o.b)("inlineCode",{parentName:"li"},"(action, listItem) => bool")," ). Default value is ",Object(o.b)("inlineCode",{parentName:"li"},"(action, listItem) => action.item.id === listItem.id"))),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { rj } from 'react-rocketjump'\nimport rjPlainList from 'react-rocketjump/plugins/plainList'\nimport rjListDelete from 'react-rocketjump/plugins/listDelete'\n\nconst listState = rj(\n        rjPlainList(),\n        rjListDelete({\n            identity: (action, listItem) => listItem.id === action.meta.name\n        }),\n        {\n            effect: () => fetch(`http://example.com/items`).then(({ body }) => body)\n        }\n    )\n")),Object(o.b)("p",null,"This plugin is already included in rjPlainList and even in rjList (even if it should be used with care), but you may want to customize, for instance, the identity function. It is possible to add it explicitly to a RocketJump in order to override the behaviour of the provided one."),Object(o.b)("h2",{id:"actions"},"Actions"),Object(o.b)("p",null,"This plugin injects in the ",Object(o.b)("inlineCode",{parentName:"p"},"actions")," bag the following action creators:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"deleteItem")," (",Object(o.b)("inlineCode",{parentName:"li"},"deleteItem(item)"),"): deletes zero or more items from the list, according to the ",Object(o.b)("inlineCode",{parentName:"li"},"identity")," function")))}u.isMDXComponent=!0}}]);