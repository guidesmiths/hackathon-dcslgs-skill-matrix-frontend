import styled from 'styled-components';
import { ArrowButton } from '../../../app/commons/ArrowButton/arrowButton.styled';
import Icon from '../../../app/commons/icon/icon';

const RowSkillsWrapper = styled.div`
  &:last-child {
    padding-bottom: 30px !important;
  }

  .check-box{
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

const RowSkillsTop = styled.div`
  margin: 0 auto;
  margin-bottom: ${({ isRowDown }) => (isRowDown ? 'none' : '8px')};
  padding: 0 15px;
  width: 80%;
`;

const RowSkills = styled.div`
  display: grid;
  grid-template-columns: 40% 40% 20%;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px 0 50px;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
`;

const UserSkillName = styled.p`
  min-width: 100px;
  padding-left: 5px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  border-radius: 4px;

  &:after {
    content: '';
    position: absolute;
    top: 6px;
    left: 5px;
    width: 7px;
    height: 3px;
    border: 3px solid ${({ theme }) => theme.colors.primaryColor};
    border-top: none;
    border-right: none;
    background: transparent;
    opacity: 0;
    transform: rotate(-45deg);
  }

  &:hover {
    cursor: ${({ edit }) => (edit ? 'pointer' : 'auto')};
  }

  &:hover:after {
    opacity: ${({ edit }) => (edit ? 0.5 : 'auto')}
  };

  &:after {
    opacity: ${({ isChecked }) => (isChecked ? 1 : 0)};
  }
`;

const CheckboxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 22.5px;
  height: 22.5px;
  margin: 20px 20px 20px 0;
  padding: 2px;
  box-sizing: border-box;
`;

const StyledCheckbox = styled.input`
  visibility: hidden;
`;

const RowCollapsed = styled.div`
  display: ${({ isCollapsed }) => isCollapsed && 'none'};
  width: 80%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-left: 2px solid ${({ theme }) => theme.colors.primaryColor};
`;

const RowSkillsBottom = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 15px 65px 15px 15px;
  margin-bottom: 15px;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
`;

const ArrowButtonStyled = styled(ArrowButton)`
  width: auto;
  padding-left: 20px;
  border: 0;
  background-color: transparent;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const DescriptionStyled = styled.div`
  position: relative;
  padding: 0 30px;

  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  height: 48px;
  width: 60px;
  min-width: 60px;
  margin-right: 5px;
  padding: 5px 0;

  select {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.grey3};
    font-size: 16px;
    outline: none;
  }
`;

const LevelEditor = styled.div`
  display: flex;
  padding: 0 0 10px;
`;

const AjustLevelButtons = styled.div`
  position: relative;
  display: flex;
  height: 48px;
  padding: 5px 0;
`;

const getBackgroundColor = ({ minus, level, clicked, theme }) => {
  if (minus) {
    if (level === 0) return theme.colors.grey3;
    if (clicked === 'minus') return theme.colors.darkGreen;
    return theme.colors.lightGreen;
  }
  if (level === 4) return theme.colors.grey3;
  if (clicked === 'plus') return theme.colors.darkGreen;
  return theme.colors.lightGreen;
};

const getColor = ({ minus, level, clicked, theme }) => {
  if (minus) {
    if (level === 0) return theme.colors.grey2;
    if (clicked === 'minus') return theme.colors.white;
    return theme.colors.green;
  }
  if (level === 4) return theme.colors.grey2;
  if (clicked === 'plus') return theme.colors.white;
  return theme.colors.green;
};

const getBackgroundColorHover = ({ minus, level, clicked, theme }) => {
  if (minus && level !== 0 && clicked !== 'minus' && clicked !== '') return theme.colors.secondaryColor;
  if (!minus && level !== 4 && clicked !== 'plus' && clicked !== '') return theme.colors.secondaryColor;
  return '';
};

const AdjustButton = styled(Icon)`
  max-height: 48px;
  background-color: ${getBackgroundColor};
  color: ${getColor};
  border-radius: ${({ minus }) => (minus ? '8px 0 0 8px' : '0 8px 8px 0')};

  &:hover {
    background-color: ${getBackgroundColorHover};
    color: ${getColor};
  };
`;

const StyledInput = styled.input`
  width: 100%;
  min-height: 60px;
  box-sizing: border-box;
  padding: 0 15px;
  margin-left: 30px;
  font-family: ${({ theme }) => theme.fonts.poppins};
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 4px;
`;

const Tooltip = styled.span`
  z-index: 999;
  position: absolute;
  top: 70px;
  right: -60px;
  display: flex;
  align-items: center;
  width: 280px;
  height: 50px;
  padding: 10px;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 9px;
  font-weight: 500;
  text-align: center;
  background: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0;
  border-radius: 4px;
  animation: appear 1 normal forwards;
  animation-delay: 0.3s;

  &::after {
    content: '';
    z-index: 999;
    position: absolute;
    top: -10px;
    right: ${({ plus }) => (plus ? 65 : 115)}px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid ${({ theme }) => theme.colors.green};
  }

  @keyframes appear {
    to {
      opacity: 0.75;
    }
  }
`;

const RowSkillTour = styled.div`
  width: 100%;
`;

export {
  RowSkillsWrapper,
  RowSkillsTop,
  RowSkills,
  UserSkillName,
  StyledLabel,
  CheckboxWrapper,
  StyledCheckbox,
  RowCollapsed,
  RowSkillsBottom,
  ArrowButtonStyled,
  ButtonWrapper,
  DescriptionStyled,
  SelectWrapper,
  LevelEditor,
  AjustLevelButtons,
  AdjustButton,
  RowSkillTour,
  StyledInput,
  Tooltip,
};
