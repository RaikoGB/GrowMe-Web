import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../../../Common/Components/NavBar';
import Footer from '../../../Common/Components/Footer';
import Movile from '../../../Pages/MovileApp/Components/Movile';

export const MovileScreen: React.FunctionComponent = () => {

  return (
    <>
      <Navbar />
      <Box mt={10}></Box>
      <Movile />
      {/* img, <a href="link/to/your/download/file" download="filename">Download link</a> y poco mas */}
      <Footer />
    </>
  );
};
