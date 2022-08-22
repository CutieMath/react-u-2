import { useState, createContext, useEffect } from "react";

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
});

/*
product
{
  id,
  name, 
  price, 
  imageUrl,
}

Cart Item 
{
  id,
  name,
  price,
  imageUrl
  quantity,
}
*/

export const CartProvider = ({ children }) => {
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((accumulator, cartItem) => {
      return accumulator + cartItem.quantity;
    }, 0);
    setTotalItemsCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((accumulator, cartItem) => {
      return accumulator + cartItem.price * cartItem.quantity;
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems(helperFunctionForAddingCartItem(cartItems, product));
  };

  const reduceItemFromCart = (product) => {
    setCartItems(helperFunctionForReducingCartItem(cartItems, product));
  };

  const removeItemFromCart = (product) => {
    setCartItems(helperFunctionForRemovingCartItem(cartItems, product));
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
