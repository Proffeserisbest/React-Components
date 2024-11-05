import React from 'react';
import './TopRated.scss';

const CompanyCard = ({ imgSrc, companyName, country, stars, rating }) => (
  <div className="company-card">
    <img src={imgSrc} alt={companyName} />
    <div className="company-info">
      <div>
        <span className="company-name">{companyName}</span>
        <span className="country">{country}</span>
      </div>
      <div className="ratings">
        <span className="stars">{stars}</span>
        <span className="rating">{rating}</span>
        <span className="overall">Overall ratings</span>
      </div>
    </div>
  </div>
);

const TopRated = () => {
  return (
    <div className="top-rated-container">
      <h2>Top Rated Companies</h2>
      <div className="underline"></div>
      <div className="company-list">
        <CompanyCard
          imgSrc="logo.png"
          companyName="Andropple lab"
          country="Pakistan"
          stars="★★★★★"
          rating="4.5"
        />
        <CompanyCard
          imgSrc="logo.png"
          companyName="Andropple lab"
          country="Pakistan"
          stars="★★★★★"
          rating="4.5"
        />
      </div>
    </div>
  );
};

export default TopRated;
