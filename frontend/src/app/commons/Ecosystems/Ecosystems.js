/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  ButtonStyled,
  EcosystemColumn,
  TitleColumn,
  EcosystemScroller,
  IconStyled,
  Image,
  NoEcosystemsMessage,
  NoEcosystems,
  StyledInput,
  StyledInputWrapper,
} from './Ecosystems.styled';
import { selectAllEcosystems } from '../../../redux/ecosystems/ecosystemsSlice';
import blankstate from '../../../Assets/Icons/blankstate.svg';
import SkeletonWrapper from '../Skeleton/SkeletonWrapper';

const Ecosystem = ({ ecosystemIdSelected, loading }) => {
  const ecosystems = useSelector(selectAllEcosystems);

  const [inputValue, setInputValue] = useState();
  const [filteredEcosystems, setFilteredEcosystems] = useState(ecosystems);

  const filterEcosystem = value => (value ? ecosystems?.filter(ecosystem => ecosystem.name.toLowerCase().includes(value)) : ecosystems);

  useEffect(() => {
    setFilteredEcosystems(filterEcosystem(inputValue));
  }, [ecosystems]);

  const handleChange = event => {
    setInputValue(event.target.value.toLowerCase());
    const currentEcosystems = filterEcosystem(event.target.value.toLowerCase());
    setFilteredEcosystems(currentEcosystems);
  };

  return (
    <EcosystemColumn data-cy="ecosystems">
      <TitleColumn>Ecosystem</TitleColumn>
      <StyledInputWrapper>
        <StyledInput
          placeholder="Search an ecosystem"
          onChange={handleChange}
        />
        <IconStyled icon="search" />
      </StyledInputWrapper>
      <EcosystemScroller height={85}>
        {loading && <SkeletonWrapper/>}
        {!loading && !filteredEcosystems.length
          ? <NoEcosystems>
            <Image src={blankstate}/>
            <NoEcosystemsMessage>This ecosytem doesn&apos;t exist yet</NoEcosystemsMessage>
          </NoEcosystems>
          : filteredEcosystems.map(({ id, name }) => (
            <ButtonStyled
              key={id}
              selected={ecosystemIdSelected === id}
              to={ location => ({ ...location, pathname: `/profile/ecosystem/${id}` })}
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
  loading: PropTypes.bool.isRequired,
};

export default Ecosystem;
