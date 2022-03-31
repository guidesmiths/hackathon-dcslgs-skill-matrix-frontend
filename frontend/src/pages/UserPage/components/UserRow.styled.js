import styled from 'styled-components';
import { ArrowButton } from '../../../app/commons/ArrowButton/arrowButton.styled';

const RowSkillsWrapper = styled.div`
  &:last-child {
    padding-bottom: 30px !important;
  }

  .check-box {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

const RowSkillsTop = styled.div`
  margin: 0 auto;
  margin-bottom: ${({ isCollapsed }) => (isCollapsed && '8px')};
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
  ArrowButtonStyled,
  ButtonWrapper,
  RowSkillTour,
};
