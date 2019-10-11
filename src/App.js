import React from 'react'
import { observer } from 'mobx-react'
import Header from './components/Header'
import VisibleTodoList from './components/VisibleTodoList'
import Footer from './components/Footer'
import { todosStore } from './store'

const App = () => {
  const { todos, activeTodosCount } = todosStore

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
        display={!!todosCount}
      />
    </section>
  )
}

export default observer(App)
