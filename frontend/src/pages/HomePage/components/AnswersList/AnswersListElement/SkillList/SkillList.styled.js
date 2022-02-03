import styled from 'styled-components';
import { UserRowWrapper } from '../../../../../../app/commons/ScrollWrapper/ScrollWrapper.styled';

const SkillListWrapper = styled(UserRowWrapper)`
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.grey2};

  &::-webkit-scrollbar {
    display: block !important;
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.grey2};
    width: 4px;
    min-height: 178px;
    border-radius: 8px;
  }
`;

const SkillListStyled = styled.div`
  padding: 0;
  display: ${({ isCollapsed }) => isCollapsed && 'none'};
`;
const AdminRoleText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
`;

const FooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.colors.darkGreen};
  border-radius: 0 0 8px 8px;
`;

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: inherit;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Image = styled.img`
  width: 80px;
`;

const NoSkills = styled.p`
  margin-bottom: 0;
`;

export { SkillListStyled, FooterStyled, AdminRoleText, SkillListWrapper, LoaderWrapper, NoSkills, Image };
