import React from "react";
import "./cart-icon.styles.scss";
import { BiShoppingBag } from "react-icons/bi";

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <BiShoppingBag size={40} className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
