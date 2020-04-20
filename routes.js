import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import MainPage from "./pages/MainPage";
import MealDetail from "./pages/MealDetail";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/meal/:mealId" component={MealDetail} />
      </Switch>
    </BrowserRouter>
  );
};
