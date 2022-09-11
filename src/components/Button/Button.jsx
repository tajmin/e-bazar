import React from "react";
import { BaseButton, GoogleButton, InvertedButton } from "./Button.styles";

export const BUTTON_CLASSES = {
  base: "base",
  google: "google",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_CLASSES.base) =>
  ({
    [BUTTON_CLASSES.base]: BaseButton,
    [BUTTON_CLASSES.google]: GoogleButton,
    [BUTTON_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...rest }) => {
  const OriginalButton = getButton(buttonType);
  return <OriginalButton {...rest}>{children}</OriginalButton>;
};

export default Button;
