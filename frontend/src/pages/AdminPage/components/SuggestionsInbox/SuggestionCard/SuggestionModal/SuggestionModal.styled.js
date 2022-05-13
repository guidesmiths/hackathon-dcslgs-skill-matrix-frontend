import styled from 'styled-components';
import { Button } from '../../../../../../app/commons/Button';
import { Icon } from '../../../../../../app/commons/Icon';

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 20px 30px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.poppins};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
`;

const UserNameStyled = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  margin-top: 10px;
`;

const SuggestionContentStyled = styled.div`
  border: 0.2px solid ${({ theme }) => theme.colors.lightGreen};
  box-sizing: border-box;
  border-radius: 4px;
`;

const SuggestionStyled = styled.div`
  padding: 10px 10px 0;
  color: ${({ theme }) => theme.colors.darkGreen};;
`;

const DescriptionStyled = styled.p`
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.grey1};
  min-height: 120px;
`;

const ButtonsGroups = styled.div`
  display: flex;
`;

const ButtonStyled = styled(Button)`
  margin: 10px 10px 0 0;
  padding: 10px;
  min-width: 80px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primaryColor};

  &:last-child {
    color: ${({ theme }) => theme.colors.primaryColor};
    background: rgba(192, 48, 137, 0.1);
  }
`;

const StyledIcon = styled(Icon)`
  border: none;
  align-self: flex-start;
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
