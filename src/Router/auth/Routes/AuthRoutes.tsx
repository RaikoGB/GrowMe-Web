import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CalendarScreen from '../Screens/CalendarScreen';
import CuentaScreen from '../Screens/CuentaScreen';
import { InicioScreen } from '../Screens/InicioScreen';
// import { LoginScreen } from '../Screens/LoginScreen';
// import { RegisterScreen } from '../Screens/RegisterScreen';
import { useAuthStore } from '../../../hooks/useAuthStore';
import { FAQScreen } from '../Screens/FAQScreen';
import { MovileScreen } from '../Screens/MovileScreen';
import AboutScreen from '../Screens/AboutScreen';

export const AuthRoutes: React.FunctionComponent = () => {
  const { status } = useAuthStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (status !== 'Authenticated') {
      navigate('/index', { replace: true });
    }
    // eslint-disable-next-line 
  }, [status]);

  return (
    <Routes>
      {/* <Route path="Login" element={<LoginScreen />} />
      <Route path="SingUp" element={<RegisterScreen />} /> */}
      <Route path="Inicio" element={<InicioScreen />} />
      <Route path="Calendario" element={<CalendarScreen />} />
      <Route path="Cuenta" element={<CuentaScreen />} />
      <Route path="About" element={<AboutScreen />} />
      <Route path="FAQ" element={<FAQScreen />} />
      <Route path="MovileApp" element={<MovileScreen />} />
    </Routes>
  );
};