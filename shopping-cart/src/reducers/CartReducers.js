export default(state = [], action) => {
  switch(action.type){
    case 'ADD_ITEM':
      return [...state, action.item]
    default:
      return state
  }
}

// This determines - how do we apply an action to the state? if the store receifes an action called "Add Item" - what should it do?
