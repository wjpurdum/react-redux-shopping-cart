import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import './stylesheets/index.css'

// The Provider is a special type of component.
// The Provider will wrap our App component along with a store that encapsulates
// local states within App

import { Provider } from 'react-redux'
import Store from './Store'

const StoreInstance = Store()

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
)
