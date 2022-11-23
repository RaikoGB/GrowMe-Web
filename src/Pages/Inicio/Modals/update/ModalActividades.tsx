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
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import React, { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import growApi from '../../../../Services/Api/growApi';
import activities from '../../../../Helpers/Types/activities';
import { useSelector } from 'react-redux';

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

export const ModalActividades: React.FunctionComponent = (Id: number) => {
  const [open, setOpen] = React.useState(false);
  function handleOpen(): void {
    return setOpen(true);
  }
  function handleClose(): void {
    console.log("se cierra desde modal act");
    return setOpen(false);
  }
  function handleSubmit(): void {
    console.log("se cierra desde modal act");
    return setOpen(false);
  }
  const [value, setValue] = React.useState<Date | null>();

  // Para Obtener datos
  const { user } = useSelector((state: any) => state.auth.user);
  console.log(user);

  const [list, setList] = useState<activities>([]);

  useEffect(() => {
    async function obtenerlista(UserId: string, itemId: number): Promise<void> {
      try {
        const resp = await growApi.get('/activities/', { data: { itemId, UserId } });
        setList(resp.data.activities);
      } catch (error) { }
    }
    try {
      void obtenerlista(user, Id);
    } catch (error) {
      console.log({ error });
    }
  }, [setList, user]);

  const [TileValue, setTileValue] = useState<string>(list.title);

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
          <form onSubmit={handleSubmit}>
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
                <Button variant="contained" type="submit">Crear</Button>
              </Grid>
            </Grid>
            <br></br>
            <Stack spacing={2} sx={{ width: 500 }}>
              <Typography>Titulo</Typography>
              <TextField
                id="title"
                label="Outlined"
                variant="outlined"
                value={TileValue}
                onChange={(newTileValue) => setTileValue(newTileValue)}
                defaultValue={list.title}
              />
              <Typography>Notas</Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="notes"
                label="Notas"
                name="Notas"
                defaultValue={list.notes}
                autoComplete="Notas"
              />
            </Stack>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Dificultad
            </InputLabel>
            <NativeSelect
              defaultValue={list.dificulty}
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
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                disableFuture
                label="Fecha termino"
                openTo="year"
                views={['year', 'month', 'day']}
                value={value}
                onChange={(newValue) => setValue(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </form>
        </Container>
      </Modal>
    </>
  );
};
