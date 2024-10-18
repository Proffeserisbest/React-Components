import React, { useState } from 'react';
import './HallFame.scss';

function HallFame() {
  const [isFame, setIsFame] = useState(true);

  return (
    <div className="toggle-container">
      <div className="toggle">
        <div
          className={`toggle-option ${isFame ? 'active' : ''}`}
          onClick={() => setIsFame(true)}
        >
          Hall of fame
        </div>
        <div
          className={`toggle-option ${!isFame ? 'active' : ''}`}
          onClick={() => setIsFame(false)}
        >
          Hall of shame
        </div>
      </div>
    </div>
  );
}

export default HallFame;
