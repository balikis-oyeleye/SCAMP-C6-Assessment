const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [],
      };
    case "INCREASE":
      const increaseQty = action.payload.map((item) => {
        return { ...item, qty: item.qty + 1 };
      });
      return {
        ...state,
        cart: increaseQty,
      };

    case "DECREASE":
      const decreaseQty = action.payload.map((item) => {
        if (item.qty > 1) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      });
      return {
        ...state,
        cart: decreaseQty,
      };
    default:
      break;
  }
};

export default cartReducer;
