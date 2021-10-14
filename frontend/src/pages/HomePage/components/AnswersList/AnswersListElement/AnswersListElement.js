import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ListElementHeader from './ListElementHeader/ListElementHeader';
import SkillList from './SkillList/SkillList';
import AnswersListElementStyled from './AnswersListElement.styled';
import LoadingUserRow from '../../../../../app/commons/LoadingUserRow/LoadingUserRow';

const AnswersListElement = ({ email, name, skills, index }) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <AnswersListElementStyled data-cy={`answer-list-element-${index}`}>
      {!loading
        ? <ListElementHeader email={email} isCollapsed={isCollapsed} name={name} setCollapsed={() => setCollapsed(!isCollapsed)}/>
        : <LoadingUserRow/>
      }
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
