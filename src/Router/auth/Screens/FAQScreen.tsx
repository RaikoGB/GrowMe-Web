import FAQ from '../../../Pages/FAQ/Components/FAQ';
import React from 'react';
import { Box } from '@mui/material';
import UserNavBar from '../../../Common/Components/UserNavBar';
import FooterUser from '../../../Common/Components/FooterUser';

export const FAQScreen: React.FunctionComponent = () => {
  return (
    <>
      <UserNavBar />
      <Box mt={10}></Box>
      <FAQ />
      <FooterUser />
    </>
  );
};
