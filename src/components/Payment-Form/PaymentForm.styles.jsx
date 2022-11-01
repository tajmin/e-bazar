import styled from "styled-components";

export const PaymentFormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;

  h4 {
    margin: 0 0 2.5rem;
    font-size: 24px;
    font-weight: normal;
    color: #474252;
    word-spacing: 5px;
  }

  button {
    margin-left: auto;
    margin-top: 2.5rem;
  }
`;

export const FormWrap = styled.form`
  width: 100%;
  margin: 0 auto;
`;
