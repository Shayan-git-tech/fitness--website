import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos?.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: "100px", xs: "20px" } }} p="20px">
      <Typography 
        variant="h3" 
        mb="33px"
        sx={{
          fontSize: { lg: '44px', xs: '25px' },
          textAlign: 'center',
          fontWeight: 700,
          color: '#3A1212'
        }}
      >
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack 
        justifyContent="flex-start" 
        flexWrap="wrap" 
        alignItems="center"
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '110px', xs: '50px' }
        }}
      >
        {exerciseVideos?.slice(0, 9).map((item) => {
          if (!item?.video) return null;
          
          const { videoId, title, thumbnails = [], channelName } = item.video;
          const thumbnailUrl = thumbnails[0]?.url || 'https://via.placeholder.com/387x250?text=No+Thumbnail';
          
          return (
            <Box
              key={videoId}
              className="exercise-video"
              sx={{
                width: { lg: '387px', xs: '320px' },
                height: '381px',
                backgroundColor: '#fff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 0 20px rgba(0,0,0,0.2)'
                }
              }}
            >
              <a
                className="exercise-video-link"
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: 'none',
                  display: 'block',
                  height: '100%'
                }}
              >
                <img 
                  src={thumbnailUrl} 
                  alt={title || 'Exercise video thumbnail'}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px'
                  }}
                />
                <Box p="20px">
                  <Typography 
                    variant="h5" 
                    color="#000"
                    sx={{
                      fontSize: { lg: '20px', xs: '18px' },
                      fontWeight: 600,
                      mb: '10px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}
                  >
                    {title || 'Exercise Video'}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    color="#FF2625"
                    sx={{
                      fontSize: { lg: '16px', xs: '14px' },
                      fontWeight: 500
                    }}
                  >
                    {channelName || 'Unknown Channel'}
                  </Typography>
                </Box>
              </a>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
