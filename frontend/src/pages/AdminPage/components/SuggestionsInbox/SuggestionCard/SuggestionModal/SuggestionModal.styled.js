import styled from 'styled-components';
import Button from '../../../../../../app/commons/Button/Button';
import Icon from '../../../../../../app/commons/icon/icon';

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 20px 30px;
    box-sizing: border-box;
    background: #f4f4f4;
    font-family: ${props => props.theme.fonts.poppins};
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
`;

const UserNameStyled = styled.h3`
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        margin-top: 10px;
`;

const SuggestionContentStyled = styled.div`
   border: 0.2px solid #B9E0D7;
    box-sizing: border-box;
    border-radius: 4px;
`;

const SuggestionStyled = styled.div`
    padding: 10px 10px 0;
    color: #006B79
`;

const DescriptionStyled = styled.p`
    padding: 0 10px;
    color: ${props => props.theme.colors.textColor};
    min-height: 120px;
`;

const ButtonsGroups = styled.div`
    display: flex;
`;

const ButtonStyled = styled(Button)`
    margin: 10px 10px 0 0;
    padding: 10px;
    min-width: 80px;
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.primaryColor};
    &:last-child{
        color: ${props => props.theme.colors.primaryColor};
        background: rgba(192, 48, 137, 0.1);
    }
`;

const StyledIcon = styled(Icon)`
    border: none;
    align-self:flex-start;
    margin-top: 2px;
`;
const TitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export {
  ModalContent,
  UserNameStyled,
  ButtonsGroups,
  ButtonStyled,
  SuggestionStyled,
  DescriptionStyled,
  SuggestionContentStyled,
  StyledIcon,
  TitleStyled,
};
