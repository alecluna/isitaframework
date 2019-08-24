import * as React from "react";

const FrameworkData = ({ data }: any): any => (
  <>
    {data ? (
      data.map((framework: any, index: number) => {
        return (
          <li key={index}>
            {framework._index} - {framework._score} -
            {framework._source.framework_name} -{framework._source.platform}
          </li>
        );
      })
    ) : (
      <p>No results</p>
    )}
  </>
);

export default FrameworkData;
