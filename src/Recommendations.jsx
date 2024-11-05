import React, { useState } from 'react';
import { RatingIcon } from '../../y/src/icon'; // Assuming RatingIcon is exported from Icons.js
import styles from './Recommendations.module.scss';

const testimonials = [
  {
    id: 1,
    name: 'Nauman Ahmed',
    relation: '2nd',
    profilePic: 'nauman.jpg', // Replace with actual image path
    title: 'AWS Certified Full Stack Developer Laravel|Node|AWS|WordPress|CodeIgniter|Web Automation|Scraping Expert',
    date: 'April 16, 2024',
    description: 'Ameer Hamza worked with Nauman but on different teams',
    feedback: 'He is passionate about what he is doing.',
  },
  {
    id: 2,
    name: 'Muhammad Bilal Younis',
    relation: '2nd',
    profilePic: 'bilal.jpg', // Replace with actual image path
    title: 'Electrical Engineer (Electronics)',
    date: 'December 10, 2023',
    description: 'Ameer Hamza and Muhammad Bilal studied together',
    feedback: 'Bilal is a quick learner and very smart worker. His way of doing works are very professional and he is a very friendly person.',
  },
];

const Recommendations = () => {
  const [activeTab, setActiveTab] = useState('Received');

  return (
    <div className={styles.recommendations}>
      <h2>
        <span className={styles.icon}><RatingIcon /></span> Recommendations
      </h2>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'Received' ? styles.active : ''}`} 
          onClick={() => setActiveTab('Received')}
        >
          Received
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'Given' ? styles.active : ''}`}
          onClick={() => setActiveTab('Given')}
        >
          Given
        </button>
      </div>
      <div className={styles.content}>
        {activeTab === 'Received' && (
          <>
            <h3>Nothing to see for now</h3>
            <p>Recommendations that Ameer Hamza receives will appear here.</p>
          </>
        )}
        {activeTab === 'Given' && (
          <div className={styles.testimonials}>
            {testimonials.map((testimonial) => (
              <div className={styles.testimonial} key={testimonial.id}>
                <img src={testimonial.profilePic} alt={testimonial.name} className={styles['profile-pic']} />
                <div className={styles.text}>
                  <h3>
                    {testimonial.name} <span className={styles.relation}>· {testimonial.relation}</span>
                  </h3>
                  <p className={styles.title}>{testimonial.title}</p>
                  <p className={styles.date}>{testimonial.date}, {testimonial.description}</p>
                  <p className={styles.feedback}>{testimonial.feedback}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
