import { Box } from '@mui/material';
import React from 'react';
import UserNavBar from '../../../Common/Components/UserNavBar';
import Footer from '../../../Common/Components/Footer';
import Cuenta from '../../../Pages/Cuenta/Components/Cuenta';

const CuentaScreen: React.FunctionComponent = () => {
  return (
    <>
      <UserNavBar />
      <Box mt={10}>
        <Cuenta />
      </Box>
      <Box mt={20}></Box>
      <Footer />
    </>
  );
};

export default CuentaScreen;
