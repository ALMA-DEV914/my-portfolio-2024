import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import image2 from "../assets/me.png";
import WavyLine from "../assets/line.svg";
import "./About.css"

const MotionBox = motion(Box);

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4}}>
      <Typography variant='h1' gutterBottom className='about-me'>
        About Me
      </Typography>
      <Box display="flex" alignItems="center" flexDirection={{ xs: 'column', md: 'row' }} sx={{ gap: 4 }}>
        <MotionBox
          component="img"
          src={image2}
          alt="About Me"
          sx={{ 
            borderRadius: '8px',
            width: { xs: '100%', md: '300px' }, // Adjust width as needed
            height: 'auto' // Maintain aspect ratio
          }}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        <Box sx={{background: '#F4F1E6', padding: '15px'}}>
          <Typography variant="h5" paragraph>
            I am web developer with experience in building web applications using modern technologies. My passion lies in creating intuitive and engaging user experiences. Seeking to use proven skills in Web development technologies, tools, and project management to meet business needs. I always thrive to deliver a standard results behind any challenges in the process.



          </Typography>
        </Box>
      </Box>

      {/* Wavy Line Divider */}
      <Box sx={{ width: '100%', mt: 4 }}>
        <img src={WavyLine} alt="Wavy Line Divider" style={{ width: '100%', height: 'auto' }} />
      </Box>

      {/* You can add more content below the divider if needed */}
    </Container>
  );
};

export default About;
