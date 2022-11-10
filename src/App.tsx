import React from 'react';
import { AppRouter } from './Router/AppRouter';
import { ThemeProvider, createTheme } from '@mui/material';
import './Styles/styles.css'

const App: React.FunctionComponent = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </>
  );
};

export default App;

const theme = createTheme({
  palette: {
    // @ts-expect-error
    type: 'light',
    primary: {
      main: '#06A77D'
    },
    secondary: {
      main: '#FF5A5F'
    },
    error: {
      main: '#A60F2E'
    },
    warning: {
      main: '#F28F22'
    },
    info: {
      main: '#0F7CA6'
    },
    success: {
      main: '#0FA628'
    }
  },
  typography: {
    fontFamily: ['Press Start 2P','Nunito','Lato','Muli'].join(','),
    subtitle1: {
      fontFamily: 'Nunito'
    },
    subtitle2: {
      fontFamily: 'Nunito'
    },
    body1: {
      fontFamily: 'Lato'
    },
    body2: {
      fontFamily: 'Muli'
    },
    caption: {
      fontFamily: 'Lato'
    },
    overline: {
      fontFamily: 'Muli'
    }
    
  }
});
