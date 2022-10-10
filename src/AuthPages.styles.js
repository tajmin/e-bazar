import styled from "styled-components";
import signInImg from "./images/sign-up-in.jpg";

export const SignInContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const FormWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 500px;
  span {
    padding-bottom: 5px;
    border-bottom: 3px solid #4dba3c;
  }
`;

export const GlassMorphWrapper = styled.div`
  background-image: linear-gradient(
      to top,
      rgba(77, 186, 60, 0.7),
      rgba(255, 255, 255, 0.32)
    ),
    url(${signInImg});
  width: 40%;
  height: 100%;
  background-position: left top;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const GlassMorphContainer = styled.div`
  width: 85%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.35);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.29);

  h2 {
    font-size: 40px;
    color: #4dba3c;
  }

  span {
    font-size: 20px;
    color: #000;
    letter-spacing: 1px;
  }
`;
