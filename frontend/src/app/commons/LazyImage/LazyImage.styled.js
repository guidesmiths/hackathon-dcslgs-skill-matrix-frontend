/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledImage = styled.div`
  background-image: url('${props => (props.$loading ? props.loadingSrc : props.actualSrc)}');
  background-position: center center;
  background-size: contain;
  min-width: 30px;
  min-height: 20px;
  display: block;
  margin: 0 auto;
  background-repeat: no-repeat;
`;
