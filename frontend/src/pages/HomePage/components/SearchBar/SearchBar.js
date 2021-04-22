/* eslint-disable import/prefer-default-export */
import React, { useState, Fragment } from 'react';
import { SearchBarUsers } from './SearchBar.styled';

export const SearchBar = () => {
  const [input, setInput] = useState('');

  return (
    <Fragment>
      <SearchBarUsers
        name="user-name"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    </Fragment>
  );
};
