import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'routes';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { getUserThunk } from 'store/auth/thunk';
import Layout from 'components/Layout/Layout';

const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={routes.CONTACTS} element={<Contacts />} />
          <Route path={routes.LOGIN} element={<Login />} />
          <Route path={routes.REGISTER} element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};
