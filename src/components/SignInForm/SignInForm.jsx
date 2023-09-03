import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from 'routes';
import { useDispatch, useSelector } from 'react-redux';
import { createUserThunk } from 'store/auth/thunk';
import { Button, TextField } from '@mui/material';
import {
  SwitchForm,
  formStyle,
  inputStyle,
  notification,
} from 'components/LoginForm/LoginForm.styled';

export const SignInForm = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate(routes.HOME);
  }, [isAuth, navigate]);

  const handleRegister = obj => {
    dispatch(
      createUserThunk({
        name: obj.name,
        email: obj.email,
        password: obj.password,
      })
    );
  };
  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = <div style={notification}>Required</div>;
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            <div style={notification}>Invalid email address</div>;
          }

          if (!values.password) {
            errors.password = <div style={notification}>Required</div>;
          } else if (values.password.length < 7) {
            errors.password = (
              <div style={notification}>
                Password must be at least 7 characters long
              </div>
            );
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleRegister(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form style={formStyle}>
            <div>
              <Field
                style={inputStyle}
                type="text"
                id="name"
                name="name"
                as={TextField}
                variant="outlined"
                label="Name"
              />
              <ErrorMessage name="name" component="div" />
            </div>
            <div style={{ marginTop: '20px' }}>
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
        <Link to={routes.LOGIN}>Already registered? Login</Link>
      </SwitchForm>
    </>
  );
};
