import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Loading from './components/Loading'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        rest.isAuthenticated ? (
          <Component user={rest.user} />
        ) : rest.isAuthenticating ? (
          <Loading>Loading ...</Loading>
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
