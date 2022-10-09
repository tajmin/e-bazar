import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 170px;
  width: auto;
  height: 50px;
  letter-spacing: 1px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 16px;
  background-color: #4dba3c;
  color: white;
  text-transform: uppercase;
  font-family: "Dosis", sans-serif;
  font-weight: bolder;
  border: 1px solid #4dba3c;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms ease all;

  &:hover {
    background-color: white;
    color: #4dba3c;
  }
`;

export const GoogleButton = styled(BaseButton)`
  min-width: 230px;
  background-color: #4285f4;
  color: white;
  justify-content: space-around;
  align-items: center;

  &:hover {
    background-color: #155dd1;
    border: 1px solid #4285f4;
    color: white;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: #4dba3c;

  &:hover {
    background-color: #4dba3c;
    color: white;
    border: none;
  }
`;

export const PaymentButton = styled(BaseButton)`
  background-color: black;
  color: white;
  border: 1px solid black;

  &:hover {
    background-color: white;
    color: black;
  }
`;
