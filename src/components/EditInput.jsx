import React, { useState, useContext } from 'react'
import { StoreContext } from '../store/store'
import { get } from 'lodash'

const EditInput = props => {
  const { todo, resetLiClassName } = props

  const { todosStore } = useContext(StoreContext)
  const [value, setValue] = useState(get(props, 'todo.text', ''))

  const onChange = e => setValue(get(e, 'target.value', ''))

  const onKeyPress = e => e.key === 'Enter' && resetLiClassName()

  const onBlur = () => {
    todosStore.update({
      ...todo,
      text: value,
    })

    resetLiClassName()
  }

  return (
    <input
      className="edit"
      ref={input => input && input.focus()}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyPress={onKeyPress}
    />
  )
}

export default EditInput
