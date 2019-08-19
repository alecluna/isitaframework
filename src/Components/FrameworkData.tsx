import * as React from "react";

interface IProps {
  searchTerm: string;
}

const FrameworkData = (props: IProps) => <>{props.searchTerm}</>;

export default FrameworkData;
