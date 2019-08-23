import * as React from "react";
import { useSpring, animated } from "react-spring";
import Search from "./Components/Search";
import "./Styles/container.css";
import "./Styles/fonts.css";

const App = (): any => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="container">
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
