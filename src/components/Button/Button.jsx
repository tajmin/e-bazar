import React from "react";
import ButtonLoading from "../ButtonLoading/ButtonLoading";
import "./Button.styles.scss";

const BUTTON_CLASSES = {
  google: "google",
  inverted: "inverted",
  payment: "payment",
};

const Button = ({ children, buttonType, isLoading, ...rest }) => {
  return (
    <button
      disabled={isLoading}
      className={`button-container ${BUTTON_CLASSES[buttonType]}`}
      {...rest}
    >
      {isLoading ? <ButtonLoading /> : children}
    </button>
  );
};

export default Button;
