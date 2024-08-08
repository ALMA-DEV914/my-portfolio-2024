import React from "react";
import { AppBar, Toolbar, Box, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // Import your logo image
import "./Header.css";

const MotionBox = motion(Box);

const Header = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <MotionBox
            component="img"
            src={logo}
            alt="My Logo"
            className="logo"
            sx={{ width: { xs: '150px', md: '200px' }, height: 'auto' }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/about" color="inherit">
              About
            </Button>
            <Button component={Link} to="/projects" color="inherit">
              Projects
            </Button>
            <Button component={Link} to="/experience" color="inherit">
              Experience
            </Button>
            <Button component={Link} to="/contact" color="inherit">
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
