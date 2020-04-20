import React from "react";
import styled from "@emotion/styled";

import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { toast } from "react-toastify";

toast.configure();

const SearchBarWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const SearchBar = ({ handleChange, mealName, handleSearchMeal }) => {
  return (
    <SearchBarWrapper>
      <Input type="text" onChange={handleChange} value={mealName} />
      <Button onClick={handleSearchMeal}>Search Meal</Button>
    </SearchBarWrapper>
  );
};

export default SearchBar;
