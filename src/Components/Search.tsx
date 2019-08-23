import * as React from "react";
import { useState, useEffect } from "react";
import FrameworkData from "./FrameworkData";
import "../Styles/form.css";
import { useForm } from "../Hooks/useForm";

const Search = (): JSX.Element => {
  //custom hook
  const { inputs, handleChange } = useForm();
  const [data, setData] = useState(null);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  const getData = async (input: string) => {
    setError(false);
    setLoading(true);

    setUrl(
      `https://deinrgqhvb.execute-api.us-west-1.amazonaws.com/default/getFrameworks?queryString=${input}`
    );

    try {
      const result = await fetch(url, {
        method: "GET",
        headers: {
          //TODO add this as a .env
          "x-api-key": "a3o8lc8AFUMD2bve9BmH4RKnZMs0qLc84OHMFiIc"
        }
      });
      const response = await result.json();
      setData(response);
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setLoading(false);
  };

  return (
    <>
      <form
        className="form form--large"
        onSubmit={e => {
          getData(inputs.framework);
          e.preventDefault();
        }}
      >
        <input
          type="text"
          name="framework"
          className="form--large--input"
          placeholder="Enter a word to see if it is a framework"
          onChange={handleChange}
          value={inputs.framework || ""}
        />
      </form>
      {isLoading ? <>Loading...</> : <FrameworkData searchTerm={data} />}
      {isError && <>Error connecting...</>}
    </>
  );
};

export default Search;
