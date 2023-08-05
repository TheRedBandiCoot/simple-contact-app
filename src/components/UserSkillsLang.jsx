import { useProfileContext } from './Profile';
import { UserSkillsLangTreeLogo } from './UserSkillsLangTreeLogo';
import React from 'react';
import colorGen from '../utils/colorGen';
export function UserSkillsLang({}) {
  const {
    user: { jobRoleData, skillData },
  } = useProfileContext();

  return (
    <div className="profile__logo__skill__lang">
      <UserSkillsLangTreeLogo />
      <div className="profile__skill__lang">
        <ul className="profile__skill">
          {jobRoleData.map((jobRole, i) => {
            return (
              <li style={colorGen()} key={i}>
                <p>{jobRole}</p>
              </li>
            );
          })}
        </ul>
        <ul className="profile__lang">
          {skillData.map((skill, i) => {
            return (
              <li style={colorGen()} key={i}>
                <p>{skill}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
