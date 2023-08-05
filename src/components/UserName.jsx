import React from 'react';
import { useProfileContext } from './Profile';
export function UserName() {
  const {
    user: {
      name: { first, last },
    },
  } = useProfileContext();
  return (
    <div className="profile__name">
      {first} {last}
    </div>
  );
}
