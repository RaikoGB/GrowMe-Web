import {
  Box,
  Grid
} from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import ModalCohen from '../../../Services/Cohen/Components/ModalCohen'
import ModalMBTI from '../../../Services/MBTI/Components/ModalMBTI';
import ListHabits from './ListHabits';
import ListActivities from './ListActivities';
import ListEvents from './ListEvents';
import NextEvent from './NextEvent';
import ThemeSelect from './themeSelect';


const InicioU: React.FunctionComponent = () => {
  return (
    <>
      <Box sx={{ height: 370 }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <ThemeSelect />
          </Grid>
          <Grid item xs={6}>
            <NextEvent />
          </Grid>
        </Grid>
      </Box>
      <Box mt={5}></Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ListHabits />
          </Grid>
          <Grid item xs={4}>
            <ListActivities />
          </Grid>
          <Grid item xs={4}>
            <ListEvents />
          </Grid>
        </Grid>
      </Container>
      <ModalCohen />
      <ModalMBTI />
    </>
  );
};

export default InicioU;
