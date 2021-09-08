import styled from 'styled-components';
import Icon from '../../app/commons/icon/icon';

const UserPageStyled = styled.div`
  display: block;
  box-sizing: border-box;
  height: 100vh;
  margin: 20px 50px;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
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
  align-items: center;
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
  display: ${props => props.isCollapsed && 'none'};
  grid-gap: 50px;
`;

const RowCollapsed = styled.div`
  margin-bottom: 15px;
  display: ${props => props.isCollapsed && 'none'};
`;

const RowSkillsBottom = styled.div`
  display: flex;
  border: 1px solid grey;
  padding: 15px;
  justify-content: space-between;
  padding-right: 65px;
`;

const FormHeader = styled(RowWrapper)`
  margin-bottom: 35px;
  padding: 5px 15px;
`;

const RowSkillsTop = styled.div`
  margin-bottom: ${props => (props.isRowDown ? '0px' : '8px')};
  display: grid;
  border: 1px solid grey;
  padding: 15px;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 50px;
`;

const UserInput = styled.input`
  border: none;
  margin-right: 20px;
  &:hover {
    font-weight: 600;
  }
  cursor: pointer;
`;

const UserSkillName = styled.p`
  min-width: 100px;
  margin-right: 20px;
`;

const DataTitle = styled.h5`
  margin: 0px;
  text-align: center;
`;
const StyledIcon = styled(Icon)`
 position: fixed;
 bottom: 2%;
 right: 2%;
`;

export {
  UserPageStyled,
  UserPageDisplay,
  UserData,
  UserSkillName,
  RowSkills,
  RowCollapsed,
  UserInput,
  DataTitle,
  RowWrapper,
  RowTitle,
  FormHeader,
  RowSkillsTop,
  RowSkillsBottom,
  StyledIcon,
};
