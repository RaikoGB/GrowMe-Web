import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../hooks/useAuthStore';
import { Box } from '@mui/material';
import Navbar from '../../../Common/Components/NavBar';
import Footer from '../../../Common/Components/Footer';
import Inicio from '../../../Pages/Index/Components/Inicio';

export const AppScreen: React.FunctionComponent = () => {

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
      <Inicio />
      <br></br>
      <Footer />
    </>
  );
};
