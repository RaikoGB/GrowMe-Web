import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './app/Routes/AppRoutes';
import { AuthRoutes } from './auth/Routes/AuthRoutes';

export const AppRouter: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/*" element={<AppRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
    </Routes>
  );
};
