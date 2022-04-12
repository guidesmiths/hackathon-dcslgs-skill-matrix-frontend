import styled from 'styled-components';
import { Icon } from '../../../../../app/commons/Icon';
import { Label } from '../../../../../app/commons/Label/Label.styled';

const getBorder = ({ hasError, theme, readOnly }) => {
  if (hasError) return `1px solid ${theme.colors.error}`;
  return !readOnly ? `1px solid ${theme.colors.grey3}` : 'none';
};

const SkillContainerStyled = styled.div`
  position: relative;
  width: 80%;
  box-sizing: border-box;
  margin: 10px auto;
  font-family: ${({ theme }) => theme.fonts.poppins};
  border-radius: 4px;

  &:last-child {
    height: 100%;
    margin-bottom: 30px;
  }
`;

const SkillHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  height: 75px;
  border: 1px solid ${({ theme }) => theme.colors.grey3};
`;

const StyledLabel = Label;

const SkillNameStyledInput = styled.input`
  width: 60%;
  padding: 12px;
  margin-left: 20px;
  border: ${getBorder};
  border-radius: 4px;
  box-sizing: border-box;

  &:hover {
    cursor: ${({ readOnly }) => !readOnly && 'pointer'};
    border: ${({ readOnly, theme }) => !readOnly && `1px solid ${theme.colors.primaryColor}`};
  }
`;

const IconsGroupStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 19px 20px;
`;

const IconStyled = styled(Icon)`
  color: ${({ theme }) => theme.colors.black};

  &:first-child {
    margin-right: 20px;
  }
`;

const LevelStyled = styled.textarea`
  width: 90%;
  margin: 10px auto;
  padding: 12px;
  box-sizing: border-box;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.poppins};
  border: ${getBorder};
  border-radius: 4px;
  outline: ${({ readOnly }) => readOnly && 'none'};
  resize: none;

  &:hover {
    cursor: ${({ readOnly }) => !readOnly && 'pointer'};
    border: ${({ readOnly, theme }) => !readOnly && `1px solid ${theme.colors.primaryColor}`};
  }

  &:hover + ${StyledLabel} {
    color: ${({ readOnly, theme }) => !readOnly && theme.colors.primaryColor};
  }
`;

const LevelContainerStyled = styled.div`
  position: relative;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey3};
  border-left: 1px solid ${({ theme }) => theme.colors.primaryColor};
`;

const SkillTour = styled.div`
  padding: 10px 5px;
  box-sizing: border-box;
`;

const RowSkills = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px 0 50px;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
`;

const RowSkillsTop = styled.div`
  margin: 0 auto;
  margin-bottom: ${({ isRowDown }) => (isRowDown ? 'none' : '8px')};
  min-height: 62.5px;
`;

const RowSkillsWrapper = styled.div`
  &:last-child {
    padding-bottom: 30px !important;
  }
`;

const SkillName = styled.p`
  min-width: 100px;
  padding-left: 5px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

export {
  SkillContainerStyled,
  SkillHeaderStyled,
  SkillNameStyledInput,
  IconsGroupStyled,
  IconStyled,
  LevelContainerStyled,
  LevelStyled,
  RowSkills,
  RowSkillsTop,
  RowSkillsWrapper,
  StyledLabel,
  SkillName,
  SkillTour,
};
