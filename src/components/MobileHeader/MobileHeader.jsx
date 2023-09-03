import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from 'store/auth/thunk';
import { Logo, LogoText } from 'components/Header/Header.styled';
import { Link, NavLink } from 'react-router-dom';
import { routes } from 'routes';
import { Avatar, Button } from '@mui/material';

export const MobileHeader = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  let user = useSelector(state => state.auth.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleLogout = () => dispatch(logoutUserThunk());

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.toUpperCase().split(' ')[0][0]}`,
    };
  }

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: '#242424', color: 'lightblue' }}
    >
      <Toolbar>
        <Link to={routes.HOME}>
          <Logo>
            <LogoText>
              <div>&</div>
              <div>
                <p style={{ textDecoration: 'underline' }}>names</p>
                <p>numbers</p>
              </div>
            </LogoText>
          </Logo>
        </Link>
        {isLoggedIn && (
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to={routes.CONTACTS}>Contacts</NavLink>
          </Typography>
        )}
        {isLoggedIn ? (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar {...stringAvatar(user.name)} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>{user.name}</MenuItem>
              <MenuItem onClick={handleLogout}>Log Out</MenuItem>
            </Menu>
          </div>
        ) : (
          <Link to={routes.LOGIN} style={{ marginLeft: 'auto' }}>
            <Button
              style={{
                color: 'lightblue',
                borderColor: 'lightblue',
              }}
              variant="outlined"
            >
              Log In
            </Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};
