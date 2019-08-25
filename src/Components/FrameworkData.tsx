import * as React from "react";
import "../Styles/framework-data.css";

const FrameworkData = ({ data }: any): any => (
  <>
    {data ? (
      data.map((framework: any, index: number) => {
        return (
          <li className="framework-list" key={index}>
            {framework.framework_name} - {framework.platform}
          </li>
        );
      })
    ) : (
      <p>No results</p>
    )}
  </>
);

export default FrameworkData;
