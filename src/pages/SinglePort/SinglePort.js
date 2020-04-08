import React from "react";
import Button from "../../components/atoms/Button/Button";

import { useHistory } from "react-router-dom";
import Card from "../../components/Card/Card";

const SinglePort = () => {
  const { push } = useHistory();

  const title = "Single Port";

  return (
    <div>
      <Button onClick={() => push("/commonports")}>🖧 Common Ports</Button>
      <Card title={title} isSingle={true}></Card>
    </div>
  );
};

export default SinglePort;
