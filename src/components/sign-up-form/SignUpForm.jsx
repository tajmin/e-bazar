import React, { useState } from "react";
import {
  createUserDocFromAuth,
  createUserWithEmail,
} from "../../Utility/Firebase/Firebase";
import Button from "../Button/Button";
import FormComponents from "../Form-components/FormComponents";

const formData = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(formData);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    try {
      const { user } = await createUserWithEmail(email, password);
      await createUserDocFromAuth(user, { displayName });
      setFormFields(formData);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use!");
      } else {
        console.log("Error Creating User: ", error);
      }
    }
  };

  return (
    <>
      <span>Sign up with email </span>
      <form onSubmit={handleFormSubmit}>
        <FormComponents
          label="Your Name"
          type="text"
          required
          onChange={handleFormChange}
          name="displayName"
          value={displayName}
        />

        <FormComponents
          label="Your Email"
          type="email"
          required
          onChange={handleFormChange}
          name="email"
          value={email}
        />

        <FormComponents
          label="Set Password"
          type="password"
          required
          onChange={handleFormChange}
          name="password"
          value={password}
        />

        <FormComponents
          label="Confirm Password"
          type="password"
          required
          onChange={handleFormChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </>
  );
};

export default SignUpForm;
