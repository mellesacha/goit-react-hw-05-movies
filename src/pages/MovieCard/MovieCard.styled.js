import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
padding: 0 15px;
max-width: 1200px;`;

export const Card = styled.div`
display: flex;
flex-direction: column;
gap: 15px;`

export const Button = styled(Link)`
display: inline-block;
width: 80px;
padding: 4px 8px;
margin-top: 15px;
text-decoration: none;
border: 1px solid orange;
border-radius: 4px;
text-align: center;
padding-bottom: 6px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
font-weight: 500;
:hover {
    background-color: orange;
    color: white;
}
`
export const ListInfo = styled.ul`
list-style: inside;`

export const LinkInfo = styled(Link)`
text-decoration: none;
`