import * as React from "react";
import { useState } from "react";
import "../Styles/form.css";
import "../Styles/framework-data.css";
import { useForm } from "../Hooks/useForm";
import FrameworkData from "./FrameworkData";

const Search = (): any => {
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
        `https://deinrgqhvb.execute-api.us-west-1.amazonaws.com/default/getFrameworks?q=${input}`,
        {
          method: "GET",
          headers: {
            "x-api-key": `${process.env.REACT_APP_AWS_LAMBDA}`
          }
        }
      );

      if (result.ok) {
        const response = await result.json();
        setData(response);
        console.log(response);
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
      <div className="framework-container">
        {isLoading ? <>Loading...</> : <FrameworkData data={data} />}
        {isError && <>Error connecting...</>}
      </div>
    </>
  );
};

export default Search;
