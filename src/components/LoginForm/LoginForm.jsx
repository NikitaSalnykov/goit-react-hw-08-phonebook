import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk } from 'store/auth/thunk';
import { Link, useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { routes } from 'routes';
import {
  SwitchForm,
  formStyle,
  inputStyle,
  notification,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate(routes.HOME);
  }, [isAuth, navigate]);

  const handleLogIn = obj => {
    dispatch(
      loginUserThunk({
        email: obj.email,
        password: obj.password,
      })
    );
  };
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = <div style={notification}>Required</div>;
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = (
              <div style={notification}>Invalid email address</div>
            );
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleLogIn(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form style={formStyle}>
            <div>
              <Field
                style={inputStyle}
                type="email"
                id="email"
                name="email"
                as={TextField}
                variant="outlined"
                label="Email"
                required
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div style={{ marginTop: '20px' }}>
              <Field
                style={inputStyle}
                type="password"
                id="password"
                name="password"
                as={TextField}
                variant="outlined"
                label="Password"
                required
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <Button
              style={{ marginTop: '30px' }}
              variant="contained"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <SwitchForm>
        <Link to={routes.REGISTER}>Sign Up</Link>
      </SwitchForm>
    </>
  );
};
