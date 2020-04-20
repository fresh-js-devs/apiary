import React from "react";

import styled from "@emotion/styled";

import { H4, H3 } from "./atoms/Headlines";
import { P } from "./atoms/TextFields";

const Card = styled.div`
  height: fit-content;
  width: 350px;
  border: 2px solid #699faf;
  background-color: #e8f2f5;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
`;

const Time = styled.div`
  box-sizing: border-box;
  margin-top: auto;
  margin-bottom: auto;
  padding-right: 20px;
  padding-left: 40px;
  padding-bottom: 20px;
`;
const Description = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  box-sizing: border-box;
  padding-right: 20px;
  padding-left: 20px;
`;

const Nums = styled.div`
  box-sizing: border-box;
  padding-right: 20px;
  padding-left: 20px;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const SvgWrapper = styled.div`
  width: 80px;
  height: 80px;
`;
const Svg = styled.img`
  box-sizing: border-box;
  margin-right: -20px;
  margin-top: -20px;
`;

const ForecastCard = ({ item }) => {
  const date = `${new Date(item.time * 1000).getUTCHours()}:00`;

  const path = `${process.env.PUBLIC_URL}/icons/${item.icon}.svg`;
  console.log(item.icon);
  console.log(path);
  return (
    <Card>
      <Row>
        <Time>
          <H3>{date}</H3>
        </Time>
          <Svg src={path} alt={item.icon}></Svg>
  
      </Row>
      <Description>
        <H4>{item.summary}</H4>
      </Description>
      <Row>
        <Nums>
          <P>Teplotka: {item.temperature}°C</P>
        </Nums>

        <Nums>
          <P>Vlhkost: {Math.floor(item.humidity * 100)}%</P>
        </Nums>
      </Row>
    </Card>
  );
};
export default ForecastCard;
