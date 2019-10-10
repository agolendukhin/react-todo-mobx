import React, { useContext } from 'react'

import '../node_modules/todomvc-common/base.css'
import '../node_modules/todomvc-app-css/index.css'

import Header from './components/Header'
import VisibleTodoList from './components/VisibleTodoList'
import Footer from './components/Footer'
import { StoreContext } from './store/store'

const Main = () => {
  const { todosStore } = useContext(StoreContext)
  const { todos } = todosStore

  const activeTodosCount = todos.filter(todo => !todo.completed).length

  const handleToggleAllTodos = () => {
    const completed = activeTodosCount ? true : false
    todosStore.toggleAll(completed)
  }

  const todosCount = todos.length
  const completedTodosCount = todosCount - activeTodosCount

  return (
    <section className="todoapp">
      <Header />
      <section className="main">
        {todos.length ? (
          <React.Fragment>
            <input
              className="toggle-all"
              type="checkbox"
              checked={!activeTodosCount}
              onChange={() => {}}
            />
            <label onClick={handleToggleAllTodos} htmlFor="toggle-all" />
          </React.Fragment>
        ) : null}
        <VisibleTodoList />
      </section>
      <Footer
        activeTodosCount={activeTodosCount}
        completedTodosCount={completedTodosCount}
        display={!!todos.length}
      />
    </section>
  )
}

export default Main
