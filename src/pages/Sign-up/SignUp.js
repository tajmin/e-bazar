import React from "react";
import {
  FormContainer,
  FormWrapper,
  GlassMorphContainer,
  GlassMorphWrapper,
  SignInContainer,
} from "../../AuthPages.styles";
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import logo from "../../images/logo.png";

const SignUp = () => {
  return (
    <>
      <SignInContainer>
        <GlassMorphWrapper>
          <GlassMorphContainer>
            <img src={logo} alt="e-bazr" />
            <h2>Don't have an account?</h2>
            <span>Signing up with E-bazr is super easy!</span>
          </GlassMorphContainer>
        </GlassMorphWrapper>
        <FormWrapper>
          <FormContainer>
            <SignUpForm></SignUpForm>
          </FormContainer>
        </FormWrapper>
      </SignInContainer>
    </>
  );
};

export default SignUp;
