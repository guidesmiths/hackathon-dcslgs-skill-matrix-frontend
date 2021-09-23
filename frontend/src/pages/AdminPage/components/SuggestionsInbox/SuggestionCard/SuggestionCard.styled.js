import styled from 'styled-components';
import Icon from '../../../../../app/commons/icon/icon';

const UserNameStyled = styled.p`
    margin: 0px;
    padding: 0px;
    width: 100%;
    font-size: 0.9rem;
    color: ${props => props.theme.colors.textColor};

    b:last-of-type{
        color: black;
    }
`;

const SubjectStyled = styled.p`
    margin: 0;
    display: flex;
    align-items: center;
    color: #006B79;
    padding: 0px 10px;
    width: fit-content;
    font-size: 0.8rem;
    font-weight: 500;
    background: rgba(0, 107, 121, 0.1);
    height: 24px;
    border-radius: 4px;
`;

const SuggestionCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0px 5px;
    background: white;
    padding: 10px 0 0 10px;
    height: 130px;
    min-width: 372px;
    width: 372px;
    justify-content: space-between;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
    font-family: ${props => props.theme.fonts.poppins};
`;

const IconsContainerStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    border-top: 1px solid #EFEFEF;
    height: 40px;
`;

const IconStyled = styled(Icon)`
  width: 72px;
  height: 100%;
  border-radius: 0 0 4px;
  color: #4f4f4f;
  background-color: ${props => (props.color && props.theme.colors.lightGreen)};
`;
const QutesStyled = styled.span`
font-size: 42px; 
color: #006B79;
box-sizing: border-box;
display: flex;
align-items: center;
height: 100%;
padding-top: 20px;
font-family: Arial, Helvetica, sans-serif;

    &:last-child{
        opacity: 0.3;
        margin-left: -3px;
    }
`;

export { SuggestionCardStyled, UserNameStyled, SubjectStyled, IconsContainerStyled, IconStyled, QutesStyled };
