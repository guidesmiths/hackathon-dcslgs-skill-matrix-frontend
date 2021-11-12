import React, { useState, useEffect, Fragment } from 'react';
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
    <Fragment>
      <EcosystemColumn data-cy={'ecosystems'}>
        <TitleColumn>Ecosystem</TitleColumn>
        <EcosystemScroller height={75}>
          {!ecosystems.length
            ? <SkeletonWrapper />
            : ecosystems?.map(({ id, name }) => (
              <ButtonStyled key={id} id={id} selected={selected} onClick={() => { selectEcosystem(id - 1); isSelected(id); }}>
                {name}
              </ButtonStyled>
            ))}
        </EcosystemScroller>
      </EcosystemColumn>
    </Fragment>
  );
};

Ecosystem.propTypes = {
  selectEcosystem: PropTypes.func.isRequired,
};

export default Ecosystem;
