import React, { useState } from "react";
import "./App.css";

import axios from "axios";

import Template from "./components/Template";
import PlaceForm from "./components/PlaceForm";
import ForecastCard from "./components/ForecastCard";
const key = "5a32783cab327da3665110a93ecf2117";

const App = () => {
  const [forecast, setForecast] = useState([]);

  const onGetForecastClick = async (place) => {
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
    console.log(forecast);
  };

  const renderTiles = data =>
  data &&
  data.map(frcs => (
    <ForecastCard
      key={frcs.time}
      item={frcs}
    />
  ));

  return (
    <Template>
      <PlaceForm onGetForecastClick={onGetForecastClick} />
      {renderTiles(forecast)}
    </Template>
  );
};

export default App;
