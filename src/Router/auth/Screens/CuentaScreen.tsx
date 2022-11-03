import { Box } from '@mui/material';
import React from 'react';
import UserNavBar from '../../../Common/Components/UserNavBar';
import Cuenta from '../../../Pages/Cuenta/Components/Cuenta';

const CuentaScreen: React.FunctionComponent = () => {
  return (
    <>
      <UserNavBar />
      <Box mt={10}>
      </Box>
      <div>
      <Cuenta />
      </div>
    </>
  );
};

export default CuentaScreen;
