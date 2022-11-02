import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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
        <Box sx={{ display: 'flex' }}>
          <Drawer
           sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'content-box',
            },
          }}
          variant="permanent"
          >
            <Toolbar />
            <Divider />
            <List>
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick({ event, index: 1 })}
              >
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Cuenta" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick({ event, index: 2 })}
              >
                <ListItemIcon>
                  <KeyIcon />
                </ListItemIcon>
                <ListItemText primary="Contraseña" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick({ event, index: 3 })}
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
                  case 3:
                    return <LogOut />;
                  case 2:
                    return <Password />;
                  case 1:
                    return <UpdateCuenta />;
                  default:
                    return <UpdateCuenta />;
                }
              })()}
            </Box>
          </Box>
        </Box>
    </>
  );
};

export default Cuenta;
