/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
  Container,
  CssBaseline,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
  Grid,
  Button
} from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

export const ModalEventos: React.FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);
  function handleOpen(): void {
    return setOpen(true);
  }
  function handleClose(): void {
    console.log("se cierra desde modal eventos");
    return setOpen(false);
  }
  const [value, setValue] = React.useState();
  const [value2, setValue2] = React.useState();
  return (
    <>
      <div>
        <IconButton
          onClick={handleOpen}
          size="medium"
          color="inherit"
          aria-label="add"
        >
          <AddIcon />

        </IconButton>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Modal Eventos"
        aria-describedby="registrar eventos"
      >
        <Container component="main" sx={style}>
          <CssBaseline />
          <Grid container spacing={3}>
            <Grid ml={1} xs>
              <Typography component="div" variant="h5">
                Crear Evento
              </Typography>
            </Grid>
            <Grid xs={2}>
              <Button onClick={handleClose} variant="text">
                Cancelar
              </Button>
            </Grid>
            <Grid xs={2}>
              <Button variant="contained">Crear</Button>
            </Grid>
          </Grid>
          <br></br>
          <Stack spacing={2} sx={{ width: 500 }}>
            <Typography>Titulo</Typography>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <Typography>Notas</Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="notes"
              label="Notas"
              name="Notas"
              autoComplete="Notas"
            />
          </Stack>
          <Typography>Fecha de termino</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              disableFuture
              label="Fecha"
              openTo="year"
              views={['year', 'month', 'day']}
              value={value}
              onChange={(newValue) => { }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Typography>Horario</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Tiempo"
              value={value2}
              onChange={(newValue2) => { }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Container>
      </Modal>
    </>
  );
};
