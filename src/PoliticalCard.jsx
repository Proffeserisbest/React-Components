import React from 'react';
import './PoliticalCard.scss';

function PoliticalCard() {
  return (
    <div className="political-card">
      <img src="https://storage.googleapis.com/a1aa/image/FEtvQu2UJZ5eZioJEbUWjXmZMcu8KFF8DpBjUtEl7HCLK2zJA.jpg" alt="Political Logo" className="logo" />
      <h3>Political Inc</h3>
      <p className="location">Lahore, Pakistan</p>
      <div className="info">
        <span>Follow <strong>150</strong></span>
        <hr className="divider" />
        <span>Follower <strong>380</strong></span>
      </div>
      <div className="notification">!</div>
    </div>
  );
}

export default PoliticalCard;