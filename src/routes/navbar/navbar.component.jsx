import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { BiPlanet } from "react-icons/bi";
import "./navbar.styles.scss";
import { UserContext } from "../../context/user.context";
import { signOutAuthUser } from "../../utils/firebase/firebase.utils";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const handleSignOut = async () => {
    await signOutAuthUser();
    setCurrentUser(null);
  };

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
              <h3 className="nav-link-text" onClick={handleSignOut}>
                Sign Out
              </h3>
            </Link>
          ) : (
            <Link className="nav-link" to="/authentication">
              <h3 className="nav-link-text">Sign In</h3>
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
