import { useState, useEffect } from "react";

//custom fetch hook for retreiving data
export const useFetch = (
  keyword: string,
  url: string,
  defaultResponse: Object
): any => {
  const [data, setData] = useState<any>(defaultResponse);
  const [query, setQuery] = useState("redux");
  const [urlState, setUrl] = useState(
    "https://deinrgqhvb.execute-api.us-west-1.amazonaws.com/default/getFrameworks"
  );

  async function getFrameworkData(keyword: string, url: string) {
    console.log("Keyword " + keyword);
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          //TODO add this as a .env
          "x-api-key": "a3o8lc8AFUMD2bve9BmH4RKnZMs0qLc84OHMFiIc"
        }
      });

      const data = await response.json();
      setData({ data });
    } catch (e) {
      console.log(e);
    }
  }

  return data;
};
