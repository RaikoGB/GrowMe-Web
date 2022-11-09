import React from 'react';
import AvatarIMG from '../../../Assets/16/ENFJ.png';
import Box from '@mui/material/Box';

const Avatar: React.FunctionComponent = () => {
  return (
    <>
      <Box sx={style}>
        <img alt='avatar' src={AvatarIMG} width={252} height={300}></img>
      </Box>
    </>
  );
};

export default Avatar;


const style = {
  display: 'flex',
  justifyContent: 'center'
};