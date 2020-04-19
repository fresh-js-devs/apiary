import React from "react";
import "./App.css";

import Template from "./components/Template";
import PlaceForm from "./components/PlaceForm";

const App = () => {
  const onGetForecastClick = (option) => console.log(option);

  return (
    <Template>
      <PlaceForm onGetForecastClick={onGetForecastClick} />
    </Template>
  );
};

export default App;
