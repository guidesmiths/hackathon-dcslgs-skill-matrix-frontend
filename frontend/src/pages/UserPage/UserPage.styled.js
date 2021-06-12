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
  grid-column-start: 2;
  grid-column-end: 5;
`;

const RowSkills = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid grey;
  padding: 15px;
  margin-bottom: 20px;
`;

const UserInput = styled.input`
  border: none;
  margin: 0px;
`;

const DataTitle = styled.h5`
  margin: 0px;
`;

export {
  UserPageStyled,
  UserPageDisplay,
  UserData,
  RowSkills,
  UserInput,
  DataTitle,
};
