import React, { useState } from 'react';
import { useProfileContext } from './Profile';
export function ProfileHideDetails() {
  const {
    value,
    setValue,
    user: {
      name: { first, last },
      picture: { large },
    },
    handleStopClick,
    isTrue,
  } = useProfileContext();

  const inlineImgStyle = {
    background: `url('${large}')`, //Demo Profile Img /* https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1*/
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundPositionX: '60%',
  };

  const handleOnClick = () => {
    setValue(!value);
    handleStopClick();
  };
  return (
    <>
      <div className="img-border">
        <div className="img" style={inlineImgStyle}></div>
      </div>
      <div className="profile__name__show-details">
        <div className="profile__name">
          {first} {last}
        </div>
        <button
          type="button"
          onClick={handleOnClick}
          className={`profile__show-details__btn ${isTrue && 'stop-click'}`}
        >
          <div className={`btn-text ${isTrue && 'stop-click'}`}>{value ? 'Hide' : 'Show'} Details</div>
        </button>
      </div>
    </>
  );
}
