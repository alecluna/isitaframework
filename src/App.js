import React from "react";
import Search from "./Components/Search";
import container from "./Styles/container";
import "./App.css";

const App = () => {
  return (
    <div style={container.container}>
      <h1 style={{ paddingBottom: 50 }}>Is it a framework?</h1>
      <Search />
    </div>
  );
};

export default App;
