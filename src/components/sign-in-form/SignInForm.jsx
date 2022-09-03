import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  createUserDocFromAuth,
  emailSignIn,
  googleSignInWithPopup,
} from "../../Utility/Firebase/Firebase";

import Button from "../Button/Button";
import FormComponents from "../Form-components/FormComponents";
import GoogleIcon from "../Google-icon/GoogleIcon";

const formData = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(formData);
  const { email, password } = formFields;

  const signInGoogleUser = async () => {
    await googleSignInWithPopup();
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await emailSignIn(email, password);
      setFormFields(formData);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("You entered a wrong password!");
          break;
        case "auth/user-not-found":
          alert("No user found associated with the email");
          break;
        default:
          console.log(error.message);
      }
    }
  };

  return (
    <>
      <span>Sign in with email </span>
      <form onSubmit={handleFormSubmit}>
        <FormComponents
          label="Your Email"
          type="email"
          required
          onChange={handleFormChange}
          name="email"
          value={email}
        />

        <FormComponents
          label="Your Password"
          type="password"
          required
          onChange={handleFormChange}
          name="password"
          value={password}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={signInGoogleUser}>
            <GoogleIcon></GoogleIcon>
            Google Sign In
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/sign-up">Don't have an account? Sign up now!</Link>
          <Link to="/">Go to Homepage</Link>
        </div>
      </form>
    </>
  );
};

export default SignInForm;
