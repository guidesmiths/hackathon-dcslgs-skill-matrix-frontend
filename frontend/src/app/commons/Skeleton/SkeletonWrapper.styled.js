/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';

export const SkeletonWrapper = styled(Skeleton)`
  opacity: 0;
  animation: appear .2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  margin: 5px !important;
  height: 35px !important;

  @keyframes appear {
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
`;
