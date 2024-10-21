import React, { useState } from 'react';
import './FAQAccordion.scss';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Why is the moon sometimes out during the day?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      question: 'Why is the sky blue?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      question: 'Will we ever discover aliens?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      question: 'How much does the Earth weigh?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      question: 'How do airplanes stay up?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;