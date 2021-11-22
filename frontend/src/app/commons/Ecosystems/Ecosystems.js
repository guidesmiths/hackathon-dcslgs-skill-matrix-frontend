/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
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

const Ecosystem = ({ selectEcosystem }) => {
  const ecosystems = useSelector(selectAllEcosystems);
  const [selected, isSelected] = useState();

  useEffect(() => {
    selectEcosystem(0);
    isSelected(1);
  }, []);

  return (
    <EcosystemColumn data-cy={'ecosystems'}>
      <TitleColumn>Ecosystem</TitleColumn>
      <EcosystemScroller height={85}>
        {!ecosystems.length
          ? <SkeletonWrapper />
          : ecosystems?.map(({ id, name }) => (
            <ButtonStyled key={id} id={id} selected={selected} onClick={() => { selectEcosystem(id - 1); isSelected(id); }}>
              {name}
            </ButtonStyled>
          ))}
      </EcosystemScroller>
    </EcosystemColumn>
  );
};

Ecosystem.propTypes = {
  selectEcosystem: PropTypes.func.isRequired,
};

export default Ecosystem;
