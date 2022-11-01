import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const UpdateCuenta: React.FunctionComponent = () => {
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography>Nombre</Typography>
            <Typography>Correo</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Genero</Typography>
          </Grid>
        </Grid>
        <Button>Actualizar</Button>
      </Container>
    </>
  );
};

export default UpdateCuenta;
