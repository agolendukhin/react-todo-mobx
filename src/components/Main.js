import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import Header from './Header'
import VisibleTodoList from './VisibleTodoList'
import Footer from './Footer'
import { todosStore } from '../store'

const Main = props => {
  const { user } = props
  const { todos, activeTodosCount } = todosStore

  useEffect(() => {
    todosStore.userId = user.uid
    todosStore.fetch()
  }, [])

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

export default observer(Main)
