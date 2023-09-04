import styled from 'styled-components';

export const RecommendedContainer = styled.div`
  padding: 8px 0px;
  height: 300px;
  overflow-y: auto;
  min-width: 200px;
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    min-width: 600px;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    padding: 8px 40px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #00000008;
    border-radius: 5px;
  }
`;
