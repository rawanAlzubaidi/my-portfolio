import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { IoIosArrowRoundUp } from "react-icons/io";

export const BackToTop = () => {
  const [backToTopButton, setbackToTopButton] = useState(false);

  // Add and remove the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >100) {
        setbackToTopButton(true);
      } else {
        setbackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    backToTopButton && (
      
      <Button 
        
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          fontSize: '30px',
          backgroundColor: 'rgb(136,146,176)',
          border:'4px',
          color:'#112240',
        }}
        onClick={scrollUp}
      >
      <IoIosArrowRoundUp />
      </Button>
    )
  );
};
