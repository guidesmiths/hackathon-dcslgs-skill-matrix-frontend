import React from 'react';
import { useSelector } from 'react-redux';
import AnswersListElement from './AnswersListElement/AnswersListElement';
import { selectAllAnswers } from '../../../../redux/answers/answersSlice';
import { AnswersListStyled, ScrollWrapper } from './AnswersList.styled';

const AnswersList = () => {
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
    </AnswersListStyled>
  );
};

export default AnswersList;
