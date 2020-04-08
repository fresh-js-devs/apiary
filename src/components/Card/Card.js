import React from "react";
import "./Card.css";

import CustomInput from "../atoms/Input/Input";
import SubHeading from "../atoms/Subheading/Subheading";
import SubHeadingPar from "../atoms/Subheading/SubheadingPar";
import StartButton from "../atoms/Button/StartButton";

const Card = ({ title, isSingle }) => {
  const singlePort = () => {
    return (
      <div className="card">
        <SubHeading>{title}</SubHeading>
        <div className="card-content">
          <SubHeadingPar>IP address</SubHeadingPar>
          <CustomInput />
          <SubHeadingPar>Port</SubHeadingPar>
          <CustomInput />
          <StartButton>Start</StartButton>
        </div>
      </div>
    );
  };

  const commonPorts = () => {
    return (
      <div className="card">
        <SubHeading>{title}</SubHeading>
        <div className="card-content">
          <SubHeadingPar>IP address</SubHeadingPar>
          <CustomInput />
          <StartButton>Start</StartButton>
        </div>
      </div>
    );
  };

  return isSingle ? singlePort() : commonPorts();
};

export default Card;
