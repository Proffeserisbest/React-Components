import React from 'react';
import './CompanyCard.scss';

const CompanyCard = () => {
    const company = {
        id: "#01",
        name: "Andropple lab",
        logo: "logo.png", // Replace with actual logo path
        rating: 4.5,
        goodReviews: 350,
        badReviews: 54,
        recommendedBy: 150,
        notRecommendedBy: 30,
    };

    return (
        <div className="company-card">
            <img src={company.logo} alt={company.name} className="company-logo" />
            <div className="company-info">
                <h3>{company.name}</h3>
                <span>{company.id}</span>
            </div>
            <div className="rating">
                {'★'.repeat(Math.floor(company.rating))} 
                {'☆'.repeat(5 - Math.floor(company.rating))}
                <span className="rating-score">{company.rating}</span>
            </div>
            <div className="reviews">
                <span className="good-reviews">👍 {company.goodReviews}</span>
                <span className="bad-reviews">👎 {company.badReviews}</span>
                <span className="recommended-by">{company.recommendedBy}</span>
                <span className="not-recommended-by">{company.notRecommendedBy}</span>
            </div>
            <button className="view-button">👁️</button>
        </div>
    );
};

export default CompanyCard;
