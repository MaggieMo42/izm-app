import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

 
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

 
  return (
    <button 
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
     <FaArrowUp className="back-to-top-icon" />
    </button>
  );
};

export default BackToTop;