import styled from 'styled-components';
import { ArrowButton } from '../../../app/commons/ArrowButton/arrowButton.styled';
import Button from '../../../app/commons/Button/Button';
import Label from '../../../app/commons/Label/Label';
import Icon from '../../../app/commons/icon/icon';

const FormStyled = styled.form`
  padding: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 99;
  font-family: ${props => props.theme.fonts.poppins};
  background-color: ${props => props.theme.colors.white};
`;

const SelectWrapperStyled = styled.div`
  position: relative;
`;

const SelectStyled = styled.div`
  height:40px;
  width: 45%;
  margin: 30px 0;
  border: 1px solid ${props => (props.isCollapsed ? '#BF3088' : '#EFEFEF')};
  box-sizing: border-box;
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
`;

const CustomOptions = styled.div`
  width: 100%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
  border-radius: 4px;
  position: absolute;
  bottom: -162px;
  left: 0;
  display: ${props => (props.isCollapsed ? 'block' : 'none')};
  background-color: ${props => props.theme.colors.white};
`;

const StyledOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 15px;
  color: ${props => (props.selected ? '#BF3088' : 'black')};

  &:hover {
    cursor: pointer;
  }
`;

const StyledLabel = styled(Label)`
  font-weight: 600;
  color: ${props => (props.isCollapsed ? '#BF3088' : 'black')};
`;

const ArrowButtonStyled = styled(ArrowButton)`
  width: auto;
  height: auto;
  background-color: transparent;
  border:0;
  color: ${props => (props.isCollapsed ? '#BF3088' : 'black')};
`;

const TextAreaStyled = styled.textarea`
  font-family: ${props => props.theme.fonts.poppins};
  height: 130px;
  resize: none;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #EFEFEF;
  border-radius: 4px;
  margin-bottom: 20px;
  outline: none;
`;

const ButtonWrapperStyled = styled.div`
  display: flex;
  align-items: center;
`;

const Buttons = styled(Button)`
  width: 100px;

  &:first-child{
    background-color: ${props => props.theme.colors.primaryColor};
    color: ${props => props.theme.colors.white};
    margin-left: 0;
  }
  &:last-child{
    background-color: ${props => props.theme.colors.primaryColorWithOpacity};
    color: ${props => props.theme.colors.primaryColor};
  }
`;

const StyledTitle = styled.div`
  font-size: 24px;
  line-height: 32px;
  font-weight:600;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items:center;
`;

const StyledIcon = styled(Icon)`
  height: auto;
  width: auto;
  color: ${props => props.theme.colors.primaryColor};
`;

const StyledCancelIcon = styled(Icon)`
  height: auto;
  width: auto;
  font-size: 12px;
`;

export {
  FormStyled, SelectWrapperStyled, SelectStyled, CustomOptions, StyledOption, StyledLabel, ArrowButtonStyled, StyledIcon, TextAreaStyled, ButtonWrapperStyled, Buttons, StyledTitle, StyledCancelIcon,
};
