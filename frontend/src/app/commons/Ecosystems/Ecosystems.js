/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
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
  NumberCircle,
  NumberText,
} from './Ecosystems.styled';
import { fetchEcosystemsAsync, selectAllEcosystems, selectEcosystemsStatus } from '../../../redux/ecosystems/ecosystemsSlice';
import { fetchSkillsAsync, selectAllSkills, selectSkillsStatus } from '../../../redux/skills/skillsSlice';
import blankstate from '../../../Assets/Icons/blankstate.svg';
import { SkeletonWrapper } from '../Skeleton';
import { fetchFilledSkillsCountAsync, selectFilledSkillsCount, selectFilledSkillsStatus } from '../../../redux/user/userSlice';

export const Ecosystems = ({ ecosystemIdSelected }) => {
  const dispatch = useDispatch();
  const skills = useSelector(selectAllSkills);
  const skillsStatus = useSelector(selectSkillsStatus);
  const ecosystems = useSelector(selectAllEcosystems);
  const ecosystemsStatus = useSelector(selectEcosystemsStatus);
  const filledSkillsCount = useSelector(selectFilledSkillsCount);
  const filledSkillsStatus = useSelector(selectFilledSkillsStatus);

  const [inputValue, setInputValue] = useState('');
  const [filteredEcosystems, setFilteredEcosystems] = useState(ecosystems);
  const [loading, setLoading] = useState(true);

  const filterEcosystem = userInput => {
    if (userInput) {
      const matchingSkills = skills.filter(skill => `${skill.ecosystemName} - ${skill.skillName}`.toLowerCase().includes(userInput));
      const matchingEcosystemsNames = [...new Set(matchingSkills.map(skill => skill.ecosystemName))];
      return ecosystems.filter(ecosystem => matchingEcosystemsNames.some(el => el === ecosystem.name));
    }
    return ecosystems;
  };

  useEffect(() => {
    if (skillsStatus === 'idle') dispatch(fetchSkillsAsync());
    if (ecosystemsStatus === 'idle') dispatch(fetchEcosystemsAsync());
    if (filledSkillsStatus === 'idle') dispatch(fetchFilledSkillsCountAsync());
    if (ecosystemsStatus === 'success' && skillsStatus === 'success' && filledSkillsStatus === 'success') setLoading(false);
  }, [ecosystems, skills, filledSkillsCount]);

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
          : filteredEcosystems.map(({ id, name }) => {
            const filledSkills = filledSkillsCount?.find(ecosystem => ecosystem.ecosystemId === id);

            return (
              <ButtonStyled
                key={id}
                selected={ecosystemIdSelected === id}
                to={ location => ({ ...location, pathname: `/profile/ecosystem/${id}` })}
              >
                {name}
                {filledSkills && (
                  <NumberCircle>
                    <NumberText>{filledSkills.filledSkillsCount}</NumberText>
                  </NumberCircle>
                )}
              </ButtonStyled>
            );
          })}
      </EcosystemScroller>
    </EcosystemColumn>
  );
};

Ecosystems.propTypes = {
  ecosystemIdSelected: PropTypes.number.isRequired,
};
