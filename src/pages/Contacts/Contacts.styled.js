import styled from 'styled-components';

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 0;
  }
`;

export const ListWrapper = styled.div`
  padding: 0;

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    width: 460px;
  }
  @media screen and (min-width: 1200px) {
    width: 560px;
    flex-direction: row;
    justify-content: space-around;
    gap: 0;
  }

  & li {
    border-radius: 10px;
    background-color: #add8e678;
    padding: 15px;
    padding-right: 24px;
    overflow: hidden;
    &:nth-child(even) {
      background-color: transparent;
    }
    & span {
      overflow: hidden;
    }
  }
`;
