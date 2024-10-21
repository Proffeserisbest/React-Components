import React, { useRef } from 'react';
import './CompanyList.scss';

const CompanyList = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === 'up' ? -100 : 100;
      containerRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    }
  };

  const companies = [
    { name: 'Company A', logo: 'logo-a.png', rating: 4.5, country: 'USA', reviews: 120 },
    { name: 'Company B', logo: 'logo-b.png', rating: 4.0, country: 'Canada', reviews: 80 },
    { name: 'Company C', logo: 'logo-c.png', rating: 4.2, country: 'UK', reviews: 95 },
    { name: 'Company D', logo: 'logo-d.png', rating: 4.8, country: 'Germany', reviews: 110 },
    { name: 'Company E', logo: 'logo-e.png', rating: 4.1, country: 'France', reviews: 70 },
    { name: 'Company F', logo: 'logo-f.png', rating: 4.3, country: 'Australia', reviews: 85 },
    // Add more companies as needed
  ];

  return (
    <div className="company-list-container">
      <button className="arrow-btn up" onClick={() => scroll('up')}>&uarr;</button>
      <div className="company-list" ref={containerRef}>
        {companies.map((company, index) => (
          <div key={index} className="company-item">
            <img src={company.logo} alt={`${company.name} logo`} className="company-logo" />
            <div className="company-info">
              <div className="company-name">{company.name}</div>
              <div className="company-rating">★★★★★</div>
            </div>
            <div className="company-stats">
              <span className="company-rating-value">{company.rating}</span>
              <span className="company-country">{company.country}</span>
              <span className="company-reviews">Overall ratings {company.reviews}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="arrow-btn down" onClick={() => scroll('down')}>&darr;</button>
    </div>
  );
};

export default CompanyList;