import "./Spinner.styles.scss";
import { ReactComponent as SpinnerAnimation } from "../../images/spinner.svg";

import React from "react";

const Spinner = () => {
  return (
    <>
      <SpinnerAnimation className="spinner-animation"></SpinnerAnimation>
    </>
  );
};

export default Spinner;
