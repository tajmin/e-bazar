import React from "react";
import { ReactComponent as Spinner } from "../../images/spinner.svg";
import "./ButtonLoading.styles.scss";

const ButtonLoading = () => {
  return (
    <>
      <Spinner className="spinner-icon"></Spinner>
    </>
  );
};

export default ButtonLoading;
