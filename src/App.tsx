import * as React from "react";
import Search from "./Components/Search";
import "./Styles/container.css";

const App = () => {
  return (
    <div className="container">
      <h1>Is it a framework?</h1>
      <Search />
    </div>
  );
};

export default App;
