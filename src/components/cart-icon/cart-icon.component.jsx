import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import "./cart-icon.styles.scss";
import { BiShoppingBag } from "react-icons/bi";
import { setShowCartDropdown } from "../../store/cart/cart.action";

const CartIcon = () => {
  const dispatch = useDispatch();
  const totalItemsCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleCartDropdown = () => dispatch(setShowCartDropdown(!isCartOpen));

  return (
    <div className="cart-icon-container" onClick={toggleCartDropdown}>
      <BiShoppingBag size={40} className="shopping-icon" />
      <span className="item-count">{totalItemsCount}</span>
    </div>
  );
};

export default CartIcon;
