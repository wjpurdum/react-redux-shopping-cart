# Super Simple Shopping Cart in Redux

## Setup

By now, you should have `create-react-app` installed on your computer via `npm`.
<details>
<summary>
If you have not, click here.
</summary>

Run the following command:

```bash
 $ npm i -g create-react-app
```
</details>

```bash
 $ create-react-app shopping-cart
 $ npm i -S redux react-redux
```

After we've installed these dependencies, let's create directories for `actions`, `components`, and `reducers` in the `src` directory.

```bash
 $ mkdir src/actions src/components src/reducers
```

## Adding a Store

Next we'll create a file that defines our store, titled `Store.js`

```bash
 $ touch src/Store.js
```

in `src/Store.js`:

```js
import {createStore} from 'redux'
import rootReducer from './reducers/RootReducer'

export default (initialState)=>{
  return createStore(rootReducer, initialState)
}
```

Ultimately, a store applies an action to a state, or more specifically, to a copy of the state.
Stores use **reducers** to determine **which** change or ***action*** to apply to the current application state held in the store.
***Actions*** define ***what*** the change actually is.



## Adding in Reducers

```bash
 $ touch src/reducers/RootReducer.js src/reducers/CartReducers.js
```

### Using combineReducers

The combineReducers helper function returns a single, aggregated object.
As its name suggests, it combines all the reducers into a single object, then returns that object.
We will refer to this as the `rootReducer` below.
The values of this object will be the reducer functions into a single reducing function you can
pass to createStore.

> in `src/reducers/RootReducer.js`

```js
import cart from './cart'
import { combineReducers } from 'redux'

// the object returned by this function must have a key named `cart` since `cart`
// will be a *prop* on our Cart container element
const rootReducer = combineReducers({
  cart //ES6 short hand for {cart: cart}

export default rootReducer
```

> in `src/reducers/cart.js`

```js
export default(state = [], action) => {
  switch(action.type){
    case 'ADD_ITEM':
      return [...state, action.item]
    default:
      return state
  }
}
```

[Switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) statement conditionals are used in place of `if`/`else if` conditionals
because they read more cleanly.

## Adding an action

```bash
 $ mkdir src/actions
 $ touch src/actions/CartActions.js
```

> in `src/actions/CartActions.js`

```js
// Action Creator function
// This action will be called from a button in the UI
export const addToCart = (item) => {

  // This console.log is a side effect and technically makes this function 'impure'.
  // It may come in handy when testing to see if we've integrated redux successfully,
  // to determine if our actions are firing

  console.log(`ACTION: adding ${item} to cart`)
  return {
    //actions must have a type property
    type: 'ADD_ITEM', //action naming conventions: all caps with snake-case (JAVASCRIPT_CONSTANT naming convention )
    item //ES6 shorthand again {item: item}
  }
}
```

Now we've added in the definitive pieces of a working Redux app. Next, we will add in presentational and container components.


```bash
 $ mkdir src/components
 $ touch src/components/shelf.js
```

> in `src/components.js`

```js
import React, { Component } from 'react'

class Shelf extends Component {
  constructor(props){
    super(props)

    this.state = {
      shelfItems: [
        "Bananas",
        "Frozen Pizza",
        "Flamin' Hot Cheetos",
        "Arugula"
      ]
    }
  }
  render() {
    const shelfItems = this.state.shelfItems.map(item, id) => {
      return (
        <li key={id}>
          <button>Add Item</button>
        </li>
      )
    }
    return (
      <div>
      </div>
    )
  }
}

export default Shelf
```

## Adding a Container

Before we add in a container, let's talk about how Redux interacts with container components and components differently.

> From [Redux Docs: Presentational and Container Components](http://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components)

> Technically you could write the container components by hand using store.subscribe(). We don't advise you to do this because React Redux makes many performance optimizations that are hard to do by hand. For this reason, rather than write container components, we will generate them using the connect() function provided by React Redux, as you will see below.

![Comparing container components and presentational components in Redux](./lesson-images/redux-presentational-container-diffs.png)

```bash
 $ mkdir src/containers
 $ touch src/containers/cart.js
```

> in `src/containers/cart.js`:

```js
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as CartActions from '../actions/CartActions'
import Shelf from '../components/shelf'

class Cart extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const CartItems = this.props.cart.map( (item, id) => {
      return (
        <li key={id}>
          {item}
        </li>
      )
    })
    return (
      <div>
        <Shelf addItem={this.props.actions.addToCart} />
        <h2>Cart</h2>
        <ol>
          {CartItems}
        </ol>
      </div>
    )
  }
}
// More information about the implementation pattern below can be found at the link below
// https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options

//Subscribes the container component to any changes in Redux-managed state
function mapStateToProps(state, props) {
  return {
    cart: state.cart
  };
}

//Changes in our program will be reflected when new actions are dispatched
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CartActions, dispatch)
  }
}

// typically the lines below would be condensed into :
// export default connect(mapStateToProps, mapDispatchToProps)(Cart)

// returns a wrapper that we need to pass the component into
const connection = connect(mapStateToProps, mapDispatchToProps)

// wraps the component with the store connection configured above
const wrappedComponent = connection(Cart)

export default wrappedComponent

```

## Adding in Integration with Chrome Redux Devtools Extension

> in `src/Store.js`:

```js
export default(initialState) => {
    return createStore(
      rootReducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}
```

Now you should be able to see state changes reflected in Redux Devtools.
