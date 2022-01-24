import styled from 'styled-components';

const StateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  width: 300px;
  text-align: center;
  font-size: 12px;
`;

const Image = styled.img`
  width: ${props => (props.isUser ? '215.1px' : '120px')};
`;

export { StateWrapper, Image };
