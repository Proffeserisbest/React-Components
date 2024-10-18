import React from 'react';
import './styles.scss';

const ShortListedCandidates = () => {
  return (
    <div className="container">
      <div className="header">
        <button className="short-listed">Short Listed</button>
        <button className="saved-searches">Saved Searches</button>
      </div>
      <div className="candidates-container">
        <div className="candidate-count">35 Candidates</div>
        <div className="search-bar">
          <div className="search-icon">
            <i className="fas fa-search"></i>
          </div>
          <input type="text" placeholder="Search" />
        </div>
        <div className="candidate-list">
          <div className="candidate">
            <div className="candidate-image">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Candidate" />
            </div>
            <div className="candidate-info">
              <div className="candidate-name">Adam Clark</div>
              <div className="candidate-position">PHP Developer</div>
            </div>
            <div className="candidate-location">Pakistan, Lahore</div>
            <button className="remove-button">Remove <i className="fas fa-times"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortListedCandidates;