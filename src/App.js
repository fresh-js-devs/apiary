import React, { useState } from "react";
import "./App.css";

import axios from "axios";

import Template from "./components/Template";
import PlaceForm from "./components/PlaceForm";
import ForecastCard from "./components/ForecastCard";
import Loading from "./components/atoms/loading/Loading";
import { H1 } from "./components/atoms/Headlines";

import styled from "@emotion/styled";

//just for debug :) , othervise it will be in .env file
const key = "5a32783cab327da3665110a93ecf2117";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const App = () => {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [place, setPlace] = useState("");

  const onGetForecastClick = async (place) => {
    setForecast([]);
    setLoading(true);
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

      setLoading(false);

      setPlace(place);
      setForecast(data);
    } catch (error) {
      //hack: GeoCode sometimes gives 403 even thought there is no auth, tell the user something nice
      if (error.message.includes("403")) {
        setPlace("");
        setLoading(false);
        alert("Občas mi server pošle nepěknou odpověď, zkus to prosím znovu.");
      }
    }
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const renderTiles = (data) =>
    data && data.map((frcs) => <ForecastCard key={frcs.time} item={frcs} />);

  return (
    <Template>
      <PlaceForm onGetForecastClick={onGetForecastClick} />
      {loading ? <Loading /> : <div></div>}
      {!loading && forecast !== null ? (
        <H1 style={{ marginLeft: "5vw" }}>{capitalizeFirstLetter(place)}</H1>
      ) : (
        <div />
      )}
      <Wrapper> {renderTiles(forecast)}</Wrapper>
    </Template>
  );
};

export default App;
