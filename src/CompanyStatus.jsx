import React, { useState } from 'react';
import './CompanyStatus.scss';

const CompanyStatus = () => {
  const [status, setStatus] = useState('Current Employee');

  const toggleStatus = () => {
    setStatus(status === 'Current Employee' ? 'X-Employee' : 'Current Employee');
  };

  return (
    <div className="company-status">
      <div className="status-header">
        <span className="status-icon">🏢</span>
        <h2>Your Status in this company</h2>
      </div>
      <div className="status-toggle">
        <button 
          className={`status-button ${status === 'Current Employee' ? 'active' : ''}`}
          onClick={toggleStatus}
        >
          Current Employee
        </button>
        <button 
          className={`status-button ${status === 'X-Employee' ? 'active' : ''}`}
          onClick={toggleStatus}
        >
          X-Employee
        </button>
      </div>
    </div>
  );
};

export default CompanyStatus;
