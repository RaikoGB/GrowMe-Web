/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import * as Yup from 'yup';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { Icon } from '@iconify/react';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { motion } from 'framer-motion';
import { useAuthStore } from '../../../hooks/useAuthStore';
import Select from '@mui/material/Select/Select';
import MenuItem from '@mui/material/MenuItem';
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Box,
  Container
} from '@mui/material';

const SingUP: React.FunctionComponent = () => {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { startLogin, CreateUser } = useAuthStore();

  const formik = useFormik({
    initialValues: {
      Nickname: '',
      Gender: 0,
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      setTimeout(() => {
        try {
          CreateUser(values.Nickname, values.email, values.password, values.Gender);
          startLogin(values.email, values.password);
          navigate('/auth/inicio', { replace: true });
        } catch (error) {
          console.log("🚀 ~ file: SingUP.tsx:45 ~ setTimeout ~ error", error)
        }
      }, 2000);
    },
  });

  const { errors, touched, isSubmitting } = formik;

  return (
    <>
      <Container component="main" maxWidth="xs">
        <form onSubmit={formik.handleSubmit}>
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
                  margin="normal"
                  required
                  fullWidth
                  id="Nickname"
                  label="Nickname"
                  name="Nickname"
                  autoComplete="Nickname"
                  onChange={formik.handleChange}
                  value={formik.values.Nickname}
                  error={(formik.touched.Nickname ?? false) && Boolean(formik.errors.Nickname)}
                  helperText={(formik.touched.Nickname ?? false) && formik.errors.Nickname}
                />

                <Select
                  required
                  labelId="Gender"
                  name="Gender"
                  id="Gender"
                  value={formik.values.Gender}
                  label="dificulty"
                  onChange={formik.handleChange}
                  error={(formik.touched.Gender ?? false) && Boolean(formik.errors.Gender)}
                >
                  <MenuItem value={1}>Masculino</MenuItem>
                  <MenuItem value={0}>Femenino</MenuItem>
                  <MenuItem value={2}>Otro</MenuItem>
                </Select>
              </Stack>
              <Stack
                spacing={3}
                component={motion.div}
                initial={{ opacity: 0, y: 40 }}
                animate={animate}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                  autoComplete="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={(formik.touched.email ?? false) && Boolean(formik.errors.email)}
                  helperText={(formik.touched.email ?? false) && formik.errors.email}
                />

                <TextField
                  type={showPassword ? 'text' : 'password'}
                  margin="normal"
                  required
                  fullWidth
                  label="password"
                  id="password"
                  autoComplete="password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
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
                  Registrarse
                </LoadingButton>
              </Box>
            </Stack>
          </Box>
        </form>
      </Container>
    </>
  );
};

export default SingUP;

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

// validaciones front
const validationSchema = Yup.object({
  email: Yup.string()
    .max(30, ' Debe ser un email ')
    .email('No es un formato valido').
    required('Requerido'),
  password: Yup.string()
    .max(12, 'Debe ser de maximo 12 caracteres')
    .min(6, 'La contraseña debe ser de minimo 6 caracteres')
    .required('Requerido')

});