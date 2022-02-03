import styled from 'styled-components';

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 50px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  border-radius: 8px;
`;

const Placeholder = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageHolder = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  border-radius: 4px;
`;

const InputHolder = styled.div`
  background-color: ${({ theme }) => theme.colors.grey3};
  width: 300px;
  margin: 0 15px;
`;

export { RowWrapper, Placeholder, ImageHolder, InputHolder };
