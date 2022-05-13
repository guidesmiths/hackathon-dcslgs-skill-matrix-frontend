import styled from 'styled-components';
import { Icon } from '../../../../app/commons/Icon';
import { UserRowWrapper } from '../../../../app/commons/ScrollWrapper/ScrollWrapper.styled';
import { SkillContainerStyled } from './EcosystemSkill/EcosystemSkill.styled';

const EcosystemContainerStyled = styled.div`
  z-index: 1;
  grid-column-start: 2;
  grid-column-end: 5;
  width: 98%;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.white};;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};

  ${UserRowWrapper} {
    margin: 0 auto;
    width: 80%;
    padding-right: 2px;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      display: block !important;
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      width: 4px;
      max-height: 178px;
      background-color: ${({ theme }) => theme.colors.primaryColor};
      border-radius: 8px;
    }

    ${SkillContainerStyled} {
      width: 100%;
      margin: 10px 0;
    }
  }
`;

const EcosystemFallbackStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
`;

const EcosystemHeaderStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px 30px;
`;

const EcosystemNameStyledInput = styled.input`
  width: 600px;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 4px;
  border: ${({ hasError, theme }) => `1px solid ${hasError ? theme.colors.error : theme.colors.grey3}`};

  &:hover {
    cursor: ${({ readOnly }) => !readOnly && 'pointer'};
    border: ${({ readOnly, theme }) => !readOnly && `1px solid ${theme.colors.primaryColor}`};
  }
`;

const ButtonsWrapper = styled.div`
  padding: 20px 0;
  margin: 20px 0;
`;

const StyledButton = styled.div`
  width: max-content;
  margin-left: 7%;
  padding: 10px 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledDelete = styled.div`
  display: flex;
  align-items: center;
  max-width: max-content;
  margin: 20px;
  font-weight: bold;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.error};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const StyledDeleteIcon = styled(Icon)`
  padding: 0 20px;
  margin: -10px;
  color: ${({ theme }) => theme.colors.error};
  border: none;
`;

export {
  EcosystemContainerStyled,
  EcosystemFallbackStyled,
  EcosystemHeaderStyled,
  EcosystemNameStyledInput,
  ButtonsWrapper,
  StyledButton,
  StyledDelete,
  StyledDeleteIcon,
};
