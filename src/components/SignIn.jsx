import React from 'react'
import { withFirebase } from '../withFirebase'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import Button from './Button'
import CenterComponent from './CenterComponent'

const SignInScreen = props => {
  return (
    <CenterComponent>
      <h1 style={{ marginLeft: '-8px' }}>Todos</h1>
      <Button
        onClick={() =>
          props.firebase.signInWithPopUp().then(() => props.history.push('/'))
        }>
        Sign in
      </Button>
    </CenterComponent>
  )
}

export default compose(
  withFirebase,
  withRouter
)(SignInScreen)
