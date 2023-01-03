import React from 'react';
import { Box } from '@mui/material';
import UserNavBar from '../../../Common/Components/UserNavBar';
import FooterUser from '../../../Common/Components/FooterUser';
import Recomendaciones from '../../../Pages/Recomendaciones/Recomendaciones';

export const RecomendacionScreen: React.FunctionComponent = () => {

  return (
    <>
      <UserNavBar />
      <Box mt={10}></Box>
      <Recomendaciones />
      <br></br>
      <FooterUser />
    </>
  );
};