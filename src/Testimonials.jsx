import React from 'react';
import './Testimonials.scss';

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

const Testimonials = () => {
  return (
    <div className="testimonials">
      {testimonials.map((testimonial) => (
        <div className="testimonial" key={testimonial.id}>
          <img src={testimonial.profilePic} alt={testimonial.name} className="profile-pic" />
          <div className="text">
            <h3>
              {testimonial.name} <span className="relation">· {testimonial.relation}</span>
            </h3>
            <p className="title">{testimonial.title}</p>
            <p className="date">{testimonial.date}, {testimonial.description}</p>
            <p className="feedback">{testimonial.feedback}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
