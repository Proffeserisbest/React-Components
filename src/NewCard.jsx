import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import './NewCard.scss';

function NewCard() {
  return (
    <div className="new-card">
      <img src="https://via.placeholder.com/150" alt="Logo" className="company-logo" />
      <p></p>
      <h3>Andropple Lab</h3>
      <p></p>
        <div className="ratings">⭐⭐⭐⭐⭐</div>
      <div className="details">
        
        <div className="rating-block">
          <span className="rating-value">4.5</span>
          <span>Overall ratings</span>
        </div>
      </div>
      <div className="actions">
        <div className="reaction">
          <div><FontAwesomeIcon icon={faThumbsUp} className="icon thumbs-up" /><br />
          <span>150</span></div>
        </div>
        <div className="reaction">
          <div><FontAwesomeIcon icon={faThumbsDown} className="icon thumbs-down" /><br />
          <span>18</span></div>
        </div>
      </div>
      <p className="location">Pakistan</p>
    </div>
  );
}

export default NewCard;
