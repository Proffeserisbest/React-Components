import React from 'react';
import './CompanySignup.scss';

const CompanySignup = () => {
  return (
    <div className="company-signup">
      <div className="header">
        <h2>You are a owner of a company?</h2>
        <button className="signup-button">Signup Now</button>
      </div>
      <div className="underline"></div>
      <p className="description">
        You try to find good employs? No need to post a job, just search your desired skills, location or industry and it's done!
      </p>
    </div>
  );
};

export default CompanySignup;
