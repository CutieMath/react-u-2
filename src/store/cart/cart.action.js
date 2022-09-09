import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setShowCartDropdown = (bool) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);
};

export const addItemToCart = (cartItems, product) => {
  const newCartItems = helperFunctionForAddingCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const reduceItemFromCart = (cartItems, product) => {
  const newCartItems = helperFunctionForReducingCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, product) => {
  const newCartItems = helperFunctionForRemovingCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

// Private functions
const helperFunctionForAddingCartItem = (cartItems, productToAdd) => {
  const existingCartItem = helperFuntionForFindingProductInCart(
    cartItems,
    productToAdd
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const helperFunctionForReducingCartItem = (cartItems, productToReduce) => {
  const existingCartItem = helperFuntionForFindingProductInCart(
    cartItems,
    productToReduce
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToReduce.id && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
  return cartItems;
};

const helperFunctionForRemovingCartItem = (cartItems, productToRemove) => {
  const existingCartItem = helperFuntionForFindingProductInCart(
    cartItems,
    productToRemove
  );
  if (existingCartItem) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  return cartItems;
};

const helperFuntionForFindingProductInCart = (cartItems, productToFind) => {
  return cartItems.find((cartItem) => cartItem.id === productToFind.id);
};
