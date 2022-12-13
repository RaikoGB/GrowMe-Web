import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './app/Routes/AppRoutes';
import { AuthRoutes } from './auth/Routes/AuthRoutes';
import { useAuthStore } from '../hooks/useAuthStore';

import LoadingPage from 'Common/Components/LoadingPage';

export const AppRouter: React.FunctionComponent = () => {

  const { status, checkToken } = useAuthStore();

  useEffect(() => {
    checkToken()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  if (status === 'checking') {
    return (
      <>
        <LoadingPage />
      </>
    )
  }

  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<AppRoutes />} />
    </Routes>
  );
};
