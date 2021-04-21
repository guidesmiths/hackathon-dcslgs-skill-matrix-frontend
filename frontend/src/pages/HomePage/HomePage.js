/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useSelector } from 'react-redux';
import { SearchBar } from './components/SearchBar/SearchBar';
import Input from '../../app/commons/Input/Input';
import Select from '../../app/commons/Select/Select';
import HomePageStyled from './HomePage.styled';
import { selectAllSkills } from '../../redux/skills/skillsSlice';

export const HomePage = () => {
  const skills = useSelector(selectAllSkills);
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
        skills.length > 0 ? (skills.map(skill =>
          (<p key={skill.id}>{skill.name}</p>),
        )) : (<p>Skill Store empty</p>)
      }
    </HomePageStyled>
  );
};
