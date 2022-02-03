import styled from 'styled-components';

const FooterStyled = styled.div`
  z-index: 997;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  width: 100%;
  height: 72px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -3px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
`;

export default FooterStyled;
