import { DivContainer } from 'components/App/App.styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { routes } from 'routes';
import { logoutUserThunk } from 'store/auth/thunk';
import {
  HeaderOverlay,
  HeaderStyle,
  LoggedIn,
  Navigation,
} from './Header.styled';
import { IoIosContacts } from 'react-icons/io';
import { Avatar, Button } from '@mui/material';

export const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  let user = useSelector(state => state.auth.user);

  const handleLogout = () => dispatch(logoutUserThunk());

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

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
    <>
      <HeaderStyle>
        <DivContainer>
          <HeaderOverlay>
            <Navigation>
              <div
                style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
              >
                <IoIosContacts size={30} />
                <NavLink to={routes.HOME}>Home</NavLink>
                {isLoggedIn && <NavLink to={routes.CONTACTS}>Contacts</NavLink>}
              </div>
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
                    <p>{user.name}</p>
                  </div>
                </LoggedIn>
              ) : (
                <NavLink to={routes.LOGIN}>
                  <Button
                    style={{
                      color: 'lightblue',
                      borderColor: 'lightblue',
                    }}
                    variant="outlined"
                  >
                    Log In
                  </Button>
                </NavLink>
              )}
            </Navigation>
          </HeaderOverlay>
        </DivContainer>
      </HeaderStyle>
    </>
  );
};
