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

const pages = [
  {
    text: 'Comenzar',
    Link: '/auth/SingUp'
  },
  {
    text: 'Aplicacion Móvil',
    Link: '/MovileApp'
  },
  {
    text: 'Sobre nosotros',
    Link: '/About'
  }
];

const Navbar: React.FunctionComponent = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  function handleOpenNavMenu(event: any): void {
    setAnchorElNav(event.currentTarget);
  }

  function handleCloseNavMenu(): void {
    setAnchorElNav(null);
  }

  return (
    <>
      <AppBar position="fixed">
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
              href="/app"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
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
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
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
            <Box>
              <Button variant="text" color="inherit" href="/auth/LogIn">
                LogIn
              </Button>
            </Box>
            <Box>
              <Button variant="outlined" color="inherit" href="/auth/SingUp">
                Sing Up
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
