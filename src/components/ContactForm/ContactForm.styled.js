import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  & div {
    width: 300px;
  }
`;

export const Button = styled.button`
  width: 100px;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 5px;
  transition: background-color 0.1s ease;
  &:hover {
    background-color: lightgrey;
  }
  &:active {
    background-color: lightblue;
  }
`;
