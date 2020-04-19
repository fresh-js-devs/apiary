import React, { useState } from "react";
import "./App.css";

import axios from "axios";

import Template from "./components/Template";
import PlaceForm from "./components/PlaceForm";
import ForecastCard from "./components/ForecastCard";

import styled from "@emotion/styled";

const key = "5a32783cab327da3665110a93ecf2117";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const App = () => {
  const [forecast, setForecast] = useState([]);

  const onGetForecastClick = async (place) => {
    try {
      const { latt, longt } = await axios
        .get(`https://geocode.xyz/${place}?json=1`, "jsonp")
        .then((response) => response.data);

      //cors policy at DarkSky
      const { data } = await axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/${latt},${longt}?units=si`
        )
        .then((response) => response.data.hourly);

      setForecast(data);
    } catch (error) {
      //hack: GeoCode sometimes gives 403 even thought there is no auth, tell the user something nice
      if (error.message.includes("403")) {
        alert("Dotaz nebyl zpracovan, zkuste to prosim znovu.");
      }
    }
  };

  const renderTiles = (data) =>
    data && data.map((frcs) => <ForecastCard key={frcs.time} item={frcs} />);

  return (
    <Template>
      <PlaceForm onGetForecastClick={onGetForecastClick} />
      <Wrapper> {renderTiles(forecast)}</Wrapper>
    </Template>
  );
};

export default App;
