import React from 'react';
import './Attachments.scss';

const Attachments = () => {
  return (
    <div className="attachments-container">
      <h2>Attachments</h2>
      <div className="attachments-grid">
        <div className="attachment-item">
          <img src="stellar.png" alt="Stellar" />
        </div>
        <div className="attachment-item">
          <img src="alamaken.png" alt="Alamaken" />
        </div>
        <div className="attachment-item pdf">
          <img src="pdf-icon.png" alt="PDF" />
          <p>Document.pdf</p>
        </div>
        <div className="attachment-item">
          <img src="grosvenor.png" alt="Grosvenor" />
        </div>
      </div>
      <div className="attachments-footer">
        <span className="icon">&#9662;</span>
        <span className="add-icon">+</span>
      </div>
    </div>
  );
};

export default Attachments;
