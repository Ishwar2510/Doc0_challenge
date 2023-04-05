const cart = [];

function cartData(state = cart, action) {
  switch (action.type) {
    case "addToCart":
      let aindex = state.findIndex((e) => e.id == action.payload.id);
      if (aindex >= 0) {
        let newCart = [...JSON.parse(JSON.stringify(state))];
        newCart[aindex].quantity = newCart[aindex].quantity + 1;
        return newCart;
      }
      let newData = { ...action.payload };
      newData.quantity = 1;

      return [...state, newData];
    case "removeFromCart":
      let bindex = state.findIndex((e) => e.id === action.payload.id);
      let quantity = state[bindex].quantity;
      let newCart = [...JSON.parse(JSON.stringify(state))];
      if (quantity == 1) {
        newCart.splice(bindex, 1);
      } else {
        newCart[bindex].quantity = newCart[bindex].quantity - 1;
      }

      return newCart;
    case "deleteItem":
      let index = state.findIndex((e) => e.id === action.payload.id);
      let dnewCart = [...JSON.parse(JSON.stringify(state))];
      dnewCart.splice(index, 1);
      return dnewCart;
    case "clear":
      return [];
    default:
      return state;
  }
}
export default cartData;
