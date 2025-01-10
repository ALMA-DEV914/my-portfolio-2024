import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projetc1 from "../assets/lookbook.png";
import projetc2 from "../assets/ecommerce.png";
import projetc3 from "../assets/blog.png";
import projetc4 from "../assets/weather.png";
import projetc5 from "../assets/frontendmovie.png";
import projetc6 from "../assets/quiz.png";

// Project data
const projects = [
  {
    title: 'LOOKBOOK',
    description: "This website is designed to help individuals test their cognitive functions, specifically targeting Alzheimer's patients. It leverages modern web technologies such as React.js for an interactive user interface, Node.js with Express.js for robust backend support, and MongoDB with Mongoose for secure data management. User security is maintained with Bcrypt for password hashing and JWT (jsonwebtoken) for authentication.",
    image: projetc1,
    link: 'https://look-book-act-group42.herokuapp.com/'
  },
  {
    title: 'Blog Site',
    description: "This blog website is a dynamic React application designed to enhance users' fitness routines through detailed and accessible information. It integrates a REST API to fetch data from a reliable third-party source, ensuring a wealth of up-to-date and diverse content. The site focuses on a broad range of cardio exercises, offering users a comprehensive collection of workout routines, techniques, and tips. Each exercise entry provides detailed descriptions, benefits, and instructional resources to help users effectively incorporate cardio into their fitness plans.",
    image: projetc3,
    link: 'https://stirring-mooncake-891335.netlify.app/'
  },
  {
    title: 'Ecommerce Site',
    description: 'This eCommerce website is powered by a robust technology stack, including MongoDB for database management, Redux for state management, and React for a dynamic frontend. The backend is built with Node.js and Express, ensuring efficient server-side operations. The app uses Redux to manage state, extract data, and dispatch actions, providing a seamless alternative to the Context API. Styling is handled with CSS, and payments are processed securely via PayPal.',
    image: projetc2,
    link: 'https://e-commerce-shop-ui.onrender.com/'
  },
  
  {
    title: 'Movie Review',
    description: 'This application provides users with comprehensive details about movies to help them plan their next watch. Built using HTML, CSS, JavaScript, and integrated with third-party APIs, it displays movie ratings and plot summaries. The app utilizes Bootstrap and media queries for responsive design, and Git/GitHub for version control. It is designed to offer users an intuitive interface where they can easily view movie information, including ratings and plot summaries, to make informed decisions about their movie choices.',
    image: projetc5,
    link: 'https://alma-dev914.github.io/Front-End-Interactive-User-Interface-/'
  },
  {
    title: 'Quiz Puzzle',
    description: 'This Quiz Challenge application is built with HTML, JavaScript, and Web API. It leverages local storage to save and retrieve user data, allowing for a seamless quiz experience. The application runs directly in the browser and features dynamically updated HTML and CSS, which are controlled through JavaScript. This ensures an interactive and engaging user experience as users progress through the quiz.',
    image: projetc6,
    link: 'https://alma-dev914.github.io/Brainstorm-Challenge/'
  },
  
  {
    title: 'Weather Dashboard',
    description: 'This Weather Dashboard provides users with up-to-date weather information, including the current forecast and a 5-day weather outlook. Built with JavaScript, HTML, and CSS, and utilizing MongoDB, Node packages, and Bootstrap, this application fetches weather data using a third-party API. The Progressive Web App (PWA) features enhance user experience by offering offline capabilities and a responsive design. The dashboard is designed to help users easily access and understand weather conditions to plan their activities effectively.',
    image: projetc4,
    link: 'https://alma-dev914.github.io/Weather-Dashboard/'
  },
  
];

const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6, mt: "50px", mb: "50px" }}>
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2.5rem", sm: "3.5rem" },
          textAlign: "center",
          mb: 3,
          color: "#4A4A4A",
        }}
      >
        My Projects
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: "center",
          mb: 4,
          fontSize: { xs: "1rem", sm: "1.2rem" },
          color: "#6B8E23",
        }}
      >
        Explore my projects built while learning Web Development. Stay tuned for more updates!
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  borderRadius: 2,
                  boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    transition: '0.3s',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: 180, objectFit: 'cover' }}
                  image={project.image}
                  alt={project.title}
                />
                <CardContent
                  sx={{
                    flexGrow: 1, // Ensures the content stretches evenly
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      {project.description}
                    </Typography>
                  </Box>
                </CardContent>
                <Box sx={{ textAlign: 'center', pb: 2 }}>
                  <Button
                    variant="contained"
                    component={Link}
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      mt: 1,
                      backgroundColor: "#8D6E63",
                      '&:hover': { backgroundColor: "#6D4C41" },
                      borderRadius: 2,
                      px: 3,
                    }}
                  >
                    View Project
                  </Button>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
