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
import { selectAllSkills } from '../../../redux/skills/skillsSlice';
import blankstate from '../../../Assets/Icons/blankstate.svg';
import { SkeletonWrapper } from '../Skeleton';

export const Ecosystems = ({ ecosystemIdSelected, loading }) => {
  const ecosystems = useSelector(selectAllEcosystems);
  const skills = useSelector(selectAllSkills);

  const [inputValue, setInputValue] = useState('');
  const [filteredEcosystems, setFilteredEcosystems] = useState(ecosystems);

  const filterEcosystem = userInput => {
    if (userInput) {
      const matchingSkills = skills.filter(skill => `${skill.ecosystemName} - ${skill.skillName}`.toLowerCase().includes(userInput));
      const matchingEcosystemsNames = [...new Set(matchingSkills.map(skill => skill.ecosystemName))];
      return ecosystems.filter(ecosystem => matchingEcosystemsNames.some(el => el === ecosystem.name));
    }
    return ecosystems;
  };

  useEffect(() => {
    setFilteredEcosystems(ecosystems);
  }, [ecosystems]);

  const handleChange = event => {
    setInputValue(event.target.value);
    const currentEcosystems = filterEcosystem(event.target.value.toLowerCase());
    setFilteredEcosystems(currentEcosystems);
  };

  return (
    <EcosystemColumn data-cy="ecosystems">
      <TitleColumn>Ecosystem</TitleColumn>
      <StyledInputWrapper>
        <StyledInput
          placeholder="Search an ecosystem or skill"
          value={inputValue}
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

Ecosystems.propTypes = {
  ecosystemIdSelected: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};
