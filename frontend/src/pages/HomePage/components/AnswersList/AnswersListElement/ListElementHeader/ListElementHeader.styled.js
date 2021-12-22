import styled from 'styled-components';
import { ArrowButton } from '../../../../../../app/commons/ArrowButton/arrowButton.styled';
import Icon from '../../../../../../app/commons/icon/icon';

const UserWrapperStyled = styled.div`
  display: flex;
  align-items: center;
`;

const UserNameStyled = styled.h3`
  margin: 0 30px;
  padding: 0;
  font-size: 14px;
  line-height: 35px;
  letter-spacing: 0.5px;
`;

const UserEmailStyled = styled.h5`
  margin: 0;
  padding: 0;
  font-weight: 400;
  color: ${props => props.theme.colors.textColor};
`;

const UserRolStyled = styled.p`
  margin: 0 0 0 10px;
  padding: 5px 10px;
  color: ${props => props.theme.colors.primaryColor};
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  background: rgba(191, 48, 136, 0.1);
  border-radius: 4px;
`;

const MoreInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 2fr 0.1fr;
  align-items: center;
  justify-content: space-between;
  justify-self: end;
  width: 80%;

    @media (min-width: 1555px){
      width: 60%;
    };
    @media (max-width: 1135px){
      width: 100%;
    };
`;

const ListElementStyled = styled.div`
  position: relative;
  z-index: 999;
  padding: 0 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 64px;
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
  border-radius: 8px;
`;

const ArrowButtonStyled = styled(ArrowButton)`
  width: auto;
  border: 0;
  background: transparent;
`;

const StyledImage = styled.img`
  height: 24px;
  width: 24px;
`;
const StyledIcon = styled(Icon)`
  &:hover{
    cursor: default;
  }
`;

export {
  ListElementStyled,
  UserWrapperStyled,
  UserNameStyled,
  UserEmailStyled,
  UserRolStyled,
  ArrowButtonStyled,
  MoreInfoWrapper,
  StyledImage,
  StyledIcon,
};
