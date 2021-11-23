import styled from 'styled-components';
import Icon from '../../../../../app/commons/icon/icon';
import Label from '../../../../../app/commons/Label/Label.styled';

const SkillContainerStyled = styled.div`
  position: relative;
  width: 80%;
  margin: 20px auto;
  box-sizing: border-box;
  font-family: ${props => props.theme.fonts.poppins};
  border: 1px solid #EFEFEF;
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
`;

const SkillNameStyledInput = styled.input`
  width: 60%;
  padding: 12px;
  margin-left: 20px;
  border: ${props => (props.errorInput ? '1px solid red' : '1px solid #EFEFEF')};
  border-radius: 4px;
  box-sizing: border-box;
`;

const StyledLabel = styled(Label)`
`;

const IconsGroupStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 0 20px;
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
  border-radius: 4px;
  resize: none;
  border: ${props => (props.errorInput ? '1px solid red' : '1px solid #EFEFEF')};

  &:hover{
    cursor: pointer;
    border: 1px solid ${props => props.theme.colors.primaryColor};
  }

  &:hover + ${StyledLabel} {
    color: ${props => props.theme.colors.primaryColor};
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

export {
  SkillContainerStyled,
  SkillHeaderStyled,
  SkillNameStyledInput,
  IconsGroupStyled,
  IconStyled,
  LevelContainerStyled,
  LevelStyled,
  StyledLabel,
};
