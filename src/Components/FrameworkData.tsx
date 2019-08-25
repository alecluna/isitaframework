import * as React from "react";
import "../Styles/framework-data.css";
import { useSpring, animated } from "react-spring";

const FrameworkData = ({ data }: any): any => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <>
      {data ? (
        data.map((framework: any, index: number) => {
          return (
            <div key={index}>
              <animated.div style={props}>
                <li className="framework-list">
                  {framework.framework_name} - {framework.platform}
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
