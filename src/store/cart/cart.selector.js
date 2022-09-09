import { createSelector } from "reselect";

// Create initial selector
const selectCartReducer = (state) => state.cart;

// Create memoized selector
export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.showCartDropdown
);

// Create second memoized selector which uses the first memoized selector
export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((accumulator, cartItem) => {
      return accumulator + cartItem.quantity;
    }, 0);
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((accumulator, cartItem) => {
      return accumulator + cartItem.quantity * cartItem.price;
    }, 0);
  }
);
