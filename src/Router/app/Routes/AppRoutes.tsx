import React, { useEffect } from 'react';
import { Route, Routes , useNavigate } from 'react-router-dom';
import AboutScreen from '../Screens/AboutScreen';
import { AppScreen } from '../Screens/AppScreen';
import { FAQScreen } from '../Screens/FAQScreen';
import { MovileScreen } from '../Screens/MovileScreen';
import EmailScreen from '../Screens/EmailScreen';
import PWDScreen from '../Screens/PWDScreen';
import { LoginScreen } from '../Screens/LoginScreen';
import { RegisterScreen } from '../Screens/RegisterScreen';
import { useAuthStore } from '../../../hooks/useAuthStore';

export const AppRoutes: React.FunctionComponent = () => {
  const { status } = useAuthStore();

  const navigate = useNavigate();
  
  useEffect(() => {
    if (status === 'Authenticated') {
      navigate('/auth/inicio', { replace: true });
    }
    // eslint-disable-next-line 
  }, [status]);
  
  return (
    <Routes>
      <Route path="Index" element={<AppScreen />} />
      <Route path="About" element={<AboutScreen />} />
      <Route path="FAQ" element={<FAQScreen />} />
      <Route path="MovileApp" element={<MovileScreen />} />
      <Route path="RecPWD" element={<EmailScreen />} />
      <Route path="ChangePWD" element={<PWDScreen />} />
      <Route path="Login" element={<LoginScreen />} />
      <Route path="SingUp" element={<RegisterScreen />} />
    </Routes>
  );
};