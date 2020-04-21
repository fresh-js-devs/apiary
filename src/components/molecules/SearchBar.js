import React from "react";
import styled from "@emotion/styled";

import Button from "../atoms/Button";
import Input from "../atoms/Input";

const SearchBarWrapper = styled.div`
  display: flex;
`;

const SearchBar = ({ handleChange, BookName, handleSearchBook }) => {
  return (
    <SearchBarWrapper>
      <Input type="text" onChange={handleChange} value={BookName} />
      <Button onClick={handleSearchBook}>Search Book</Button>
    </SearchBarWrapper>
  );
};

export default SearchBar;
