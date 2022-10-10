import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to top left, #d1e6ed, #4dba3cbb);
  padding: 5rem;
  margin: 0;
  min-height: 90vh;
`;

export const OrderSummaryTextContainer = styled.div`
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #fff;
  width: 50%;

  h2 {
    font-size: 2rem;
    margin: 0;
    letter-spacing: 2px;
    word-spacing: 10px;
    text-transform: uppercase;
  }

  h4 {
    margin: 0;
    line-height: 2.25rem;
    font-weight: normal;
    font-size: 1.2rem;
  }
`;

export const HighlightedSpan = styled.span`
  padding: 0 0.25rem;
  font-weight: 700;
  color: darkgoldenrod;
`;

export const Separator = styled.div`
  margin: 0.75rem auto;
`;

export const OrderContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  padding: 2.5rem;
`;

export const TotalPriceSpan = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  color: #4dba3cbb;
`;
