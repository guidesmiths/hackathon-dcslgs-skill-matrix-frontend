import styled from 'styled-components';
import { ArrowButton } from '../../../../../../app/commons/ArrowButton/arrowButton.styled';

const UserWrapperStyled = styled.div`
    display: flex;
    align-items: center;
`;

const UserNameStyled = styled.h3`
    margin: 0px 30px;
    padding: 0px;
    font-size: 14px;
    line-height: 35px;
    letter-spacing: 0.5px;
`;

const UserEmailStyled = styled.h5`
    margin: 0px;
    padding: 0px;
    color: ${props => props.theme.colors.textColor};
`;

const UserRolStyled = styled.p`
    margin: 0px 0px 0px 10px;
    padding: 5px;
    color: ${props => props.theme.colors.primaryColor};
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    background: rgba(191, 48, 136, 0.1);
    border-radius: 4px;
`;

const MoreInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 32%;
`;
const ListElementStyled = styled.div`
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    background: ${props => props.theme.colors.white};
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
    border-radius: 8px;
`;
const ArrowButtonStyled = styled(ArrowButton)`
    width:auto;
    border:0;
    background: transparent;
`;

export {
  ListElementStyled,
  UserWrapperStyled,
  UserNameStyled,
  UserEmailStyled,
  UserRolStyled,
  ArrowButtonStyled,
  MoreInfoWrapper,
};
