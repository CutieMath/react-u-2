import React, { useContext } from "react";
import "./cart-icon.styles.scss";
import { BiShoppingBag } from "react-icons/bi";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { setShowCartDropdown, showCartDropdown, totalItemsCount } =
    useContext(CartContext);
  const toggleCartDropdown = () => {
    setShowCartDropdown(!showCartDropdown);
  };
  return (
    <div className="cart-icon-container" onClick={toggleCartDropdown}>
      <BiShoppingBag size={40} className="shopping-icon" />
      <span className="item-count">{totalItemsCount}</span>
    </div>
  );
};

export default CartIcon;
