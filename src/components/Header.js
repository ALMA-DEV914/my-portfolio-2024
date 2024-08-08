import React, { useState } from "react";
import { AppBar, Toolbar, Box, Button, Container, IconButton, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo3.png"; // Import your logo image
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon
import "./Header.css";

const MotionBox = motion(Box);

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ background: '#2C6B58' }}>
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <MotionBox
            component="img"
            src={logo}
            alt="My Logo"
            className="logo"
            sx={{ width: { xs: '80px', md: '100px' }, height: 'auto', padding: '4px' }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
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
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  maxHeight: 48 * 4.5,
                  width: 'auto',
                },
              }}
            >
              <MenuItem component={Link} to="/" onClick={handleMenuClose}>
                Home
              </MenuItem>
              <MenuItem component={Link} to="/about" onClick={handleMenuClose}>
                About
              </MenuItem>
              <MenuItem component={Link} to="/projects" onClick={handleMenuClose}>
                Projects
              </MenuItem>
              <MenuItem component={Link} to="/experience" onClick={handleMenuClose}>
                Experience
              </MenuItem>
              <MenuItem component={Link} to="/contact" onClick={handleMenuClose}>
                Contact
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
