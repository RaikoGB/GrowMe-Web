import {
  Typography,
  Container,
  Box,
  Grid,
  CardContent,
  IconButton
} from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CardActions from '@mui/material/CardActions';
import AboutIMG from '../../../Assets/AboutIMG.png';
import GioIMG from '../../../Assets/GioIMG.jpg';
import LeoIMG from '../../../Assets/LeoIMG.jpeg';
import RichIMG from '../../../Assets/RichIMG.jpeg';
import Divider from '@mui/material/Divider';

const About: React.FunctionComponent = () => {
  return (
    <>
      <Container>
        <Typography variant="h2" align="center">
          Sobre nosotros
        </Typography>
        <br></br>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Typography mt={20} variant="h5" align="center">
              Somos una empresa dedicada a mejorar la calidad de vida de las personas a través de la gamificación de hábitos saludables. Creemos que al hacer de la adopción de hábitos positivos un juego, es más fácil para las personas incorporarlos en sus vidas diarias. Nuestro equipo está compuesto por desarrolladores y diseñadores altamente capacitados. Trabajamos constantemente para ofrecer a nuestros usuarios la mejor experiencia posible y ayudarles a alcanzar sus metas de desarrollo personal y bienestar a través de nuestra plataforma única y divertida.
            </Typography>
          </Grid>
          <br></br>
          <Grid item xs={7}>
            <img width={800} height={500} src={AboutIMG} alt="AboutIMG"></img>
          </Grid>
        </Grid>
      </Container>
      <Divider></Divider>
      <Container>
        <br></br>
        <Typography variant="h2" align="center">
          Nuestro Equipo
        </Typography>
      </Container>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card>
              <CardMedia
                component="img"
                width="200"
                height="250"
                image={GioIMG}
                sx={{ borderRadius: "15%" }}
                alt="Gio"
              ></CardMedia>
              <CardContent>
                <Typography variant="h6">Geovanni Castañeda Beltran</Typography>
                <Typography variant="h6">Gio.cas.rb@gmail.com</Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  size='large'
                  aria-label="linkedIn"
                  href="https://www.linkedin.com/in/geovanni-castañeda-beltran-78a83a224/"
                >
                  <LinkedInIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardMedia
                component="img"
                width="200"
                height="250"
                image={RichIMG}
                sx={{ borderRadius: "15%" }}
                alt="Gio"
              ></CardMedia>
              <CardContent>
                <Typography variant="h6">Pérez Sereno Ricardo Erick</Typography>
                <Typography variant="h6">rperezs1702@alumno.ipn.mx</Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  size='large'
                  aria-label="linkedIn"
                  href="https://www.linkedin.com"
                >
                  <LinkedInIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardMedia
                component="img"
                width="200"
                height="250"
                image={LeoIMG}
                sx={{ borderRadius: "15%" }}
                alt="Gio"
              ></CardMedia>
              <CardContent>
                <Typography variant="h6">Sánchez Cuamatzi Leonardo</Typography>
                <Typography variant="h6">lscuamatzi@gmail.com</Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  size='large'
                  aria-label="linkedIn"
                  href="https://www.linkedin.com"
                >
                  <LinkedInIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;
