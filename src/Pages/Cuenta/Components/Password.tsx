import React from 'react';
import { Button, Container, Typography, InputLabel, FormControl } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
interface State {
  password: string;
  showPassword: boolean;
}

const Password: React.FunctionComponent = () => {
  const [values, setValues] = React.useState<State>({
    password: '',
    showPassword: false,
  });
  
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
  function handleClickShowPassword(): void {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  }
  
  function handleMouseDownPassword(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
  }

  return (
    <>
      <Container>
        <Typography variant="h5">Contraseña</Typography>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
            <br></br>
            <br></br>
            <Button variant="contained" size="large" endIcon={<UpdateIcon />}>Actualizar</Button>
      </Container>
    </>
  );
};

export default Password;
