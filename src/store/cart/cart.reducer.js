import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  showCartDropdown: false,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART_HIDDEN:
      return { ...state, showCartDropdown: payload };
    default:
      return state;
  }
};
