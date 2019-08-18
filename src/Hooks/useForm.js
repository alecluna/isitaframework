import { useState } from "react";

//custom and reusable form hook
export const useForm = callback => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: [event.target.value]
    }));
  };

  return {
    handleSubmit,
    handleChange,
    inputs
  };
};
