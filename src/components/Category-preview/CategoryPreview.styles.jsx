import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`;

export const TitleText = styled.h2`
  font-size: 30px;
  margin: 0 0 30px;
  padding-bottom: 5px;
  border-bottom: 2px solid #4dba3c;
  letter-spacing: -1px;
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
`;

export const LinkContainer = styled.div`
  margin-top: 30px;
  text-align: end;
`;

export const HyperLink = styled(Link)`
  color: #4dba3c;
  text-decoration: underline;
  font-size: 20px;
  letter-spacing: 1px;
  word-spacing: 5px;
`;
