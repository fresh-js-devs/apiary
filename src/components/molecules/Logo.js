import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import HeadingOne from "../atoms/HeadingOne";

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  position: left;
  top: 0.7rem;
  left: 15%;
  font-size: 1.6rem;
  font-weight: 700;
  color: #3498db;
  text-shadow: 2px 2px 5px blue;
`;

const Logo = ({ onClick }) => {
  return (
    <LogoWrapper onClick={onClick}>
      <NavLink to="/">Meals list</NavLink>
    </LogoWrapper>
  );
};

export default Logo;
