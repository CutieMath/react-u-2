import React, { useContext } from "react";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.components";
import { CartContext } from "react";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem, index) => (
            <CartItem key={index} cartItem={cartItem} />
          ))
        ) : (
          <h4>Empty Cart</h4>
        )}
      </div>
      <Button>Girl</Button>
    </div>
  );
};

export default CartDropdown;
