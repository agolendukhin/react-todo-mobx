import React, { useContext } from 'react'
import { StoreContext } from '../store/store'

const ClearCompletedButton = props => {
  const { todosStore } = useContext(StoreContext)

  if (!props.display) {
    return null
  }

  return (
    <button className="clear-completed" onClick={todosStore.clearCompleted}>
      Clear completed
    </button>
  )
}

export default ClearCompletedButton
