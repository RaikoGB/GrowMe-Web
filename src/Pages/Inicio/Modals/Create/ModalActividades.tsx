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
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from 'formik';
import moment from 'moment';
import * as yup from 'yup';
import { useEvents } from '../../../../hooks/useEvents';
import Select from '@mui/material/Select/Select';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';

export const ModalActividades: React.FunctionComponent = () => {

  const user  = useSelector((state: any) => state.auth.user);
  const { createActivities } = useEvents()
  const [open, setOpen] = React.useState(false);
  // abrir el modal
  function handleOpen(): void {
    return setOpen(true);
  }
  // cerrar modal
  function handleClose(): void {
    return setOpen(false);
  }
  // funcionamiento del formulario
  const formik = useFormik({
    initialValues: {
      title: '',
      notes: '',
      dificulty: 1,
      EnDate: moment().date()
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      console.log("🚀 ~ file: ModalActividades.tsx:29 ~ user", user)
      setTimeout(() => {
        try {
          createActivities(user.uid, values.title, values.notes, values.dificulty, values.EnDate);
        } catch (error) {
          console.log("🚀 ~ file: ModalActividades.tsx:52 ~ error", error)
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
        aria-labelledby="Modal Actividades"
        aria-describedby="actividades"
      >
        <form onSubmit={formik.handleSubmit}>
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
              <MenuItem value={1}>Trivial</MenuItem>
              <MenuItem value={2}>Facil</MenuItem>
              <MenuItem value={3}>Normal</MenuItem>
              <MenuItem value={4}>Dificil</MenuItem>
            </Select>
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
          </Container>
        </form>
      </Modal>
    </>
  );
};

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

// validaciones front
const validationSchema = yup.object({
  title: yup.string().required(),
  notes: yup.string().required(),
  dificulty: yup.number().required().positive().integer(),
});
