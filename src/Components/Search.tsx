import * as React from "react";
import { useState } from "react";
import "../Styles/form.css";
import { useForm } from "../Hooks/useForm";
import FrameworkData from "./FrameworkData";

const Search = (): any => {
  //custom hook
  const { inputs, handleChange } = useForm();
  const [data, setData] = useState<any>([{}]);
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
      console.log(data[0]);
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
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {data[0]._index} - {data[0]._score} -{" "}
          {data[0]._sources.framework_names}
        </>
      )}
      {/* {isLoading ? <>Loading...</> : <FrameworkData data={data} />} */}
      {isError && <>Error connecting...</>}
    </>
  );
};

export default Search;
