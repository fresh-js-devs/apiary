import React from "react";
import ResultText from "../atoms/Subheading/Result";

const Result = ({ result, ipAddress, port }) => {
  const opened = () => {
    return (
      <ResultText>
        <span role="img" aria-label="lock-opened">
          🔴
        </span>{" "}
        Port {port} on host {ipAddress} is opened.
      </ResultText>
    );
  };

  const closed = () => {
    return (
      <ResultText>
        <span role="img" aria-label="lock-closed">
          🟢
        </span>{" "}
        Port {port} on host {ipAddress} is closed.
      </ResultText>
    );
  };

  return result ? opened() : closed();
};

export default Result;
