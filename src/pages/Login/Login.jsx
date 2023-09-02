import { DivContainer } from 'components/App/App.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { LoginWrapper } from './Login.styled';

const Login = () => {
  return (
    <DivContainer>
      <LoginWrapper>
        <h1>Login</h1>
        <LoginForm />
      </LoginWrapper>
    </DivContainer>
  );
};

export default Login;
