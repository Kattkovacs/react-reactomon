import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';


const LinkContainer = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;

`;

const StyledLink = styled(Link)`
  color: white;
  font-weight: bold;
  padding: 1rem 1rem 1rem 1rem;
  border: 1px solid var(--color-blue);
  margin: 0.5rem;
  border-bottom-width: 3px;
  border-radius: 5rem;
  text-decoration: none;
  position: relative;
  border-color: rgba(200, 200, 0, 1);
  background-color: rgba(200 0 126 / 50%);
  
`;

const Navbar = (props) => {

  return (
    <LinkContainer>
      <StyledLink to="/" onClick={() => props.handleOnClick("")}>Home</StyledLink>
      <StyledLink to="/pokemons" onClick={() => props.handleOnClick("")}>Pokemons</StyledLink> 
      <StyledLink to="/types" onClick={() => props.handleOnClick("")}>Types</StyledLink>
    </LinkContainer>
  );
};

export default Navbar;
