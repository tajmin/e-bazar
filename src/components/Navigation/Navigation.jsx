import React, { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import logo from "../../images/logo.png";
import { userSignOut } from "../../Utility/Firebase/Firebase";
import CartDropdown from "../Cart-dropdown/CartDropdown";
import CartIcon from "../Cart-icon/CartIcon";
import {
  LogoContainer,
  MenuContainer,
  MenuLink,
  Nav,
  NavContainer,
} from "./Navigation.styles.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartDropdownOpen } = useContext(CartContext);
  return (
    <Fragment>
      <NavContainer>
        <Nav>
          <LogoContainer to="/">
            <img src={logo} alt="e-bazr" />
          </LogoContainer>
          <MenuContainer>
            <MenuLink to="/" className="menu-item">
              Home
            </MenuLink>
            <MenuLink to="/shop" className="menu-item">
              Shop
            </MenuLink>

            {currentUser ? (
              <MenuLink as="span" onClick={userSignOut}>
                Sign Out
              </MenuLink>
            ) : (
              <>
                <MenuLink to="/sign-in" className="menu-item">
                  Sign-In
                </MenuLink>
                <MenuLink to="/sign-up" className="menu-item">
                  Sign Up
                </MenuLink>
              </>
            )}
            <CartIcon></CartIcon>
          </MenuContainer>
          {isCartDropdownOpen && <CartDropdown></CartDropdown>}
        </Nav>
      </NavContainer>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
