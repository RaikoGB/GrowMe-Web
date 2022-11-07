import React from 'react';
import Canva from '../../Inicio/Helpers/Canva';
import Box from '@mui/material/Box';

const Farm: React.FunctionComponent = () => {
  return (
    <>
      <Box sx={style}>
        <Canva></Canva>
      </Box>
    </>
  );
};

export default Farm;

const style = {
  display: 'flex',
  justifyContent: 'center'
};