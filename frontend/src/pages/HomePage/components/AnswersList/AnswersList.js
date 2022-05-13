import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import blankstate from '../../../../Assets/Icons/blankstate.svg';
import { selectAllAnswers } from '../../../../redux/answers/answersSlice';

import { Pagination } from '../../../../app/commons/Pagination';
import { AnswersListElement } from './AnswersListElement';

import { AnswersListStyled, ScrollWrapper, NoAnswers } from './AnswersList.styled';
import { Image } from './AnswersListElement/SkillList/SkillList.styled';

export const AnswersList = ({ currentPage, numberOfPages, handlePagination }) => {
  const answers = useSelector(selectAllAnswers);
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (answers.length === 0) {
        setIsEmpty(true);
      }
    }, [2000]);
  }, [answers]);

  return (
    <AnswersListStyled>
      <ScrollWrapper data-cy="answer-list">
        {answers.map((answer, index) => {
          const { id, name, email, role, ecosystems, country, seniority } = answer;

          return (
            <AnswersListElement
              key={`answers-${id}`}
              country={country}
              data-cy={`answer-list-element-${index}`}
              email={email}
              index={index}
              name={name}
              role={role}
              seniority={seniority}
              skills={ecosystems?.flatMap(ecosystem => ecosystem.skills)}
              userId={id}
            />);
        })}
        {answers.length > 0
          ? <Pagination currentPage={currentPage > numberOfPages ? numberOfPages : currentPage} numberOfPages={numberOfPages} shape="rounded" size="16px" onChange={handlePagination} />
          : isEmpty && <NoAnswers>
            <Image src={blankstate}/>
            <p>There no person with this skill</p>
          </NoAnswers>
        }
      </ScrollWrapper>
    </AnswersListStyled>
  );
};
AnswersList.propTypes = {
  currentPage: PropTypes.number.isRequired,
  handlePagination: PropTypes.func.isRequired,
  numberOfPages: PropTypes.number,
};

AnswersList.defaultProps = {
  numberOfPages: 1,
};
