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
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from 'formik';
import moment from 'moment';
import * as yup from 'yup';
import { useEvents } from '../../../../hooks/useEvents';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export const ModalEventos: React.FunctionComponent = () => {

  const { createEvents } = useEvents()
  const [open, setOpen] = React.useState(false);

  function handleOpen(): void {
    return setOpen(true);
  }

  function handleClose(): void {
    console.log("se cierra desde modal eventos");
    return setOpen(false);
  }

  // funcionamiento del formulario
  const formik = useFormik({
    initialValues: {
      title: '',
      notes: '',
      time: 1,
      EnDate: moment().date(),
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      console.log("Se cierra desde el submit");
      createEvents(values.title, values.notes, values.EnDate, values.time);
      handleClose();
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
        aria-labelledby="Modal Eventos"
        aria-describedby="registrar eventos"
      >
        <form onSubmit={formik.handleSubmit}>
          <Container component="main" sx={style}>
            <CssBaseline />
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <Typography component="div" variant="h5">
                  Crear Evento
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
                margin="normal"
                required
                fullWidth
                id="title"
                name="title"
                label="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={(formik.touched.title ?? false) && Boolean(formik.errors.title)}
                helperText={(formik.touched.title ?? false) && formik.errors.title}
              />
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
            <Typography>Fecha de termino</Typography>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                id="EnDate"
                name="EnDate"
                disablePast
                label="Fecha termino"
                openTo="year"
                views={['year', 'month', 'day']}
                value={formik.values.EnDate}
                onChange={(value) => {
                  void formik.setFieldValue('EnDate', value);
                }}
                renderInput={(params) => <TextField {...params} />}>
              </DatePicker>
            </LocalizationProvider>
            <Typography>Horario</Typography>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <TimePicker
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                id="time"
                name="time"
                label="Tiempo"
                value={formik.values.time}
                onChange={(value2) => {
                  void formik.setFieldValue('time', value2);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
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