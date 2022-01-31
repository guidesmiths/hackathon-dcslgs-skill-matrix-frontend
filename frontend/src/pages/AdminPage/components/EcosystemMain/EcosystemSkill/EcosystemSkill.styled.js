import styled from 'styled-components';
import Icon from '../../../../../app/commons/icon/icon';
import Label from '../../../../../app/commons/Label/Label.styled';

const SkillContainerStyled = styled.div`
  position: relative;
  margin: 10px auto;
  width: 80%;
  box-sizing: border-box;
  font-family: ${props => props.theme.fonts.poppins};
  border-radius: 4px;

  &:last-child{
      height:100%;
      margin-bottom:30px;
  }
`;

const SkillHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  height: 75px;
  border: 1px solid #EFEFEF;
`;
const StyledLabel = styled(Label)`
`;

const SkillNameStyledInput = styled.input`
  width: 60%;
  padding: 12px;
  margin-left: 20px;
  border: ${props => (props.hasError ? '1px solid #C5292A' : !props.readOnly ? '1px solid #efefef' : 'none')};
  border-radius: 4px;
  box-sizing: border-box;
  
  &:hover{
    cursor: ${props => !props.readOnly && 'pointer'};
    border: ${props => !props.readOnly && `1px solid ${props.theme.colors.primaryColor}`};
  }
`;

const IconsGroupStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 19px 20px;
`;

const IconStyled = styled(Icon)`
  color: ${props => props.theme.colors.black};

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
  font-family: ${props => props.theme.fonts.poppins};
  border: ${props => (props.hasError ? '1px solid #C5292A' : !props.readOnly ? '1px solid #efefef' : 'none')};
  border-radius: 4px;
  outline: ${props => props.readOnly && 'none'};
  resize: none;

  &:hover{
    cursor: ${props => !props.readOnly && 'pointer'};
    border: ${props => !props.readOnly && `1px solid ${props.theme.colors.primaryColor}`};
  }

  &:hover + ${StyledLabel} {
    color: ${props => !props.readOnly && props.theme.colors.primaryColor}};
  }
`;

const LevelContainerStyled = styled.div`
  position: relative;
  display: ${props => (props.show ? 'flex' : 'none')};
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  border-top: 1px solid #EFEFEF;
  border-left: 1px solid ${props => props.theme.colors.primaryColor};
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
  padding: 0 15px 0px 50px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
`;

const RowSkillsTop = styled.div`
  margin: 0 auto;
  margin-bottom: ${props => (props.isRowDown ? 'none' : '8px')};
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
