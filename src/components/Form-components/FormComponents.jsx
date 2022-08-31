import React from "react";
import "./FormComponents.styles.scss";

const FormComponents = ({ label, ...rest }) => {
  return (
    <div className="group">
      <input className="form-input" {...rest} />
      <label
        className={`${rest.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormComponents;
