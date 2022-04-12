/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useTour } from '@reactour/tour';
import { fetchAnswersByUserAsync, filterAnswerByUser } from '../../../../../redux/answers/answersSlice';

import { LoadingUserRow } from '../../../../../app/commons/LoadingUserRow';
import { ListElementHeader } from './ListElementHeader';
import { SkillList } from './SkillList';

import { AnswersListElementStyled } from './AnswersListElement.styled';

export const AnswersListElement = ({ index, answer }) => {
  const dispatch = useDispatch();
  const { isOpen } = useTour();

  const [isCollapsed, setCollapsed] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const { id, name, email, role, ecosystems, country, seniority } = answer;
  const skills = ecosystems?.flatMap(ecosystem => ecosystem.skills);

  const handleCollapsed = () => {
    if (isCollapsed) {
      dispatch(fetchAnswersByUserAsync(id));
    } else {
      dispatch(filterAnswerByUser(id));
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
        ? <ListElementHeader country={country} email={email} index={index} isCollapsed={isCollapsed} name={name} seniority={seniority} setCollapsed={handleCollapsed} />
        : <LoadingUserRow />
      }
      <SkillList index={index} isCollapsed={isCollapsed} role={role} skills={skills} userId={id} />
    </AnswersListElementStyled>
  );
};

AnswersListElement.propTypes = {
  answer: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
