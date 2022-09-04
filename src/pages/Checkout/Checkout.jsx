import React, { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { CartContext } from "../../contexts/cart.context";
import "./Checkout.styles.scss";

const Checkout = () => {
  const { cartProducts, cartTotalPrice, cartProductCount } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="order-summary-text">
        <h2>Your Order Summary</h2>
        <h4>
          Review of total <span>{cartProductCount} </span> items billed at
          <span>${cartTotalPrice}</span>
        </h4>
        <div className="separator"></div>
      </div>
      <div className="order-container">
        {/* <div className="checkout-header">
          <div className="header-block">
            <h4>Producs</h4>
          </div>
          <div className="header-block">
            <h4>Description</h4>
          </div>
          <div className="header-block">
            <h4>Quantity</h4>
          </div>
          <div className="header-block">
            <h4>Price</h4>
          </div>
          <div className="header-block">
            <h4>Remove</h4>
          </div>
        </div> */}

        {cartProducts.map((item) => (
          <CheckoutItem key={item.id} cartItem={item}></CheckoutItem>
        ))}
        <span className="total">Total: ${cartTotalPrice}</span>
      </div>
    </div>
  );
};

export default Checkout;
