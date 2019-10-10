import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import { findKey } from 'lodash'
import Todo from './Todo'
import { StoreContext } from '../store/store'

const VisibleTodoList = () => {
  const {
    todosStore: { todos },
    filtersStore: { filters },
  } = useContext(StoreContext)

  const filter = findKey(filters, f => f)

  return (
    <ul className="todo-list">
      {todos.map((todo, i) => {
        if (filter === 'active' && todo.completed) return false
        if (filter === 'completed' && !todo.completed) return false

        return (
          <Todo
            key={i}
            todo={todo}
            completed={todo.completed}
            labelText={todo.text}
          />
        )
      })}
    </ul>
  )
}

export default observer(VisibleTodoList)
