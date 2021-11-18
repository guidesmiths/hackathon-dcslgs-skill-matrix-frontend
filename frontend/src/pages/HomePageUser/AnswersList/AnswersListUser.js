import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AnswersListElementUser from './AnswersListElement/AnswersListElementUser';
import Pagination from '../../../app/commons/Pagination/Pagination';
import { selectAnswerPage, selectNumberOfAnswers } from '../../../redux/answers/answersSlice';
import { AnswersListStyled, ScrollWrapper } from '../../HomePage/components/AnswersList/AnswersList.styled';

const AnswersListUser = () => {
  const pageSize = 10;
  const numberOfPages = Math.ceil(useSelector(selectNumberOfAnswers) / pageSize);
  const [currentPage, setCurrentPage] = useState(1);
  const answers = useSelector(selectAnswerPage((currentPage - 1) * pageSize, currentPage * pageSize));

  return (
    <AnswersListStyled>
      <ScrollWrapper>
        {answers.map((answer, index) => {
          const { id, name, email, userRole, ecosystems, country, seniority } = answer;
          return (
            <AnswersListElementUser
              key={`answers-${id}`}
              country={country}
              email={email.toLowerCase()}
              index={index}
              name={name}
              role={userRole}
              seniority={seniority}
              skills={ecosystems?.flatMap(ecosystem => ecosystem.skills)}
              userId={id}
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

export default AnswersListUser;
