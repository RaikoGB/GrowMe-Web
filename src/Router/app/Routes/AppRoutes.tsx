import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutScreen from '../Screens/AboutScreen';
import { AppScreen } from '../Screens/AppScreen';
import PruebaScreen from '../Screens/PruebaScreen';
import { FAQScreen } from '../Screens/FAQScreen';
import { MovileScreen } from '../Screens/MovileScreen';
import { MyCalendar } from 'Pages/calendar/MyCalendar';

export const AppRoutes: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/Index" element={<AppScreen />} />
      <Route path="/Prueba" element={<PruebaScreen />} />
      <Route path="/About" element={<AboutScreen />} />
      <Route path="/FAQ" element={<FAQScreen />} />
      <Route path="/MovileApp" element={<MovileScreen />} />
      <Route path="/Calendar" element={<MyCalendar />} />
    </Routes>
  );
};
