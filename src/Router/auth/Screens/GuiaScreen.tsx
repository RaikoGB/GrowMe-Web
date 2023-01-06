import React from 'react'
import { Box } from '@mui/material';
import UserNavBar from '../../../Common/Components/UserNavBar';
import FooterUser from '../../../Common/Components/FooterUser';
import Guias from '../../../Pages/Guias/Guias';

const GuiaScreen: React.FunctionComponent = () => {
  return (
    <>
      <UserNavBar />
      <Box mt={10}></Box>
      <Guias />
      <FooterUser />
    </>
  )
}

export default GuiaScreen