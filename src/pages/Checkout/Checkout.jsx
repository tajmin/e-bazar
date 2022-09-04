import React, { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { CartContext } from "../../contexts/cart.context";
import "./Checkout.styles.scss";

const Checkout = () => {
  const { cartProducts, addProductToCart, decreaseProductQuantityFromCart } =
    useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <h2>Producs</h2>
        </div>
        <div className="header-block">
          <h2>Description</h2>
        </div>
        <div className="header-block">
          <h2>Quantity</h2>
        </div>
        <div className="header-block">
          <h2>Price</h2>
        </div>
        <div className="header-block">
          <h2>Remove</h2>
        </div>
      </div>

      {cartProducts.map((item) => (
        <CheckoutItem key={item.id} cartItem={item}></CheckoutItem>
      ))}
      <span className="total">Total: 0</span>
    </div>
  );
};

export default Checkout;
