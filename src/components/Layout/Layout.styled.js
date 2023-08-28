import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`

font-size: 18px;
border-bottom: 1px solid #000;
box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);`

export const Container = styled.div`
padding: 0 15px;
max-width: 1200px;`

export const List = styled.ul`
display: flex;
gap: 20px;
list-style: none;`

export const NavItemLink = styled(NavLink)`
display: inline-block;
padding-top: 8px;
padding-bottom: 8px;
color: black;
&.active {
  color: orange;
};
text-decoration: none;
font-weight: bold;
`