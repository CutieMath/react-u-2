import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./checkout.styles.scss";

const CheckOut = () => {
  const {
    cartItems,
    addItemToCart,
    reduceItemFromCart,
    totalPrice,
    removeItemFromCart,
  } = useContext(CartContext);
  return (
    <div>
      {cartItems.length ? (
        cartItems.map((cartItem, index) => (
          <div key={index}>
            <p>{cartItem.name}</p>
            <p>{cartItem.price}</p>
            <div>
              <BsFillCaretLeftFill
                onClick={() => reduceItemFromCart(cartItem)}
              />
              <p>{cartItem.quantity}</p>
              <BsFillCaretRightFill onClick={() => addItemToCart(cartItem)} />
            </div>
            <RiDeleteBin5Line
              size={20}
              onClick={() => removeItemFromCart(cartItem)}
            />
          </div>
        ))
      ) : (
        <h4>Empty Cart</h4>
      )}
      <div>Total price: {totalPrice}</div>
    </div>
  );
};

export default CheckOut;
