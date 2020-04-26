import preval from 'babel-plugin-preval/macro'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import React, { Suspense } from 'react'

const examples = preval`
  const fs = require('fs');
  module.exports = fs.readdirSync(__dirname + '/pages').filter(item => item[0] !== '.');
`
const lazyExamples = examples.map((example) =>
  React.lazy(() => import(`./pages/${example}`))
)

const BackButton = () => (
  <div className="__back-btn">
    <Link to="/">{'<- Back 2 examples'}</Link>
  </div>
)

function ListExamples() {
  return (
    <div>
      <h1>RJ examples</h1>~
      <ul>
        {examples.map((example, i) => (
          <li key={i}>
            <Link to={`/examples/${example}`}>{example}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ExamplePage(props) {
  const { example } = props.match.params

  const index = examples.indexOf(example)

  if (index === -1) {
    return null
  }

  const ExampleComponent = lazyExamples[index]

  return (
    <>
      <BackButton />
      <ExampleComponent {...props} />
    </>
  )
}

export default function App() {
  return (
    // <React.StrictMode>
    <Router>
      <Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <Route exact path="/" component={ListExamples} />
          <Route path="/examples/:example" component={ExamplePage} />
        </Switch>
      </Suspense>
    </Router>
    // </React.StrictMode>
  )
}
