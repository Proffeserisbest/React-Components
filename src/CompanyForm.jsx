import React from 'react';
import './CompanyForm.scss';

const CompanyForm = () => {
  return (
    <div className="company-form">
      <h2>Company Name</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="upload-logo">
        <div className="upload-icon">↑</div>
        <p>Upload company logo</p>
      </div>
      <form>
        <div className="form-group two-column">
          <div className="input-field">
            <label htmlFor="webUrl">Web URL *</label>
            <input type="text" id="webUrl" placeholder="Example: www.domain.com" />
          </div>
          <div className="input-field">
            <label htmlFor="industry">Select Industry *</label>
            <select id="industry">
              <option>Select Option</option>
              {/* Add industry options */}
            </select>
          </div>
        </div>
        <div className="form-group two-column">
          <div className="input-field">
            <label htmlFor="country">Country *</label>
            <select id="country">
              <option>United States</option>
              {/* Add more country options */}
            </select>
          </div>
          <div className="input-field">
            <label htmlFor="city">City *</label>
            <select id="city">
              <option>Select Option</option>
              {/* Add city options */}
            </select>
          </div>
        </div>
        <div className="form-group two-column">
          <div className="input-field">
            <label htmlFor="companyEmail">
              Company email address <span>(Optional)</span>
            </label>
            <input type="email" id="companyEmail" placeholder="Example: email@domain.com" />
          </div>
          <div className="input-field">
            <label htmlFor="companyPhone">
              Company Phone Number <span>(Optional)</span>
            </label>
            <input type="tel" id="companyPhone" placeholder="Example: 123-456-7890" />
          </div>
        </div>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default CompanyForm;
