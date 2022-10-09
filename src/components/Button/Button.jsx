import React from "react";
import ButtonLoading from "../ButtonLoading/ButtonLoading";
import {
  BaseButton,
  GoogleButton,
  InvertedButton,
  PaymentButton,
} from "./Button.styles";

export const BUTTON_CLASSES = {
  base: "base",
  google: "google",
  inverted: "inverted",
  payment: "payment",
};

const getButton = (buttonType = BUTTON_CLASSES.base) =>
  ({
    [BUTTON_CLASSES.base]: BaseButton,
    [BUTTON_CLASSES.google]: GoogleButton,
    [BUTTON_CLASSES.inverted]: InvertedButton,
    [BUTTON_CLASSES.payment]: PaymentButton,
  }[buttonType]);

const Button = ({ children, buttonType, isLoading, ...rest }) => {
  const OriginalButton = getButton(buttonType);
  return (
    <OriginalButton disabled={isLoading} {...rest}>
      {isLoading ? <ButtonLoading /> : children}
    </OriginalButton>
  );
};

export default Button;
