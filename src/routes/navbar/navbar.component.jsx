import React from "react";
import { Outlet, Link } from "react-router-dom";
import { BiPlanet } from "react-icons/bi";
import "./navbar.styles.scss";

const Navbar = () => {
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
          <Link className="nav-link" to="/sign-in">
            <h3 className="nav-link-text">Sign In</h3>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
