import * as React from "react";

const ListItem = ({ name, language }: any): JSX.Element => {
  const capitalize = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <div className="list-container">
        <>{capitalize(name)} - </>
        <>{capitalize(language)}</>
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
