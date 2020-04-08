import React from "react";
import Button from "../../components/atoms/Button/Button";

import { useHistory } from "react-router-dom";
import Card from "../../components/Card/Card";

const CommonPorts = () => {
  const { push } = useHistory();

  const title = "Common Ports";

  return (
    <div>
      <Button onClick={() => push("/singleport")}>🖧 Single Port</Button>
      <Card title={title} isSingle={false}></Card>
    </div>
  );
};

export default CommonPorts;
