import styled from 'styled-components';

const getColor = ({ type, theme }) => {
  const { colors: { primaryColor, grey1, black } } = theme;
  if (type === 'focus') return primaryColor;
  if (type === 'description') return grey1;
  return black;
};

export const Label = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  font-weight: ${({ weight }) => weight};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 0 5px;
  font-size: 12px;
  white-space: nowrap;
  color: ${getColor};
  white-space: nowrap;
`;
