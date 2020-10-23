import { useState } from "react"
// recibe un objeto y maneja los eventos, devuelve los campos y reset
export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState)

    const reset = () => {
      setValues(initialState);
    }
    const handleInputChange = ({ target }) => {
        setValues({
          ...values,
          [target.name]: target.value,
        });
      };
      return [values,handleInputChange,reset]
}
