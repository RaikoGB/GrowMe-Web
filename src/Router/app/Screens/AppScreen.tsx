import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../../../Common/Components/NavBar';
import Footer from '../../../Common/Components/Footer';
import Inicio from '../../../Pages/Index/Components/Inicio';

export const AppScreen: React.FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <Box mt={10}></Box>
      <Inicio />
      <br></br>
      <Footer />
    </>
  );
};
