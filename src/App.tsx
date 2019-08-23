import * as React from "react";
import Search from "./Components/Search";
import "./Styles/container.css";
import "./Styles/fonts.css";

const App = (): any => {
  return (
    <div className="container">
      <h1 className="header">
        Is it a <strong>framework</strong>?
      </h1>
      <Search />
    </div>
  );
};

export default App;
