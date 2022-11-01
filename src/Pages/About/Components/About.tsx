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

const About: React.FunctionComponent = () => {
  return (
    <>
      <Container>
        <Typography variant="h2" align="center">
          Sobre nosotros
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Typography variant="h5" align="center">
              Velit deserunt culpa ad pariatur tempor labore magna incididunt
              tempor est consectetur anim. Deserunt culpa enim esse do magna
              deserunt cillum. Velit quis duis est reprehenderit consequat et
              reprehenderit minim aliquip. Veniam mollit officia eiusmod et ea
              id deserunt pariatur fugiat cupidatat veniam aliquip.
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <img src="../../../Assets/carrot.png" alt="gio"></img>
          </Grid>
        </Grid>
      </Container>
      <Container>
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
                height="200"
                image="../../../Assets/carrot.png"
                alt="Gio"
              ></CardMedia>
              <CardContent>
                <Typography variant="h6">Geovanni Castañeda Beltran</Typography>
                <Typography variant="h6">Gio.cas.rb@gmail.com</Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
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
                height="200"
                image="../../../Assets/carrot.png"
                alt="Gio"
              ></CardMedia>
              <CardContent>
                <Typography variant="h6">Pérez Sereno Ricardo Erick</Typography>
                <Typography variant="h6">rperezs1702@alumno.ipn.mx</Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
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
                height="200"
                image="../../../Assets/carrot.png"
                alt="Gio"
              ></CardMedia>
              <CardContent>
                <Typography variant="h6">Sánchez Cuamatzi Leonardo</Typography>
                <Typography variant="h6">lscuamatzi@gmail.com</Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
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
