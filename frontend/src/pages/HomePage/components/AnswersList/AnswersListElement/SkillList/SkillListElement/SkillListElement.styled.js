import styled from 'styled-components';

const SkillNameStyled = styled.h3`
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
  font-weight: bold;
  max-width: 140px;
  margin: 0;
`;

const SkillLevelStyled = styled.p`
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  margin-right: 20px;
  background: ${({ theme }) => theme.colors.lightGreen};
`;

const DescriptionStyled = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  padding-left: 20px;
`;

const SkillElementStyled = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.3fr 4fr;
  align-items: center;
  padding: 0 50px;
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-top: none;
  background: ${({ isSearched, theme }) => (isSearched ? theme.colors.grey3 : theme.colors.white)};

  @media (max-width: 1500px){
    grid-template-columns: 0.6fr 0.4fr 4fr;
  }
  @media (max-width: 1177px){
    grid-template-columns: 0.6fr 0.5fr 4fr;
  }
  @media (max-width: 985px){
    grid-template-columns: 0.6fr 0.6fr 4fr;
  }

  &:nth-child(even) {
    background: ${({ isSearched, theme }) => (isSearched ? theme.colors.grey3 : theme.colors.grey4)}
  };
`;

export { SkillNameStyled, SkillLevelStyled, SkillElementStyled, DescriptionStyled };
