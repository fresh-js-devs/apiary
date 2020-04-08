import React from "react";
import Button from "../../components/atoms/Button/Button";

import { useHistory } from "react-router-dom";

const SinglePort = () => {
  const { push } = useHistory();

  return (
    <div>
      <Button onClick={() => push("/commonports")}>🖧 Common Ports</Button>
      <div>Single Port</div>
    </div>
  );
};

export default SinglePort;
