import React, { useState, Suspense } from 'react'
import Todo from './Todo'
// import { useRunRj } from 'react-rocketjump'
import {
  useRj,
  useLastRj,
  rjCache,
  useFreshRj,
  cacheStore,
  useRjActions,
} from 'react-rocketjump/plugins/cache/new'
import { API_URL, TodosListState } from './localstate'
import NewTodo from './NewTodo'
import './Todos.css'

const MemoTodos = React.memo(() => <Todos id="b" />)

export default function TodosApp() {
  const [toggle, setToggle] = useState(true)
  return (
    <div>
      <div style={{ marginTop: 30 }}>
        <button onClick={() => setToggle(a => !a)}>
          {toggle ? 'ON' : 'OFF'}
        </button>
      </div>
      {/* <Gang /> */}
      <Suspense fallback={<h1>LOADING ~TODOS~</h1>}>
        {toggle ? <Todos id={'A'} /> : <Gang />}
      </Suspense>
      {/* <MemoTodos id={'B'} /> */}
    </div>
  )
}

// b1.scheduleGC()

function Gang() {
  const [
    // Resolved state ...
    { todos, adding, deleting, updating, loading },
    { addStupidTodo, removeTodo, toggleTodo },
  ] = useRj(TodosListState, [''])

  return (
    <div>
      <h1>GANG</h1>

      <button
        onClick={() => {
          const b1 = cacheStore.buildBucket(TodosListState, [''])
          console.log(b1)
          // b1.actions.run
          //   .onSuccess(() => {
          //     console.log('Success!')
          //     // b1.scheduleGC()
          //   })
          //   .run()
          b1.clear()
        }}
      >
        CLEAR
      </button>
      {loading && (
        <div>
          Loading <b>Y</b> todos...
        </div>
      )}
      <div className="todo-list">
        {todos &&
          todos.map(todo => (
            <Todo
              saving={updating[todo.id] || deleting[todo.id]}
              onToggle={toggleTodo}
              onRemove={removeTodo}
              key={todo.id}
              todo={todo}
            />
          ))}
      </div>
    </div>
  )
}

function Todos({ id }) {
  const [count, setCount] = useState(0)
  const [search, setSearch] = useState('')
  const [
    { todos, loading, adding, deleting, updating },
    // { loading },
    // { addStupidTodo, removeTodo },
  ] = useRj(TodosListState, [search], {
    // runOnMount: true,
    suspense: true,
  })
  console.log('TODOS RENDER', todos, loading, id)

  const { toggleTodo, addStupidTodo, removeTodo } = useRjActions(
    TodosListState
    // '23'
  )

  // function
  // const [{ updating }, { toggleTodo }] = useRjMutations(TodosListState)

  // console.log('RENDER', todos)
  // cons
  // const s2 = useRj(TodosListState, [''])
  // const s3 = useRj(TodosListState)
  // console.log(s2)
  // const
  // useRj(TodosListState, [count])

  // console.log('RENDER', todos, loading, search)

  return (
    <div className="todos">
      <h1>Ma REST Todos</h1>
      {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <h3>
        <a href={`${API_URL}/todos`}>
          {API_URL}
          {'/todos'}
        </a>
      </h3>
      {loading && (
        <div>
          Loading <b>Y</b> todos...
        </div>
      )}
      {todos && (
        <NewTodo
          onSubmit={todo => {
            addStupidTodo
              .onSuccess((todo, cacheStore) => {
                console.log('Todo Added!', todo)
                cacheStore.invalidate(TodosListState)
              })
              .run(todo)
          }}
          adding={adding}
        />
      )}
      <div className="todo-list">
        {todos &&
          todos.map(todo => (
            <Todo
              saving={updating[todo.id] || deleting[todo.id]}
              onToggle={toggleTodo}
              onRemove={removeTodo}
              key={todo.id}
              todo={todo}
            />
          ))}
      </div>
    </div>
  )
}
