/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import * as Yup from 'yup';
import React, { useState } from 'react';

import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { Icon } from '@iconify/react';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { motion } from 'framer-motion';
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Box,
  NativeSelect,
  Container
} from '@mui/material';

const easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16
  }
};

const SingUP: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const SignupSchema = Yup.object().shape({
    Nickname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First name required'),
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      Nickname: '',
      Gender: '',
      email: '',
      password: ''
    },
    validationSchema: SignupSchema,
    onSubmit: () => {
      setTimeout(() => {
        // setAuth(true);
        navigate('/', { replace: true });
      }, 2000);
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <>
      <Container component="main" maxWidth="xs">
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <CssBaseline />
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 60 }}
              animate={animate}
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Registrarse
              </Typography>
              <br />
              <Stack spacing={3}>
                <Stack
                  component={motion.div}
                  initial={{ opacity: 0, y: 60 }}
                  animate={animate}
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                >
                  <TextField
                    fullWidth
                    label="Nickname"
                    {...getFieldProps('Nickname')}
                    error={Boolean(touched.Nickname && errors.Nickname)}
                    helperText={touched.Nickname && errors.Nickname}
                    inputProps={{
                      name: 'Nickname',
                      id: 'NicknameId'
                    }}
                  />

                  <NativeSelect
                    defaultValue={30}
                    Label="Gender"
                    {...getFieldProps('Gender')}
                    inputProps={{
                      name: 'Gender',
                      id: 'GenderId'
                    }}
                    error={Boolean(touched.Gender && errors.Gender)}
                    // @ts-expect-error
                    helperText={touched.Gender && errors.Gender}
                  >
                    <option value={'M'}>Masculino</option>
                    <option value={'F'}>Femenino</option>
                    <option value={'N'}>Otro</option>
                  </NativeSelect>
                </Stack>

                <Stack
                  spacing={3}
                  component={motion.div}
                  initial={{ opacity: 0, y: 40 }}
                  animate={animate}
                >
                  <TextField
                    fullWidth
                    autoComplete="email"
                    type="email"
                    label="Email address"
                    {...getFieldProps('email')}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />

                  <TextField
                    fullWidth
                    autoComplete="current-password"
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    {...getFieldProps('password')}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={() => setShowPassword((prev) => !prev)}
                          >
                            <Icon
                              icon={
                                showPassword
                                  ? 'eva:eye-fill'
                                  : 'eva:eye-off-fill'
                              }
                            />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </Stack>

                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={animate}
                >
                  <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                  >
                    Sign up
                  </LoadingButton>
                </Box>
              </Stack>
            </Box>
          </Form>
        </FormikProvider>
      </Container>
    </>
  );
};

export default SingUP;
