import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../hooks/useAuthStore';
import { Box } from '@mui/material';
import Footer from '../../../Common/Components/Footer';
import Navbar from '../../../Common/Components/NavBar';
import RecuperarPWD from '../../../Pages/RecuperarPWD/RecuperarPWD';

const PWDScreen: React.FunctionComponent = () => {
  const { status } = useAuthStore();

  const navigate = useNavigate();
  
  useEffect(() => {
    if (status === 'Authenticated') {
      navigate('/auth/inicio', { replace: true });
    }
    // eslint-disable-next-line 
  }, [status]);
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