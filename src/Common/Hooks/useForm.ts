/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useEffect, useMemo, useState } from 'react';

// todo: export const useForm = (initialForm: = {}, formValidations = {}) forma original, los tipos de datos faltan por ahora son
// investigar hooks de typescript como Useform para realizar este mismo trabajo directo
export const useForm: any = (initialForm: any, formValidations: any) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue as keyof typeof formValidation] !== null)
        return false;
    }

    return true;
  }, [formValidation]);

  function onInputChange(target: any): void {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  }

  function onResetForm(): void {
    setFormState(initialForm);
  }

  function createValidators(): void {
    const formCheckedValues: any[] = [];

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];

      formCheckedValues[`${formField}Valid` as keyof typeof formCheckedValues] =
        fn(formState[formField]) ? null : errorMessage;
    }

    setFormValidation(formCheckedValues);
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,

    ...formValidation,
    isFormValid
  };
};
