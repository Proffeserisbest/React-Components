import React from 'react';
import './AndroppleLabCard.scss';

function AndroppleLabCard() {
  return (
    <div className="andropple-lab-card">
      <span className="id">#01</span>
      <img src="https://storage.googleapis.com/a1aa/image/FEtvQu2UJZ5eZioJEbUWjXmZMcu8KFF8DpBjUtEl7HCLK2zJA.jpg" alt="Andropple Lab Logo" className="company-logo" />
      <span className="company-name">Andropple Lab</span>
      <div className="rating">
        <span className="stars">★★★★★</span>
        <span className="rating-value">4.5</span>
      </div>
      <div className="reviews">
        <span className="positive">
          <span role="img" aria-label="thumbs up">👍</span> 360
        </span>
        <span className="negative">
          <span role="img" aria-label="thumbs down">👎</span> 54
        </span>
      </div>
      <span className="recommended-by">150</span>
      <span className="not-recommended-by">30</span>
      <div className="more-options">⋮</div>
    </div>
  );
}

export default AndroppleLabCard;