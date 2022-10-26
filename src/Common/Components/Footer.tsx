import React from 'react';
import { Box, Container, Grid, IconButton, Link, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FunctionComponent = () => {
  return (
    <>
      <Box
        px={{ xs: 3, sm: 5 }}
        py={{ xs: 5, sm: 5 }}
        bgcolor="text.secondary"
        color="white"
        component="footer"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Producto</Box>
              <Box>
                <Link href="/MovileApp" color="inherit">
                  Android App
                </Link>
              </Box>
              <Box>
                <Link href="/faq" color="inherit">
                  ¿Como funciona?
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Apoyo</Box>
              <Box>
                <Link href="/faq" color="inherit">
                  Preguntas Frecuentes
                </Link>
              </Box>
              <Box>
                <Link href="/about" color="inherit">
                  About
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Sociales</Box>
              <Box>
                <Link href="/about" color="inherit">
                  ¿Quienes Somos?
                </Link>
              </Box>
              <Box>
                <Stack direction="row">
                  <IconButton aria-label="Twitter" href="/app">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton aria-label="Facebook" href="/app">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton aria-label="Instagram" href="/app">
                    <InstagramIcon />
                  </IconButton>
                </Stack>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 5 }} pb={{ xs: 5, sm: 0 }}>
            &reg; GrowMe {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
