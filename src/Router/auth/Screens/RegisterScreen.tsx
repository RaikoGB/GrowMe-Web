import { Box } from '@mui/material';
import React from 'react';
import Navbar from '../../../Common/Components/NavBar';
import Footer from '../../../Common/Components/Footer';
import SingUP from '../../../Pages/SingUp/Components/SingUP';

export const RegisterScreen: React.FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <Box mt={10}></Box>
      <SingUP />
      <Box mt={20}></Box>
      <Footer />
    </>
  );
};
