import React from 'react';
import './TopRatedCampines.scss';

function TopRatedCampines() {
  return (
    <div className="top-rated-campines">
      <h2>Top Rated Campines</h2>
      <div className="header-divider"></div>
      <div className="campines-list">
        <div className="campine-card">
          <img src="https://storage.googleapis.com/a1aa/image/FEtvQu2UJZ5eZioJEbUWjXmZMcu8KFF8DpBjUtEl7HCLK2zJA.jpg" alt="Logo" className="campine-logo" />
          <div className="campine-details">
            <h3>Androppele Lab</h3>
            <p className="country">Pakistan</p>
            <div className="ratings">
              <span>⭐⭐⭐⭐⭐</span>
              <span className="rating-value">4.5</span>
              <span>Overall ratings</span>
            </div>
          </div>
        </div>
        
        <div className="campine-card">
          <img src="https://storage.googleapis.com/a1aa/image/FEtvQu2UJZ5eZioJEbUWjXmZMcu8KFF8DpBjUtEl7HCLK2zJA.jpg" alt="Logo" className="campine-logo" />
          <div className="campine-details">
            <h3>Androppele Lab</h3>
            <p className="country">Pakistan</p>
            <div className="ratings">
              <span>⭐⭐⭐⭐⭐</span>
              <span className="rating-value">4.5</span>
              <span>Overall ratings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopRatedCampines;
