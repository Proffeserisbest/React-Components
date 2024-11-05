import React from 'react';
import styles from './CompanyTable.module.scss';

const CompanyRow = ({ company }) => {
  const { id, name, rating, goodReviews, badReviews, recommendedBy, notRecommendedBy } = company;

  const stars = '★'.repeat(Math.floor(rating));

  return (
    <tr>
      <td>{id}</td>
      <td>
        <div className={styles.companyInfo}>
          <img src="logo.png" alt={name} className={styles.companyLogo} />
          {name}
        </div>
      </td>
      <td>
        <div className={styles.rating}>
          <span className={styles.stars}>{stars}</span>
          <span className={styles.ratingScore}>{rating}</span>
        </div>
      </td>
      <td>
        <div className={styles.goodReviews}>
          <span role="img" aria-label="thumbs up">👍</span> {goodReviews}
        </div>
      </td>
      <td>
        <div className={styles.badReviews}>
          <span role="img" aria-label="thumbs down">👎</span> {badReviews}
        </div>
      </td>
      <td>{recommendedBy}</td>
      <td>{notRecommendedBy}</td>
      <td>
        <button className={styles.viewButton}>👁️</button>
      </td>
    </tr>
  );
};

const CompanyTable = () => {
  const companies = [
    { id: '#01', name: 'Andropple lab', rating: 4.5, goodReviews: 350, badReviews: 54, recommendedBy: 150, notRecommendedBy: 30 },
    { id: '#01', name: 'Andropple lab', rating: 4.5, goodReviews: 350, badReviews: 54, recommendedBy: 150, notRecommendedBy: 30 },
    { id: '#01', name: 'Andropple lab', rating: 4.5, goodReviews: 350, badReviews: 54, recommendedBy: 150, notRecommendedBy: 30 },
    { id: '#01', name: 'Andropple lab', rating: 4.5, goodReviews: 350, badReviews: 54, recommendedBy: 150, notRecommendedBy: 30 },
    { id: '#01', name: 'Andropple lab', rating: 4.5, goodReviews: 350, badReviews: 54, recommendedBy: 150, notRecommendedBy: 30 },
    { id: '#01', name: 'Andropple lab', rating: 4.5, goodReviews: 350, badReviews: 54, recommendedBy: 150, notRecommendedBy: 30 },
    { id: '#01', name: 'Andropple lab', rating: 4.5, goodReviews: 350, badReviews: 54, recommendedBy: 150, notRecommendedBy: 30 },
  ];

  return (
    <table className={styles.companyTable}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Company</th>
          <th>Overall Rating</th>
          <th>Good reviews</th>
          <th>Bad reviews</th>
          <th>Recemented by</th>
          <th>Not Recemented by</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company, index) => (
          <CompanyRow key={index} company={company} />
        ))}
      </tbody>
    </table>
  );
};

export default CompanyTable;
