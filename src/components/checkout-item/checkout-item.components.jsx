import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  reduceItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  // Create outside handlers to
  // 1. Incase function changes
  // 2. Optimise the code later
  const reduceQuantityhandler = () =>
    dispatch(reduceItemFromCart(cartItems, cartItem));
  const addQuantityhandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemhandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <BsFillCaretLeftFill
          onClick={reduceQuantityhandler}
          style={{ cursor: "pointer" }}
        />
        {quantity}
        <BsFillCaretRightFill
          onClick={addQuantityhandler}
          style={{ cursor: "pointer" }}
        />
      </span>
      <span className="price">{price * quantity}</span>
      <RiDeleteBin5Line size={20} onClick={removeItemhandler} />
    </div>
  );
};

export default CheckoutItem;
