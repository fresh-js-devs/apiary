import React from 'react';
import styled from '@emotion/styled';


import ImageDiv from '../atoms/ImageDiv.js';
import Header from './Header';
import Form from './Form';


const SearchBarWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  text-align: center;
  justify-content: space-around;
  cursor: pointer;
`;

const SearchBar = ({ onClick }) => {
  return (
    <ImageDiv>

      <SearchBarWrapper onClick={onClick}>
        <Header />
        <Form />
      </SearchBarWrapper>
    </ImageDiv>
  );
};

export default SearchBar;
