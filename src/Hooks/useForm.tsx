import { useState, SyntheticEvent } from "react";

//custom and reusable form hook
export const useForm = (callback: any): any => {
  const [inputs, setInputs] = useState<Object | string>({});

  const handleSubmit = (event: SyntheticEvent) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleChange = (event: SyntheticEvent) => {
    event.persist();
    setInputs((inputs: any) => ({
      ...inputs,
      [(event.target as HTMLButtonElement).name]: [
        (event.target as HTMLButtonElement).value
      ]
    }));
  };

  return {
    handleSubmit,
    handleChange,
    inputs
  };
};
