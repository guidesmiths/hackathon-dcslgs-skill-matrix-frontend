import React, { Fragment } from 'react';
import { SearchBarOption, SearchBarSelect } from '../../../pages/HomePage/components/SearchBar/SearchBar.styled';

function Select() {
  const optionsSelect = [
    { level: 1 },
    { level: 2 },
    { level: 3 },
    { level: 4 },
  ];

  return (
    <Fragment>
      <SearchBarSelect id="skill" name="skill">
        {optionsSelect.map((option, index) =>
          (<SearchBarOption key={index} value={option.level}>{option.level}</SearchBarOption>),
        )}
      </SearchBarSelect>
    </Fragment>
  );
}

export default Select;
