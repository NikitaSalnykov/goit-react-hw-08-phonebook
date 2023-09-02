import { DivContainer } from 'components/App/App.styled';
import { RegisterWrapper } from './Register.styled';
import { SignInForm } from 'components/SignInForm/SignInForm';

const Register = () => {
  return (
    <DivContainer>
      <RegisterWrapper>
        <h1>Sign Up</h1>
        <SignInForm />
      </RegisterWrapper>
    </DivContainer>
  );
};

export default Register;
