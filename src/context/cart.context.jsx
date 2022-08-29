import { createContext, useReducer } from "react";

const helperFunctionForAddingCartItem = (cartItems, productToAdd) => {
  // Check if the product is already in the cart
  const existingCartItem = helperFuntionForFindingProductInCart(
    cartItems,
    productToAdd
  );
  // If it is, then increase the quantity by 1
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // If it is not, then add the product to the cart
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const helperFunctionForReducingCartItem = (cartItems, productToReduce) => {
  // Check if the product is already in the cart
  const existingCartItem = helperFuntionForFindingProductInCart(
    cartItems,
    productToReduce
  );
  // If it is, then reduce the quantity by 1
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToReduce.id && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 } // we use a new arra here so that the component will re-render
        : cartItem
    );
  }
  // If it is not, then do nothing
  return cartItems;
};

const helperFunctionForRemovingCartItem = (cartItems, productToRemove) => {
  // Check if the product is already in the cart
  const existingCartItem = helperFuntionForFindingProductInCart(
    cartItems,
    productToRemove
  );
  // If it is, then remove the product from the cart
  if (existingCartItem) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  // If it is not, then do nothing
  return cartItems;
};

const helperFuntionForFindingProductInCart = (cartItems, productToFind) => {
  return cartItems.find((cartItem) => cartItem.id === productToFind.id);
};

export const CartContext = createContext({
  showCartDropdown: false,
  setShowCartDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  reduceItemFromCart: () => {},
  totalPrice: 0,
  totalItemsCount: 0,
});

// For reducers
const INITIAL_STATE = {
  showCartDropdown: false,
  cartItems: [],
  totalPrice: 0,
  totalItemsCount: 0,
};

export const CART_ACTIONS = {
  SET_CART_ITEMS: "set_cart_items",
  SET_IS_CART_OPEN: "set_is_cart_open",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS.SET_CART_ITEMS:
      return { ...state, ...payload };
    case CART_ACTIONS.SET_IS_CART_OPEN:
      return { ...state, showCartDropdown: payload };
    default:
      throw new Error(`Unhandled action type: ${type}` in cartReducer);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { showCartDropdown, cartItems, totalPrice, totalItemsCount } = state;

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((accumulator, cartItem) => {
      return accumulator + cartItem.quantity;
    }, 0);

    const newTotalPrice = newCartItems.reduce((accumulator, cartItem) => {
      return accumulator + cartItem.price * cartItem.quantity;
    }, 0);

    dispatch({
      type: CART_ACTIONS.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        totalPrice: newTotalPrice,
        totalItemsCount: newCartCount,
      },
    });
  };

  const addItemToCart = (product) => {
    const newCartItems = helperFunctionForAddingCartItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const reduceItemFromCart = (product) => {
    const newCartItems = helperFunctionForReducingCartItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (product) => {
    const newCartItems = helperFunctionForRemovingCartItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const setShowCartDropdown = (bool) => {
    dispatch({ type: CART_ACTIONS.SET_IS_CART_OPEN, payload: bool });
  };

  const value = {
    showCartDropdown,
    setShowCartDropdown,
    cartItems,
    addItemToCart,
    totalItemsCount,
    reduceItemFromCart,
    totalPrice,
    removeItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
