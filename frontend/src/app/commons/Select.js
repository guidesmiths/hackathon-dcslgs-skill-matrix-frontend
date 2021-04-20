import React, { Fragment } from 'react';

function Select() {
  const optionsSelect = [
    { level: 1 },
    { level: 2 },
    { level: 3 },
    { level: 4 },
  ];

  return (
    <Fragment>
      <select id="skill" name="skill">
        {optionsSelect.map((option, index) =>
          (<option key={index}>{option.level}</option>),
        )}
      </select>
    </Fragment>
  );
}

export default Select;
