//Action Creator function
//This action will be called from a button in the UI
export const addToCart = (item) => {
  console.log(`ACTION: adding ${item} to cart`)
  return {
    type: 'add',
    item //ES6 shorthand again {item: item}
  }
}
