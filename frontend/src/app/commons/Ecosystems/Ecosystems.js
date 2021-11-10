import React, { Fragment } from 'react';
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

  return (
    <Fragment>
      <EcosystemColumn data-cy={'ecosystems'}>
        <TitleColumn>Ecosystem</TitleColumn>
        <EcosystemScroller height={75}>
          {!ecosystems.length
            ? <SkeletonWrapper />
            : ecosystems?.map(({ id, name }) => (
              <ButtonStyled key={id} onClick={() => selectEcosystem(id - 1)}>
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
