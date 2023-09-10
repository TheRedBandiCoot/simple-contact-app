import React, { useState } from 'react';
import { useProfileContext } from './Profile';
export function ProfileHideDetails() {
  const [click, setClick] = useState(true);
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
    setClick(true);
    handleStopClick();
  };
  return (
    <>
      <div className="img-border">
        <div className="img" style={inlineImgStyle}></div>
      </div>
      <div className="profile__name__show-details">
        <div className={`profile__name-container ${!click && 'show-text'}`}>
          <div onClick={() => setClick(!click)} className={`profile__name`}>
            {first} {click ? (first.length + last.length > 16 ? `${last.substring(0, 1)}.` : last) : last}
          </div>
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
