# Super Simple Shopping Cart in Redux

## Setup

By now, you should have `create-react-app` installed on your computer via `npm`. If not, run:

```bash
 $ npm i -g create-react-app
```

```bash
 $ create-react-app shopping-cart
 $ npm i -S redux react-redux
```

After we've installed this dependencies, let's create directories for `actions`, `components`, and `reducers` in the `src` directory.

```bash
 $ mkdir src/actions src/components src/reducers
```

## Adding a Store

Next we'll create a `store.js`

```bash
 $ touch src/store.js
```

in `store.js`:

```js
import { createStore } from 'redux'
import rootReducer from './reducers'

export default (initialState)=>{
  return createStore(rootReducer, initialState)
}
```

## Adding in Reducers

```bash
 $ touch src/reducers/index.js src/reducers/cart.js
```

### Using combineReducers

> in `reducers/index.js`

```js
import cart from './cart'
import { combineReducers } from 'redux'

//stateless components should be defined as functions.

const rootReducer = combineReducers({
  cart //ES6 short hand for {cart: cart}
})
```

> in `reducers/cart.js`

```js
export default(state = [], action) => {
  switch(action.type){
    case 'ADD_ITEM'
      return [...state, action.item]
    default:
      return state
  }
}
```
