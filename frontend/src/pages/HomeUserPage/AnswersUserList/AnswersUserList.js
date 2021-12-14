import React from 'react';
import { useSelector } from 'react-redux';
import AnswersListUserElement from './AnswersListUserElement/AnswersListUserElement';
import { selectAllAnswers } from '../../../redux/answers/answersSlice';
import { AnswersListStyled, ScrollWrapper } from '../../HomePage/components/AnswersList/AnswersList.styled';
import { selectUserData } from '../../../redux/user/userSlice';
import { selectSkillFilters } from '../../../redux/filters/filtersSlice';

const AnswersUserList = () => {
  const answers = useSelector(selectAllAnswers);
  const userData = useSelector(selectUserData);

  const skillFilter = useSelector(selectSkillFilters);

  const skillId = skillFilter[0].skill || 1;

  const sortBySkill = (arr, wantedSkill) => {
    const filteredUsers = arr.filter(answer => answer.ecosystems.find(eco => eco.skills.find(skill => skill.id === wantedSkill)));
    const peopleBySkill = filteredUsers.reduce((acc, curr) => {
      const skillInfo = curr.ecosystems.map(eco => {
        if (eco.skills.some(skill => skill.id === wantedSkill)) {
          return eco.skills.find(skill => skill.id === wantedSkill);
        }
        return '';
      });
      const completeUserData = { id: curr.id, email: curr.email, name: curr.name, country: curr.country, seniority: curr.seniority, skill: { ...skillInfo[0] } };
      acc.push(completeUserData);

      return acc;
    }, []);

    return peopleBySkill.sort((a, b) => b.skill.level - a.skill.level || b.skill.sublevel?.localeCompare(a.skill.sublevel));
  };

  return (
    <AnswersListStyled>
      <ScrollWrapper>
        {sortBySkill(answers, skillId)
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
