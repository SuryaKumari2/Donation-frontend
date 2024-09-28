
import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const slides = [
    { className: 'first', text: "I'm not Living on 'Streets' I'm Living in my 'Dreams'" },
    { className: 'second', text: "Let's fight hunger, poverty & helplessness together" },
    { className: 'third', text: "Right to education... you can do your part too..." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className='home'>
      <div className={`${slides[currentIndex].className} fade-in`}>
        <p className='home-p'>{slides[currentIndex].text}</p>
      </div>
    </div>
  );
};

export default Home;
