import React from 'react';
import './ProfileCard.scss';

function ProfileCard() {
  return (
    <div className="profile-card">
      <img src="https://storage.googleapis.com/a1aa/image/FEtvQu2UJZ5eZioJEbUWjXmZMcu8KFF8DpBjUtEl7HCLK2zJA.jpg" alt="Profile" className="profile-image" />
      <h3>Adam Clark</h3>
      <p className="subtitle">
        PHP Developer <span className="separator">|</span> Pakistan, Lahore
      </p>
      <div className="tags">
        <div className="tag">PHP</div>
        <div className="tag">Database</div>
        <div className="tag">Dot Net</div>
        <div className="tag">...</div>
      </div>
    
    </div>
    
  );
}

export default ProfileCard;
