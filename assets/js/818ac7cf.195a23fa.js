(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(125)),o={id:"plugin_writing",title:"Writing Plugins",sidebar_label:"Writing Plugins",slug:"/plugin-write"},c={unversionedId:"plugin_writing",id:"version-2.x/plugin_writing",isDocsHomePage:!1,title:"Writing Plugins",description:"In order to write effective and powerful plugins, you may need to know how the internals of the library work.",source:"@site/versioned_docs/version-2.x/plugin_writing.md",slug:"/plugin-write",permalink:"/react-rocketjump/docs/plugin-write",editUrl:"https://github.com/inmagik/react-rocketjump/edit/master/website/versioned_docs/version-2.x/plugin_writing.md",version:"2.x",sidebar_label:"Writing Plugins",sidebar:"version-2.x/someSidebar",previous:{title:"Debounce Plugin",permalink:"/react-rocketjump/docs/plugin-debounce"},next:{title:"Logger",permalink:"/react-rocketjump/docs/debug-logger"}},l=[{value:"Operating with actions",id:"operating-with-actions",children:[]},{value:"The state shape",id:"the-state-shape",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In order to write effective and powerful plugins, you may need to know how the internals of the library work."),Object(a.b)("h2",{id:"operating-with-actions"},"Operating with actions"),Object(a.b)("p",null,"When using the ",Object(a.b)("inlineCode",{parentName:"p"},"actions")," property you can define custom, plain actions, or leverage the predefined ",Object(a.b)("inlineCode",{parentName:"p"},"run"),", ",Object(a.b)("inlineCode",{parentName:"p"},"cancel")," and ",Object(a.b)("inlineCode",{parentName:"p"},"clean")," functions to define side-effectful actions. As for normal usage, in order to leverage the full power of the predefined actions it is necessary to call them using the builder. Things are slightly different when working inside the ",Object(a.b)("inlineCode",{parentName:"p"},"actions")," configuration. In particular, you have only one method available among those defined in the builder: the ",Object(a.b)("inlineCode",{parentName:"p"},"withMeta")," method (with both variants)."),Object(a.b)("p",null,"Moreover, you may need to access directly the params sent by the user when calling the action: they are available under the ",Object(a.b)("inlineCode",{parentName:"p"},"action.payload.params")," path. In the same way, the results of the asynchronous task are available under the ",Object(a.b)("inlineCode",{parentName:"p"},"action.payload.data")," path when the task completes. This can be useful when customizing the way plugins manage the completion of some actions."),Object(a.b)("h2",{id:"the-state-shape"},"The state shape"),Object(a.b)("p",null,"The base (i.e. without plugins) state shape is the following"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"{\n    pending: bool,       // telles whether there is a pending instance of the task\n    error: any,          // payload of the last execution, if it was a failing one\n    data: any            // payload of the last successful execution of the task\n}\n")),Object(a.b)("p",null,"You are strongly advised to change it only if patching the reducer accordingly: changing the state shape and relying on the default reducer may lead to unexpected behaviour"))}u.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,b=p["".concat(o,".").concat(h)]||p[h]||d[h]||a;return n?i.a.createElement(b,c(c({ref:t},s),{},{components:n})):i.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);