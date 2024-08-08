import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import image2 from "../assets/me.png"

const MotionBox = motion(Box);

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h2" gutterBottom>
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
        <Box>
          <Typography variant="h5" paragraph>
            I am a software developer with experience in building web applications using modern technologies. My passion lies in creating intuitive and engaging user experiences.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
