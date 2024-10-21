import React from 'react';
import './LeveesPolicy.scss';

const LeveesPolicy = () => {
  return (
    <div className="levees-policy">
      <div className="policy-header">
        <span className="policy-icon">📄</span>
        <h2>Levees Policy</h2>
      </div>
      <div className="policy-form">
        <div className="form-group">
          <label htmlFor="annually-levees">Annually Levees</label>
          <select id="annually-levees" defaultValue="">
            <option value="" disabled>Select</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="monthly-leaves">Monthly Leaves</label>
          <select id="monthly-leaves" defaultValue="">
            <option value="" disabled>Select</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default LeveesPolicy;
