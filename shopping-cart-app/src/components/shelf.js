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
