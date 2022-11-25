import React, { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import PaymentForm from "../../components/Payment-form/PaymentForm";
import { CartContext } from "../../contexts/cart.context";
import "./Checkout.styles.scss";

const Checkout = () => {
  const { cartProducts, cartTotalPrice, cartProductCount } =
    useContext(CartContext);

  return (
    <div className="side-padding">
      <div className="checkout-container">
        <div className="order-summary-text">
          <h2>Your Order Summary</h2>
          <h4>
            Review of total <span>{cartProductCount} </span> items billed at
            <span>${cartTotalPrice}</span>
          </h4>
          <div className="separator"></div>
        </div>
        <div className="order-container glass-morph">
          {cartProducts.map((item) => (
            <CheckoutItem key={item.id} cartItem={item}></CheckoutItem>
          ))}
          <span className="total">Total: ${cartTotalPrice}</span>
        </div>
        <PaymentForm></PaymentForm>
      </div>
    </div>
  );
};

export default Checkout;
