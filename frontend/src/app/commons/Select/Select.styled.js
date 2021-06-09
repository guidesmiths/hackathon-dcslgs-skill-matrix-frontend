import styled from 'styled-components';

const SelectStyled = styled.select`
  border: 1px solid black;
  border-radius: 5px;
  height: 50px;
  width: 100px;
  padding: 0 15px;
  margin-right: 20px;
`;

const OptionStyled = styled.option`
  color: ${props => props.isSelected && 'red'};
`;

export { SelectStyled, OptionStyled };
