import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Navigation.styles.scss";

const Navigation = () => {
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
          <Link to="/sign-in" className="menu-item">
            Sign-In
          </Link>
          <Link to="/sign-up" className="menu-item">
            Sign Up
          </Link>
        </div>
      </nav>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
