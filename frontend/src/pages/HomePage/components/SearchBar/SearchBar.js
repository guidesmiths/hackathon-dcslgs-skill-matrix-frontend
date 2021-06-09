/* eslint-disable import/prefer-default-export */
import React, { useState, Fragment } from 'react';

import SearchBarUsers from './SearchBar.styled';
import SearchBarSkill from './SearchBarSkill/SearchBarSkill';

export const SearchBar = () => {
  const defaultFilter = { skill: '', level: 1 };
  const [inputUser, setInputUser] = useState('');
  const [filters, setFilters] = useState([defaultFilter]);

  const addFilter = () => setFilters([...filters, defaultFilter]);

  const deleteFilter = i => {
    const updatedFilters = filters.length === 1
      ? [defaultFilter]
      : filters.filter((_, index) => index !== i);
    setFilters(updatedFilters);
  };

  const updateFilter = index => filter => {
    const copyFilters = JSON.parse(JSON.stringify(filters));
    copyFilters[index] = filter;
    setFilters(copyFilters);
  };

  const isLastFilter = index => index === filters.length - 1;

  return (
    <Fragment>
      <SearchBarUsers
        name="user-name"
        value={inputUser}
        onChange={e => setInputUser(e.target.value)}
      />
      {filters.map((_, index) => (
        <SearchBarSkill
          key={index}
          filter={filters[index]}
          index={index}
          isLastFilter={isLastFilter(index)}
          onAddFilter={addFilter}
          onDeleteFilter={() => deleteFilter(index)}
          onUpdateFilter={updateFilter(index)}
        />))}

    </Fragment>
  );
};
