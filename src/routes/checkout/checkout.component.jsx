import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.components";

const CheckOut = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.length ? (
        cartItems.map((cartItem, index) => (
          <CheckoutItem cartItem={cartItem} key={index} />
        ))
      ) : (
        <h4>Empty Cart</h4>
      )}
      <h3>Total price: {totalPrice}</h3>
    </div>
  );
};

export default CheckOut;
