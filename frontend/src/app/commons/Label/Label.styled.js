import styled from 'styled-components';

const getColor = ({ type, theme }) => {
  if (type === 'focus') return theme.colors.primaryColor;
  if (type === 'description') return theme.colors.textColor;
  return '#000000';
};

const StyledName = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  font-weight: ${props => props.weight};
  background-color: white;
  border-radius: 5px;
  padding: 0 5px;
  font-size: 12px;
  white-space: nowrap;
  color: ${props => (props.errorInput ? 'red' : getColor(props))};

  white-space:nowrap;
`;

export default StyledName;
