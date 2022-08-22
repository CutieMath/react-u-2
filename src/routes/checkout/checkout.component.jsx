import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

const CheckOut = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div>
      {cartItems.length ? (
        cartItems.map((cartItem, index) => (
          <div key={index}>
            <p>{cartItem.name}</p>
            <p>{cartItem.price}</p>
            <div>
              <BsFillCaretLeftFill
                onClick={() => removeItemFromCart(cartItem)}
              />
              <p>{cartItem.quantity}</p>
              <BsFillCaretRightFill onClick={() => addItemToCart(cartItem)} />
            </div>
          </div>
        ))
      ) : (
        <h4>Empty Cart</h4>
      )}
    </div>
  );
};

export default CheckOut;
