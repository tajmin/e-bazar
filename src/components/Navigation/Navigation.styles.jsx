import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  padding: 0 5rem;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 175px;
  img {
    width: 100%;
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
