
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { motion } from "framer-motion";
import Typography from '@mui/material/Typography';

const RecuperarPWD: React.FunctionComponent = () => {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 60 }}
          animate={animate}
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Recuperar Contraseña
          </Typography>
          <Box
            sx={{ mt: 1 }}
          >
            <Formik
              initialValues={{
                password: '',
              }}

              onSubmit={(event) => {
              }}
              validationSchema={
                Yup.object({
                  email: Yup.string()
                    .max(30, ' Debe ser un email ')
                    .email('No es un formato valido').
                    required('Requerido'),
                  password: Yup.string()
                    .max(12, 'Debe ser de maximo 12 caracteres')
                    .min(6, 'La contraseña debe ser de minimo 6 caracteres')
                    .required('Requerido')

                })
              }
            >
              {
                (formik) => (
                  <Form>
                    <label htmlFor="password"> Contraseña </label>
                    <Field name="password" type="password" />
                    <ErrorMessage name='password' component="span" />

                    <button type='submit'> Boton </button>
                  </Form>
                )}
            </Formik>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default RecuperarPWD

const easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};