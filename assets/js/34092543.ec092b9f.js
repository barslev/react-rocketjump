(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=a,d=l["".concat(i,".").concat(m)]||l[m]||b[m]||o;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=(n(0),n(124));const o={id:"usage_state",title:"Working with state",sidebar_label:"Working with state",slug:"/usage-state"},i={unversionedId:"usage_state",id:"version-2.x/usage_state",isDocsHomePage:!1,title:"Working with state",description:"When you connect a RocketJump Object into a React Component, you get back two things: state and actions.",source:"@site/versioned_docs/version-2.x/usage_state.md",slug:"/usage-state",permalink:"/react-rocketjump/docs/usage-state",editUrl:"https://github.com/inmagik/react-rocketjump/edit/master/website/versioned_docs/version-2.x/usage_state.md",version:"2.x",sidebar_label:"Working with state",sidebar:"version-2.x/someSidebar",previous:{title:"connectRj",permalink:"/react-rocketjump/docs/connect-connectrj"},next:{title:"Working with actions",permalink:"/react-rocketjump/docs/usage-actions"}},c=[{value:"Customizing the reducer",id:"customizing-the-reducer",children:[]},{value:"Defining computed properties",id:"defining-computed-properties",children:[]},{value:"Using the mapStateToProps function",id:"using-the-mapstatetoprops-function",children:[]},{value:"Sum up",id:"sum-up",children:[]}],s={toc:c};function p({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"When you connect a RocketJump Object into a React Component, you get back two things: ",Object(r.b)("inlineCode",{parentName:"p"},"state")," and ",Object(r.b)("inlineCode",{parentName:"p"},"actions"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"state")," is a state object managed by React RocketJump according to the effect you defined and the runs you triggered. You may access state in two ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"it might be returned as an object by a hook"),Object(r.b)("li",{parentName:"ul"},"it might be spread into properties by a hoc")),Object(r.b)("p",null,"In both cases, what really matters is the shape of this state object."),Object(r.b)("p",null,"The base state shape is the following:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"{\n    data: any,          // Resolved value of the last (successful) execution - initially NULL\n    error: any,         // Rejected error of the last (errorful) execution - initially NULL\n    pending: false      // Flag stating if some run has yet to complete\n}\n")),Object(r.b)("p",null,"There are various ways to transform the state shape before injecting it into a component"),Object(r.b)("h2",{id:"customizing-the-reducer"},"Customizing the reducer"),Object(r.b)("p",null,"When creating a RocketJump Object you may set the ",Object(r.b)("em",{parentName:"p"},"reducer")," configuration option (or import a RocketJump Partial that defines it) to a reducer which shapes the state in a different way. You have to take into account the final state shape returned by your reducer in this case"),Object(r.b)("p",null,"Usually, if you customize the reducer, you will probably want to setup ad-hoc actions and selectors to work with it, since probably the default actions and values won't fit your shape if it is very different from the default"),Object(r.b)("h2",{id:"defining-computed-properties"},"Defining computed properties"),Object(r.b)("p",null,"When creating a RocketJump Object you may set the ",Object(r.b)("em",{parentName:"p"},"computed")," configuration option (or import a RocketJump Partial that defines it). In this case, the state shape is that of the shadow state created with computed properties."),Object(r.b)("h2",{id:"using-the-mapstatetoprops-function"},"Using the mapStateToProps function"),Object(r.b)("p",null,"When connecting a RocketJump Object to a component, you always have available a ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," parameter, which allows you to pass a function. The signature of this function is"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"(state: Object, selectorBag: Object, computedState: Object) => state: Object\n")),Object(r.b)("p",null,"Differently from the previous options, this is a runtime (and not define-time) state transform function. Its parameters are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the state object, as shaped by the ",Object(r.b)("em",{parentName:"li"},"reducer")),Object(r.b)("li",{parentName:"ul"},"the selector bag created during the definition of the RocketJump Object"),Object(r.b)("li",{parentName:"ul"},"the shadow state computed using ",Object(r.b)("em",{parentName:"li"},"computed")," configuration properties")),Object(r.b)("p",null,"In this function hence you have all the elements to create a component-targeted state shape, as you can:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"directly expose state properties even if shadow state is defined"),Object(r.b)("li",{parentName:"ul"},"apply selectors on state"),Object(r.b)("li",{parentName:"ul"},"apply custom selectors on shadow state"),Object(r.b)("li",{parentName:"ul"},"rename properties"),Object(r.b)("li",{parentName:"ul"},"...")),Object(r.b)("h2",{id:"sum-up"},"Sum up"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The base state shape is defined by the ",Object(r.b)("em",{parentName:"li"},"reducer")," property at definition time"),Object(r.b)("li",{parentName:"ol"},"At instantiation time, the base state is generated with the ",Object(r.b)("em",{parentName:"li"},"reducer")),Object(r.b)("li",{parentName:"ol"},"If the ",Object(r.b)("em",{parentName:"li"},"computed")," configuration propery is set, the ",Object(r.b)("em",{parentName:"li"},"shadow")," state is generated accordingly starting from the base state"),Object(r.b)("li",{parentName:"ol"},"If no ",Object(r.b)("em",{parentName:"li"},"mapStateToProps")," is provided",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"If a shadow state is defined, it is returned as ",Object(r.b)("inlineCode",{parentName:"li"},"state")," from the connection mechanism"),Object(r.b)("li",{parentName:"ol"},"otherwise, the base state is returned"))),Object(r.b)("li",{parentName:"ol"},"If a ",Object(r.b)("em",{parentName:"li"},"mapStateToProps")," function is defined, it is invoked and its output is returned as ",Object(r.b)("inlineCode",{parentName:"li"},"state")),Object(r.b)("li",{parentName:"ol"},"The way you access ",Object(r.b)("inlineCode",{parentName:"li"},"state")," depends on the connection mechanism",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"When using a HOC, state is spread among properties"),Object(r.b)("li",{parentName:"ul"},"When using a HOOK, state is returned as a plain object (you can access props or spread it, as you prefer)")))))}p.isMDXComponent=!0}}]);