import styled from 'styled-components';
import Icon from '../../../../../app/commons/icon/icon';
import Label from '../../../../../app/commons/Label/Label.styled';

const SkillContainerStyled = styled.div`
    margin: 20px auto;
     border: 1px solid #EFEFEF;
    box-sizing: border-box;
    border-radius: 4px;
    position: relative;
    width: 80%;
    font-family: ${props => props.theme.fonts.poppins};

`;

const SkillHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    height:75px;
`;

const SkillNameStyledInput = styled.input`
    padding: 12px;
    width: 60%;
    border: 1px solid #EFEFEF;
    box-sizing: border-box;
    border-radius: 4px;
    margin-left: 20px;
`;

const StyledLabel = styled(Label)`
`;

const IconsGroupStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 0px 20px;
`;

const IconStyled = styled(Icon)`
    color: ${props => props.theme.colors.black};
    &:first-child {
      margin-right: 20px;
    }
`;
const LevelStyled = styled.textarea`
    resize: none;
    width: 90%;
    margin: 10px auto;
    padding: 12px;
    font-size: 14px;
    font-family: ${props => props.theme.fonts.poppins};
    border: 1px solid #EFEFEF;
    box-sizing: border-box;
    border-radius: 4px;
    &:hover{
        cursor: pointer;
        border: 1px solid ${props => props.theme.colors.primaryColor};
    }
    &:hover + ${StyledLabel}{
        color: ${props => props.theme.colors.primaryColor};
    }
`;

const LevelContainerStyled = styled.div`
    display: ${props => (props.show ? 'flex' : 'none')};
    align-items: center;
    padding: 10px;
    border-top: 1px solid #EFEFEF;
    border-left: 1px solid ${props => props.theme.colors.primaryColor};
    box-sizing: border-box;
    position: relative;
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
