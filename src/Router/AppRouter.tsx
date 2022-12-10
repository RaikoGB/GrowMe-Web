import React from 'react';
 import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './app/Routes/AppRoutes';
import { AuthRoutes } from './auth/Routes/AuthRoutes';
import { useAuthStore } from '../hooks/useAuthStore';
import { useEffect }from 'react';

export const AppRouter: React.FunctionComponent = () => {

  const { status , checkToken } = useAuthStore();

  useEffect(() => {
    checkToken()
  }, [])
  

  if( status === 'checking') {
    return (
      <h3> Cargando ...</h3>
    )
  }

  return (
    <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/*" element={<AppRoutes />} />   
    </Routes>
  );
};
