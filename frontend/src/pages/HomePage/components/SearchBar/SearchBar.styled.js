import styled from 'styled-components';

const SearchBarUsers = styled.input`
  display:block;
  border: 1px solid black;
  border-radius: 5px;
  height: 50px;
  width: 500px;
  box-sizing: border-box;
  margin-right: 20px;
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
  display: ${props => (props.isCollapsed && 'none')}
`;

const SearchBarButton = styled.button`
  height: 50px;
  width: 50px;
  margin-right: 20px;
`;

export { SearchBarUsers, SearchBarSelect, SearchBarOption, SearchBarSkills, SearchBarButton };
