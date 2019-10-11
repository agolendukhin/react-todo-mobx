import React, { useState, useEffect } from 'react'
import { get } from 'lodash'
import classNames from 'classnames'
import ToggleTodo from './ToggleTodo'
import EditInput from './EditInput'
import { todosStore } from '../store'

const Todo = props => {
  const initialCompleted = get(props, 'todo.completed')
  const { todo } = props

  const [completed, setCompleted] = useState(initialCompleted)
  const [className, setClassName] = useState(
    getLiClassName({ completed: initialCompleted })
  )

  useEffect(() => {
    const nextCompleted = props.completed

    setCompleted(nextCompleted)
    setClassName(getLiClassName({ completed: nextCompleted }))
  }, [props.completed])

  const handleDoubleClick = () =>
    setClassName(getLiClassName({ completed, editing: true }))

  const resetLiClassName = () => setClassName(getLiClassName({ completed }))

  return (
    <li className={className}>
      <div className="view">
        <ToggleTodo todo={todo} />
        <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
        <button className="destroy" onClick={() => todosStore.remove(todo)} />
      </div>
      <EditInput todo={todo} resetLiClassName={resetLiClassName} />
    </li>
  )
}

const getLiClassName = ({ completed, editing = false }) =>
  classNames({
    completed,
    editing,
  })

export default Todo
