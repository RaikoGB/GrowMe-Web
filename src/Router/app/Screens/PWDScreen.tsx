import React from 'react';
import { Box } from '@mui/material';
import Footer from '../../../Common/Components/Footer';
import Navbar from '../../../Common/Components/NavBar';
import RecuperarPWD from '../../../Pages/RecuperarPWD/RecuperarPWD';

const PWDScreen: React.FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <Box mt={10}></Box>
      <RecuperarPWD />
      <br></br>
      <Footer />
    </>
  )
}

export default PWDScreen