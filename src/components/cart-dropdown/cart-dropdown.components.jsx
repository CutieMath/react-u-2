import React from "react";
import { useNavigate } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.components";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
  };

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
      <Button onClick={goToCheckout}>check out</Button>
    </div>
  );
};

export default CartDropdown;
