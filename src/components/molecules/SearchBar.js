import React from 'react';
import styled from '@emotion/styled';

import Button from '../atoms/Button';
import Input from '../atoms/Input';

const SearchBarWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const SearchBar = ({ handleChange, photoName, handleSearchPhoto }) => {
  return (
    <SearchBarWrapper>
      <Input type='text' onChange={handleChange} value={photoName} />
      <Button onClick={handleSearchPhoto}>Search photos</Button>
    </SearchBarWrapper>
  );
};

export default SearchBar;
