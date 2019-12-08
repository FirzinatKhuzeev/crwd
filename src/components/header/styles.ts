import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderBlock = styled.header`
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
`;

export const Li = styled.li`
  display: inline-block;
  padding: 10px 15px;
  text-decoration: none;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  display: block;
  color: black;
  width: 45px;
  height: 45px;
  background-color: rgba(0,0,0,.07);
  border-radius: 50%;
  position: relative;

  &:before {
    content: 'CRWD';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%);
  }
`;
