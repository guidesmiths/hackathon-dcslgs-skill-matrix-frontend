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
  height:90px;
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
  margin:0 auto;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
`;

const RowTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
`;
const ColumTitles = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #EFEFEF;
  border-top: 1px solid #EFEFEF;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 6;
  width: 80%;
  margin: 0 auto 20px;
  padding:0 50px;
  box-sizing:border-box;
`;

const RowWrapper = styled.div`
  border: 1px solid grey;
  padding: 15px;
  margin-bottom: 20px;
  display: ${props => props.isCollapsed && 'none'};
`;

const FormHeader = styled(RowWrapper)`
  margin-bottom: 35px;
  padding: 5px 15px;
  border:0;
`;

const UserInput = styled.input`
  border: none;
  display: none;
`;

const DataTitle = styled.h5`
  margin: 0px;
  text-align: start;
  font-size: 24px;
  line-height: 32px;
  padding:25px 0 20px 20px;
  min-width:300px;
  border-bottom: 1px solid #EFEFEF;
`;
const ColumTitle = styled.h5`
  color: ${props => props.theme.colors.textColor};
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  margin: 8px 0;
  text-transform: uppercase;
`;

const EditButtonStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.white};
  width: 112px;
  box-sizing: border-box;

  &:hover{
    cursor: pointer;
  }
`;
const SaveButton = styled(EditButtonStyled)`

&:first-child{
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primaryColor};
  };
  &:last-child{
    background: ${props => props.theme.colors.primaryColor};
    color: ${props => props.theme.colors.white};
  };
  &:hover{
    cursor: pointer;
  }
`;
const StyledIcon = styled(Icon)`
background: ${props => props.theme.colors.lightGreen};
color: ${props => props.theme.colors.green};
border-radius: 0px;
height: auto;
width: 112px;
box-sizing: border-box;
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
