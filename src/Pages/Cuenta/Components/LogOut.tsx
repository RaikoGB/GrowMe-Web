import { Container, Typography, Button } from '@mui/material';
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
// import { useAuthStore } from 'hooks/useAuthStore';

const LogOut: React.FunctionComponent = () => {

  // const { startLogout } = useAuthStore()

  return (
    <>
      <Container>
        <Typography variant='h3'>¿Estas seguro de cerrar sesion?</Typography>
        <br></br>
        <br></br>
        <Button variant="contained" size="large" href="/#/index" endIcon={<LogoutIcon />} >Salir</Button>
      </Container>
    </>
  );
};

export default LogOut;
