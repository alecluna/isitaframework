import * as React from "react";
import { useSpring, animated } from "react-spring";
import DarkModeToggle from "./Components/DarkMode/DarkModeToggle";
import Search from "./Components/Search";
import "./Styles/container.css";
import "./Styles/fonts.css";
import "./Styles/darkmode.css";

const App = (): any => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="container">
      <DarkModeToggle />
      <animated.div style={props}>
        <h1 className="header">
          Is it a <strong>framework</strong>?
        </h1>
        <Search />
      </animated.div>
    </div>
  );
};

export default App;
