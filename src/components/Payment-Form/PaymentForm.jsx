import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import Button, { BUTTON_CLASSES } from "../Button/Button";
import { FormWrap, PaymentFormContainer } from "./PaymentForm.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cartTotalPrice } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
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
    <PaymentFormContainer className="glass-morph">
      <h2>Enter Card Details</h2>
      <FormWrap onSubmit={paymentHandler}>
        <CardElement></CardElement>
        <Button
          buttonType={BUTTON_CLASSES.payment}
          isLoading={isPaymentProcessing}
        >
          Make Payment
        </Button>
      </FormWrap>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
