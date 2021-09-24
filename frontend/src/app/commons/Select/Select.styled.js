import styled from 'styled-components';

const SelectStyled = styled.select`
  border-radius: 5px;
  height: 50px;
  width: 100px;
  padding: 0 15px;
  margin-right: 20px;
  border: none;
  outline: none;
`;

const OptionStyled = styled.option`
  color: ${props => props.isSelected && 'red'};
  &:invalid{
    color: blue;
  }
`;

export { SelectStyled, OptionStyled };
