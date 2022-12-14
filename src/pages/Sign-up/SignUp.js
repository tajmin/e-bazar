import React from "react";
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import logo from "../../images/logo.png";
import "./SignUp.styles.scss";

const SignUp = () => {
  return (
    <>
      <div className="container">
        <div className="img-glass-container">
          <div className="glass">
            <img src={logo} alt="e-bazr" />
            <h2>Don't have an account?</h2>
            <span>Signing up with E-bazr is super easy!</span>
          </div>
        </div>
        <div className="form-container">
          <div className="form">
            <SignUpForm></SignUpForm>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
