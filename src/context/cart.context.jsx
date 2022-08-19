import { useState, createContext } from "react";

export const CartContext = createContext({
  showCartDropdown: false,
  setShowCartDropdown: () => {},
});

export const CartProvider = ({ children }) => {
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const value = { showCartDropdown, setShowCartDropdown };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
