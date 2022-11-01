import { Container, IconButton, Typography } from '@mui/material';
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';

const LogOut: React.FunctionComponent = () => {
  return (
    <>
      <Container>
        <Typography>Estas seguro de cerrar sesion?</Typography>
        <IconButton size="large">
          <LogoutIcon></LogoutIcon>
        </IconButton>
      </Container>
    </>
  );
};

export default LogOut;
