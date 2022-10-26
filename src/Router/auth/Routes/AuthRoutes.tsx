import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { InicioScreen } from '../Screens/InicioScreen';
import { LoginScreen } from '../Screens/LoginScreen';
import { RegisterScreen } from '../Screens/RegisterScreen';

export const AuthRoutes: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="LogIn" element={<LoginScreen />} />
      <Route path="SingUp" element={<RegisterScreen />} />
      <Route path="Inicio" element={<InicioScreen />} />
      {
        // TODO:
        // <Route path="/Progreso" element = { <AboutScreen />} />
        // <Route path="/Calendario" element = { <FaqScreen />} />
        // <Route path="/Perfil" element = { <MovileScreen />} />
        // <Route path="/Cuenta" element = { <MovileScreen />} />
      }
    </Routes>
  );
};
