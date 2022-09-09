import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiPlanet } from "react-icons/bi";
// import { UserContext } from "../../context/user.context";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutAuthUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.components";
import { CartContext } from "../../context/cart.context";
import {
  NavbarContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navbar.styles";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navbar = () => {
  // get things from redux
  const currentUser = useSelector(selectCurrentUser);
  const showCartDropdown = useSelector(selectIsCartOpen);
  // const { currentUser } = useContext(UserContext);
  // const { showCartDropdown, setShowCartDropdown } = useContext(CartContext);

  return (
    <>
      <NavbarContainer>
        <LogoContainer to="/">
          <BiPlanet size={70} />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            <h3>Shop</h3>
          </NavLink>
          {currentUser ? (
            <NavLink to="/authentication">
              <h3 onClick={signOutAuthUser}>Sign Out</h3>
            </NavLink>
          ) : (
            <NavLink to="/authentication">
              <h3>Sign In</h3>
            </NavLink>
          )}
          <CartIcon
            setShowCartDropdown={setShowCartDropdown}
            showCartDropdown={showCartDropdown}
          />
        </NavLinks>
        {showCartDropdown && <CartDropdown />}
      </NavbarContainer>
      <Outlet />
    </>
  );
};

export default Navbar;
