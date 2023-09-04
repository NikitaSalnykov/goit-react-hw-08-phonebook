import styled from 'styled-components';

export const RecommendedContainer = styled.div`

padding: 8px 0px;
height: 300px;
overflow-y: auto; 

  @media screen and (min-width: 375px) {

  }
  @media screen and (min-width: 768px) {

  }
  @media screen and (min-width: 1200px) {
  flex-direction: row;
padding: 8px 40px;
  }

  &::-webkit-scrollbar {
    width: 6px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cecece; 
    border-radius: 5px; /
  }
`