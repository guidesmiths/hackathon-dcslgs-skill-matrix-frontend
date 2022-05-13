import styled from 'styled-components';
import { Icon } from '../../app/commons/Icon';
import { Modal } from '../../app/commons/Modal';
import { UserRowWrapper } from '../../app/commons/ScrollWrapper/ScrollWrapper.styled';
import { SkillContainerStyled } from '../AdminPage/components/EcosystemMain/EcosystemSkill/EcosystemSkill.styled';
import { RowCollapsed } from './components/DescriptionLevels/DescriptionLevels.styled';
import { RowSkillsTop, RowSkillsWrapper } from './components/UserRow/UserRow.styled';

const UserPageStyled = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 100vh;
  font-family: ${({ theme }) => theme.fonts.poppins};
  overflow-y: auto;
  padding-top: 72px;
`;

const HeaderStyled = styled.div`
  width: 100%;
  height: 90px;
  background: ${({ theme }) => theme.colors.backgroundGradient};
`;

const UserPageDisplay = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: -40px;
  padding-bottom: 85px;
`;

const UserData = styled.div`
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

    ${RowSkillsWrapper} {
      &:last-child {
        padding-bottom: unset !important;
      }
    }

    ${RowSkillsTop} {
      margin-bottom: ${({ isCollapsed }) => (isCollapsed && '8px')};
      padding: unset;
      width: 100%;
    }

    ${RowCollapsed} {
      width: 100%;
    }
  }
`;

const RowTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
`;

const ColumnTitles = styled.div`
  display: grid;
  grid-template-columns: 40% 40% 20%;
  align-items: center;
  width: 80%;
  box-sizing: border-box;
  margin: 0 auto 20px;
  padding: 0 15px 0 50px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey3};
  border-top: 1px solid ${({ theme }) => theme.colors.grey3};
`;

const RowWrapper = styled.div`
  display: ${({ isCollapsed }) => isCollapsed && 'none'};
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid grey;
`;

const FormHeader = styled(RowWrapper)`
  margin-bottom: 35px;
  padding: 5px 15px;
  border: 0;
`;

const UserInput = styled.input`
  display: none;
  border: none;
`;

const DataTitle = styled.h5`
  min-width: 300px;
  margin: 0;
  padding: 25px 0 20px 20px;
  font-size: 24px;
  line-height: 32px;
  text-align: start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey3};
`;

const ColumnTitle = styled.h5`
  margin: 8px 0;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.grey1};
  text-transform: uppercase;
`;

const EditButtonStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    cursor: pointer;
  }
`;

const SaveButton = styled(EditButtonStyled)`
  &:first-child {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primaryColor};
  };

  &:last-child {
    background: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.white};
  };

  &:hover {
    cursor: pointer;
  }
`;

const StyledIcon = styled(Icon)`
  width: 112px;
  height: auto;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.green};
  border-radius: 0;
`;

const StyledModal = styled(Modal)`
  width: 600px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
`;

export {
  UserPageStyled,
  UserPageDisplay,
  UserData,
  UserInput,
  DataTitle,
  RowWrapper,
  RowTitle,
  ColumnTitles,
  ColumnTitle,
  FormHeader,
  StyledIcon,
  EditButtonStyled,
  HeaderStyled,
  StyledModal,
  SaveButton,
  Wrapper,
};
