import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@mui/material';
import { Container } from '@mui/system';
import Paper from '@mui/material/Paper';
import React from 'react';
import { ModalEventos } from '../Modals/ModalEventos';
import { ModalActividades } from '../Modals/ModalActividades';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InsightsIcon from '@mui/icons-material/Insights';
import SpaIcon from '@mui/icons-material/Spa';
import FaceIcon from '@mui/icons-material/Face';
import Avatar from './Avatar';
import Farm from './Farm';
import ProgresoCohen from './ProgresoCohen';
import Premios from './Premios';
import ModalCohen from '../../../Services/Cohen/Components/ModalCohen'
import ModalMBTI from '../../../Services/MBTI/Components/ModalMBTI';
import ListHabits from './ListHabits';

const InicioU: React.FunctionComponent = () => {  

  const [value, setValue] = React.useState('Avatar');
  
  function handleChange(event: React.SyntheticEvent, newValue: string): void {
    setValue(newValue);
  }

  return (
    <>
      <Box sx={{ height: 350 }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Container>
              <Paper elevation={24} background-color="black">
                <Box sx={{ height: 350 }}>
                  <Box sx={{ height: 300 }}>
                    {(() => {
                      switch (value) {
                        case 'Avatar':
                          return <Avatar />;
                        case 'Granja':
                          return <Farm />;
                        case 'Progreso':
                          return <ProgresoCohen />;
                        case 'Premios':
                          return <Premios />;
                        default:
                          return <Avatar />;
                      }
                    })()}
                  </Box>
                  <BottomNavigation
                    showLabels
                    value={value}
                    onChange={handleChange}
                  >
                    <BottomNavigationAction
                      label="Avatar"
                      value={'Avatar'}
                      icon={<FaceIcon />}
                    />
                    <BottomNavigationAction
                      label="Granja"
                      value={'Granja'}
                      icon={<SpaIcon />}
                    />
                    <BottomNavigationAction
                      label="Progreso"
                      value={'Progreso'}
                      icon={<InsightsIcon />}
                    />
                    <BottomNavigationAction
                      label="Premios"
                      value={'Premios'}
                      icon={<EmojiEventsIcon />}
                    />
                  </BottomNavigation>
                </Box>
              </Paper>
              {/* Pendiente pues necesita las iamgenes, probablemente sea bueno un componente para el */}
            </Container>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={24}>
              <Box
                sx={{
                  display: 'grid',
                  gridAutoColumns: '1fr',
                  gap: 1,
                  height: 350
                }}
              >
                <Box sx={{ gridRow: '1', bgcolor: 'primary.light' }}>
                  <Typography mt={10} variant="h1" align="center">
                    Dia {new Date().getDay()}
                  </Typography>
                  <Typography variant="h3" align="center" gutterBottom>
                    Mes {new Date().getMonth()}
                  </Typography>
                </Box>
                <Box sx={{ gridRow: '1' }}>
                  <Typography mt={5} variant="h5" align="center" gutterBottom>
                    Siguiente evento
                  </Typography>
                  <Typography variant="h2" align="center">
                    Fecha
                  </Typography>
                  <Typography variant="h4" align="center" gutterBottom>
                    Hora
                  </Typography>
                  <Typography ml={2} variant="body1" gutterBottom>
                    Descripcion
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box mt={5}></Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ListHabits />
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={6}>
              <Box>
                <Card sx={{ display: 'flex', bgcolor: 'primary.light' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <ModalActividades />
                  </CardContent>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      Actividades
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={6}>
              <Box>
                <Card sx={{ display: 'flex', bgcolor: 'primary.light' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <ModalEventos />
                  </CardContent>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      Eventos
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <ModalCohen />
      <ModalMBTI />
    </>
  );
};

export default InicioU;
