import styled from 'styled-components';

const IconStyled = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
  margin-right: ${props => `${props.marginRight}px`};

  &:hover {
    cursor:pointer;
  }
`;

export default IconStyled;
