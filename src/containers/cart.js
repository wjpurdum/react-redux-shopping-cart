import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { cnonect } from 'react-redux'
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

function mapStateToProps(state, prop){
  return {
    cart: state.cart
  }
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators(CartActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(Cart)
