import React from "react";
import styled from "@emotion/styled";
import { H1 } from "./atoms/Headlines";
import { P } from "./atoms/Paragraph";

const Base = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #e8f2f5;
`;

const Header = styled.div`
  height: 10vh;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #c2d9e0;
`;
const Footer = styled.div`
  height: 10vh;
  width: 100vw;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #c2d9e0;
`;

const Wrapper = styled.div`
  height: 80vh;
  padding-top: 10vh;
`;

const Template = ({ children }) => {
  return (
    <Base>
      <Header>
        <H1>Weatherio</H1>
      </Header>
      <Wrapper>{children}</Wrapper>
      <Footer>
        <P>
          When life gives you rainy days, wear cute boots and jump in the
          puddles. - random girl
        </P>
      </Footer>
    </Base>
  );
};

export default Template;
