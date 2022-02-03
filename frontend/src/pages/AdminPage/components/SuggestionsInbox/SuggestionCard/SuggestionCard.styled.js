import styled from 'styled-components';
import Icon from '../../../../../app/commons/icon/icon';

const UserNameStyled = styled.p`
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.grey1};

  b:last-of-type {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const SubjectStyled = styled.p`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 24px;
  margin: 0;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.darkGreen};;
  font-size: 0.8rem;
  font-weight: 500;
  background: rgba(0, 107, 121, 0.1);
  border-radius: 4px;
`;

const SuggestionCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  height: 130px;
  width: 372px;
  min-width: 372px;
  margin: 0 5px;
  padding: 10px 0 0 10px;
  background: white;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  font-family: ${({ theme }) => theme.fonts.poppins};
`;

const IconsContainerStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.grey3};
  height: 40px;
`;

const IconStyled = styled(Icon)`
  width: 72px;
  height: 100%;
  border-radius: 0 0 4px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ color, theme }) => (color && theme.colors.lightGreen)};
`;

const QuotesStyled = styled.span`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  font-size: 42px;
  color: ${({ theme }) => theme.colors.darkGreen};;
  padding-top: 20px;
  font-family: Arial, Helvetica, sans-serif;

  &:last-child{
    opacity: 0.3;
    margin-left: -3px;
  }
`;

export { SuggestionCardStyled, UserNameStyled, SubjectStyled, IconsContainerStyled, IconStyled, QuotesStyled };
