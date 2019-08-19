import * as React from "react";
import FrameworkData from "./FrameworkData";
import "../Styles/form.css";
import { useForm } from "../Hooks/useForm";
import { useFetch } from "../Hooks/useFetch";

const Search = (): JSX.Element => {
  const { inputs, handleChange } = useForm();

  const apiURL =
    "https://deinrgqhvb.execute-api.us-west-1.amazonaws.com/default/getFrameworks";

  const fetchResponse = useFetch(apiURL, { isLoading: true, data: null });

  if (fetchResponse.isLoading === true || fetchResponse.data === null) {
    return <>Loading...</>;
  }

  const response: JSX.Element = fetchResponse.data.Items.map(
    (items: any, index: number) => {
      return <li key={index}> {items.frameworkID} </li>;
    }
  );

  return (
    <>
      <form className="form form--large" onSubmit={() => fetchResponse}>
        <input
          type="text"
          name="framework"
          className="form--large--input"
          placeholder="Enter a word to see if it is a framework"
          onChange={handleChange}
          value={inputs.framework || ""}
        />
      </form>
      <FrameworkData searchTerm={response} />
    </>
  );
};

export default Search;
