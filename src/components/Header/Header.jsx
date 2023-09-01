import { DivContainer } from 'components/App/App.styled'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { routes } from 'routes'
import { logoutUserThunk } from 'store/auth/thunk' 

export const Header = () => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const dispatch = useDispatch();

  return (
    <>
    <header>
      <DivContainer>
        <div>
            <nav>
            <NavLink to={routes.HOME}>Home</NavLink>
            {isLoggedIn && <NavLink to={routes.CONTACTS}>Contacts</NavLink>}
              {!isLoggedIn ?
                <NavLink to={routes.LOGIN}>Log In</NavLink>
                : <Link onClick={() => {dispatch(logoutUserThunk())}} >Log Out</Link>
                }
          </nav>
        </div>
      </DivContainer>
      
    </header>
    </>
  )
}
