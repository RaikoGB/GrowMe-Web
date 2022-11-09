import { Grid } from '@mui/material';
import React from 'react';
import Trophy1 from '../../../Assets/Trophy1.png';
import Box from '@mui/material/Box';

const Premios: React.FunctionComponent = () => {
  return (
    <>
      <Box sx={style}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <img src={Trophy1} width={50} height={50} alt={index.toString()}></img>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Premios;

const style = {
  display: 'flex',
  justifyContent: 'center',
  height: 300
};