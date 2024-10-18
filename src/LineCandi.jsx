import React from 'react';
import './LineCandi.scss';

function LineCandi() {
  return (
    <div className="linecandi-card">
      <img src="https://storage.googleapis.com/a1aa/image/FEtvQu2UJZ5eZioJEbUWjXmZMcu8KFF8DpBjUtEl7HCLK2zJA.jpg" alt="Profile" className="profile-image" />
      <div className="details">
        <h3 className="name">Adam Clark</h3>
        <p className="role">PHP Developer</p>
      </div>
      <p className="location">Pakistan, Lahore</p>
    </div>
  );
}

export default LineCandi;
