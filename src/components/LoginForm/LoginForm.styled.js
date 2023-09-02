import styled from 'styled-components';

export const inputStyle = {
  width: '250px',
};

export const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

export const notification = {
  fontSize: 'small',
  color: 'red',
  position: 'absolute',
  padding: '2px',
};

export const SwitchForm = styled.div`
  margin-top: 10px;
  color: #034c9c;
  font-size: small;
  transition: 0.3s ease;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;
