import styled from 'styled-components';

const SkillListStyled = styled.div`
    padding: 0px;
    display: ${props => (props.isCollapsed && 'none')};
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

export { SkillListStyled, FooterStyled, AdminRoleText };
