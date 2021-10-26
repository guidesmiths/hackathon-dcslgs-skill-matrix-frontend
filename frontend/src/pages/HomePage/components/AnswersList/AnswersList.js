import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AnswersListElement from './AnswersListElement/AnswersListElement';
import Pagination from '../../../../app/commons/Pagination/Pagination';
import { selectAnswerPage, selectNumberOfAnswers } from '../../../../redux/answers/answersSlice';
import { AnswersListStyled, ScrollWrapper } from './AnswersList.styled';

const AnswersList = () => {
  const pageSize = 10;
  const numberOfPages = Math.ceil(useSelector(selectNumberOfAnswers) / pageSize);
  const [currentPage, setCurrentPage] = useState(1);
  const answers = useSelector(selectAnswerPage((currentPage - 1) * pageSize, currentPage * pageSize));

  return (
    <AnswersListStyled>
      <ScrollWrapper>
        {answers.map((answer, index) => {
          const { user_id: userId, name, email, ecosystems } = answer;
          return (
            <AnswersListElement
              key={userId}
              email={email}
              index={index}
              name={name}
              skills={ecosystems?.flatMap(ecosystem => ecosystem.skills)}
            />);
        })}
      </ScrollWrapper>
      <Pagination
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        shape="rounded"
        size="large"
        onChange={(_, page) => setCurrentPage(page)}
      />
    </AnswersListStyled>
  );
};

export default AnswersList;
