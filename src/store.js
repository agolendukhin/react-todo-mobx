import { observable, autorun } from 'mobx'
import { IS_DEV } from './utils'

let initialState = {
  todos: [],
  filters: {
    all: true,
    active: false,
    completed: false,
  },
}

updateFromLocalStorage(initialState)

export const todosStore = observable({
  todos: initialState.todos,
  add(todo) {
    this.todos.push(todo)
  },
  remove(todoId) {
    this.todos = this.todos.filter(todo => todo.id !== todoId)
  },
  update(todo) {
    this.todos = this.todos.map(t => (t.id !== todo.id ? t : todo))
  },
  toggleAll(completed) {
    this.todos = this.todos.map(todo => ({
      ...todo,
      completed,
    }))
  },
  clearCompleted() {
    this.todos = this.todos.filter(t => !t.completed)
  },
  get activeTodosCount() {
    return this.todos.filter(todo => !todo.completed).length
  },
})

export const filtersStore = observable({
  filters: initialState.filters,
  toggle(activatedFilter) {
    this.filters = {
      all: false,
      active: false,
      completed: false,
      [activatedFilter]: true,
    }
  },
})

// localStorage and logging
autorun(r => {
  if (IS_DEV) r.trace()

  const store = {
    todos: todosStore.todos,
    filters: filtersStore.filters,
  }

  localStorage.setItem('store', JSON.stringify(store))

  if (IS_DEV) {
    console.log(store)
  }
})

function updateFromLocalStorage(initialState) {
  const storeStr = localStorage.getItem('store')
  if (storeStr) {
    const store = JSON.parse(storeStr)
    initialState = store
  }
}
