import React from "react";
import "./App.css";

import Routes from "./routes";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

export default App;
