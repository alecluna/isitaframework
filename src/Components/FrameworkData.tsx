import * as React from "react";

const FrameworkData = ({ data }: any): any => (
  <>
    {data ? (
      data.map((framework: any, index: number) => {
        return (
          <li key={index}>
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
