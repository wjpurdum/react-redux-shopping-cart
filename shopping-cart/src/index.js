import React from 'react'
import ReactDOM from 'react-dom'
// What this does, is gives us the Provider Component and Connect Function - easier ways to connect the component to the Store. We must wrap root component in the provider
import { Provider } from 'react-redux'
// The Provider is a special type of component.
// The Provider will wrap our App component along with a store that encapsulates
// local states within the App component.

import App from './components/App'
import Store from './Store'


const StoreInstance = Store()

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
)
