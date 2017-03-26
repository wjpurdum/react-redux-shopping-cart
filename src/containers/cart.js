import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as CartActions from '../actions/cart'
import Shelf from '../containers/shelf'

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

//Subscribes
function mapStateToProps(state, prop){
  return {
    cart: state.cart
  }
}

//Changes in our program will be reflected when new actions are dispatched
function mapDispatchtoProps(dispatch) {
  return bindActionCreators(CartActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(Cart)
