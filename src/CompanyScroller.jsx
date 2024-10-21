import React from 'react';
import './CompanyScroller.scss';

const CompanyScroller = () => {
  const companies = [
    {
      name: 'Andropple lab',
      rating: 4.5,
      overallRatings: 150,
      country: 'Pakistan',
    },
    // Add more company objects here
  ];

  return (
    <div className="company-scroller">
      {companies.map((company, index) => (
        <div key={index} className="company-item">
          <div className="company-name">{company.name}</div>
          <div className="company-rating">
            <span className="rating">{company.rating}</span>
            <span className="star">★★★★★</span>
          </div>
          <div className="company-details">
            <span className="overall-ratings">{company.overallRatings} Overall ratings</span>
            <span className="country">{company.country}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyScroller;
