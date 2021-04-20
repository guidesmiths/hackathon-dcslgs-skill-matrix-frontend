import styled, { css } from 'styled-components';

const SearchBarInput = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  height: 50px;
  width: 200px;

  ${props => {
    if (props.value === '') {
      return css`
        background-color: ${props.theme.black};
      `;
    }

    return css``;
  }}
`;

const SearchBarSelect = styled.select`
  border: 1px solid black;
  border-radius: 5px;
  height: 50px;
  width: 200px;
`;

const SearchBarOption = styled.option`
 ${props => {
    if (props.isSelected) {
      return css`
        color: red;
      `;
    }

    return css``;
  }}
`;

export { SearchBarInput, SearchBarSelect, SearchBarOption };
