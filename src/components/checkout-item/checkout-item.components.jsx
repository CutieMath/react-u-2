import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, reduceItemFromCart, removeItemFromCart } =
    useContext(CartContext);
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <BsFillCaretLeftFill onClick={() => reduceItemFromCart(cartItem)} />
        {quantity}
        <BsFillCaretRightFill onClick={() => addItemToCart(cartItem)} />
      </span>
      <span className="price">{price * quantity}</span>
      <RiDeleteBin5Line
        size={20}
        onClick={() => removeItemFromCart(cartItem)}
      />
    </div>
  );
};

export default CheckoutItem;
