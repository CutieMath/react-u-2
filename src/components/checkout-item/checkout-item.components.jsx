import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, reduceItemFromCart, removeItemFromCart } =
    useContext(CartContext);
  const { imageUrl, name, price, quantity } = cartItem;

  // Create outside handlers to
  // 1. Incase function changes
  // 2. Optimise the code later
  const reduceQuantityhandler = () => reduceItemFromCart(cartItem);
  const addQuantityhandler = () => addItemToCart(cartItem);
  const removeItemhandler = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <BsFillCaretLeftFill onClick={reduceQuantityhandler} />
        {quantity}
        <BsFillCaretRightFill onClick={addQuantityhandler} />
      </span>
      <span className="price">{price * quantity}</span>
      <RiDeleteBin5Line size={20} onClick={removeItemhandler} />
    </div>
  );
};

export default CheckoutItem;
