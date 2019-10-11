import { observable, autorun, toJS } from 'mobx'
import { IS_DEV } from './utils'
import Api from './Api'

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
  userId: null,
  todos: initialState.todos,
  add(todo) {
    this.todos.push(todo)
    Api.addTodo(todo, this.userId).then(({ id: serverId }) =>
      this.patchLocally(todo.id, { serverId })
    )
  },
  remove(todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id)
    if (todo.serverId) Api.removeTodo(todo.serverId)
  },
  update(todo) {
    this.todos = this.todos.map(t => (t.id !== todo.id ? t : todo))
    Api.updateTodo(todo)
  },
  toggleAll(completed) {
    this.todos = this.todos.map(todo => ({
      ...todo,
      completed,
    }))
    Api.toggleAllTodos(this.todos, completed)
  },
  clearCompleted() {
    this.todos = this.todos.filter(t => !t.completed)
    Api.clearCompleted(this.todos)
  },
  fetch() {
    Api.fetchTodos(this.userId).then(todos => {
      this.set(todos)
    })
  },
  patchLocally(todoId, data) {
    this.todos = this.todos.map(t => (t.id !== todoId ? t : { ...t, ...data }))
  },
  set(todos) {
    this.todos = todos
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
    console.log({
      todos: toJS(store.todos),
      filters: toJS(store.filters),
    })
  }
})

function updateFromLocalStorage(initialState) {
  const storeStr = localStorage.getItem('store')
  if (storeStr) {
    const store = JSON.parse(storeStr)
    initialState = store
  }
}
