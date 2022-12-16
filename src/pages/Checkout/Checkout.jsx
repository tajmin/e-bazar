import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import PaymentForm from "../../components/Payment-form/PaymentForm";
import {
  selectCartCount,
  selectCartProducts,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import "./Checkout.styles.scss";

const Checkout = () => {
  const cartProducts = useSelector(selectCartProducts);
  const cartProductCount = useSelector(selectCartCount);
  const cartTotalPrice = useSelector(selectCartTotal);

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
      <div className="order-container box-shadow glass-morph">
        {cartProducts.map((item) => (
          <CheckoutItem key={item.id} cartItem={item}></CheckoutItem>
        ))}
        <span className="total">Total: ${cartTotalPrice}</span>
      </div>
      <PaymentForm></PaymentForm>
    </div>
  );
};

export default Checkout;
