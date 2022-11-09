/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
  Autocomplete,
  Container,
  CssBaseline,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
  Grid,
  Button,
  InputLabel,
  NativeSelect
} from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
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

export const ModalHabitos: React.FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);
  function handleOpen(): void {
    return setOpen(true);
  }
  function handleClose(): void {
    console.log("se cierra desde modal habit");
    return setOpen(false);
  }
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
        aria-labelledby="Modal Habitos"
        aria-describedby="Registrar habitos"
      >
        <Container component="main" sx={style}>
          <CssBaseline />
          <Grid container spacing={3}>
            <Grid ml={1} xs={2}>
              <Typography component="div" variant="h5">
                Crear Hábito
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
            {/* TODO:Cambiar las opciones para que las tome de BD */}
            <Typography>Titulo</Typography>
            <Autocomplete
              id="HabitName"
              freeSolo
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => (
                <TextField {...params} label="Hábito" />
              )}
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
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Dificultad
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: 'Dificultad',
              id: 'uncontrolled-native'
            }}
          >
            <option value={0.5}>Trivial</option>
            <option value={1}>Facil</option>
            <option value={2}>Normal</option>
            <option value={3}>Dificil</option>
          </NativeSelect>
          <Typography>Fecha de termino</Typography>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: 'Dificultad',
              id: 'uncontrolled-native'
            }}
          >
            <option value={0.5}>2 Semanas</option>
            <option value={1}>1 Mes</option>
            <option value={2}>2 Meses</option>
            <option value={3}>Indefinido</option>
          </NativeSelect>
          <Typography>Tiempo Minimo (Min)</Typography>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: 'Dificultad',
              id: 'uncontrolled-native'
            }}
          >
            <option value={0.5}>5</option>
            <option value={1}>10</option>
            <option value={2}>15</option>
            <option value={3}>20</option>
          </NativeSelect>
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

/* Quitar cuando se tomen los datos de los habitos */
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }
];
