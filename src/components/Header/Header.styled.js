import styled from 'styled-components';

export const HeaderStyle = styled.header`
  background-color: #242424;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.6;
  letter-spacing: 0.0075em;
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
  gap: 40px;

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

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  margin-right: 30px;
  cursor: pointer;

  @media screen and (min-width: 1200px) {
    transform: scale(1.4);
  }

  & div {
  }
  & p {
    font-size: 14px;
    margin: 0px;
    line-height: 12px;
    font-weight: 800;
  }
`;

export const LogoText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 800;
  gap: 4px;
`;
