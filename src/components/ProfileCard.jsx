import { ProfileHideDetails } from './ProfileHideDetails';
import { ProfileDetails } from './ProfileDetails';
import React from 'react';
export function ProfileCard({ value }) {
  return (
    <div className={`profile-container ${value && 'show'}`}>
      <ProfileHideDetails />
      <ProfileDetails />
    </div>
  );
}
