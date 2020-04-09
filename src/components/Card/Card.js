import React from "react";
import "./Card.css";

import CustomInput from "../atoms/Input/Input";
import SubHeading from "../atoms/Subheading/Subheading";
import SubHeadingPar from "../atoms/Subheading/SubheadingPar";
import StartButton from "../atoms/Button/StartButton";
import CustomError from "../atoms/Subheading/Error";
import Loading from "../atoms/Subheading/Loading";

import Result from "../molecules/Result";

const Card = ({
  ipAddress,
  newIpAddress,
  newPort,
  startTest,
  validationError,
  isOpened,
}) => {
  return (
    <div className="card">
      <SubHeading>🖧 Single Port</SubHeading>
      <div className="card-content">
        <SubHeadingPar>IP address / domain</SubHeadingPar>
        <CustomInput
          placeholder={ipAddress}
          type="text"
          onChange={(e) => newIpAddress(e.target.value)}
        />

        <SubHeadingPar>Port</SubHeadingPar>
        <CustomInput type="number" onChange={(e) => newPort(e.target.value)} />

        <StartButton onClick={() => startTest()}>Start</StartButton>
        {validationError ? (
          <CustomError>{validationError}</CustomError>
        ) : (
          <div></div>
        )}
        {isOpened.isLoading ? <Loading>Testing, please wait...</Loading> : ""}
        {isOpened.result !== "" && !isOpened.isLoading ? (
          <Result
            result={isOpened.result.result}
            port={isOpened.result.port}
            ipAddress={isOpened.result.host}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Card;
