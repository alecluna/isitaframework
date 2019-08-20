import { useState, SyntheticEvent } from "react";

//custom and reusable event handler hook for our form
export const useForm = (): any => {
  const [inputs, setInputs] = useState<Object | string>({});

  const handleChange = (event: SyntheticEvent): void => {
    event.persist();
    setInputs((inputs: any) => ({
      ...inputs,
      [(event.target as HTMLButtonElement).name]: [
        (event.target as HTMLButtonElement).value
      ]
    }));
  };

  return {
    handleChange,
    inputs
  };
};
