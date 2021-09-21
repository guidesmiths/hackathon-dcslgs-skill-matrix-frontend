import styled from 'styled-components';

const IconStyled = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  position: ${props => props.position};
  bottom: ${props => `${props.bottom}%`};
  right: ${props => `${props.right}%`};
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
  margin-right: ${props => `${props.marginRight}px`};

  &:hover {
    cursor:pointer;
  }
`;

export default IconStyled;
