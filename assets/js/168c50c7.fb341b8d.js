(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,j=p["".concat(o,".").concat(d)]||p[d]||u[d]||c;return n?r.a.createElement(j,i(i({ref:t},b),{},{components:n})):r.a.createElement(j,i({ref:t},b))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<c;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(3),r=(n(0),n(133));const c={id:"rj_object",title:"RjObject",sidebar_label:"RjObject",slug:"/rj-object"},o={unversionedId:"rj_object",id:"rj_object",isDocsHomePage:!1,title:"RjObject",description:"RjObject is the base type of RocketJump it's the container that represent a piece",source:"@site/docs/rj_object.md",slug:"/rj-object",permalink:"/react-rocketjump/docs/next/rj-object",editUrl:"https://github.com/inmagik/react-rocketjump/edit/master/website/docs/rj_object.md",version:"current",sidebar_label:"RjObject",sidebar:"someSidebar",previous:{title:"Quick Start",permalink:"/react-rocketjump/docs/next/quick-start"},next:{title:"Reducer",permalink:"/react-rocketjump/docs/next/reducer"}},i=[{value:"Create",id:"create",children:[]},{value:"Consuming",id:"consuming",children:[]},{value:"Default state",id:"default-state",children:[]},{value:"Default action creators",id:"default-action-creators",children:[]},{value:"React example",id:"react-example",children:[]}],l={toc:i};function b({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"RjObject is the base type of RocketJump it's the ",Object(r.b)("strong",{parentName:"p"},"container"),' that represent a piece\nof your "data source logic".'),Object(r.b)("p",null,"Concretely an RjObject contains:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An internal state described by his ",Object(r.b)("a",{parentName:"li",href:"/react-rocketjump/docs/next/reducer"},"reducer"),"."),Object(r.b)("li",{parentName:"ul"},"A proxy between the internal state and the ",Object(r.b)("a",{parentName:"li",href:"/react-rocketjump/docs/next/computed-state-and-selectors"},"computed state")," used by consumers."),Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("a",{parentName:"li",href:"/react-rocketjump/docs/next/side-effects"},"side effect(s)")," in form of Observables."),Object(r.b)("li",{parentName:"ul"},"A set of ",Object(r.b)("a",{parentName:"li",href:"/react-rocketjump/docs/next/action-creators"},"action creators")," functions that triggers side effects and/or state updates."),Object(r.b)("li",{parentName:"ul"},"An optional friendly name used for ",Object(r.b)("a",{parentName:"li",href:"/react-rocketjump/docs/next/logger"},"debug purpose"),".")),Object(r.b)("h2",{id:"create"},"Create"),Object(r.b)("p",null,"You can create RjObjects using the ",Object(r.b)("inlineCode",{parentName:"p"},"rj()")," function.\nThe only mandatory input to create an RjObject\nis an ",Object(r.b)("strong",{parentName:"p"},"effect")," function of type: ",Object(r.b)("inlineCode",{parentName:"p"},"(...args) => Promise | Observable"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { rj } from 'react-rocketjump'\n\nconst MyObj = rj(() => Promise.resolve('Hello Rj!'))\n// is equivalent to:\nconst MyObj = rj({\n  effect: () => Promise.resolve('Hello Rj!'),\n})\n")),Object(r.b)("h2",{id:"consuming"},"Consuming"),Object(r.b)("p",null,"When consuming an RjObject from React hooks or HOCs you receive from them\nsome ",Object(r.b)("strong",{parentName:"p"},"state")," and ",Object(r.b)("strong",{parentName:"p"},"action creators"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { useRj } from 'react-rocketjump'\n\nconst [state, actions] = useRj(MyObj)\n")),Object(r.b)("h2",{id:"default-state"},"Default state"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"rj()")," defaults are designed to store the last effect results\nalong with some meta information and give to consumers a state with this shape:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"{\n  data: any,\n  pending: boolean,\n  error: any\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"data"),": The last effect result, ",Object(r.b)("inlineCode",{parentName:"li"},"null")," on start."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pending"),": A flag that indicates if your effect is in flying."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"error"),": The eventually effect error, ",Object(r.b)("inlineCode",{parentName:"li"},"null")," on start.")),Object(r.b)("h2",{id:"default-action-creators"},"Default action creators"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"rj()")," defaults action creators are designed to work with the default state and\ngiven effect and are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"run(...args: any[])"),": trigger effect, ",Object(r.b)("inlineCode",{parentName:"li"},"...args")," are passed as effect inputs,\nset ",Object(r.b)("inlineCode",{parentName:"li"},"pending")," to ",Object(r.b)("inlineCode",{parentName:"li"},"true")," and ",Object(r.b)("inlineCode",{parentName:"li"},"error")," to ",Object(r.b)("inlineCode",{parentName:"li"},"null"),","),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cancel()"),": cancel effect execution, set ",Object(r.b)("inlineCode",{parentName:"li"},"pending")," to ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"clean()"),": cancel effect execution, set ",Object(r.b)("inlineCode",{parentName:"li"},"pending")," to ",Object(r.b)("inlineCode",{parentName:"li"},"false"),", ",Object(r.b)("inlineCode",{parentName:"li"},"data")," and ",Object(r.b)("inlineCode",{parentName:"li"},"error"),"  to ",Object(r.b)("inlineCode",{parentName:"li"},"null"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"updateData(newData)"),": set the ",Object(r.b)("inlineCode",{parentName:"li"},"data")," value to ",Object(r.b)("inlineCode",{parentName:"li"},"newData"),".")),Object(r.b)("h2",{id:"react-example"},"React example"),Object(r.b)("p",null,"This is a complete example using the concept exposed above:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import { useEffect } from 'react'\nimport { rj, useRj } from 'react-rocketjump'\n\nconst UserState = rj({\n  effect: (id) => fetch(`/api/user/${id}`).then((r) => r.json()),\n})\n\nfunction UserCard({ id }) {\n  const [{ data, pending, error }, { run, clean }] = useRj(HelloState)\n\n  useEffect(() => {\n    run(id)\n    return clean\n  }, [run, clean, id])\n\n  return <div>{data && <h1>Hello {user.name}</h1>}</div>\n}\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Returning clean in ",Object(r.b)("inlineCode",{parentName:"p"},"useEffect")," is only needed if you want to clear ",Object(r.b)("inlineCode",{parentName:"p"},"data")," value\nwhen ",Object(r.b)("inlineCode",{parentName:"p"},"id")," changes.\nThe reason isn't to avoid setting state on unmounted component.\n",Object(r.b)("strong",{parentName:"p"},"ALL")," effect are guarantee to be canceld when component unmount."))),Object(r.b)("p",null,"You can write it in a more concise way using the ",Object(r.b)("inlineCode",{parentName:"p"},"useRunRj")," hook instead of ",Object(r.b)("inlineCode",{parentName:"p"},"useRj"),",\nlearn more on ",Object(r.b)("a",{parentName:"p",href:"/react-rocketjump/docs/next/consume-rj-objects"},"how to cunsume RjObjects"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import { rj, useRunRj } from 'react-rocketjump'\n\nconst UserState = rj({\n  effect: (id) => fetch(`/api/user/${id}`).then((r) => r.json()),\n})\n\nfunction UserCard({ id }) {\n  const [{ data, pending, error }] = useRunRj(HelloState, [id])\n\n  return <div>{data && <h1>Hello {user.name}</h1>}</div>\n}\n")))}b.isMDXComponent=!0}}]);