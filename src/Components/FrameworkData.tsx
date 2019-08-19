import * as React from "react";

interface IProps {
  searchTerm: JSX.Element;
}

const FrameworkData = (props: IProps) => <>{props.searchTerm}</>;

export default FrameworkData;
