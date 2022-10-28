import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  margin: 2rem 0;
  padding: 0 5rem;
`;

export const Nav = styled.div`
  height: 5.5rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 2px 10px 4px #cfcfcf;
`;
export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  img {
    width: 100px;
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
  padding: 0 15px;
  font-size: 18px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #4dba3c;
    padding: 33px 15px;
    color: #fff;
  }
`;
