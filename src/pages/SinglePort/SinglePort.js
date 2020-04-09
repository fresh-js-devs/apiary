import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";

const SinglePort = () => {
  useEffect(() => {
    getIpAddress();
  }, []);

  const [ipAddress, setIpAddress] = useState({
    ipAddress: "x.x.x.x",
    error: "",
  });
  const [port, setPort] = useState();
  const [validationError, setValidationError] = useState("");
  const [isOpened, setIsOpened] = useState({
    isLoading: false,
    error: "",
    result: "",
  });

  const portTestUrl = "https://port-tester.herokuapp.com/api/singleport";
  const getMyIpUrl = "https://ip.seeip.org/json";

  const getIpAddress = async () => {
    try {
      const result = await axios(getMyIpUrl);
      setIpAddress({ ipAddress: result.data.ip });
    } catch ({ message }) {
      setIpAddress({ ipAddress: "x.x.x.x", error: message });
    }
  };

  const startTest = async () => {
    try {
      if (!port || !ipAddress.ipAddress) {
        setValidationError("Please, enter valid values.");
        return;
      }

      setValidationError("");

      setIsOpened({ isLoading: true });

      const result = await axios.post(portTestUrl, {
        host: ipAddress.ipAddress,
        port,
      });

      setIsOpened({ isLoading: false, result: result.data });
    } catch ({ message }) {
      setIpAddress({ ipAddress: "x.x.x.x", error: message });
    }
  };

  const newIpAddress = (value) => {
    setIpAddress({ ipAddress: value });
  };

  const setNewPort = (value) => setPort(value);

  return (
    <div>
      <Card
        ipAddress={ipAddress.ipAddress}
        newIpAddress={newIpAddress}
        newPort={setNewPort}
        startTest={startTest}
        validationError={validationError}
        isOpened={isOpened}
      ></Card>
    </div>
  );
};

export default SinglePort;
