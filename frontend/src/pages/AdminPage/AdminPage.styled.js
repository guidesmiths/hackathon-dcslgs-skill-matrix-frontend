import styled from 'styled-components';

export default styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 3fr 9fr;
  grid-template-rows: 200px auto;
  grid-template-areas:
    "suggestions suggestions"
    "ecosystems-sidebar ecosystems-main";
  height: 100vh;
  margin: 50px 70px;
  font-family: Arial, Helvetica, sans-serif;
`;
