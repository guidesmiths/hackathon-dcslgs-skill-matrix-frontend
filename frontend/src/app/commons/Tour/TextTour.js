import styled from 'styled-components';

const TextTour = styled.div`
  line-height: 2;
  letter-spacing: 0.5px;
  font-family: ${({ theme }) => theme.fonts.poppins};
  padding: 35px 99px 30px 32px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
`;

const Warning = styled.p`
  color: ${({ theme }) => theme.colors.error};
`;

const Success = styled.p`
  color: ${({ theme }) => theme.colors.darkGreen};
`;

export {
  TextTour,
  Success,
  Warning,
};
