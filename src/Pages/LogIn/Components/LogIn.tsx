import React from 'react';
import { Formik , Form , Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {
  Container
} from '@mui/material';
import { useAuthStore } from '../../../hooks/useAuthStore';

export const LogIn: React.FunctionComponent = () => {

  const { startLogin  } = useAuthStore()

  return (
    
    <Container component="main" maxWidth="xs">
      
      <h1> LOGIN </h1>

<Formik
    initialValues={{
        email : '',
        password : '',
    }}

    onSubmit = { ( event ) =>{
      console.log( event.email , event.password , ' DESDE LOGIN' )
      startLogin( event.email , event.password )

    }}
    validationSchema = {
        Yup.object({
            email   : Yup.string()
                        .max(30, ' Debe ser un email ')
                        .email('No es un formato valido').
                        required('Requerido'),
            password : Yup.string()
                        .max(12 , 'Debe ser de maximo 12 caracteres')
                        .min(6 ,'La contraseña debe ser de minimo 6 caracteres')
                        .required('Requerido')

        })
    }
>
    {
    (formik) => (
    <Form>
        <label htmlFor="email"> Email </label>
        <Field name = "email" type = "text"/>
        <ErrorMessage name='email' component="span"/>

        <label htmlFor="password"> Contraseña </label>
        <Field name = "password" type = "password"/>
        <ErrorMessage name='password' component="span"/>

        <button type='submit'> Boton </button>
    </Form>                
    )}

</Formik>

    </Container>
  );
};