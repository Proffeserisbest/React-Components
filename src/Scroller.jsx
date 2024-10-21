import React, { useRef } from 'react';
import './Scroller.scss';

const Scroller = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = direction === 'up' ? -100 : 100;
    container.scrollBy({ top: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="scroller-container">
      <button className="arrow-btn" onClick={() => scroll('up')}>&#9650;</button>
      <div className="scroller" ref={scrollRef}>
        {[...Array(5)].map((_, index) => (
          <div key={index} className="scroller-item">Card {index + 1}</div>
        ))}
      </div>
      <button className="arrow-btn" onClick={() => scroll('down')}>&#9660;</button>
    </div>
  );
};

export default Scroller;
