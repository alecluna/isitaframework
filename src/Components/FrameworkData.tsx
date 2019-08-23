import * as React from "react";

const FrameworkData = ({ data }: any): any => (
  <>
    {data.map((framework: any, index: number) => {
      return <li key={index}>{framework._source.framework_name}</li>;
    })}
  </>
);

export default FrameworkData;
