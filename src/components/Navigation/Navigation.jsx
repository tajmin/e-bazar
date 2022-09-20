import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import logo from "../../images/logo.png";
import { selectIsCartDropdownOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { userSignOut } from "../../Utility/Firebase/Firebase";
import CartDropdown from "../Cart-dropdown/CartDropdown";
import CartIcon from "../Cart-icon/CartIcon";
import "./Navigation.styles.scss";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartDropdownOpen = useSelector(selectIsCartDropdownOpen);
  return (
    <Fragment>
      <nav>
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
      </nav>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
