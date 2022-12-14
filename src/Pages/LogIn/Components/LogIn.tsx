import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { Container, Box, Grid, Link, IconButton } from '@mui/material';
import { useAuthStore } from '../../../hooks/useAuthStore';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { LoadingButton } from '@mui/lab';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { Navigate } from 'react-router-dom';

export const LogIn: React.FunctionComponent = () => {

  const { startLogin, errorMessage, status } = useAuthStore();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);


  useEffect(() => {
    if (status === 'Authenticated') {
      navigate('/auth/inicio', { replace: true });
    }
    // eslint-disable-next-line 
  }, [status]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        startLogin(values.email, values.password);
      }, 2000);
    },
  });

  const { isSubmitting } = formik;

  useEffect(() => {
    if (errorMessage !== undefined && errorMessage !== 'Token expiro' && errorMessage !== '') {
      void Swal.fire('error', errorMessage, 'error')
    }
  }, [errorMessage])


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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar Sesion
            </Typography>
            <Box
              sx={{ mt: 1 }}
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
                margin="normal"
                required
                fullWidth
                label="password"
                type={showPassword ? 'text' : 'password'}
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
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Iniciar Sesion
              </LoadingButton>
              <Grid container>
                <Grid item xs>
                  <Link href="/#/ResetPWD" variant="body2">
                    Olvidaste tu contrase??a?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/#/SingUp" variant="body2">
                    {"No tienes una cuenta? Registrate"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </form>
      </Container>
    </>
  );
};

// validaciones front
const validationSchema = Yup.object({
  email: Yup.string()
    .max(30, ' Debe ser un email ')
    .email('No es un formato valido').
    required('Requerido'),
  password: Yup.string()
    .max(12, 'Debe ser de maximo 12 caracteres')
    .min(6, 'La contrase??a debe ser de minimo 6 caracteres')
    .required('Requerido')

});

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