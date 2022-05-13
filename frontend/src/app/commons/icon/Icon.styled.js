import styled from 'styled-components';

export const IconStyled = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  margin-right: ${({ marginRight }) => `${marginRight}px`};

  &:hover {
    cursor: pointer;
  }
`;
