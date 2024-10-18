import React from "react";
import './styles.scss'; // Import the Sass file

const CompanyCard = ({ company }) => {
  return (
    <div className={`company-card ${company.location === "Pakistan" ? "margin-pakistan" : ""}`}>
      <img
        src={company.logo}
        alt="logo"
      />
      <div className="content">
        <h3>{company.name}</h3>
        <div className="rating">
          <span className="stars">★★★★★</span>
          <span className="score">{company.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;