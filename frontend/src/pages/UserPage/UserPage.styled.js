import styled from 'styled-components';
import Icon from '../../app/commons/icon/icon';
import Modal from '../../app/commons/Modal/Modal';

const UserPageStyled = styled.div`
  display: block;
  box-sizing: border-box;
  font-family: ${props => props.theme.fonts.poppins};
  position: relative;
`;
const HeaderStyled = styled.div`
  background: ${props => props.theme.colors.backgroundGradient};
  width: 100%;
  height: 90px;
`;

const UserPageDisplay = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin-top: -40px;
  padding-bottom: 70px;
`;

const UserData = styled.div`
  grid-column-start: 2;
  grid-column-end: 5;
  background: white;
  width: 98%;
  margin: 0 auto;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
`;

const RowTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
`;
const ColumTitles = styled.div`
  display: grid;
  grid-template-columns: 40% 40% 20%;
  align-items: center;
  width: 80%;
  box-sizing: border-box;
  margin: 0 auto 20px;
  padding: 0 15px 0 50px;

  border-bottom: 1px solid #EFEFEF;
  border-top: 1px solid #EFEFEF;
`;

const RowWrapper = styled.div`
  display: ${props => props.isCollapsed && 'none'};
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid grey;
`;

const FormHeader = styled(RowWrapper)`
  margin-bottom: 35px;
  padding: 5px 15px;
  border: 0;
`;

const UserInput = styled.input`
  display: none;
  border: none;
`;

const DataTitle = styled.h5`
  min-width: 300px;
  margin: 0px;
  padding: 25px 0 20px 20px;
  font-size: 24px;
  line-height: 32px;
  text-align: start;
  border-bottom: 1px solid #EFEFEF;
`;
const ColumTitle = styled.h5`
  margin: 8px 0;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${props => props.theme.colors.textColor};
  text-transform: uppercase;
`;

const EditButtonStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  box-sizing: border-box;
  background: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.white};

  &:hover{
    cursor: pointer;
  }
`;

const SaveButton = styled(EditButtonStyled)`
  &:first-child {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primaryColor};
  };

  &:last-child {
    background: ${props => props.theme.colors.primaryColor};
    color: ${props => props.theme.colors.white};
  };

  &:hover {
    cursor: pointer;
  }
`;
const StyledIcon = styled(Icon)`
  width: 112px;
  height: auto;
  box-sizing: border-box;
  background: ${props => props.theme.colors.lightGreen};
  color: ${props => props.theme.colors.green};
  border-radius: 0px;
`;
const StyledModal = styled(Modal)`
  width:600px;
`;

export {
  UserPageStyled,
  UserPageDisplay,
  UserData,
  UserInput,
  DataTitle,
  RowWrapper,
  RowTitle,
  ColumTitles,
  ColumTitle,
  FormHeader,
  StyledIcon,
  EditButtonStyled,
  HeaderStyled,
  StyledModal,
  SaveButton,
};
