import React from 'react';
import { Box } from '@mui/material';
import Footer from '../../../Common/Components/Footer';
import Navbar from '../../../Common/Components/NavBar';
import About from '../../../Pages/About/Components/About';

const AboutScreen: React.FunctionComponent = () => {

  return (
    <>
      <Navbar />
      <Box mt={10}></Box>
      <About />
      <br></br>
      <Footer />
    </>
  );
};

export default AboutScreen;
