import styled from 'styled-components';
import { ArrowButton } from '../../../app/commons/ArrowButton/arrowButton.styled';
import { Button } from '../../../app/commons/Button';
import { Label } from '../../../app/commons/Label';
import { Icon } from '../../../app/commons/Icon';

const FormStyled = styled.form`
  z-index: 99;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px;
  font-family: ${({ theme }) => theme.fonts.poppins};
  background-color: ${({ theme }) => theme.colors.white};
`;

const SelectWrapperStyled = styled.div`
  position: relative;
`;

const SelectStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
  padding-left: 20px;
  height: 40px;
  width: 45%;
  border: 1px solid ${({ isCollapsed, theme }) => (isCollapsed ? theme.colors.primaryColor : theme.colors.grey3)};
  box-sizing: border-box;
  border-radius: 8px;
`;

const CustomOptions = styled.div`
  position: absolute;
  left: 0;
  bottom: -162px;
  width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  border-radius: 4px;
  display: ${({ isCollapsed }) => (isCollapsed ? 'block' : 'none')};
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 15px;
  color: ${({ selected, theme }) => (selected ? theme.colors.primaryColor : 'black')};

  &:hover {
    cursor: pointer;
  }
`;

const StyledLabel = styled(Label)`
  font-weight: 600;
  color: ${({ isCollapsed, theme }) => (isCollapsed ? theme.colors.primaryColor : 'black')};
`;

const ArrowButtonStyled = styled(ArrowButton)`
  width: auto;
  height: auto;
  background-color: transparent;
  border: 0;
  color: ${({ isCollapsed, theme }) => (isCollapsed ? theme.colors.primaryColor : 'black')};
`;

const TextAreaStyled = styled.textarea`
  font-family: ${({ theme }) => theme.fonts.poppins};
  height: 130px;
  resize: none;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.grey3};
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

  &:first-child {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.white};
    margin-left: 0;
  }

  &:last-child {
    background-color: ${({ theme }) => theme.colors.primaryColorWithOpacity};
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

const StyledTitle = styled.div`
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledIcon = styled(Icon)`
  height: auto;
  width: auto;
  color: ${({ theme }) => theme.colors.primaryColor};
`;

const StyledCancelIcon = styled(Icon)`
  height: auto;
  width: auto;
  font-size: 12px;
`;

export {
  FormStyled, SelectWrapperStyled, SelectStyled, CustomOptions, StyledOption, StyledLabel, ArrowButtonStyled, StyledIcon, TextAreaStyled, ButtonWrapperStyled, Buttons, StyledTitle, StyledCancelIcon,
};
