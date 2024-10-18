import React from 'react';
import './NewggCard.css'; // Ensure this path is correct

function NewggCard() {
  return (
    <div className="newgg-card">
      <div className="logo">
        {/* Replace with your logo */}
        <img src="https://storage.googleapis.com/a1aa/image/FEtvQu2UJZ5eZioJEbUWjXmZMcu8KFF8DpBjUtEl7HCLK2zJA.jpg" alt="newgg logo" />
      </div>
      <div className="brand-info">
        <h2>newgg</h2>
        <p>Location</p> {/* Replace with actual location */}
      </div>
      <div className="ratings">
        <div className="stars">
          {/* Replace with star rating component */}
          ★★★★★
        </div>
        <div className="overall-rating">4.5 Overall rating</div>
      </div>
      <div className="counters">
        <div className="likes">
          <span className="count">150</span> 👍
        </div>
        <div className="dislikes">
          <span className="count">18</span> 👎
        </div>
      </div>
    </div>
  );
}

export default NewggCard;