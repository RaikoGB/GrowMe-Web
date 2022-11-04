import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const pages = [
  {
    text: 'Inicio',
    Link: '/#/auth/Inicio'
  },
  {
    text: 'Calendario',
    Link: '/#/auth/calendario'
  }
];

const UserNavBar: React.FunctionComponent = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);

  function handleProfileMenuOpen(event: any): void {
    setAnchorEl(event.currentTarget);
  }
  function handleOpenNavMenu(event: any): void {
    setAnchorElNav(event.currentTarget);
  }

  function handleMenuClose(): void {
    setAnchorEl(null);
  }

  function handleCloseNavMenu(): void {
    setAnchorElNav(null);
  }

  function handleClick2(event: any): void {
    setAnchorEl2(event.currentTarget);
  }

  function handleClose2(): void {
    setAnchorEl2(null);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0
          }
        }
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <Button variant="text" href='/#/auth/cuenta' startIcon={<AccountCircle />}>
          Cuenta
        </Button>
      </MenuItem>
      <MenuItem>
        <Button variant="text" href='/#/auth/cuenta' startIcon={<LogoutIcon />}>
          Cerrar Sesion
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src="https://res.cloudinary.com/damzv3dfx/image/upload/v1664219643/GrowMeLogo_oluytz.png"
              alt="logo"
              height="60"
            ></img>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/GrowMe-Web/#/auth/Inicio"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                fontFamily: 'Press Start 2P',
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              GrowMe
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                    <Typography
                      component={NavLink}
                      to={page.Link}
                      textAlign="center"
                    >
                      <NavLink to={page.Link}>{page.text}</NavLink>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/GrowMe-Web/#/auth/Inicio"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Press Start 2P',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              GrowMe
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  href={page.Link}
                  key={page.text}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.text}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {/* Estas notificiaciones pieden hacer de boton, si no es necesario cambiar el componente popupstate por un popover de material */}
              <IconButton
                size="large"
                aria-label="notifications"
                color="inherit"
                onClick={handleClick2}
                aria-controls={open2 ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open2 ? 'true' : undefined}
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Menu
                anchorEl={anchorEl2}
                id="account-menu"
                open={open2}
                onClose={handleClose2}
                onClick={handleClose2}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0
                    }
                  }
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem>Noti 1</MenuItem>
                <MenuItem>Noti 3</MenuItem>
              </Menu>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMenu}
    </>
  );
};

export default UserNavBar;
