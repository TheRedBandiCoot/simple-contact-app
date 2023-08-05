import { UserName } from './UserName';
import { UserSkillsLang } from './UserSkillsLang';
import { UserLocation } from './UserLocation';
import { UserEmail } from './UserEmail';
import React from 'react';
import { useProfileContext } from './Profile';
export function ProfileDetails() {
  const { value } = useProfileContext();
  return (
    <div className={`profile__details ${value || 'not-show'}`}>
      <UserName />
      <UserEmail />
      <UserLocation />
      <UserSkillsLang />
    </div>
  );
}
