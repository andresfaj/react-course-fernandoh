import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { value, name } = target;
    setFormState((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return { ...formState, onInputChange };
};
