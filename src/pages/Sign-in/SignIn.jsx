import React from "react";
import {
  FormContainer,
  FormWrapper,
  GlassMorphContainer,
  GlassMorphWrapper,
  SignInContainer,
} from "../../AuthPages.styles";
import SignInForm from "../../components/sign-in-form/SignInForm";
import logo from "../../images/logo.png";

const SignIn = () => {
  return (
    <>
      <SignInContainer>
        <FormWrapper>
          <FormContainer>
            <SignInForm></SignInForm>
          </FormContainer>
        </FormWrapper>
        <GlassMorphWrapper>
          <GlassMorphContainer>
            <img src={logo} alt="e-bazr" />
            <h2>Already have an account?</h2>
            <span>Sign in now and get the best shopping experience!</span>
          </GlassMorphContainer>
        </GlassMorphWrapper>
      </SignInContainer>
    </>
  );
};

export default SignIn;
