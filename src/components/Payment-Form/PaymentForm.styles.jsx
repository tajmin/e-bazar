import styled from "styled-components";

export const PaymentFormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 2.5rem;

  h2 {
    color: darkslategray;
    margin: 0 0 2.5rem;
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
