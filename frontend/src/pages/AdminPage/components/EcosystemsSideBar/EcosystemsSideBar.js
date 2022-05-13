/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import blankstate from '../../../../Assets/Icons/blankstate.svg';

import { Icon } from '../../../../app/commons/Icon';
import { SkeletonWrapper } from '../../../../app/commons/Skeleton';

import { EcosystemBarStyled, EcosystemsSideBarStyled, EcosystemHeaderStyled, EcosystemElementStyled, EcosystemScroller, IconStyled, Image,
  NoEcosystems, NoEcosystemsMessage, StyledInput, StyledInputWrapper } from './EcosystemsSideBar.styled';

export const EcosystemsSideBar = ({ ecosystems, onNewEcosystem, loading, show, noSuggestions, selected }) => {
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
    <EcosystemsSideBarStyled>
      <EcosystemBarStyled data-cy="ecosystems-sidebar">
        <EcosystemHeaderStyled>Ecosystem
          {show && <Icon icon="add" onClick={onNewEcosystem}/>}
        </EcosystemHeaderStyled>
        <StyledInputWrapper>
          <StyledInput
            placeholder="Search an ecosystem"
            onChange={handleChange}
          />
          <IconStyled icon="search" />
        </StyledInputWrapper>
        <EcosystemScroller height={noSuggestions ? 80 : 65}>
          {loading && <SkeletonWrapper/>}
          {!loading && !filteredEcosystems.length
            ? <NoEcosystems>
              <Image src={blankstate}/>
              <NoEcosystemsMessage>This ecosytem doesn&apos;t exist yet</NoEcosystemsMessage>
            </NoEcosystems>
            : filteredEcosystems.map(({ name, id }, index) => (
              <EcosystemElementStyled key={index}
                data-cy={`ecosystems-element-${index}`}
                id={id}
                selected={selected === id}
                to={location => ({ ...location, pathname: `/ecosystem/${id}` })}
              >
                {name}
              </EcosystemElementStyled>
            ))}
        </EcosystemScroller>
      </EcosystemBarStyled>
    </EcosystemsSideBarStyled>
  );
};

EcosystemsSideBar.propTypes = {
  ecosystems: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  noSuggestions: PropTypes.bool.isRequired,
  onNewEcosystem: PropTypes.func.isRequired,
  selected: PropTypes.number,
  show: PropTypes.bool,
};

EcosystemsSideBar.defaultProps = {
  selected: 1,
  show: false,
};
