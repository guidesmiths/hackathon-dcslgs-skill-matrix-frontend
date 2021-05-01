import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ListElementHeader from './ListElementHeader/ListElementHeader';
import SkillList from './SkillList/SkillList';
import AnswersListElementStyled from './AnswersListElement.styled';

const AnswersListElement = ({ email, name, skills, index }) => {
  const [isCollapsed, setCollapsed] = useState(true);

  return (
    <AnswersListElementStyled data-cy={`answer-list-element-${index}`}>
      <ListElementHeader email={email} isCollapsed={isCollapsed} name={name} setCollapsed={() => setCollapsed(!isCollapsed)}/>
      <SkillList isCollapsed={isCollapsed} skills={skills}/>
    </AnswersListElementStyled>
  );
};

AnswersListElement.propTypes = {
  email: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  skills: PropTypes.array,
};

AnswersListElement.defaultProps = {
  skills: [],
};

export default AnswersListElement;
