import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckOut = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      {cartItems.length ? (
        cartItems.map((cartItem, index) => (
          <div key={index}>
            <p>{cartItem.name}</p>
            <p>{cartItem.price}</p>
            <p>{cartItem.quantity}</p>
          </div>
        ))
      ) : (
        <h4>Empty Cart</h4>
      )}
    </div>
  );
};

export default CheckOut;
