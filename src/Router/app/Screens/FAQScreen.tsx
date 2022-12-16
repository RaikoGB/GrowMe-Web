import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../../../Common/Components/NavBar';
import Footer from '../../../Common/Components/Footer';
import FAQ from '../../../Pages/FAQ/Components/FAQ';

export const FAQScreen: React.FunctionComponent = () => {

  return (
    <>
      <Navbar />
      <Box mt={10}></Box>
      <FAQ />
      <br></br>
      <Footer />
    </>
  );
};
