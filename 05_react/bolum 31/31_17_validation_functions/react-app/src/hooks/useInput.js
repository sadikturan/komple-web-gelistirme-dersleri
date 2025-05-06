import { useState } from "react";

export default function useInput(initialValue, validationFn) {
  const [value, setValue] = useState(initialValue);
  const [isEdited, setIsEdited] = useState(false);

  const isValid = validationFn(value);

  function handleInputBlur() {
    setIsEdited(true);
  }

  function handleInputChange(e) {
    setValue(e.target.value);
    setIsEdited(false);
  }

  return {
    value,
    handleInputBlur,
    handleInputChange,
    hasError: isEdited && !isValid,
  };
}
