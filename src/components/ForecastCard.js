import React from "react";

import styled from "@emotion/styled";

import { H4 } from "./atoms/Headlines";
import { P } from "./atoms/TextFields";

const Card = styled.div`
  height: 150px;
  width: 350px;
  border: 2px solid #699faf;
  background-color: #e8f2f5;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ForecastCard = ({ item }) => {
  var date = new Date(item.time * 1000).getUTCHours();

  return (
    <Card>
      <H4>{item.summary}</H4>
      <P>{item.temperature} °C</P>
    </Card>
  );
};
export default ForecastCard;
