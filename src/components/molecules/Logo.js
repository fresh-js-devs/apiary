import React from "react";
import styled from "@emotion/styled";

import Log from "../atoms/Log";
import Logoo from "../atoms/logo.png";

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Logo = ({ onClick }) => {
  return (
    <LogoWrapper onClick={onClick}>
      <Log src={Logoo} alt="Logo" />
    </LogoWrapper>
  );
};

export default Logo;
