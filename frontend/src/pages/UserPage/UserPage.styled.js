import styled from 'styled-components';

const UserPageStyled = styled.div`
  display: block;
  box-sizing: border-box;
  height: 100vh;
  margin: 20px 50px;
  font-family: Arial, Helvetica, sans-serif;
`;

const UserPageDisplay = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;
`;

const UserData = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-column-start: 2;
  grid-column-end: 5;
`;

export { UserPageStyled, UserPageDisplay, UserData };
