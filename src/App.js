import React, { Component } from 'react'
import { todosStore, filtersStore, StoreContext } from './store/store'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <StoreContext.Provider value={{ todosStore, filtersStore }}>
        <Main />
      </StoreContext.Provider>
    )
  }
}

export default App
