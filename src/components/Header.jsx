import React, { useState, useContext } from 'react'
import { getNewId } from '../utils'
import { get } from 'lodash'
import { observer } from 'mobx-react'
import { StoreContext } from '../store/store'

const Header = () => {
  const { todosStore } = useContext(StoreContext)
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

export default observer(Header)
