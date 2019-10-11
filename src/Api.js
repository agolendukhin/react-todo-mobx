import { db } from './Firebase'

export default {
  fetchTodos: userId => {
    return db
      .collection('todos')
      .where('userId', '==', userId)
      .get()
      .then(querySnapshot =>
        querySnapshot.docs.map(doc => ({ ...doc.data(), serverId: doc.id }))
      )
  },

  addTodo: (todo, userId) => {
    return db.collection('todos').add({ ...todo, userId })
  },

  removeTodo: serverId =>
    db
      .collection('todos')
      .doc(serverId)
      .delete(),

  updateTodo: todo =>
    db
      .collection('todos')
      .doc(todo.serverId)
      .update(todo),

  toggleAllTodos: (todos, completed) => {
    const batch = db.batch()

    todos.forEach(todo => {
      const ref = db.collection('todos').doc(todo.serverId)
      batch.update(ref, { ...todo, completed })
    })

    return batch.commit()
  },

  clearCompleted: todos => {
    const batch = db.batch()

    todos.forEach(todo => {
      if (todo.completed) {
        const ref = db.collection('todos').doc(todo.serverId)
        batch.delete(ref)
      }
    })

    return batch.commit()
  },
}
