import styled from 'styled-components';

export const FavoriteContainer = styled.div`
margin-bottom: 30px;
padding: 31px;
    background: antiquewhite;
    width: 500px;
    border-radius: 20px;
    /* background: rgb(171 205 234); */
    background: rgb(244, 250, 255);
    margin-left: auto;
margin-right: auto;
margin-bottom: 40px;
 width: 280px;

& h3 {
  margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
       
}
  @media screen and (min-width: 375px) {
 width: 330px;

  }
  @media screen and (min-width: 768px) {
    width: 600px;

  }
  @media screen and (min-width: 1200px) {
  }
`;

export const FavoriteOverlay = styled.div`
height: 100px;
display: flex;
align-items: center;
    justify-content: center;
    margin: 20px auto;
padding: 20px 10px;
    border-radius: 20px;
    width: 220px;
    overflow: hidden;

  @media screen and (min-width: 375px) {
     width: 265px;
  }
  @media screen and (min-width: 768px) {
     width: 400px;
     padding: 20px 20px;
  }
  @media screen and (min-width: 1200px) {

  }
`;

export const Fallback = styled.div`
display: flex;
align-items: center;
    justify-content: center;

    & div>div {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(50%, 50%);
    stroke: black
    }
  @media screen and (min-width: 375px) {

  }
  @media screen and (min-width: 768px) {

  }
  @media screen and (min-width: 1200px) {

  }
`;
