import * as React from "react";
import "../Styles/list-item.css";

const ListItem = ({ name, language }: any): JSX.Element => {
  const capitalize = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <div className="list-container">
        <span>{capitalize(name)} </span>
        <span>{capitalize(language)}</span>
      </div>
      <hr
        style={{
          width: window.innerWidth >= 450 ? "450px" : "275px",
          color: "#999",
          borderBottom: ".5px solid rgba(255,255,255,.25)"
        }}
      />
    </>
  );
};

export default ListItem;
