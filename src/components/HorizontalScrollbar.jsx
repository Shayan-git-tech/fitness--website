import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const scrollContainerRef = useRef(null);
  const [isFirstItemVisible, setIsFirstItemVisible] = useState(true);
  const [isLastItemVisible, setIsLastItemVisible] = useState(false);

  const checkScrollVisibility = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setIsFirstItemVisible(scrollLeft === 0);
      setIsLastItemVisible(scrollLeft + clientWidth >= scrollWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollVisibility);
      checkScrollVisibility();
      return () => container.removeEventListener('scroll', checkScrollVisibility);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box 
      sx={{ 
        position: 'relative',
        width: '100%',
        maxWidth: '100vw',
        overflow: 'hidden',
        padding: { xs: '0 20px', sm: '0 30px', md: '0 40px' }
      }}
    >
      <Box
        ref={scrollContainerRef}
        sx={{
          display: 'flex',
          gap: '20px',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          padding: '10px 0',
          width: '100%'
        }}
      >
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m="0 40px"
            sx={{
              transform: 'scale(1, 1)',
              transition: '0.3s all cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              '&:hover': {
                transform: 'scale(1.1, 1.1)'
              }
            }}
          >
            {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}
          </Box>
        ))}
      </Box>

      <Typography
        className="left-arrow"
        onClick={() => scroll('left')}
        sx={{
          display: isFirstItemVisible ? 'none' : 'flex',
          position: 'absolute',
          left: { xs: '10px', sm: '15px', md: '20px' },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          cursor: 'pointer'
        }}
      >
        <ChevronLeft sx={{ fontSize: { xs: '30px', sm: '35px', md: '40px' } }} />
      </Typography>

      <Typography
        className="right-arrow"
        onClick={() => scroll('right')}
        sx={{
          display: isLastItemVisible ? 'none' : 'flex',
          position: 'absolute',
          right: { xs: '10px', sm: '15px', md: '20px' },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          cursor: 'pointer'
        }}
      >
        <ChevronRight sx={{ fontSize: { xs: '30px', sm: '35px', md: '40px' } }} />
      </Typography>
    </Box>
  );
};

export default HorizontalScrollbar;