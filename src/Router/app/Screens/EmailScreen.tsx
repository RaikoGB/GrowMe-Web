import React from 'react';
import { Box } from '@mui/material';
import Footer from '../../../Common/Components/Footer';
import Navbar from '../../../Common/Components/NavBar';
import RecuperarEmail from '../../../Pages/RecuperarEMail/RecuperarEmail';

const EmailScreen: React.FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <Box mt={10}></Box>
      <RecuperarEmail />
      <br></br>
      <Footer />
    </>
  );
};

export default EmailScreen;