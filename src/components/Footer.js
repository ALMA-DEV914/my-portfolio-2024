import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';
import { motion } from 'framer-motion';
import logo from '../assets/logo2.png'; // Import your logo image
import './Footer.css'; // Import the CSS file for custom styles

const MotionBox = motion(Box);

const Footer = () => {
  return (
    <MotionBox
      className="footer"
      component="footer"
      sx={{ py: 4, backgroundColor: '#245349', color: 'white', textAlign: 'center' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}
        >
          {/* Contact Info Section */}
          <Box sx={{ mb: { xs: 4, md: 0 } }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Contact Information
            </Typography>
            <Typography variant="body2">
              Email: <Link href="mailto:your.email@example.com" color="inherit">almabraun40@gmail.com</Link>
            </Typography>
            <Typography variant="body2">
              Phone: <Link href="tel:+1234567890" color="inherit">+1 775 742 5989</Link>
            </Typography>
            <Typography variant="body2">
              Location: Reno, Nevada USA 89521
            </Typography>
          </Box>
          
          {/* Logo and Copyright Section */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <MotionBox
              component="img"
              src={logo}
              alt="Logo"
              sx={{ 
                borderRadius: '8px',
                width: { xs: '80px', md: '100px' }, // Adjust width as needed
                height: 'auto' // Maintain aspect ratio
              }}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <Typography variant="body2" sx={{ mt: 2 }}>
              &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Made with React, Material-UI, and Framer Motion
            </Typography>
          </Box>
        </Box>
      </Container>
    </MotionBox>
  );
};

export default Footer;
