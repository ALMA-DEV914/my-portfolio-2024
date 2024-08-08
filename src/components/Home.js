import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import './Home.css'; // Import the CSS file for custom styles
import image1 from "../assets/computer.jpg"

const MotionBox = motion(Box);

const Home = () => {
  return (
    <Container maxWidth="xl" sx={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      <Box className="split-container">
        <MotionBox
          className="left-side"
          sx={{ position: 'relative', height: '100%' }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Box className="image-container">
            <MotionBox
              component="img"
              src={image1}
              alt="Profile"
              className="profile-image"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </Box>
          
        </MotionBox>
        <MotionBox
          className="right-side"
          sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h1" color="#2C6B58" sx={{ align: 'center', }}>
            Welcome to My Portfolio
          </Typography>
          <Typography variant="h5" color="black" align="center">
            I am a passionate developer with a knack for creating stunning web experiences. Explore my work and get in touch!
          </Typography>
          <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
            Contact Me
          </Button>
        </MotionBox>
      </Box>
    </Container>
  );
};

export default Home;
