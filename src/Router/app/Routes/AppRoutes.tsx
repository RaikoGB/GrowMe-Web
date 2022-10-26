import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppScreen } from '../Screens/AppScreen';
import PruebaScreen from '../Screens/PruebaScreen';

export const AppRoutes: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="index" element={<AppScreen />} />
      <Route path="prueba" element={<PruebaScreen />} />
      {
        // TODO:
        // <Route path="/About" element = { <AboutScreen />} />
        // <Route path="/FAQ" element = { <FaqScreen />} />
        // <Route path="/MovileApp" element = { <MovileScreen />} />
        // <Route path="/Us" element = { <UsScreen />} />
      }
    </Routes>
  );
};
