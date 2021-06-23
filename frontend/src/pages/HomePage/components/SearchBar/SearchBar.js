/* eslint-disable import/prefer-default-export */
import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateUserFilter,
  selectSkillFilters,
  selectUserFilter,
} from '../../../../redux/filters/filtersSlice';
import { fetchFilteredAnswersAsync } from '../../../../redux/answers/answersSlice';

import SearchBarUsers from './SearchBar.styled';
import SearchBarSkill from './SearchBarSkill/SearchBarSkill';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const skillFilters = useSelector(selectSkillFilters);
  const userFilter = useSelector(selectUserFilter);

  const isLastFilter = index => index === skillFilters.length - 1;

  useEffect(() => {
    dispatch(fetchFilteredAnswersAsync({ skillFilters, userFilter }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skillFilters, userFilter]);

  return (
    <Fragment>
      <SearchBarUsers
        data-cy="user-input"
        name="user-name"
        value={userFilter}
        onChange={e => dispatch(updateUserFilter(e.target.value))}
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
