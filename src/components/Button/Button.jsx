import React from "react";
import "./Button.styles.scss";

const BUTTON_CLASSES = {
  google: "google",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...rest }) => {
  return (
    <button
      className={`button-container ${BUTTON_CLASSES[buttonType]}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
