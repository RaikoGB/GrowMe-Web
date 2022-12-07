import { Grid } from '@mui/material';
import React from 'react';
import Trophy1 from '../../../Assets/Trophy1.png';
import Imagebg from '../../../Assets/Board.png';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// todo: conexion con back para poder revisar como se eligen los premios, tambien agregar un fondo que ayude tematicamente 
const Premios: React.FunctionComponent = () => {
  return (
    <>
      <Box sx={styleBox}>
        <Paper sx={stylebg}>
          <Box sx={style}>
            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={stylegrid}>
              {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index} sx={style}>
                  <img src={Trophy1} width={50} height={50} alt={index.toString()}></img>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Premios;

const styleBox = {
  display: 'flex',
  justifyContent: 'center',
  height: 300
};

const stylegrid = {
  display: 'flex',
  justifyContent: 'center'
};

const style = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '95px',
  paddingLeft: '10px',
  height: 100,
  width: 250
};

const stylebg = {
  display: 'flex',
  justifyContent: 'center',
  height: 324,
  width: 320,
  backgroundImage: `url(${Imagebg})`
};