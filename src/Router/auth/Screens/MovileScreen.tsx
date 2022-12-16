import React from 'react';
import { Box } from '@mui/material';
import UserNavBar from '../../../Common/Components/UserNavBar';
import FooterUser from '../../../Common/Components/FooterUser';
import Movile from '../../../Pages/MovileApp/Components/Movile';

export const MovileScreen: React.FunctionComponent = () => {

  return (
    <>
      <UserNavBar />
      <Box mt={10}></Box>
      <Movile />
      {/* img, <a href="link/to/your/download/file" download="filename">Download link</a> y poco mas */}
      <FooterUser />
    </>

  );

};
