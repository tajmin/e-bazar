import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import logo from "../../images/logo.png";
import { userSignOut } from "../../Utility/Firebase/Firebase";
import CartDropdown from "../Cart-dropdown/CartDropdown";
import CartIcon from "../Cart-icon/CartIcon";
import "./Navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartDropdownOpen } = useContext(CartContext);
  return (
    <Fragment>
      <nav>
        <div className="sub-container">
          <Link to="/" className="logo">
            <img src={logo} alt="e-bazr" />
          </Link>
          <div className="menu-container">
            <Link to="/" className="menu-item">
              Home
            </Link>
            <Link to="/shop" className="menu-item">
              Shop
            </Link>

            {currentUser ? (
              <span className="menu-item" onClick={userSignOut}>
                Sign Out
              </span>
            ) : (
              <>
                <Link to="/sign-in" className="menu-item">
                  Sign-In
                </Link>
                <Link to="/sign-up" className="menu-item">
                  Sign Up
                </Link>
              </>
            )}
            <CartIcon></CartIcon>
          </div>
          {isCartDropdownOpen && <CartDropdown></CartDropdown>}
        </div>
      </nav>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
