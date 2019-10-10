import React from 'react'
import { todosStore } from '../store'

const ToggleTodo = props => {
  const { todo } = props

  return (
    <input
      className="toggle"
      type="checkbox"
      checked={todo.completed}
      onChange={() =>
        todosStore.update({ ...todo, completed: !todo.completed })
      }
    />
  )
}

export default ToggleTodo
