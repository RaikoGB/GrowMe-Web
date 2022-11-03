import { Container } from '@mui/material';
import React from 'react';
import AvatarIMG from '../../../Assets/16/ENFJ.png';

const Avatar: React.FunctionComponent = () => {
  return (
    <>
      <Container>
        <img alt='avatar' src={AvatarIMG} width={250} height={250}></img>
      </Container>
    </>
  );
};

export default Avatar;
