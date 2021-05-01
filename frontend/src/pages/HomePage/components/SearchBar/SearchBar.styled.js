import styled, { css } from 'styled-components';

const SearchBarInput = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  height: 50px;
  width: 500px;
  padding: 0 15px;
  margin-right: 20px;
`;

const SearchBarUsers = styled(SearchBarInput)`
  display:block;
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 15px;
  padding: 0 15px;
`;

const SearchBarSkills = styled.div`
  display:flex;
  justify-content: flex-start;
`;

const SearchBarSelect = styled.select`
  border: 1px solid black;
  border-radius: 5px;
  height: 50px;
  width: 100px;
  padding: 0 15px;
  margin-right: 20px;
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
  margin-right: 20px;
`;

export { SearchBarInput, SearchBarUsers, SearchBarSelect, SearchBarOption, SearchBarSkills, SearchBarButton };
