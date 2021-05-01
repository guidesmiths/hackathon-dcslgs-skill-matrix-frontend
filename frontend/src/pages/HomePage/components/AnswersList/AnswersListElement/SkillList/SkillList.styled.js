import styled, { css } from 'styled-components';

const SkillListStyled = styled.div`
    padding: 0px;

    ${props => {
    if (props.isCollapsed) {
      return css`
            display: none;
          `;
    }

    return css`
    `;
  }}
`;

export default SkillListStyled;
