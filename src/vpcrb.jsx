import React from 'react';
import './VPCRB.scss';

function VPCRB() {
  return (
    <div className="vpcrb">
      <img src="https://via.placeholder.com/150" alt="Profile" className="profile-image" />
      <div className="profile-details">
        <div className="name-location">
          <h3>Adam Clark</h3>
          <p>Pakistan, Lahore</p>
        </div>
        <p className="role">PHP Developer</p>
        <div className="tags">
          <div className="tag">PHP</div>
          <div className="tag">Database</div>
          <div className="tag">Dot Net</div>
          <div className="tag">Node JS</div>
          <div className="tag">...</div>
        </div>
      </div>
    </div>
  );
}

export default VPCRB;
