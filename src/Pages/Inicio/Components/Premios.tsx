import { Grid } from '@mui/material';
import React from 'react';
import Trophy1 from '../../../Assets/Trophy1.png';
// import Image from '../../../Assets/board.jpg'
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// todo: conexion con back para poder revisar como se eligen los premios, tambien agregar un fondo que ayude tematicamente 
const Premios: React.FunctionComponent = () => {
  return (
    <>
      <Box sx={styleBox}>
        {
          // <Paper sx={{backgroundImage: `url(${Image})`}}>
        }
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={style}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index} sx={style}>
              <img src={Trophy1} width={50} height={50} alt={index.toString()}></img>
            </Grid>
          ))}
        </Grid>
        {
          // </Paper>
        }
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

const style = {
  display: 'flex',
  justifyContent: 'center',
};