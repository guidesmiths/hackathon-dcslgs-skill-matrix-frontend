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

const UserData = styled.table`
  grid-column-start: 2;
  grid-column-end: 5;
  -webkit-border-vertical-spacing: 20px;
  -webkit-border-horizontal-spacing: 0px;
`;

const TableTitleLeft = styled.h5`
  text-align: left;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  border-left: 1px solid grey;
  padding: 15px;
`;

const TableTitleCenter = styled.h5`
  text-align: center;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  padding: 15px;
`;

const TableRowLeft = styled.td`
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  border-left: 1px solid grey;
  padding: 15px;
`;

const TableRowCenter = styled.td`
  text-align: center;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  padding: 15px;
`;

const RowSkills = styled.div`
  &:first-child {
    border-left: 1px solid grey;
  }
`;

export {
  UserPageStyled,
  UserPageDisplay,
  UserData,
  TableTitleLeft,
  TableTitleCenter,
  TableRowLeft,
  TableRowCenter,
  RowSkills,
};
