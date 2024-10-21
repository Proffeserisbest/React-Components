import React, { useState } from 'react';
import './EnterCompanyName.scss';

const EnterCompanyName = () => {
  const [companyName, setCompanyName] = useState('');

  const handleChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Company Name:', companyName);
  };

  return (
    <div className="enter-company-name">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        incididunt ut labore et dolore magna aliqua.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default EnterCompanyName;
