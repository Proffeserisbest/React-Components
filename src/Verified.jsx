import React from 'react';
import './Verified.scss'; // Import SCSS for styling

function Verified() {
  return (
    <div className="verification-modal">
      <h2>Verification</h2>
      <div className="verification-status">
        <div className="status unverified">UNVERIFIED</div>
        <div className="status verified">VERIFIED</div>
      </div>
      <p>
        Upload salary slip, joining letter, or any employment proof for this company to get a verified badge &amp; make your voice louder!
      </p>
      <form className="upload-form">
        <label className="upload-label">
          <span>Upload document</span>
          <input type="file" />
        </label>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default Verified;
