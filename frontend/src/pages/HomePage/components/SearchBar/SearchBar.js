/* eslint-disable import/prefer-default-export */
import React, { useState, Fragment } from 'react';
import { SearchBarUsers, SearchBarSkills, SearchBarButton } from './SearchBar.styled';
import Input from '../../../../app/commons/Input/Input';
import Select from '../../../../app/commons/Select/Select';

export const SearchBar = () => {
  const [input, setInput] = useState('');

  return (
    <Fragment>
      <SearchBarUsers
        name="user-name"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <SearchBarSkills>
        <Input/>
        <Select/>
        <SearchBarButton>
          <span className="material-icons">
            add_circle
          </span>
        </SearchBarButton>
        <SearchBarButton>
          <span className="material-icons">
            remove_circle
          </span>
        </SearchBarButton>
      </SearchBarSkills>
    </Fragment>
  );
};
