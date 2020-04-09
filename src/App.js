import React from "react";
import "./App.css";

import Layout from "./components/Layout/Layout";
import SinglePort from "./pages/SinglePort/SinglePort";

function App() {
  return (
    <Layout>
      <SinglePort />
    </Layout>
  );
}

export default App;
