import React from "react";
import "./cart-icon.styles.scss";
import { BiShoppingBag } from "react-icons/bi";

const CartIcon = ({ setShowCartDropdown, showCartDropdown }) => {
  return (
    <div
      className="cart-icon-container"
      onClick={() => setShowCartDropdown(!showCartDropdown)}
    >
      <BiShoppingBag size={40} className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
