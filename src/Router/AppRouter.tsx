import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './app/Routes/AppRoutes';
import { AuthRoutes } from './auth/Routes/AuthRoutes';

export const AppRouter: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/GrowMe-Web/#/*" element={<AppRoutes />} />
      <Route path="/GrowMe-Web/#/auth/*" element={<AuthRoutes />} />
    </Routes>
  );
};
