import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import Button from "../Button/Button";
import "./PaymentForm.styles.scss";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const cartTotalPrice = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  const paymentHandler = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsPaymentProcessing(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: cartTotalPrice * 100 }),
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsPaymentProcessing(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };

  return (
    <div className="payment-form-container glass-morph">
      <h4>Enter Card Details</h4>
      <form className="form-wrapper" onSubmit={paymentHandler}>
        <CardElement></CardElement>
        <Button buttonType="payment" isLoading={isPaymentProcessing}>
          Make Payment
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
