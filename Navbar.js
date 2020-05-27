import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledNavbar = styled.nav `
    display : flex;
    padding: 10px 10px ;
    margin: 40px;
    background-color: #fff; 
    border-radius: 10px;
`;

export const NavItems = styled.ul`
    list-style: none;
    
`;

export const NavItem = styled(Link)`
    text-decoration: none;
    display: inline;
    padding: 0 20px;
    cursor: pointer;
    color: #ccc;
     
    &:hover {
        color: #000;
    }

    &:active,
    &:focus {
        color: #0ff ;
    }
`;