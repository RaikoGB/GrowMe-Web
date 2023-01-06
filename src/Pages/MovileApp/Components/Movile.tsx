import React from 'react';
import googlepPlay from '../../../Assets/movile/googlepPlay.png';
import { Box } from '@mui/material';

const Movile: React.FunctionComponent = () => {
  return (
    <>
      <Box sx={style}>
        <a href="../../../Assets/movile/apk.txt" download>
          <img src={googlepPlay} alt="APK"></img>
        </a>
      </Box>
    </>
  );
};

export default Movile;

const style = {
  display: 'flex',
  justifyContent: 'center'
};
