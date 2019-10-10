import React from 'react'
import Filters from './Filters'
import ClearCompletedButton from './ClearCompleted'

const Footer = props => {
  const { display, activeTodosCount, completedTodosCount } = props
  if (!display) return null

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTodosCount}</strong>
        <span>{activeTodosCount === 1 ? ' item' : ' items'} left</span>
      </span>
      <Filters />
      <ClearCompletedButton display={completedTodosCount} />
    </footer>
  )
}

export default Footer
