(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return n?a.a.createElement(b,i(i({ref:t},u),{},{components:n})):a.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=(n(0),n(133));const o={id:"tips_and_tricks",title:"Tips & Tricks",sidebar_label:"Custom hooks",slug:"/tips-n-tricks"},c={unversionedId:"tips_and_tricks",id:"version-2.x/tips_and_tricks",isDocsHomePage:!1,title:"Tips & Tricks",description:"Use custom Hooks",source:"@site/versioned_docs/version-2.x/tips_and_tricks.md",slug:"/tips-n-tricks",permalink:"/react-rocketjump/docs/tips-n-tricks",editUrl:"https://github.com/inmagik/react-rocketjump/edit/master/website/versioned_docs/version-2.x/tips_and_tricks.md",version:"2.x",sidebar_label:"Custom hooks",sidebar:"version-2.x/someSidebar",previous:{title:"Logger",permalink:"/react-rocketjump/docs/debug-logger"}},i=[{value:"Use custom Hooks",id:"use-custom-hooks",children:[]}],s={toc:i};function u({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"use-custom-hooks"},"Use custom Hooks"),Object(a.b)("p",null,"In many cases you may want to combine several ",Object(a.b)("inlineCode",{parentName:"p"},"RocketJump Objects")," together, maybe because they are strictly related. The typical example here is dealing with REST APIs: you have ",Object(a.b)("inlineCode",{parentName:"p"},"GET"),", ",Object(a.b)("inlineCode",{parentName:"p"},"POST"),", ",Object(a.b)("inlineCode",{parentName:"p"},"PUT"),", ",Object(a.b)("inlineCode",{parentName:"p"},"DELETE")," and maybe even ",Object(a.b)("inlineCode",{parentName:"p"},"PATCH")," verbs, each mapped onto its own ",Object(a.b)("inlineCode",{parentName:"p"},"RocketJump Object"),". Importing all of them every time can be just a little bit tedious. You can avoid this by writing your own custom hook that combines several ",Object(a.b)("inlineCode",{parentName:"p"},"useRj")," hooks and you are done!"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import { useEffect, useCallback } from 'react'\nimport { getMyItem, updateMyItem, deleteMyItem } from './myItemApi'\n\nconst GetItem = rj({\n  effect: getMyItem,\n  actions: () => ({\n    writeBack: data => ({ type: 'write-back', data }),\n  }),\n  reducer: oldReducer => (state, action) => {\n    if (action.type === 'write-back') {\n      return {\n        ...state,\n        data: action.data,\n      }\n    } else {\n      return oldReducer(state, action)\n    }\n  },\n})\n\nconst UpdateItem = rj({\n  effect: updateMyItem,\n})\n\nconst DeleteItem = rj({\n  effect: deleteMyItem,\n})\n\nconst useMyItem = id => {\n  const [{ data: item }, { run: loadItem, writeBack }] = useRj(GetItem)\n  const [ignored, { run: updateItem }] = useRj(UpdateItem)\n  const [unused, { run: deleteItem }] = useRj(DeleteItem)\n\n  const updateAndWriteBack = useCallback(\n    (...args) => {\n      updateItem.onSuccess(updatedItem => writeBack(updatedItem)).run(...args)\n    },\n    [updateItem, writeBack]\n  )\n\n  const deleteAndWriteBack = useCallback(\n    (...args) => {\n      deleteItem.onSuccess(() => writeBack(null)).run(...args)\n    },\n    [deleteItem, writeBack]\n  )\n\n  useEffect(() => {\n    loadItem(id)\n  }, [loadItem, id])\n\n  return [item, { update: updateAndWriteBack, delete: deleteAndWriteBack }]\n}\n\nexport default useMyItem\n")))}u.isMDXComponent=!0}}]);