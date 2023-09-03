import { DivContainer } from 'components/App/App.styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { routes } from 'routes';
import {
  HeaderOverlay,
  HeaderStyle,
  Logo,
  LogoText,
  Navigation,
} from './Header.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      <HeaderStyle>
        <DivContainer>
          <HeaderOverlay>
            <Navigation>
              <div
                style={{ display: 'flex', gap: '30px', alignItems: 'center' }}
              >
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
                <NavLink to={routes.HOME}>Home</NavLink>
                {isLoggedIn && <NavLink to={routes.CONTACTS}>Contacts</NavLink>}
              </div>
              <UserMenu />
            </Navigation>
          </HeaderOverlay>
        </DivContainer>
      </HeaderStyle>
    </>
  );
};
