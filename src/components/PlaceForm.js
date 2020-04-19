import React, { useState } from "react";

import styled from "@emotion/styled";

import { Button } from "./atoms/Buttons";
import { Select, Input } from "./atoms/FormFields";
import { Label } from "./atoms/TextFields";

const Wrapper = styled.div`
  height: 25vh;
  width: 50vw;
  background-color: #c2d9e0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  align-self: center;
  justify-self: flex-start;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const PlaceForm = ({ onGetForecastClick }) => {
  const [place, setPlace] = useState("olomouc");
  const [customCity, setCustomCity] = useState("");

  const resolveCity = () => {
    const city = customCity !== "" ? customCity : place;
    onGetForecastClick(city);
  };

  return (
    <Wrapper>
      <Label>Vyber město:</Label>
      <Select
        id="places"
        value={place}
        onChange={(event) => setPlace(event.target.value)}
      >
        <option value="olomouc">Olomouc</option>
        <option value="zlin">Zlin</option>
      </Select>

      <Label>Nebo zadej vlastní:</Label>
      <Input
        placeholder="e.g. Gotham City"
        onChange={(event) => setCustomCity(event.target.value)}
      ></Input>
      <Button onClick={() => resolveCity()}>UKAŽ POČÁSKO</Button>
    </Wrapper>
  );
};

export default PlaceForm;
