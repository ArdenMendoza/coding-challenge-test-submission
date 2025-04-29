import React from "react";

function useFormFields<T>(initialState: T) {
  const [formFields, setFormFields] = React.useState<T>(initialState);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const resetFormFields = () => {
    setFormFields(initialState);
  };

  return { formFields, handleFieldChange, resetFormFields };
}

export default useFormFields;
