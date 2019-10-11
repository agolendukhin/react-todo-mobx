import React from 'react'
import { todosStore } from '../store'

const ClearCompletedButton = props =>
  props.display && (
    <button
      className="clear-completed"
      onClick={() => todosStore.clearCompleted()}>
      Clear completed
    </button>
  )

export default ClearCompletedButton
