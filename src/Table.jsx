import React from 'react';
import styles from './Table.module.scss';

const Table = () => {
  const data = [
    {
      id: 1,
      company: 'Andropple lab',
      overallRating: 4.5,
      goodReviews: 350,
      badReviews: 54,
      recommendedBy: 150,
      notRecommendedBy: 30,
    },
    {
      id: 2,
      company: 'Andropple lab',
      overallRating: 4.5,
      goodReviews: 350,
      badReviews: 54,
      recommendedBy: 150,
      notRecommendedBy: 30,
    },
    {
      id: 3,
      company: 'Andropple lab',
      overallRating: 4.5,
      goodReviews: 350,
      badReviews: 54,
      recommendedBy: 150,
      notRecommendedBy: 30,
    },
  ];

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Company</th>
          <th>Overall Rating</th>
          <th>Good reviews</th>
          <th>Bad reviews</th>
          <th>Recommended by</th>
          <th>Not Recommended by</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.company}</td>
            <td>{row.overallRating}</td>
            <td>{row.goodReviews}</td>
            <td>{row.badReviews}</td>
            <td>{row.recommendedBy}</td>
            <td>{row.notRecommendedBy}</td>
            <td>
              <button className={styles.viewButton}>View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
