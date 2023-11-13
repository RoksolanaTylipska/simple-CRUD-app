import React, { useContext } from 'react';
import './Header.scss'
import { AppContext } from '../Context/Context';
import { Link } from 'react-router-dom';
import { Box, AppBar, Toolbar, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function Header() {
  const {
    colorMode,
    setPassword,
    setEmail,
    setColorMode,
    loginButton,
    setLoginButton,
  } = useContext(AppContext);

  const hanleColorMode = () => {
    if (colorMode === 'dark') {
      setColorMode('light');
      localStorage.setItem('colorMode', 'light');
    } else if (colorMode === 'light') {
      setColorMode('dark');
      localStorage.setItem('colorMode', 'dark');
    }
  };

  const handleLogOut = () => {
    setLoginButton("open");
    setPassword("");
    setEmail("");
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.setItem('loginStatus', "open");
  };

  const handleLogIn = () => {
    setLoginButton("open");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className='header__link-container'>
            {loginButton !== "open" && (
              <>
                <Link to="/" className='header__link'>
                  <Button color="inherit" variant="text">Home</Button>
                </Link>
                <Link to="/articles" className='header__link'>
                  <Button color="inherit" variant="text">Articles</Button>
                </Link>
              </>
            )}
          </div>

          <div>
            <IconButton sx={{ ml: 1 }} onClick={hanleColorMode} color="inherit">
              {colorMode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            {loginButton === "open" ? (
              <Link className="header__login-button" to="/login">
                <Button
                  color="inherit"
                  onClick={handleLogIn}
                >
                  Login
                </Button>
              </Link>
            ) : (
              <Link className="header__login-button" to="/">
                <Button
                  color="inherit"
                  onClick={handleLogOut}
                >
                  Logout
                </Button>
              </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;