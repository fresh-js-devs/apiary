import React from "react";
import Heading from "../atoms/Heading/Heading";

import Note from "../atoms/Subheading/Note";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <div className="container">
        <Heading>Port Tester Tool</Heading>
        {children}
        <Note>
          Please note that first request may take longer, because Dyno is
          sleeping.{" "}
          <span role="img" aria-label="sleep">
            😴
          </span>
        </Note>
      </div>
    </div>
  );
};

export default Layout;
