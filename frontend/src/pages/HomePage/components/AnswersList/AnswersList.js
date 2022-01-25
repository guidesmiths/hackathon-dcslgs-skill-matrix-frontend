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
      && <Pagination currentPage={currentPage > numberOfPages ? numberOfPages : currentPage} numberOfPages={numberOfPages} shape={'rounded'} size={'medium'} onChange={handlePagination} />}
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

export default AnswersList;
