import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import './Card.scss';

function Card() {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/150" alt="Logo" className="company-logo" />
      <div className="details">
        <h3>Andropple Lab</h3>
        <div className="ratings">⭐⭐⭐⭐⭐</div>
       
      </div>
      <div className="location-ratings">
        
        <div className="overall-ratings">
          <div className="rating-value">
            <span>4.5</span>
            
        
          </div>
          <div > 
            <p className='pak'>Pakistan</p>
          <p className='rat'>Overall ratings</p>
          </div>

          <div className="thumbs">
            <div><FontAwesomeIcon icon={faThumbsDown} className="icon thumbs-down" /><br />
            <span>18</span></div>
            <div>
            <FontAwesomeIcon icon={faThumbsUp} className="icon thumbs-up" /><br />
            <span>150</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
