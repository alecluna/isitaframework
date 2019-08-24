import * as React from "react";
import { useState } from "react";
import "../Styles/form.css";
import { useForm } from "../Hooks/useForm";
import FrameworkData from "./FrameworkData";

const Search = (): any => {
  //custom hook
  const intitialState: Object[] = [];
  const { inputs, handleChange } = useForm();
  const [data, setData] = useState<any>(intitialState);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const getData = async (input: string) => {
    setError(false);
    setLoading(true);

    try {
      const result = await fetch(
        `https://deinrgqhvb.execute-api.us-west-1.amazonaws.com/default/getFrameworks?queryString=${input}`,
        {
          method: "GET",
          headers: {
            //TODO add this as a .env
            "x-api-key": "a3o8lc8AFUMD2bve9BmH4RKnZMs0qLc84OHMFiIc"
          }
        }
      );
      if (result.ok) {
        const response = await result.json();
        setData(response);
      } else {
        setError(true);
      }
    } catch (error) {
      console.trace(error);
      setError(true);
    }
    setLoading(false);
  };

  return (
    <>
      <form
        className="form form--large"
        onSubmit={e => {
          e.preventDefault();
          getData(inputs.framework);
        }}
      >
        <label>
          <input
            type="text"
            name="framework"
            className="form--large--input"
            placeholder="Let's find out..."
            onChange={handleChange}
            value={inputs.framework || ""}
          />
        </label>
      </form>
      {isLoading ? <>Loading...</> : <FrameworkData data={data} />}
      {isError && <>Error connecting...</>}
    </>
  );
};

export default Search;
