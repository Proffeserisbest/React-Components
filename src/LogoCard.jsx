import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import './LogoCard.scss';

function LogoCard() {
  return (
    <div className="logo-card">
      <div className="details">
        <img src="https://storage.googleapis.com/a1aa/image/FEtvQu2UJZ5eZioJEbUWjXmZMcu8KFF8DpBjUtEl7HCLK2zJA.jpg" alt="Andropple Lab Logo" className="company-logo" />
        <h3>Andropple Lab</h3>
        <div className="stars">⭐⭐⭐⭐⭐</div>
      </div>
      <div className="feedback">
        <div className="reaction">
          <FontAwesomeIcon icon={faThumbsUp} className="thumbs-up" />
          <span>150</span>
        </div>
        <div className="reaction">
          <FontAwesomeIcon icon={faThumbsDown} className="thumbs-down" />
          <span>18</span>
        </div>
        <p className="location">Pakistan</p>
        <div className="rating-details">
          <span className="rating-value">4.5</span>
          <p>Overall ratings</p>
        </div>
      </div>
    </div>
  );
}

export default LogoCard;