import React from "react";
import { useHistory } from "react-router-dom";

import Logo from "../molecules/Logo";
import Container from "../atoms/Container";

const Layout = ({ children }) => {
  const { push } = useHistory();

  const handleGoToHomepage = () => push("/");

  return (
    <Container>
      <Logo onClick={handleGoToHomepage} />
      {children}
    </Container>
  );
};

export default Layout;
