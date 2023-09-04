import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.42;
  letter-spacing: 0.0075em;
  margin: 6px;
  color: rgb(36, 36, 36);
  & h1 {
    text-align: center;
    margin: 0;
  }
  & h2 {
    text-align: center;
    font-size: larger;
    margin: 0;
    margin-bottom: 10px;
  }
`;
export const TextWrapper = styled.div`
  margin-bottom: 20px;
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    width: 600px;
  }

  @media screen and (min-width: 1200px) {
    width: 800px;
  }

  & li {
    padding-bottom: 6px;
    list-style: disc;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
`;

export const RecommendedOverlay = styled.div`
display: flex;
    gap: 20px;
    flex-direction: column; 
    padding: 20px 0px;

  @media screen and (min-width: 375px) {

  }
  @media screen and (min-width: 768px) {

  }
  @media screen and (min-width: 1200px) {
  flex-direction: row;

  }

`
