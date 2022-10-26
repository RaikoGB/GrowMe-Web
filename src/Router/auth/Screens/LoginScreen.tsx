import { Box } from '@mui/material';
import React from 'react';
import Navbar from '../../../Common/Components/NavBar';
import Footer from '../../../Common/Components/Footer';
import LogIn from '../../../Pages/LogIn/Components/LogIn';

export const LoginScreen: React.FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <Box mt={10}></Box>
      <LogIn />
      <Box mt={20}></Box>
      <Footer />
    </>
  );
};
