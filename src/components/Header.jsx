import React, { useState } from 'react'
import { getNewId } from '../utils'
import { get } from 'lodash'
import { todosStore } from '../store'

const Header = () => {
  const [value, setValue] = useState('')

  const handleChange = e => setValue(get(e, ['target', 'value'], ''))

  const handleKeyPress = e => {
    if (e.key === 'Enter' && value) {
      todosStore.add({
        id: getNewId(todosStore.todos),
        text: value,
        completed: false,
      })

      setValue('')
    }
  }

  return (
    <header>
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        value={value}
      />
    </header>
  )
}

export default Header
