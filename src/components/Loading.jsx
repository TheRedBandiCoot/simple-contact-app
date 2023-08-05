import React, { useEffect, useState } from 'react';
export function Loading({}) {
  const [addLoad, setAddLoad] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      setAddLoad((prev) => [...prev, i]);
    }
  }, []);

  return (
    <div className="loading-container">
      <div className="container--grid__loading">
        {addLoad &&
          addLoad.map((i) => {
            return (
              <div key={i} className="profile-card">
                <div></div>
                <div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
