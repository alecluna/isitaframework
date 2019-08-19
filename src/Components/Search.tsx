import * as React from "react";
import { SyntheticEvent } from "react";
import FrameworkData from "./FrameworkData";
import "../Styles/form.css";
import { useForm } from "../Hooks/useForm";

const Search = (): JSX.Element => {
  const onSubmitSearch = (): SyntheticEvent => {
    return inputs.framework;
  };

  const { inputs, handleChange, handleSubmit } = useForm(onSubmitSearch);

  return (
    <>
      <form className="form form--large" onSubmit={handleSubmit}>
        <input
          type="text"
          name="framework"
          className="form--large--input"
          placeholder="Enter a word to see if it is a framework"
          onChange={handleChange}
          value={inputs.framework || ""}
        />
      </form>

      <FrameworkData searchTerm={inputs.framework} />
    </>
  );
};

export default Search;
