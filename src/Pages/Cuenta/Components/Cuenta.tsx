import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Container } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import LogoutIcon from '@mui/icons-material/Logout';
import LogOut from './LogOut';
import Password from './Password';
import UpdateCuenta from './UpdateCuenta';

const drawerWidth = 240;

const Cuenta: React.FunctionComponent = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  function handleListItemClick({
    event,
    index
  }: {
    event: React.MouseEvent<HTMLDivElement, MouseEvent>;
    index: number;
  }): void {
    setSelectedIndex(index);
  }

  return (
    <>
      <Container>
        <Box sx={{ display: 'flex' }}>
          <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <Toolbar>
              {
                // la siguiente linea se puede cambiar por el nombre de la cuenta
              }
              <Typography variant="h6" noWrap component="div">
                Cuenta
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box'
              }
            }}
            variant="permanent"
            anchor="left"
          >
            <Toolbar />
            <Divider />
            <List>
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick({ event, index: 0 })}
              >
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Cuenta" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick({ event, index: 1 })}
              >
                <ListItemIcon>
                  <KeyIcon />
                </ListItemIcon>
                <ListItemText primary="Contraseña" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick({ event, index: 2 })}
              >
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Cerrar Sesion" />
              </ListItemButton>
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
          >
            <Toolbar />
            <Box>
              {(() => {
                switch (selectedIndex) {
                  case 1:
                    return <LogOut />;
                  case 2:
                    return <Password />;
                  case 3:
                    return <UpdateCuenta />;
                  default:
                    return <br />;
                }
              })()}
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Cuenta;
