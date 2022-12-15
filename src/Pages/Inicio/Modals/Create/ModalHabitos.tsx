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
  InputLabel
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useEvents } from '../../../../hooks/useEvents';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select/Select';
import { useSelector } from 'react-redux';

export const ModalHabitos: React.FunctionComponent = () => {

  const user  = useSelector((state: any) => state.auth.user);
  const { createHabits } = useEvents()
  const [open, setOpen] = React.useState(false);

  function handleOpen(): void {
    return setOpen(true);
  }

  function handleClose(): void {
    console.log("se cierra desde modal habit");
    return setOpen(false);
  }

  // funcionamiento del formulario
  const formik = useFormik({
    initialValues: {
      title: '',
      notes: '',
      dificulty: 0,
      EnDate: 1,
      schedule: 1,
      Time: 1,
    },
    validationSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        try {
          createHabits(user.uid, values.title, values.notes, values.dificulty, values.EnDate, values.schedule, values.Time);
        } catch (error) {
        console.log("🚀 ~ file: ModalHabitos.tsx:56 ~ setTimeout ~ error", error)
        }
        handleClose();
      }, 2000);
    },
  });

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
        <form onSubmit={formik.handleSubmit}>
          <Container component="main" sx={style}>
            <CssBaseline />
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <Typography component="div" variant="h5">
                  Crear Hábito
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
              <Select
                required
                labelId="title"
                name="title"
                id="title"
                value={formik.values.title}
                label="title"
                onChange={formik.handleChange}
                error={(formik.touched.title ?? false) && Boolean(formik.errors.title)}
              >
                {
                  // todo: si se quieren tomar las opciones de otro lado hacer un list.map para crear los menu item
                }
                <MenuItem value={"Ejercicio"}>Ejercicio</MenuItem>
                <MenuItem value={"Meditar"}>Meditar</MenuItem>
              </Select>
              <Typography>Notas</Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="notes"
                name="notes"
                label="notes"
                value={formik.values.notes}
                onChange={formik.handleChange}
                error={(formik.touched.notes ?? false) && Boolean(formik.errors.notes)}
                helperText={(formik.touched.notes ?? false) && formik.errors.notes}
              />
            </Stack>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Dificultad
            </InputLabel>
            <Select
              required
              labelId="dificulty"
              name="dificulty"
              id="dificulty"
              value={formik.values.dificulty}
              label="dificulty"
              onChange={formik.handleChange}
              error={(formik.touched.dificulty ?? false) && Boolean(formik.errors.dificulty)}
            >
              <MenuItem value={0}>Trivial</MenuItem>
              <MenuItem value={1}>Facil</MenuItem>
              <MenuItem value={2}>Normal</MenuItem>
              <MenuItem value={3}>Dificil</MenuItem>
            </Select>
            <Typography>Fecha de termino</Typography>
            <Select
              required
              labelId="EnDate"
              name="EnDate"
              id="EnDate"
              value={formik.values.EnDate}
              label="EnDate"
              onChange={formik.handleChange}
              error={(formik.touched.EnDate ?? false) && Boolean(formik.errors.EnDate)}
            >
              <MenuItem value={0}>2 Semanas</MenuItem>
              <MenuItem value={1}>1 Mes</MenuItem>
              <MenuItem value={2}>2 Meses</MenuItem>
              <MenuItem value={3}>Indefinido</MenuItem>
            </Select>
            <Typography>Tiempo Minimo (Min)</Typography>
            <Select
              required
              labelId="Time"
              name="Time"
              id="Time"
              value={formik.values.Time}
              label="Time"
              onChange={formik.handleChange}
              error={(formik.touched.Time ?? false) && Boolean(formik.errors.Time)}
            >
              <MenuItem value={0}>5</MenuItem>
              <MenuItem value={1}>10</MenuItem>
              <MenuItem value={2}>15</MenuItem>
              <MenuItem value={3}>20</MenuItem>
            </Select>
            <Typography>Horario</Typography>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <TimePicker
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                id="schedule"
                name="schedule"
                label="schedule"
                value={formik.values.schedule}
                onChange={(value2: any) => {
                  void formik.setFieldValue('schedule', value2);
                }}
                renderInput={(params: any) => <TextField {...params} />}>
              </TimePicker>
            </LocalizationProvider>
          </Container>
        </form>
      </Modal>
    </>
  );
};

const validationSchema = yup.object({
  title: yup.string().required(),
  notes: yup.string().required(),
});

// css para el modal
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
