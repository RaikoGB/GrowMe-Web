import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CalendarScreen from '../Screens/CalendarScreen';
import CuentaScreen from '../Screens/CuentaScreen';
import { InicioScreen } from '../Screens/InicioScreen';
import { LoginScreen } from '../Screens/LoginScreen';
import { RegisterScreen } from '../Screens/RegisterScreen';

export const AuthRoutes: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="LogIn" element={<LoginScreen />} />
      <Route path="SingUp" element={<RegisterScreen />} />
      <Route path="Inicio" element={<InicioScreen />} />
      <Route path="Calendario" element={<CalendarScreen />} />
      <Route path="Cuenta" element={<CuentaScreen />} />
    </Routes>
  );
};