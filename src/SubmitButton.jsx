import React from 'react';
import './SubmitButton.scss';

const SubmitButton = ({ label, onClick }) => {
  return (
    <button className="submit-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default SubmitButton;
