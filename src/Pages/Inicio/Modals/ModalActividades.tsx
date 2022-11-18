import {
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
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

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

export const ModalActividades: React.FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);
  function handleOpen(): void {
    return setOpen(true);
  }
  function handleClose(): void {
    console.log("se cierra desde modal act");
    return setOpen(false);
  }
  const [value, setValue] = React.useState<Date | null>();
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
        aria-labelledby="Modal Actividades"
        aria-describedby="actividades"
      >
        <Container component="main" sx={style}>
          <CssBaseline />
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <Typography component="div" variant="h5">
                Crear Actividad
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button onClick={handleClose} variant="text">
                Cancelar
              </Button>
            </Grid>
            <Grid item xs={2}>
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              disableFuture
              label="Responsive"
              openTo="year"
              views={['year', 'month', 'day']}
              value={value}
              onChange={(newValue) => setValue(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Container>
      </Modal>
    </>
  );
};
