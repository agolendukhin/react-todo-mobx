import React from 'react'
import { observer } from 'mobx-react'
import { findKey } from 'lodash'
import Todo from './Todo'
import { todosStore, filtersStore } from '../store'

const VisibleTodoList = () => {
  const { todos } = todosStore
  const { filters } = filtersStore

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
