import React from 'react';
import { MyCalendar } from '../../../Pages/calendar/MyCalendar';
import UserNavBar from '../../../Common/Components/UserNavBar';
import { Box } from '@mui/material';
import Footer from '../../../Common/Components/Footer';

const CalendarScreen: React.FunctionComponent = () => {
  return (
    <>
      <UserNavBar />
      <Box mt={10}></Box>
      <MyCalendar />
      <Box mt={2}></Box>
      <Footer />
    </>
  );
};

export default CalendarScreen;
