import React, { useState } from "react";

import styled from "@emotion/styled";

import { Button } from "./atoms/Buttons";
import { Select } from "./atoms/FormFields";

const Wrapper = styled.div`
  height: 15vh;
  width: 50vw;
  background-color: #c2d9e0;
  padding-top: 10vh;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

const PlaceForm = ({ onGetForecastClick }) => {
  const [place, setPlace] = useState("olomouc");

  return (
    <Wrapper>
      <Select
        id="places"
        value={place}
        onChange={(event) => setPlace(event.target.value)}
      >
        <option value="olomouc">Olomouc</option>
        <option value="zlin">Zlin</option>
      </Select>

      <Button onClick={() => onGetForecastClick(place)}>GET FORECAST</Button>
    </Wrapper>
  );
};

export default PlaceForm;
