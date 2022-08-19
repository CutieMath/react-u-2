import React, { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { BiPlanet } from "react-icons/bi";
import "./navbar.styles.scss";
import { UserContext } from "../../context/user.context";
import { signOutAuthUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.components";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  return (
    <>
      <div className="navbar">
        <Link className="logo-container" to="/">
          <BiPlanet size={70} />
        </Link>
        <div className="links-container">
          <Link className="nav-link" to="/shop">
            <h3 className="nav-link-text">Shop</h3>
          </Link>
          {currentUser ? (
            <Link className="nav-link" to="/authentication">
              <h3 className="nav-link-text" onClick={signOutAuthUser}>
                Sign Out
              </h3>
            </Link>
          ) : (
            <Link className="nav-link" to="/authentication">
              <h3 className="nav-link-text">Sign In</h3>
            </Link>
          )}
          <CartIcon
            setShowCartDropdown={setShowCartDropdown}
            showCartDropdown={showCartDropdown}
          />
        </div>
        {showCartDropdown && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
