import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Table, Button } from "reactstrap";
import axios from "axios";


function Countries() {
  useEffect(() => {
    fetchItems();
  }, []); //

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const result = await axios(
        `https://coronavirus-19-api.herokuapp.com/countries/`
      );
      setItems(result.data);
      console.log(items);
    } catch ({ message }) {
      console.log(message);
    }
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Total Cases</th>
            <th>Total Deaths</th>
            <th>Total Recovered</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.country}>
                <td>{item.country}</td>
                <td>{item.cases}</td>
                <td>{item.deaths}</td>
                <td>{item.recovered}</td>
                <td><Link to={`/countries/${item.country}`} ><Button> Detail </Button></Link></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Countries;
