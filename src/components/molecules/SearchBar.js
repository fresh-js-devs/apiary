import React from 'react';
import styled from '@emotion/styled';

import Button from '../atoms/Button';
import Input from '../atoms/Input';

const SearchBarWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const SearchBar = ({ handleChange, cityName, handleSearchWeather }) => {
  return (
    <SearchBarWrapper>
      <Input type='text' onChange={handleChange} value={cityName} />
      <Button onClick={handleSearchWeather}>GET Weather</Button>
    </SearchBarWrapper>
  );
};

export default SearchBar;
