import * as React from "react";
import "../Styles/framework-data.css";
import { useSpring, animated } from "react-spring";

const FrameworkData = ({ data }: any): any => {
  const props = useSpring({
    to: { opacity: 1, transform: "translate3d(0,0,0)" },
    from: { opacity: 0, transform: "translate3d(0,20px,0)" }
  });

  return (
    <>
      {data ? (
        data.map((framework: any, index: number) => {
          return (
            <div key={index}>
              <animated.div style={props}>
                <li className="framework-list">
                  {framework.name} - {framework.language}
                </li>
              </animated.div>
            </div>
          );
        })
      ) : (
        <p>No results</p>
      )}
    </>
  );
};

export default FrameworkData;
