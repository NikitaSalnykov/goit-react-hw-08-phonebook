import React, { useEffect } from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from 'routes';
import { DivContainer } from 'components/App/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserThunk } from 'store/auth/thunk';
 
const Login = () => {

  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.token)
  const navigate = useNavigate()
  
  useEffect(() => {
  isAuth && navigate(routes.HOME)
  }, [isAuth, navigate])
   
  const handleLogIn = (obj) => {
    dispatch(loginUserThunk({
      "email": obj.email,
      "password": obj.password
    }))
  }

  return (

      <DivContainer>
     <h1>Login</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         handleLogIn(values);
           setSubmitting(false);
       }}
     >
       {({ isSubmitting }) => (
<Form>
  <div>
    <label htmlFor="email">Email:</label>
    <Field type="email" id="email" name="email" />
    <ErrorMessage name="email" component="div" />
  </div>
  <div>
    <label htmlFor="password">Password:</label>
    <Field type="password" id="password" name="password" />
    <ErrorMessage name="password" component="div" />
  </div>
  <button type="submit" disabled={isSubmitting}>
    Submit
  </button>
</Form>
       )}
     </Formik>
     <div>
       <Link to={routes.REGISTER}>Sign Up</Link>
     </div>
   </DivContainer>
 
 )};
 
 export default Login;