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

const RowSkills = styled.form`
  display: flex;
  justify-content: space-between;
  align-items:center;
  grid-column-start: 1;
  grid-column-end: 6;
`;

const RowTitle = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column-start: 1;
  grid-column-end: 6;
`;

const RowWrapper = styled.div`
  display: grid;
  border: 1px solid grey;
  padding: 15px;
  margin-bottom: 20px;
  grid-template-columns: repeat(6, 1fr);
  display: ${props => (props.isCollapsed && 'none')};
  grid-gap: 50px;
`;

const RowSkillsCollapsed = styled.div`
`;

const UserInput = styled.input`
  border: none;
  margin-right: 20px;
`;

const UserSkillName = styled.p`
  min-width: 100px;
  margin-right: 20px;
`;

const DataTitle = styled.h5`
  margin: 0px;
  text-align: center;
`;

export {
  UserPageStyled,
  UserPageDisplay,
  UserData,
  UserSkillName,
  RowSkills,
  UserInput,
  DataTitle,
  RowSkillsCollapsed,
  RowWrapper,
  RowTitle,
};
