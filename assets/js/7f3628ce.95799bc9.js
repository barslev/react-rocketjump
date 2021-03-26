(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(7),a=(t(0),t(125)),o={id:"builder_mode",title:"Builder Mode",sidebar_label:"Builder Mode",slug:"/builder-mode"},c={unversionedId:"builder_mode",id:"builder_mode",isDocsHomePage:!1,title:"Builder Mode",description:"Motivation",source:"@site/docs/builder_mode.md",slug:"/builder-mode",permalink:"/react-rocketjump/docs/next/builder-mode",editUrl:"https://github.com/inmagik/react-rocketjump/edit/master/website/docs/builder_mode.md",version:"current",sidebar_label:"Builder Mode",sidebar:"someSidebar",previous:{title:"Plugin System",permalink:"/react-rocketjump/docs/next/plugin-system"},next:{title:"Logger",permalink:"/react-rocketjump/docs/next/logger"}},l=[{value:"Motivation",id:"motivation",children:[]},{value:"Use builder mode",id:"use-builder-mode",children:[{value:"rj builder mode",id:"rj-builder-mode",children:[]},{value:"rj plugin builder mode",id:"rj-plugin-builder-mode",children:[]}]},{value:"Final considerations",id:"final-considerations",children:[]}],s={toc:l};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"motivation"},"Motivation"),Object(a.b)("p",null,"The main point of v3 is the ability to inferring the type of ",Object(a.b)("inlineCode",{parentName:"p"},"RjObject")," by your\nconfiguration and plugins."),Object(a.b)("p",null,"When using the standard rj constructor ",Object(a.b)("inlineCode",{parentName:"p"},"rj(...plugins, config)")," some stuff can't be\ninfered Es.. (the type of state in selectors) to avoid bad types in some situation\nwe give up and we fallback to ",Object(a.b)("inlineCode",{parentName:"p"},"any"),"."),Object(a.b)("p",null,"We expected that in future version of Typescript we can improve the types experience."),Object(a.b)("p",null,"If your are interessed there is an open ",Object(a.b)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/41396"},"issue"),"."),Object(a.b)("p",null,"Here at ",Object(a.b)("a",{parentName:"p",href:"https://inmagik.com"},"InMagik Labs")," we follow this mantra:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Mater artium necessitas")),Object(a.b)("p",null,"So to have the maxium from Typescript we introduce the Builder Mode!"),Object(a.b)("h2",{id:"use-builder-mode"},"Use builder mode"),Object(a.b)("p",null,"When you invoke ",Object(a.b)("inlineCode",{parentName:"p"},"rj()")," or ",Object(a.b)("inlineCode",{parentName:"p"},"rjPlugin()")," without parameters you enter the builder mode."),Object(a.b)("p",null,"Instead of providing big object of options you chain the same option as builder\nand when your are done call ",Object(a.b)("inlineCode",{parentName:"p"},".effect({ ... })")," on ",Object(a.b)("inlineCode",{parentName:"p"},"rj()")," to build an ",Object(a.b)("inlineCode",{parentName:"p"},"RjObject")," or\n",Object(a.b)("inlineCode",{parentName:"p"},".build()")," on ",Object(a.b)("inlineCode",{parentName:"p"},"rjPlugin()")," to build a plugin."),Object(a.b)("h3",{id:"rj-builder-mode"},"rj builder mode"),Object(a.b)("p",null,"When use the builder mode with ",Object(a.b)("inlineCode",{parentName:"p"},"rj")," you should a logic order to permit the\nlibrary to infer good types.",Object(a.b)("br",null),"\nFirst, if you need them, you can to specify ",Object(a.b)("inlineCode",{parentName:"p"},".plugins()"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"rj().plugins(p1, p2)\n")),Object(a.b)("p",null,"Then, if you need them , you can specify ",Object(a.b)("inlineCode",{parentName:"p"},".reducer()"),",\n",Object(a.b)("inlineCode",{parentName:"p"},".composeReducer()"),", ",Object(a.b)("inlineCode",{parentName:"p"},".combineReducers()")," and ",Object(a.b)("inlineCode",{parentName:"p"},".actions()"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"rj()\n  .reducer((oldReducer) => newReducer)\n  .composeReducer((state, action) => nextState)\n  .actions((prevActions) => ({\n    myAwesomeAction: () => {},\n  }))\n")),Object(a.b)("p",null,"At this point you can define ",Object(a.b)("inlineCode",{parentName:"p"},".mutations()"),".\nWhy now? Simple now RocketJump can infer the ",Object(a.b)("strong",{parentName:"p"},"REAL")," state in your updater\nfunction and suggest the string names infered from your previous ",Object(a.b)("inlineCode",{parentName:"p"},".actions()"),"\nconfigure and even from your plugins! I encourge you to try the following example\nin vscode:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"rj()\n  .actions(() => ({\n    bu: () => ({ type: 'BU' }),\n  }))\n  .reducer(() => () => 99)\n  .mutations({\n    myMutation: {\n      effect: () => Promise.reject(),\n      // number type is infered!\n      updater: (state) => state.toFixed(2),\n      // 'bu' type is suggest to you if you try insert a string!\n      updater: 'bu',\n    },\n  })\n")),Object(a.b)("p",null,"Ok, now you can provide ",Object(a.b)("inlineCode",{parentName:"p"},".selectors()")," and have the state infered by RocketJump."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"rj()\n  .combineReducers({\n    dragon: () => new Date(),\n  })\n  .mutations({\n    rejectAliens: {\n      effect: () => Promise.reject(),\n      updater: 'updateData',\n      reducer: () => ({ pending: true }),\n    },\n  })\n  .selectors(() => ({\n    // Oh yes baby state.dragon is infered as Date\n    getYearOfDragon: (state) => state.dragon.getFullYear(),\n    // ... And yes also mutations state is infered!\n    // state.mutations.rejectAliens.pending is boolean\n    isRejectingAliens: (state) => state.mutations.rejectAliens.pending,\n  }))\n")),Object(a.b)("p",null,"The last possible configuration before closing the builder is ",Object(a.b)("inlineCode",{parentName:"p"},".computed()"),".\n...And yes what you think is exact we can infer both selector names and\nthe final state!"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"rj()\n  .combineReducers({\n    dragon: () => new Date(),\n  })\n  .mutations({\n    rejectAliens: {\n      effect: () => Promise.reject(),\n      updater: 'updateData',\n      reducer: () => ({ pending: true }),\n    },\n  })\n  .selectors(() => ({\n    getYearOfDragon: (state) => state.dragon.getFullYear(),\n  }))\n  .computed({\n    // All merged selector are provided as union!\n    dragonYear: 'getYearOfDragon',\n    // ... Finally yes all the state with mutations is infered!\n    rejectingAliens: (state) => state.mutations.rejectAliens.pending,\n  })\n")),Object(a.b)("p",null,"Where at the end, to close builder inovke the ",Object(a.b)("inlineCode",{parentName:"p"},".effect()")," method and the\nRjObject is returned!"),Object(a.b)("p",null,"You call ",Object(a.b)("inlineCode",{parentName:"p"},".effect()")," with a function it's used as short cat as effect function:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const MyObj = rj().effect(() => Promise.resolve('XD'))\n// very close to\nconst MyObj = rj(() => Promise.resolve('XD'))\n")),Object(a.b)("p",null,"Otherwise you can provide all effect related property:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"{\n  effect: EffectFn,\n  takeEffect?: TakeEffects,\n  effectCaller?: RjEffectCaller,\n  effectPipeline?: RjEffectPipeliner,\n  addSideEffect?: TakeEffectHanlder,\n  name?: string,\n}\n")),Object(a.b)("h3",{id:"rj-plugin-builder-mode"},"rj plugin builder mode"),Object(a.b)("p",null,"All rules described for the rj builder also applied to the rj plugin builder.\nLogic, for plugin builder plugins rules are applied. So ",Object(a.b)("inlineCode",{parentName:"p"},".computed()")," and ",Object(a.b)("inlineCode",{parentName:"p"},".mutations()"),"\nmethods are not available.\nTo close ",Object(a.b)("inlineCode",{parentName:"p"},"rjPlugin")," builder and return an RjObject you should call the ",Object(a.b)("inlineCode",{parentName:"p"},".close()"),"\nmethod, (this is different from rj builder cause in plugin there are no required options)."),Object(a.b)("p",null,"An example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const p1 = rjPlugin()\n  .reducer((oldReducer) => (state, action) => {\n    /**  **/\n  })\n  .actions(() => ({\n    hello: () => ({ type: 'Hello' }),\n  }))\n  .combineReducers({\n    plus: () => 88,\n  })\n  .build()\n\n// ...\nconst MyObj = rj(p1, () => Promise.resolve(true))\n")),Object(a.b)("h2",{id:"final-considerations"},"Final considerations"),Object(a.b)("p",null,"The builder mode is not only useful to writing configrations the accurated types\ninfered in the configuration are also applied to the final ",Object(a.b)("inlineCode",{parentName:"p"},"RjObject"),"."),Object(a.b)("p",null,"The good news it's that, where is possible, this advantage works good even in plain\nJavaScrit environment."),Object(a.b)("p",null,"So using the example from previous sections:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const WeirdState = rj()\n  .combineReducers({\n    dragon: () => new Date(),\n  })\n  .mutations({\n    rejectAliens: {\n      effect: () => Promise.reject(),\n      updater: 'updateData',\n      reducer: () => ({ pending: true }),\n    },\n  })\n  .selectors(() => ({\n    getYearOfDragon: (state) => state.dragon.getFullYear(),\n  }))\n  .computed({\n    dragonYear: 'getYearOfDragon',\n    rejectingAliens: (state) => state.mutations.rejectAliens.pending,\n  })\n  .effect(() => Promise.reject())\n\nfunction Hello() {\n  const [\n    {\n      // type number is infered\n      dragonYear,\n      // type boolean is inferd\n      rejectingAliens,\n    },\n    {\n      // All special method such withMeta, onSuccess, ecc are infered\n      rejectAliens,\n    },\n  ] = useRunRj(WeirdState)\n}\n")))}u.isMDXComponent=!0},125:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),u=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||a;return t?i.a.createElement(m,c(c({ref:n},s),{},{components:t})):i.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);