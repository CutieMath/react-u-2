import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const toggleCartHidden = (bool) => {
  return createAction(CART_ACTION_TYPES.TOGGLE_CART_HIDDEN, bool);
};
