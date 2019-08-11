import React from "react";
import form from "../Styles/form";

const Search = () => {
  return (
    <>
      <div>
        <input
          style={form.textArea}
          placeholder="Enter a word to see if it is a framework"
        />
      </div>
    </>
  );
};

export default Search;
