import styled, { css } from 'styled-components';

const SearchBarInput = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  height: 50px;
  width: 500px;

  ${props => {
    if (props.value === '') {
      return css`
        background-color: ${props.theme.black};
      `;
    }

    return css``;
  }}
`;

const SearchBarUsers = styled.input`
  display:block;
  border: 1px solid black;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  box-sizing: border-box;

  ${props => {
    if (props.value === '') {
      return css`
        background-color: ${props.theme.black};
      `;
    }

    return css``;
  }}
`;

const SearchBarSkills = styled.div`
  display:flex;
  justify-content: space-between;
`;

const SearchBarSelect = styled.select`
  border: 1px solid black;
  border-radius: 5px;
  height: 50px;
  width: 100px;
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

const SearchBarButton = styled.button`
  height: 50px;
  width: 50px;
`;

export { SearchBarInput, SearchBarUsers, SearchBarSelect, SearchBarOption, SearchBarSkills, SearchBarButton };
