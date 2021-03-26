(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{125:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||r;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(125)),i={id:"quickstart",title:"Quick Start",sidebar_label:"Quick Start",slug:"/quickstart"},c={unversionedId:"quickstart",id:"version-2.x/quickstart",isDocsHomePage:!1,title:"Quick Start",description:"Ok, let's put our hands on! In this short tutorial, we'll write a simple todo list app using React-Rocketjump.",source:"@site/versioned_docs/version-2.x/quickstart.md",slug:"/quickstart",permalink:"/react-rocketjump/docs/quickstart",editUrl:"https://github.com/inmagik/react-rocketjump/edit/master/website/versioned_docs/version-2.x/quickstart.md",version:"2.x",sidebar_label:"Quick Start",sidebar:"version-2.x/someSidebar",previous:{title:"Installation",permalink:"/react-rocketjump/docs/installation"},next:{title:"General concepts",permalink:"/react-rocketjump/docs/concepts"}},s=[{value:"Creating the rocketjump object",id:"creating-the-rocketjump-object",children:[]},{value:"Creating the React component",id:"creating-the-react-component",children:[]},{value:"Empowering our component with RocketJump",id:"empowering-our-component-with-rocketjump",children:[]},{value:"Well done",id:"well-done",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Ok, let's put our hands on! In this short tutorial, we'll write a simple todo list app using React-Rocketjump."),Object(r.b)("p",null,"Before we can start, be sure to have setup a React project with React-Rocketjump ",Object(r.b)("a",{parentName:"p",href:"/react-rocketjump/docs/installation"},"installed")),Object(r.b)("h2",{id:"creating-the-rocketjump-object"},"Creating the rocketjump object"),Object(r.b)("p",null,"Create a new file ",Object(r.b)("inlineCode",{parentName:"p"},"state/index.js"),", and put the following content"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { rj } from 'react-rocketjump'\nimport rjPlainList from 'react-rocketjump/plugins/plainList'\n\nfunction makeAsyncCall() {\n    return new Promise(resolve => {\n        window.setTimeout(() => {\n            resolve([\n                { id: 1, caption: 'Create an async task', completed: true },\n                { id: 2, caption: 'Make a rocketjump object', completed: true},\n                { id: 3, caption: 'Connect the rocketjump object with your React component', completed: false },\n                { id: 4, caption: 'Have fun with todos!', completed: false }\n            ])\n        }, Math.random() * 1000 + 500)\n    })\n}\n\nexport const TodosListState = rj(\n  rjPlainList(),\n  {\n    effect: makeAsyncCall\n  }\n)\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"What did we do?")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { rj } from 'react-rocketjump'\n")),Object(r.b)("p",null,"is importing the React-Rocketjump constructor in out file"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import rjPlainList from 'react-rocketjump/plugins/plainList'\n")),Object(r.b)("p",null,"is importing a plugin for managing lists"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"function makeAsyncCall() {\n    return new Promise(resolve => {\n        window.setTimeout(() => {\n            resolve([\n                { id: 1, caption: 'Create an async task', completed: true },\n                { id: 2, caption: 'Make a rocketjump object', completed: true},\n                { id: 3, caption: 'Connect the rocketjump object with your React component', completed: false },\n                { id: 4, caption: 'Have fun with todos!', completed: false }\n            ])\n        }, Math.random() * 1000 + 500)\n    })\n}\n")),Object(r.b)("p",null,"is the definition of the async task we want our rocketjump to manage. In this example we use a fake API, but since all is wrapped up in a ",Object(r.b)("inlineCode",{parentName:"p"},"Promise")," you can easily swap your own API in"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"export const TodosListState = rj(\n  rjPlainList(),\n  {\n    effect: makeAsyncCall\n  }\n)\n")),Object(r.b)("p",null,"is creating (and exporting) our RocketJump object, which is composed by the integration of the plain list plugin we imported beforehand and a custom configuration, where we simply describe the effect to wrap"),Object(r.b)("h2",{id:"creating-the-react-component"},"Creating the React component"),Object(r.b)("p",null,"Now we need a component capable of displaying todos. Create a ",Object(r.b)("inlineCode",{parentName:"p"},"Todos.js")," file with the following content"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react'\n\nconst Todo = ({ todo }) => (\n  <div>\n    <div style={{ display: 'flex' }}>\n      <div className='todo-circle'>{todo.done ? '\u221a' : ''}</div>\n      <div className='todo-title'>{todo.title}</div>\n    </div>\n  </div>\n)\n\nclass Todos extends Component {\n  render() {\n    const { todos } = this.props\n    return (\n      <div className='todos'>\n        <div className='todo-list'>\n          {todos && todos.map(todo => (\n            <Todo\n              key={todo.id}\n              todo={todo}\n            />\n          ))}\n        </div>\n      </div>\n    )\n  }\n}\n")),Object(r.b)("h2",{id:"empowering-our-component-with-rocketjump"},"Empowering our component with RocketJump"),Object(r.b)("p",null,"The last thing we need to do is to endow our component with the superpowers of the RocketJump we created beforehand. Note that before we did not create a state object, but a rocketjump definition. The concrete state will be created when our definition is attached to a component."),Object(r.b)("p",null,"So, start by importing our rocketjump definition and the connection utility provided by React-Rocketjump, by adding these lines at the top of the component file, just below the React import statement"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { connectRj } from 'react-rocketjump'\nimport { TodosListState } from '../state'\n")),Object(r.b)("p",null,"Then, at the end of this file, create the connection (and export the connected component)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"export default connectRj(\n  TodosListState,\n  (state, { getList }) => ({\n    todos: getList(state),\n  }),\n  ({ run, clean }) => ({\n    loadTodos: run,\n    unloadTodos: clean,\n  })\n)(Todos)\n\n")),Object(r.b)("p",null,"Redux users will find this construct familiar, since it behaves more or less like the ",Object(r.b)("inlineCode",{parentName:"p"},"connect")," primitive that ships with React-Redux."),Object(r.b)("p",null,"With this statement, we are telling React-RocketJump to build a state object starting from ",Object(r.b)("inlineCode",{parentName:"p"},"TodosListState")," definition we imported."),Object(r.b)("p",null,"The second parameter is a function called ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps"),", whose parameters are the state object and a bunch of selectors used to extract meaningful information from it. In this case, we want the list contained in the state, so we leverage the ",Object(r.b)("inlineCode",{parentName:"p"},"getList")," selector, but there are a bunch of them. If you are curious, head on to the API description."),Object(r.b)("p",null,"The last but not least parameter is another function called ",Object(r.b)("inlineCode",{parentName:"p"},"mapDispatchToProps"),". In this function, we are deciding which action creator import in our component and under which name. In our example, we import the ",Object(r.b)("inlineCode",{parentName:"p"},"run")," action under the name ",Object(r.b)("inlineCode",{parentName:"p"},"loadTodos")," and the ",Object(r.b)("inlineCode",{parentName:"p"},"clean")," action under the name ",Object(r.b)("inlineCode",{parentName:"p"},"unloadTodos"),". ",Object(r.b)("inlineCode",{parentName:"p"},"run")," and ",Object(r.b)("inlineCode",{parentName:"p"},"clean")," are actions generated by the library, while ",Object(r.b)("inlineCode",{parentName:"p"},"loadTodos")," and ",Object(r.b)("inlineCode",{parentName:"p"},"unloadTodos")," are custom names. Action creators are just functions which trigger some behaviour from React-RocketJump: the ",Object(r.b)("inlineCode",{parentName:"p"},"run")," action triggers a side effect execution, while the ",Object(r.b)("inlineCode",{parentName:"p"},"clean")," action stops any pending execution and resets the state to the initial (empty) value."),Object(r.b)("p",null,"The last tile needed to complete our mosaic is to use the props we defined in the Todos component. So, let's enrich it a little bit"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react'\n\nconst Todo = ({ todo }) => (\n  <div>\n    <div style={{ display: 'flex' }}>\n      <div className='todo-circle'>{todo.done ? '\u221a' : ''}</div>\n      <div className='todo-title'>{todo.title}</div>\n    </div>\n  </div>\n)\n\nclass Todos extends Component {\n\n  componentDidMount() {\n     this.props.loadTodos(); // Trigger the side effect when the component mounts\n  }\n\n  render() {\n    const { todos } = this.props // Receive our todos in rendering function\n    return (\n      <div className='todos'>\n        <div className='todo-list'>\n          {todos && todos.map(todo => (\n            <Todo\n              key={todo.id}\n              todo={todo}\n            />\n          ))}\n        </div>\n      </div>\n    )\n  }\n}\n")),Object(r.b)("h2",{id:"well-done"},"Well done"),Object(r.b)("p",null,"This is the starting point, React-RocketJump can do much more for you. Now you are ready to head on to the API documentation section to learn all the details to this rocket library! But first, some words on general concepts and best practices."))}p.isMDXComponent=!0}}]);