import styled from 'styled-components';

const Country = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey3};
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 1140px) {
    height: 80px;
  }
`;

const Image = styled.img`
  width: 24px;
`;

export { Country, Image };
