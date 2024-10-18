import React from 'react';
import './NewCD.scss';
import logo from 'https://storage.googleapis.com/a1aa/image/FEtvQu2UJZ5eZioJEbUWjXmZMcu8KFF8DpBjUtEl7HCLK2zJA.jpg'; // Replace with your actual logo path

function NewCD() {
  return (
    <div className="newcd-card">
      <img src={logo} alt="Logo" className="logo" />
      <div className="content">
        <h3 className="company-name">Andropple Lab</h3>
        <div className="feedback">
          <div className="likes" title="Likes">
            👍 150
          </div>
          <div className="dislikes" title="Dislikes">
            👎 18
          </div>
        </div>
        <div className="ratings">
          <div className="stars">★★★★★</div>
          <div className="overall">
            <span className="rating-value">4.5</span> Overall ratings
          </div>
        </div>
        <p className="location">Pakistan</p>
      </div>
    </div>
  );
}

export default NewCD;