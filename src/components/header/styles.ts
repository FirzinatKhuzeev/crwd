import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderBlock = styled.header``;

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

export const NavigationLink = styled(NavLink)`
    text-decoration: none;
    text-transform: uppercase;
`;

export const Logo = styled(NavLink)`
    text-decoration: none;
    display: block;
    width: 45px;
    height: 45px;
    background-color: rgba(0, 0, 0, 0.07);
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
