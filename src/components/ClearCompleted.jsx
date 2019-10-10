import React from 'react'
import { todosStore } from '../store'

const ClearCompletedButton = props => {
  if (!props.display) {
    return null
  }

  return (
    <button
      className="clear-completed"
      onClick={() => todosStore.clearCompleted()}>
      Clear completed
    </button>
  )
}

export default ClearCompletedButton
