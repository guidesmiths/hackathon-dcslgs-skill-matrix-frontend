/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  ButtonStyled,
  EcosystemColumn,
  TitleColumn,
  EcosystemScroller,
} from './Ecosystems.styled';
import { selectAllEcosystems } from '../../../redux/ecosystems/ecosystemsSlice';
import SkeletonWrapper from '../Skeleton/SkeletonWrapper';

const Ecosystem = ({ ecosystemIdSelected, setEcosystemIdSelected }) => {
  const ecosystems = useSelector(selectAllEcosystems);

  return (
    <EcosystemColumn data-cy={'ecosystems'}>
      <TitleColumn>Ecosystem</TitleColumn>
      <EcosystemScroller height={85}>
        {!ecosystems.length
          ? <SkeletonWrapper />
          : ecosystems?.map(({ id, name }) => (
            <ButtonStyled
              key={id}
              selected={ecosystemIdSelected === id}
              onClick={() => setEcosystemIdSelected(id)}
            >
              {name}
            </ButtonStyled>
          ))}
      </EcosystemScroller>
    </EcosystemColumn>
  );
};

Ecosystem.propTypes = {
  ecosystemIdSelected: PropTypes.number.isRequired,
  setEcosystemIdSelected: PropTypes.func.isRequired,
};

export default Ecosystem;
