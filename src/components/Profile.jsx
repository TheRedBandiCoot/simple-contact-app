import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { ProfileCard } from './ProfileCard';

const ProfileContext = createContext();

export const useProfileContext = () => useContext(ProfileContext);

export function Profile({ user, showAll }) {
  const [value, setValue] = useState(false);
  const [isTrue, SetIsTrue] = useState(false);
  const isMounted = useRef(false);

  const handleStopClick = () => {
    SetIsTrue(true);
    setTimeout(() => {
      SetIsTrue(false);
    }, 800);
  };

  const checkShowAll = () => {
    if (showAll) {
      setValue(true);
      if (value) return;
      handleStopClick();
    } else {
      setValue(false);
      if (!value) return;
      handleStopClick();
    }
  };

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    checkShowAll();
  }, [showAll]);

  return (
    <ProfileContext.Provider value={{ value, isTrue, setValue, user, handleStopClick }}>
      <ProfileCard value={value} />
    </ProfileContext.Provider>
  );
}
