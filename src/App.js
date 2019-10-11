import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Firebase from './Firebase'
import PrivateRoute from './PrivateRoute'
import Main from './components/Main'
import SignIn from './components/SignIn'
import FirebaseContext from './withFirebase'

const App = () => (
  <Firebase>
    {({ user, loading, ...firebase }) => (
      <FirebaseContext.Provider value={firebase}>
        <BrowserRouter>
          <PrivateRoute
            exact
            path="/"
            component={Main}
            isAuthenticating={!user && loading}
            isAuthenticated={user && !loading}
            user={user}
          />
          <Route path="/signin" component={SignIn} />
        </BrowserRouter>
      </FirebaseContext.Provider>
    )}
  </Firebase>
)

export default App
