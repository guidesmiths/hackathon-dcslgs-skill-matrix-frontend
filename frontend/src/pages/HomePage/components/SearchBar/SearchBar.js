/* eslint-disable import/prefer-default-export */
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import {
  updateUserFilter,
  selectSkillFilters,
  selectUserFilter,
} from '../../../../redux/filters/filtersSlice';

import SearchBarUsers from './SearchBar.styled';
import SearchBarSkill from './SearchBarSkill/SearchBarSkill';

export const SearchBar = () => {
  const skillFilters = useSelector(selectSkillFilters);
  const userFilter = useSelector(selectUserFilter);

  const isLastFilter = index => index === skillFilters.length - 1;

  return (
    <Fragment>
      <SearchBarUsers
        name="user-name"
        value={userFilter}
        onChange={e => updateUserFilter(e.target.value)}
      />
      {skillFilters.map((filter, index) => (
        <SearchBarSkill
          key={index}
          filter={filter}
          index={index}
          isLastFilter={isLastFilter(index)}
        />))}

    </Fragment>
  );
};
