import { Box } from '@mui/material';
import React from 'react';
import Footer from '../../../Common/Components/Footer';
import UserNavBar from '../../../Common/Components/UserNavBar';
import InicioU from '../../../Pages/Inicio/Components/InicioU';

export const InicioScreen: React.FunctionComponent = () => {
  return (
    <>
      <UserNavBar />
      <Box mt={10}></Box>
      <InicioU />
      <Box mt={2}></Box>
      <Footer />
    </>
  );
};
