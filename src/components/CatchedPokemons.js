import React from "react";
import styled from 'styled-components';


const StyledType = styled.div`
  width: 50%;
  margin-top: 15px;
  color: whitesmoke;
  text-decoration: none;
  border: 5px solid rgba(50 36 44 / 30%);    
  border-radius: 20px;           
  align-items: center;        
  padding: 15px;
  text-align: center;
  background-color: rgba(81 51 68 / 65%);
  display: flex;
  
`;

const Button = styled.button`
  color: white;
  font-size: 7px;
  font-weight: bold;
  border: none;
  border-radius: 1rem;
  background-color: rgba(200 0 126 / 80%);
  margin-left: auto;
  outline: none;
  &:active {
  background-color: rgba(200 0 126 / 70%);
  box-shadow: 0 2px #666;
  transform: translateY(1px);
}
`;


const CatchedPokemons = (props) => {
    
  if (props.catchedPokemonsList.length > 0) {
    return props.catchedPokemonsList.map((name) => (
      <StyledType key={name}>
        <div>{name.charAt(0).toUpperCase() + name.slice(1)}</div>
        <Button onClick={() => props.clickOnDelete(name)}>X</Button>
      </StyledType>
    ));
  } else return (
  <StyledType>
    No catched pokemons...
  </StyledType>
  );
  
};

export default CatchedPokemons;
