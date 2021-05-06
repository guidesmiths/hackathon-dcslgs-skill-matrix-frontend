import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { InputStyled } from './Input.styled';

const Input = ({ inputSkill, filteredSkills, onChangeInput }) => (
  (
    <Fragment>
      <InputStyled
        list="skills"
        type="text"
        value={inputSkill}
        onChange={e => onChangeInput(e)}
      />
      <datalist id="skills">
        {filteredSkills.length > 0
          ? filteredSkills.map(skill =>
            (<option key={skill.id}>{skill.name}</option>
            ))
          : null}
      </datalist>
    </Fragment>
  )
);

Input.defaultProps = {
  inputSkill: '',
};

Input.propTypes = {
  filteredSkills: PropTypes.array.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  inputSkill: PropTypes.string,
};

export default Input;
