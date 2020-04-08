import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import SinglePort from "./pages/SinglePort/SinglePort";
import CommonPorts from "./pages/CommonPorts/CommonPorts";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SinglePort} />
        <Route exact path="/singleport" component={SinglePort} />
        <Route exact path="/commonports" component={CommonPorts} />
      </Switch>
    </BrowserRouter>
  );
};
