export default (state = [], action) => {
  switch(action.type){
    case 'ADD_ITEM':
      return [...state, action.item]
    case 'REMOVE_ITEM':
      let newCart = [...state];
      newCart.splice(action.item, 1);
      return newCart;
    default:
      return state
  }
}
