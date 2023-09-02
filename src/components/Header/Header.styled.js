import styled from 'styled-components';

export const HeaderStyle = styled.header`
  background-color: #242424;
`;

export const HeaderOverlay = styled.div`
  padding: 20px;
  display: flex;
  /* border-bottom: 1px solid lightgrey; */
  color: lightblue;
  height: 90px;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LoggedIn = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  & a {
  }

  & img {
    border-radius: 50%;
    width: 30px;
  }

  & div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
