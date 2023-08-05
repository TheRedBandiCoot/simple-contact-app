import React from 'react';
import { useProfileContext } from './Profile';
export function UserLocation() {
  const {
    user: {
      location: {
        street: { name },
        city,
      },
    },
  } = useProfileContext();

  return (
    <div className="profile__logo__location">
      <div className="profile__logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="19" viewBox="0 0 14 19" fill="none">
          <path
            d="M7.86406 18.525C9.73437 16.1426 14 10.3684 14 7.125C14 3.19141 10.8646 0 7 0C3.13542 0 0 3.19141 0 7.125C0 10.3684 4.26562 16.1426 6.13594 18.525C6.58437 19.0928 7.41562 19.0928 7.86406 18.525ZM7 4.75C7.61884 4.75 8.21233 5.00022 8.64992 5.44562C9.0875 5.89102 9.33333 6.49511 9.33333 7.125C9.33333 7.75489 9.0875 8.35898 8.64992 8.80438C8.21233 9.24978 7.61884 9.5 7 9.5C6.38116 9.5 5.78767 9.24978 5.35008 8.80438C4.9125 8.35898 4.66667 7.75489 4.66667 7.125C4.66667 6.49511 4.9125 5.89102 5.35008 5.44562C5.78767 5.00022 6.38116 4.75 7 4.75Z"
            fill="#dd54ff"
          />
        </svg>
      </div>
      <div className="profile__location">
        {name}, {city}
      </div>
    </div>
  );
}
