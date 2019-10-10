import React, { useContext } from 'react'
import { StoreContext } from '../store/store'

const ToggleTodo = props => {
  const { todosStore } = useContext(StoreContext)
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
