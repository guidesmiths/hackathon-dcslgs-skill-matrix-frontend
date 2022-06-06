import styled from 'styled-components';
import { RadioButton, RadioButtonMarker } from '../../../../app/commons/RadioButton/RadioButton.styled';

const RowCollapsed = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-left: 2px solid ${({ theme }) => theme.colors.primaryColor};
`;

const RowSkillsBottom = styled.div`
  position: relative;
  display: flex;
  padding: 24px 20px 10px 35px;
  margin-bottom: 15px;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
`;

const DescriptionStyled = styled.div`
  position: relative;
  padding: 0 30px;

  p {
    font-size: 14px;
    line-height: 24px;
  }
`;

const LevelDescription = styled.label`
  color: ${({ isSelected, theme }) => (isSelected ? theme.colors.primaryColor : theme.colors.grey1)};
  font-weight: ${({ isSelected }) => (isSelected ? '700' : 'normal')};
  font-size: 14px;
  line-height: 24px;

  &:hover {
    cursor: pointer;
  }
`;

const LevelSelectionContainer = styled.div`
  margin-top: ${({ level }) => (level === 1 ? '25px' : '5px')};
  margin-bottom: 5px;
`;

const Level = styled.div`
  display: flex;
  align-items: center;
`;

const SubLevelSelectionContainer = styled.div`
  margin: 8px 0;

  p {
    font-size: 10px;
    font-weight: 500;
    line-height: 16px;
    padding-left: 35px;
    margin: 0;
  }

  ${LevelDescription} {
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;

    .subLevel-plus-title {
      color: ${({ theme }) => theme.colors.darkGreen};
    }

    .subLevel-neutral-title {
      color: ${({ theme }) => theme.colors.green};
    }

    .subLevel-minus-title {
      color: ${({ theme }) => theme.colors.lightGreen};
    }
  }

  ${RadioButton}, ${RadioButtonMarker} {
    width: 16px;
    height: 16px;
  }

  ${RadioButton} {
    &:hover ~ ${RadioButtonMarker} {
      &::after {
        width: 8px;
        height: 8px;
        margin: 4px;
      }
    }
  }

  ${RadioButtonMarker} {
    &::after {
      width: 8px;
      height: 8px;
      margin: 4px;
    }
  }
`;

const SubLevel = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 35px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const SelectWrapper = styled.div`
  position: relative;
  height: 48px;
  width: 60px;
  min-width: 60px;
  margin-right: 5px;
  padding: 5px 0;

  select {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.grey3};
    font-size: 16px;
    outline: none;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  min-height: 60px;
  box-sizing: border-box;
  padding: 0 15px;
  margin-left: 30px;
  font-family: ${({ theme }) => theme.fonts.poppins};
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 4px;
`;

export {
  RowCollapsed,
  RowSkillsBottom,
  DescriptionStyled,
  SelectWrapper,
  StyledInput,
  LevelSelectionContainer,
  LevelDescription,
  Level,
  SubLevelSelectionContainer,
  SubLevel,
};
