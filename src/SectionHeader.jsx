import React from 'react';
import './SectionHeader.scss';
import { HeaderIcon } from './icon';

const SectionHeader = ({ title, description, icon }) => {
  return (
    <div className="section-header">
      <div className="header-icon">
        {icon || <HeaderIcon />}
      </div>
      <div className="header-content">
        <h2>{title}</h2>
        <div className="underline"></div>
        <p className="description">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
