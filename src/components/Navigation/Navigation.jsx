import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import logo from "../../images/logo.png";
import { userSignOut } from "../../Utility/Firebase/Firebase";
import "./Navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
        </div>
      </nav>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
