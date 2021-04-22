/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchBar } from './components/SearchBar/SearchBar';
import Input from '../../app/commons/Input/Input';
import Select from '../../app/commons/Select/Select';
import HomePageStyled from './HomePage.styled';
import { selectAllSkills, fetchSkillsAsync } from '../../redux/skills/skillsSlice';

export const HomePage = () => {
  const dispatch = useDispatch();
  const skills = useSelector(selectAllSkills);
  const skillsStatus = useSelector(state => state.skills.status);

  useEffect(() => {
    dispatch(fetchSkillsAsync());
    console.log(skills);
  }, [dispatch]);

  return (
    <HomePageStyled
      data-cy="hola"
    >
      <SearchBar />
      <div>
        <Input/>
        <Select/>
      </div>
      {
        skillsStatus === 'succeded' ? (skills.value.map(skill =>
          (<p key={skill.id}>{skill.name}</p>),
        )) : (<p>Skill Store empty</p>)
      }
    </HomePageStyled>
  );
};
