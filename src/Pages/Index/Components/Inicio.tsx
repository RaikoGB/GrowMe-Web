import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Container, Grid, Paper } from '@mui/material';

const Inicio: React.FunctionComponent = () => {
  return (
    <>
      <Box>
        <Paper elevation={2}>
          <Box
            ml={35}
            sx={{
              width: 1050,
              height: 450
            }}
          >
            <Card sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Box mt={2}></Box>
                  <Typography component="div" variant="h2" align="center">
                    GrowMe
                  </Typography>
                  <Box mt={15}></Box>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    component="div"
                  >
                    Escuentra la motivacion para realizar tus objetivos.
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    component="div"
                  >
                    Es momento de hallar diversion en las pequeñas cosas que
                    haces.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    size="large"
                    href="/GrowMe-Web/#/auth/SingUp"
                  >
                    Registrate
                  </Button>
                </CardActions>
              </Box>
              <Box ml={2}>
                <CardMedia
                  sx={{
                    width: 800,
                    height: 450
                  }}
                  component="img"
                  image="https://res.cloudinary.com/damzv3dfx/image/upload/v1664234484/busy-project-manager-overwhelmed-by-work_1_h8jccm.png"
                  alt="Habits"
                />
              </Box>
            </Card>
          </Box>
        </Paper>
        <br></br>
        <Container>
          <Box>
            <Typography variant="h3" component="div" align="center">
              Caracteristicas
            </Typography>
            <br></br>
            <Typography variant="body1" component="div" align="center">
              GrowMe es una aplicacion Movil y Web de construcción de hábitos y
              productividad que trata las actividades de tu dia como un juego.
              Con recompensas para motivarte y diferentes habitos para
              inspirarte, GrowMe puede ayudarte a conseguir tus metas para ser
              saludable, trabajador y feliz.
            </Typography>
          </Box>
          <br></br>
          <Box mt={1}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Paper elevation={6}>
                  <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                      component="img"
                      height="280"
                      image="https://res.cloudinary.com/damzv3dfx/image/upload/v1664311261/browser-window-displaying-workspace-_pcsn9k.png"
                      alt="img"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Registra tus Hábitos y Objetivos
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Mantente responsable siguiendo y manteniendo tus
                        Hábitos, Tareas Diarias y Eventos Pendientes con la
                        aplicación móvil de GrowMe y la página web, ambas
                        fáciles de usar.
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper elevation={6}>
                  <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                      component="img"
                      height="280"
                      image="https://res.cloudinary.com/damzv3dfx/image/upload/v1664311261/person-gardening_zf2irn.png"
                      alt="img"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Recibe Recompensas por tus Metas
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Tacha los habitos como terminados para ver como estos se
                        desarrollan a la par y consigue recompensas cada que
                        completes un nuevo hito.
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper elevation={6}>
                  <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                      component="img"
                      height="280"
                      image="https://res.cloudinary.com/damzv3dfx/image/upload/v1664311261/modern-grid-pattern_p1g5gi.png"
                      alt="img"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Ajusta tus horarios a preferencia
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Nuestra lista de tareas que puede ser completamente
                        personalizada significa que puedes adaptar GrowMe a tus
                        metas personales. Trabaja en proyectos creativos,
                        enfatiza el cuidado de ti mismo o persigue un sueño
                        distinto, todo depende de ti.
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <br></br>
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Card variant="outlined" sx={{ display: 'flex' }}>
                <Box ml={2}>
                  <CardMedia
                    sx={{
                      width: 800,
                      height: 500
                    }}
                    component="img"
                    image="https://res.cloudinary.com/damzv3dfx/image/upload/v1664234484/mobile-map-and-navigation_grla1g.png"
                    alt="MovApp"
                  ></CardMedia>
                </Box>
                <CardContent>
                  <br />
                  <Typography variant="h5" component="div" align="center">
                    Aplicación Móvil
                  </Typography>
                  <br />
                  <Typography variant="body1" align="center">
                    Nuestra app móvile hacen sencillo mantenerte al día con tus
                    tareas en movimiento. Alcanza tus objetivos con un solo
                    toque, sin importar dónde estés.
                  </Typography>
                  <br />
                  <CardActions>
                    <Button size="large" href="/GrowMe-Web/#/MovileApp">
                      Descargar
                    </Button>
                  </CardActions>
                </CardContent>
                <br />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card variant="outlined">
                <CardContent>
                  <br />
                  <Typography variant="h4" component="div" align="center">
                    Estilo de vida
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="body1">
                    Consectetur consequat id dolore dolore. Est consequat
                    officia deserunt ex qui. Duis id nulla ex laboris pariatur
                    incididunt Lorem excepteur officia veniam qui. Laboris esse
                    duis veniam enim commodo.
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href="/GrowMe-Web/#/FAQ">
                    Aprende Mas
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card variant="outlined">
                <CardContent>
                  <br />
                  <Typography variant="h4" component="div" align="center">
                    Hábitos
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="body1">
                    Sunt ut laboris minim aute. Anim cillum ad ad amet tempor
                    sit. Incididunt ea duis sit cillum sit laboris eu est
                    laborum sit aliquip labore. Nulla ex fugiat dolore fugiat.
                    Deserunt aliqua ea ex qui ea.
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href="/GrowMe-Web/#/FAQ">
                    Aprende Mas
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Inicio;
