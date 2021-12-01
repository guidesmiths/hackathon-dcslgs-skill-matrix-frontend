/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import {
  ButtonStyled,
  EcosystemColumn,
  TitleColumn,
  EcosystemScroller,
} from './Ecosystems.styled';
import { selectAllEcosystems } from '../../../redux/ecosystems/ecosystemsSlice';
import SkeletonWrapper from '../Skeleton/SkeletonWrapper';

const Ecosystem = ({ ecosystemIdSelected }) => {
  const ecosystems = useSelector(selectAllEcosystems);
  const { url } = useRouteMatch();
  const getUrl = id => ({ pathname: `${url}`, search: `ecosystem=${id}` });
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
              to={() => getUrl(id)}
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
};

export default Ecosystem;
