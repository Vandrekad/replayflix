import { useState } from 'react';

export default function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(informacoesInput) {
    const { name, value } = informacoesInput.target;

    setValue(name, value);
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    setValues,
    handleChange,
    clearForm,
  };
}
