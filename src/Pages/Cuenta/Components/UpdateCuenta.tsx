import { Button, Container, FormControl, Grid, InputLabel, TextField, Typography } from '@mui/material';
import React from 'react';
import UpdateIcon from '@mui/icons-material/Update';
import NativeSelect from '@mui/material/NativeSelect/NativeSelect';

const UpdateCuenta: React.FunctionComponent = () => {
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h5">Nombre</Typography>
            <TextField id="standard-basic" label="" variant="standard" />
            <br></br>
            <br></br>
            <Typography variant="h5">Correo</Typography>
            <TextField id="standard-basic" label="" variant="standard" />
            <br></br>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5">Genero</Typography>
            <FormControl>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Genero
              </InputLabel>
              <NativeSelect defaultValue={30} inputProps={{
                name: 'gender',
                id: 'gender-native',
              }}>
                <option value={'M'}>Masculino</option>
                <option value={'F'}>Femenino</option>
                <option value={'N'}>Otro</option>
              </NativeSelect>
            </FormControl>
            <br></br>
          </Grid>
        </Grid>
        <br></br>
        <Button variant="contained" size="large" endIcon={<UpdateIcon />}>Actualizar</Button>
      </Container>
    </>
  );
};

export default UpdateCuenta;
