import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import AnswersListElement from './AnswersListElement/AnswersListElement';
import { selectAllAnswers } from '../../../../redux/answers/answersSlice';
import { AnswersListStyled, ScrollWrapper } from './AnswersList.styled';
import Pagination from '../../../../app/commons/Pagination/Pagination';

const AnswersList = ({ currentPage, numberOfPages, handlePagination }) => {
  const answers = useSelector(selectAllAnswers);

  return (
    <AnswersListStyled>
      <ScrollWrapper>
        {answers.map((answer, index) => {
          const { id, name, email, userRole, ecosystems, country, seniority } = answer;
          return (
            <AnswersListElement
              key={`answers-${id}`}
              country={country}
              data-cy={`answer-list-element-${index}`}
              email={email}
              index={index}
              name={name}
              role={userRole}
              seniority={seniority}
              skills={ecosystems?.flatMap(ecosystem => ecosystem.skills)}
              userId={id}
            />);
        })}
        {answers.length > 0
      && <Pagination currentPage={currentPage > numberOfPages ? numberOfPages : currentPage} numberOfPages={numberOfPages} shape={'rounded'} size={'16px'} onChange={handlePagination} />}
      </ScrollWrapper>
    </AnswersListStyled>
  );
};
AnswersList.propTypes = {
  currentPage: PropTypes.number.isRequired,
  handlePagination: PropTypes.func.isRequired,
  numberOfPages: PropTypes.number.isRequired,
};

export default AnswersList;
