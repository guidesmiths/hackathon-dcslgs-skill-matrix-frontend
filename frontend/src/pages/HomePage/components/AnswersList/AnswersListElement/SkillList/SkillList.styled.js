import styled from 'styled-components';
import { UserRowWrapper } from '../../../../../../app/commons/ScrollWrapper/ScrollWrapper.styled';

const SkillListWrapper = styled(UserRowWrapper)`
  scrollbar-width: thin;
  scrollbar-color: #cccccc;

  &::-webkit-scrollbar {
    display: block !important;
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cccccc;
    width: 4px;
    min-height: 178px;
    border-radius: 8px;
  }
`;
const SkillListStyled = styled.div`
  padding: 0px;
  display: ${props => props.isCollapsed && 'none'};
`;
const AdminRoleText = styled.p`
  color: ${props => props.theme.colors.white};
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
`;

const FooterStyled = styled.div`
  width: 100%;
  height: 40px;
  background: ${props => props.theme.colors.darkGreen};
  border-radius: 0 0 8px 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LoaderWrapper = styled.div`
  width: 100%;
  min-height: inherit;
  flex-direction: column;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
