import React from 'react';
import { Box } from '@mui/material';
import About from '../../../Pages/About/Components/About';
import UserNavBar from '../../../Common/Components/UserNavBar';
import FooterUser from '../../../Common/Components/FooterUser';

const AboutScreen: React.FunctionComponent = () => {

  return (
    <>
      <UserNavBar/>
      <Box mt={10}></Box>
      <About />
      <br></br>
      <FooterUser />
    </>
  );
};

export default AboutScreen;
