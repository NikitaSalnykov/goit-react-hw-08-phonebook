import { DivContainer } from 'components/App/App.styled'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { routes } from 'routes'
import { logoutUserThunk } from 'store/auth/thunk' 

export const Header = () => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const dispatch = useDispatch();

   const handleLogout = () => dispatch(logoutUserThunk());

  return (
    <>
    <header>
      <DivContainer>
        <div>
            <nav>
            <NavLink to={routes.HOME}>Home</NavLink>
            {isLoggedIn && <NavLink to={routes.CONTACTS}>Contacts</NavLink>}
              {isLoggedIn ?
              <Link to={routes.HOME} onClick={handleLogout} className="text-sm font-semibold text-gray-900 ml-0.5 hover:text-indigo-600">LogOut</Link>
                :
                <NavLink to={routes.LOGIN}>Log In</NavLink>
                }
          </nav>
        </div>
      </DivContainer>
      
    </header>
    </>
  )
}
