/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useTour } from '@reactour/tour';
import ListElementHeader from './ListElementHeader/ListElementHeader';
import SkillList from './SkillList/SkillList';
import AnswersListElementStyled from './AnswersListElement.styled';
import LoadingUserRow from '../../../../../app/commons/LoadingUserRow/LoadingUserRow';
import { fetchAnswersByUserAsync, filterAnswerByUser } from '../../../../../redux/answers/answersSlice';

const AnswersListElement = ({ userId, email, name, role, skills, index, country, seniority }) => {
  const dispatch = useDispatch();
  const [isCollapsed, setCollapsed] = useState(true);
  const [loading, setLoading] = useState(true);

  const { isOpen } = useTour();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleCollapsed = () => {
    if (isCollapsed) {
      dispatch(fetchAnswersByUserAsync(userId));
    } else {
      dispatch(filterAnswerByUser(userId));
    }
    setCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (isOpen && index === 0) {
      setCollapsed(false);
    }
  }, [isOpen]);

  return (
    <AnswersListElementStyled data-cy={`answer-list-element-${index}`}>
      {!loading
        ? <ListElementHeader country={country} email={email} index={index} isCollapsed={isCollapsed} name={name} seniority={seniority} setCollapsed={handleCollapsed}/>
        : <LoadingUserRow />
      }
      <SkillList index={index} isCollapsed={isCollapsed} role={role} skills={skills} userId={userId}/>
    </AnswersListElementStyled>
  );
};

AnswersListElement.propTypes = {
  email: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  seniority: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  country: PropTypes.string,
  skills: PropTypes.array,
};

AnswersListElement.defaultProps = {
  country: '',
  skills: [],
};

export default AnswersListElement;
