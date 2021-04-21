/* eslint-disable import/prefer-default-export */
import React, { useState, Fragment } from 'react';
import { SearchBarInput } from './SearchBar.styled';

export const SearchBar = () => {
  const [input, setInput] = useState('');
  // const [skillFilters, setSkillFilters] = useState([])

  // const options = [{
  //   value: 'hola',
  //   description: 'hola',
  // }, {
  //   value: 'chao',
  //   description: 'chao',
  // }];

  return (
    <Fragment>
      <SearchBarInput name="user-name" value={input} onChange={e => setInput(e.target.value)}/>
      {/* <SearchBarSelect>
        {options.map((option, index) => (
          <SearchBarOption key={index} selected={option.value === 'chao'} value={option.value}>{option.description}</SearchBarOption>
        ))}
      </SearchBarSelect> */}
    </Fragment>
  );
};
