import { useState, useEffect } from "react";

//TODO fix: add type to http response later
interface IHttpResponse<T> extends Response {
  parsedBody?: T;
}

//custom fetch hook for retreiving data from AWS DynamoDB
export const useFetch = (url: string, defaultResponse: Object): any => {
  const [data, setData] = useState<any>(defaultResponse);

  async function getFrameworkData(url: string) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          //TODO add this as a .env
          "x-api-key": "a3o8lc8AFUMD2bve9BmH4RKnZMs0qLc84OHMFiIc"
        }
      });
      const data = await response.json();
      setData({ isLoading: false, data });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getFrameworkData(url);
  }, [url]);

  return data;
};
