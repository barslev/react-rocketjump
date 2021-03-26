(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),o=(a(0),a(125));const i={id:"usage_actions",title:"Working with actions",sidebar_label:"Working with actions",slug:"/usage-actions"},r={unversionedId:"usage_actions",id:"version-2.x/usage_actions",isDocsHomePage:!1,title:"Working with actions",description:"Once you have connected your component with a RocketJump Object, you have some actions bound to your props. There are two ways to trigger these actions you can select the best one any time you need to make a call.",source:"@site/versioned_docs/version-2.x/usage_actions.md",slug:"/usage-actions",permalink:"/react-rocketjump/docs/usage-actions",editUrl:"https://github.com/inmagik/react-rocketjump/edit/master/website/versioned_docs/version-2.x/usage_actions.md",version:"2.x",sidebar_label:"Working with actions",sidebar:"version-2.x/someSidebar",previous:{title:"Working with state",permalink:"/react-rocketjump/docs/usage-state"},next:{title:"Plugins",permalink:"/react-rocketjump/docs/plugins"}},c=[{value:"Available actions",id:"available-actions",children:[]},{value:"Quicker way: direct invocation",id:"quicker-way-direct-invocation",children:[]},{value:"Rich way: using the Builder",id:"rich-way-using-the-builder",children:[{value:"withMeta(function)",id:"withmetafunction",children:[]},{value:"withMeta(object)",id:"withmetaobject",children:[]},{value:"onSuccess",id:"onsuccess",children:[]},{value:"onFailure",id:"onfailure",children:[]},{value:"run",id:"run",children:[]},{value:"asPromise",id:"aspromise",children:[]}]}],l={toc:c};function s({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Once you have ",Object(o.b)("a",{parentName:"p",href:"/react-rocketjump/docs/connect-generalities"},"connected your component with a RocketJump Object"),", you have some actions bound to your props. There are two ways to trigger these actions: the ",Object(o.b)("em",{parentName:"p"},"quicker")," way and the ",Object(o.b)("em",{parentName:"p"},"rich")," way. The ",Object(o.b)("em",{parentName:"p"},"quicker")," way is, ehm, quicker, but allows bare minimal configuration, while the ",Object(o.b)("em",{parentName:"p"},"rich")," way is more verbose but allows to exploit the full power of React-RocketJump. Whether to use the former or the latter is a matter of need, each specific case may fit better with one or the other. However, you don't have to stick with an approach: you can select the best one any time you need to make a call."),Object(o.b)("h2",{id:"available-actions"},"Available actions"),Object(o.b)("p",null,"By default, the library exposes the following actions in the action bag"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"ActionBag.run           // triggers a new run of the effect\nActionBag.clean         // stops any pending run and resets the state to its original value\nActionBag.cancel        // stops any pending run\nActionBag.updateData    // writes in the `data` property of the state the passed argument\n")),Object(o.b)("p",null,"You can customize or add actions by means of the ",Object(o.b)("em",{parentName:"p"},"actions")," configuration property (or you can include a RocketJump partials that defines the ",Object(o.b)("em",{parentName:"p"},"action")," configuration property)"),Object(o.b)("p",null,"The way you can access the action bag depends on the connection mechanism:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"when using a HOC, the action bag is spread among properties"),Object(o.b)("li",{parentName:"ul"},"when using a HOOK, the action bag is returned as a plain object")),Object(o.b)("p",null,"To avoid name clashes in HOC mode, you can pass to the connection a ",Object(o.b)("inlineCode",{parentName:"p"},"mapActionsToProps")," function with the following signature"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"(actions: Object) => Object\n")),Object(o.b)("p",null,"This allows you to extract interesting actions from the action bag in object form and to rename them as you wish. The output of the function is spread among properties as the action bag. If you don't provide any function, the default action bag is spread."),Object(o.b)("h2",{id:"quicker-way-direct-invocation"},"Quicker way: direct invocation"),Object(o.b)("p",null,"Action properties are functions that can be directly invoked. Let's suppose we imported the ",Object(o.b)("inlineCode",{parentName:"p"},"run")," action under the ",Object(o.b)("inlineCode",{parentName:"p"},"loadData")," name. The quick invocation consists of"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"loadData(arg1, arg2, arg3, ...)\n")),Object(o.b)("p",null,"This invocation triggers the dispatching of the action to the state, and, in case it is a side-effect action, to the side-effect management logic."),Object(o.b)("p",null,"In case of a ",Object(o.b)("inlineCode",{parentName:"p"},"run")," action, the params you pass in during the call are sent to the ",Object(o.b)("inlineCode",{parentName:"p"},"effect")," function of the RocketJump, and hence a new task is spawned with them. ",Object(o.b)("strong",{parentName:"p"},"Beware")," that plugins can modify the way params are sent to the ",Object(o.b)("inlineCode",{parentName:"p"},"effect")," function, so refer to their documentation."),Object(o.b)("p",null,"In case of a ",Object(o.b)("inlineCode",{parentName:"p"},"clean")," action, the params are ignored, except for the case some plugin does some magic on them. Again, refer to plugin documentation."),Object(o.b)("p",null,"In case of user-defined actions, it is up to the user to know what to do with the params"),Object(o.b)("h2",{id:"rich-way-using-the-builder"},"Rich way: using the Builder"),Object(o.b)("p",null,"Each action comes with a builder, which allows to set a bunch of properties on the action that will be sent to the store. Let's take again our ",Object(o.b)("inlineCode",{parentName:"p"},"run")," action imported with the name ",Object(o.b)("inlineCode",{parentName:"p"},"loadData"),". The methods exposed on the action by the builder are"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"\nBuilder builder = loadData.withMeta(object)\nBuilder builder = loadData.withMeta(oldMeta => newMeta)\nBuilder builder = loadData.onSuccess(callback)\nBuilder builder = loadData.onError(callback)\nBuilder builder = loadData.asPromise(...args)\n")),Object(o.b)("p",null,"Each of these methods instantiates a new Builder to be used for the ",Object(o.b)("em",{parentName:"p"},"rich")," call, and calls the omonimous method on the created builder (so avoiding an explicit call to instantiate the builder)."),Object(o.b)("p",null,"The methods exposed by the builder object are"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"builder.withMeta(object)\nbuilder.withMeta(oldMeta => newMeta)\nbuilder.onSuccess(callback)\nbuilder.onError(callback)\nbuilder.run(...args)\nbuilder.asPromise(...args)\n")),Object(o.b)("p",null,"First of all, builder methods are designed to be chainable, hence probably you'll never create a ",Object(o.b)("inlineCode",{parentName:"p"},"builder")," variable in your code, but you'd end up writing something like"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"loadData\n  .withMeta({ id: 42 })\n  .onSuccess(data => console.log(data))\n  .onError(err => console.warn(err))\n  .run()\n")),Object(o.b)("p",null,"Now, let's go describing the methods of the builder"),Object(o.b)("h3",{id:"withmetafunction"},"withMeta(function)"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"builder.withMeta(oldMeta => newMeta)")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"withMeta")," builder method allows to add a transform on metadata attached to the action. The transform is encoded as a function that receives the old metadata object (a JavaScript plain object) and is required to return the next metadata object (again, as a plain JavaScript object). This method can be used to add some metadata, to change some of them, or even to delete some keys (even if you should do it with care). Calling ",Object(o.b)("inlineCode",{parentName:"p"},"withMeta")," multiple times simply chains all the transformation, such that the output of the first is the input of the second and so on, the metadata object attached to the action will be the output of the last transform."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("p",null,"This call exposes the ",Object(o.b)("inlineCode",{parentName:"p"},"key")," meta data under the ",Object(o.b)("inlineCode",{parentName:"p"},"id")," property"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"builder.withMeta(prevMeta => { ...prevMeta, id: prevMeta.key })\n")),Object(o.b)("h3",{id:"withmetaobject"},"withMeta(object)"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"builder.withMeta(object)")),Object(o.b)("p",null,"This is equivalent to ",Object(o.b)("inlineCode",{parentName:"p"},"builder.withMeta(prevMeta => { ...prevMeta, ...object })"),", it can be useful as a quick and lightweight way to add some keys to the metadata object"),Object(o.b)("h3",{id:"onsuccess"},"onSuccess"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"builder.onSuccess(callback)")),Object(o.b)("p",null,"This method allows to attach a callback to be invoked when the asynchronous task completes without errors. The callback is not invoked in case the task it is attached to is canceled (remember ",Object(o.b)("a",{parentName:"p",href:"/react-rocketjump/docs/api-rj"},"takeEffect"),"?). Calling this method multiple times on the same builder causes the callback to be overwritten: the callback attached to the action is the argument of the last invocation of this method"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("p",null,"Triggering an alert when an action completes"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"builder.onSuccess(data => alert(data[0].name))\n")),Object(o.b)("h3",{id:"onfailure"},"onFailure"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"builder.onFailure(callback)")),Object(o.b)("p",null,"This method allows to attach a callback to be invoked when the asynchronous task completes with errors. The callback is not invoked in case the task it is attached to is canceled (remember ",Object(o.b)("a",{parentName:"p",href:"/react-rocketjump/docs/api-rj"},"takeEffect"),"?). Calling this method multiple times on the same builder causes the callback to be overwritten: the callback attached to the action to handle failures is the argument of the last invocation of this method"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("p",null,"Triggering an alert when an action completes"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"builder.onFailure(data => alert(data[0].name))\n")),Object(o.b)("h3",{id:"run"},"run"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"builder.run(...args)")),Object(o.b)("p",null,"This method closes the builder and dispatches the action with the passed in ",Object(o.b)("inlineCode",{parentName:"p"},"...args")," as params and the configuration defined with the other methods. This method must be the last invocation on a builder, no further configuration will be taken into account after calling it."),Object(o.b)("h3",{id:"aspromise"},"asPromise"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"builder.asPromise(...args)")),Object(o.b)("p",null,"This method closes the builder and dispatches the action with the passed in ",Object(o.b)("inlineCode",{parentName:"p"},"...args")," as params and the configuration defined with the other methods. This method must be the last invocation on a builder, no further configuration will be taken into account after calling it. The return value of this method is no more a ",Object(o.b)("inlineCode",{parentName:"p"},"Builder")," instance, but a ",Object(o.b)("inlineCode",{parentName:"p"},"Promise"),"."),Object(o.b)("p",null,"If you set callbacks with ",Object(o.b)("inlineCode",{parentName:"p"},"builder.onSuccess")," or ",Object(o.b)("inlineCode",{parentName:"p"},"builder.onFailure"),", they will be invoked properly before the Promise completes (either resolving or rejecting)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("p",null,"Returning a Promise from an action"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"builder\n  .asPromise(1, 'admin')\n  .then(() => {\n    console.log('success')\n  })\n  .catch(() => {\n    console.log('failure')\n  })\n")))}s.isMDXComponent=!0},125:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,h=u["".concat(r,".").concat(d)]||u[d]||p[d]||i;return a?o.a.createElement(h,c(c({ref:t},s),{},{components:a})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var s=2;s<i;s++)r[s]=a[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);