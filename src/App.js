import React from "react";
import "./App.css";
import Nav from "./Nav";
import Countries from "./Countries"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import axios from "axios";
import { Table } from "reactstrap";
import { useState, useEffect } from "react";
import {
  CardText,
  Badge,
} from "reactstrap";
import { Alert } from "reactstrap";

function App() {
  useEffect(() => {
    fetchItem();
  }, []); //

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    try {
      const result = await axios(
        `https://coronavirus-19-api.herokuapp.com/countries/world`
      );
      setItem(result.data);
      console.log(item);
    } catch ({ message }) {
      console.log(message);
    }
  };

  const Home = () => (
    <div>
      <h1>Coronavirus in the {item.country}</h1>
      <Table>
        <tb>
          <CardText>
            <Alert color="secondary">
              <b>Cases: </b>
              {item.cases}{" "}
              <Badge color="warning">{item.todayCases} today</Badge>
            </Alert>
          </CardText>
          <CardText>
            <Alert color="secondary">
              <b>Deaths: </b>
              {item.deaths}{" "}
              <Badge color="warning">{item.todayDeaths} today</Badge>
            </Alert>
          </CardText>
          <CardText>
            <Alert color="secondary">
              <b>Recovered: </b>
              {item.recovered}
            </Alert>
          </CardText>
          <CardText>
            <Alert color="secondary">
              <b>Active: </b>
              {item.active}
            </Alert>
          </CardText>
          <CardText>
            <Alert color="secondary">
              <b>Critical: </b>
              {item.critical}
            </Alert>
          </CardText>
          <CardText>
            <Alert color="secondary">
              <b>Cases per one milion: </b>
              {item.casesPerOneMillion}
            </Alert>
          </CardText>
          <CardText>
            <Alert color="secondary">
              <b>Deaths per one milion: </b>
              {item.deathsPerOneMillion}
            </Alert>
          </CardText>
        </tb>
      </Table>
    </div>
  );

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/countries" exact component={Countries} />
          <Route path="/countries/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
