import React, { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import PaymentForm from "../../components/Payment-Form/PaymentForm";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutContainer,
  HighlightedSpan,
  OrderContainer,
  OrderSummaryTextContainer,
  Separator,
  TotalPriceSpan,
} from "./Checkout.styles";

const Checkout = () => {
  const { cartProducts, cartTotalPrice, cartProductCount } =
    useContext(CartContext);

  return (
    <CheckoutContainer>
      <OrderSummaryTextContainer>
        <h2>Your Order Summary</h2>
        <h4>
          Review of total <HighlightedSpan>{cartProductCount} </HighlightedSpan>{" "}
          items billed at
          <HighlightedSpan>${cartTotalPrice}</HighlightedSpan>
        </h4>
        <Separator></Separator>
      </OrderSummaryTextContainer>

      <OrderContainer className="glass-morph">
        {cartProducts.map((item) => (
          <CheckoutItem key={item.id} cartItem={item}></CheckoutItem>
        ))}
        <TotalPriceSpan>Total: ${cartTotalPrice}</TotalPriceSpan>
      </OrderContainer>
      <PaymentForm></PaymentForm>
    </CheckoutContainer>
  );
};

export default Checkout;
