import React from 'react';
import { LoggedIn } from 'components/Header/Header.styled';
import { Avatar, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from 'store/auth/thunk';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

export const UserMenu = () => {
  let user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

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

  const handleLogout = () => dispatch(logoutUserThunk());
  return (
    <>
      {isLoggedIn ? (
        <LoggedIn>
          <Link to={routes.HOME} onClick={handleLogout}>
            <Button
              style={{
                color: 'lightblue',
                borderColor: 'lightblue',
              }}
              variant="outlined"
            >
              Log Out
            </Button>
          </Link>
          <div>
            <Avatar {...stringAvatar(user.name)} />
            <p>{user.email}</p>
          </div>
        </LoggedIn>
      ) : (
        <Link to={routes.LOGIN}>
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
    </>
  );
};
