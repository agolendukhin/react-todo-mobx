import { observable } from 'mobx'

export const todosStore = observable({
  todos: [],
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
})

export const filtersStore = observable({
  filters: {
    all: true,
    active: false,
    completed: false,
  },
  toggle(activatedFilter) {
    this.filters = {
      all: false,
      active: false,
      completed: false,
      [activatedFilter]: true,
    }
  },
})
