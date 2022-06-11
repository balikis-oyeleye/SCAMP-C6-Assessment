const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, ...action.payload],
      };

    default:
      break;
  }
};

export default cartReducer;
