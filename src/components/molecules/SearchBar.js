import React from 'react';
import styled from '@emotion/styled';

import Button from '../atoms/Button';
import Input from '../atoms/Input';

const SearchBarWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const SearchBar = ({ handleChange, pokemonName, handleSearchPokemon }) => {
  return (
    <SearchBarWrapper>
      <Input type='text' onChange={handleChange} value={pokemonName} />
      <Button onClick={handleSearchPokemon}>GET Weather forecast</Button>
    </SearchBarWrapper>
  );
};

export default SearchBar;
