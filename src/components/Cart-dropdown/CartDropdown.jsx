import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../Button/Button";
import CartItem from "../Cart-item/CartItem";
import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  const { cartProducts } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartProducts.map((item) => (
          <CartItem key={item.id} CartItem={item}></CartItem>
        ))}
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
