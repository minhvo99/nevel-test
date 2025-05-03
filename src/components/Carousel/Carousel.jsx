import React, { useState, useEffect } from 'react';
import './Carousel.scss';

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = 9;

  const goToSlide = (index) => {
    setCurrent(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className='slideshow-container'>
      {Array.from({ length: 9 }, (_, i) => i + 1).map((slide, index) => (
        <div
          className={`slide ${index === current ? 'active' : 'inactive'} fade`}
          key={index}
        >
          <img src='/assets/images/carousel.png' alt={`slide ${index}`} />
          <div className='text'>{slide.caption}</div>
        </div>
      ))}

      <div className='dashs'>
        {Array.from({ length: 9 }, (_, i) => i + 1).map((_, index) => (
          <span
            key={index}
            className={`dash ${index === current ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
