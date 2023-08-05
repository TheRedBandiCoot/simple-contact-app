import React from 'react';
import { useProfileContext } from './Profile';
export function UserEmail() {
  const {
    user: { email },
  } = useProfileContext();

  return (
    <div className="profile__logo__email">
      <div className="profile__logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
          <path
            d="M2.125 1.71875C1.83281 1.71875 1.59375 1.95781 1.59375 2.25V2.98379L7.32129 7.68535C8.00859 8.24981 8.99473 8.24981 9.68203 7.68535L15.4062 2.98379V2.25C15.4062 1.95781 15.1672 1.71875 14.875 1.71875H2.125ZM1.59375 5.0457V10.75C1.59375 11.0422 1.83281 11.2812 2.125 11.2812H14.875C15.1672 11.2812 15.4062 11.0422 15.4062 10.75V5.0457L10.6914 8.91719C9.41641 9.96309 7.58027 9.96309 6.30859 8.91719L1.59375 5.0457ZM0 2.25C0 1.07793 0.95293 0.125 2.125 0.125H14.875C16.0471 0.125 17 1.07793 17 2.25V10.75C17 11.9221 16.0471 12.875 14.875 12.875H2.125C0.95293 12.875 0 11.9221 0 10.75V2.25Z"
            fill="#ff9c56"
          />
        </svg>
      </div>
      <div className="profile__email">{email}</div>
    </div>
  );
}
