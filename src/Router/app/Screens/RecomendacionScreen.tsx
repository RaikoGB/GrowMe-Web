import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../../../Common/Components/NavBar';
import Footer from '../../../Common/Components/Footer';
import Recomendaciones from '../../../Pages/Recomendaciones/Recomendaciones';

export const RecomendacionScreen: React.FunctionComponent = () => {

  return (
    <>
      <Navbar />
      <Box mt={10}></Box>
      <Recomendaciones />
      <br></br>
      <Footer />
    </>
  );
};