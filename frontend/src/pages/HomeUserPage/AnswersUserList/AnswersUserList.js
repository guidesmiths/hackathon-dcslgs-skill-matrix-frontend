import React from 'react';
import { useSelector } from 'react-redux';
import AnswersListUserElement from './AnswersListUserElement/AnswersListUserElement';
import { selectAllAnswers } from '../../../redux/answers/answersSlice';
import { AnswersListStyled, ScrollWrapper } from '../../HomePage/components/AnswersList/AnswersList.styled';
import { selectUserData } from '../../../redux/user/userSlice';

const AnswersUserList = () => {
  const answers = useSelector(selectAllAnswers);
  const userData = useSelector(selectUserData);

  return (
    <AnswersListStyled>
      <ScrollWrapper>
        {answers
          .filter(answer => answer.id !== userData.user_id)
          .map((answer, index) => {
            const { id, name, email, userRole, ecosystems, country, seniority } = answer;
            return (
              <AnswersListUserElement
                key={`answers-${id}`}
                country={country}
                email={email}
                index={index}
                name={name}
                role={userRole}
                seniority={seniority}
                skills={ecosystems?.flatMap(ecosystem => ecosystem.skills)}
                userId={id}
              />);
          })
        }
      </ScrollWrapper>
    </AnswersListStyled>
  );
};

export default AnswersUserList;
