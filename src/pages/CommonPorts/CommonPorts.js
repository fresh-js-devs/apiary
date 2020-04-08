import React from "react";
import Button from "../../components/atoms/Button/Button";

import { useHistory } from "react-router-dom";

const CommonPorts = () => {
  const { push } = useHistory();

  return (
    <div>
      <Button onClick={() => push("/singleport")}>🖧 Single Port</Button>
      <div>Common Ports</div>
    </div>
  );
};

export default CommonPorts;
