import React from "react";
import Heading from "../atoms/Heading/Heading";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <div className="container">
        <Heading>Port Tester</Heading>
        {children}
      </div>
    </div>
  );
};

export default Layout;
