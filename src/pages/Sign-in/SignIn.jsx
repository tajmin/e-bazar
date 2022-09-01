import React from "react";
import SignInForm from "../../components/sign-in-form/SignInForm";
import "./SignIn.styles.scss";

const SignIn = () => {
  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="form">
            <SignInForm></SignInForm>
          </div>
        </div>
        <div className="img-glass-container">
          <div className="glass">
            <h2>Already have an account?</h2>
            <span>Sign in now and get the best shopping experience!</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
