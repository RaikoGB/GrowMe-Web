import React from 'react';
import { Button, Container, Typography } from '@mui/material';

const Password: React.FunctionComponent = () => {
  return (
    <>
      <Container>
        <Typography>Contraseña</Typography>
        <Button>Cambiar contraseña</Button>
      </Container>
    </>
  );
};

export default Password;
