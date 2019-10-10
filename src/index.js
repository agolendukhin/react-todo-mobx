import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/todomvc-common/base.css'
import '../node_modules/todomvc-app-css/index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
