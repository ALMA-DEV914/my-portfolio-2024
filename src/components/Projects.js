import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  CardMedia,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import project1 from "../assets/lookbook.png";
import project2 from "../assets/ecommerce.png";
import project3 from "../assets/blog.png";
import project4 from "../assets/weather.png";
import project5 from "../assets/frontendmovie.png";
import project6 from "../assets/quiz.png";

const MotionCard = motion(Card);

const projects = [
  {
    title: "LOOKBOOK",
    description: "Lookbook is more than just a tool—it’s a dedicated resource for individuals living with Alzheimer’s, their families, and caregivers. Our mission is to provide valuable insights into cognitive health while fostering a supportive environment for memory enhancement and overall well-being. Built with the MERN stack (MongoDB, Express.js, React, and Node.js)",
    image: project1,
    link: "#",
  },
  {
    title: "ECOMMERCE SITE",
    description: "It is an app that uses a Redux provider that passes reducers to a Redux store, extracts data, and dispatch actions instead of using the Context API. Tools and technologies are : MONGODB, REDUX, REACT, EXPRESS, CSS, Paypal(payment method) and NODE.",
    image: project2,
    link: "#",
  },
  {
    title: "BLOG EXERCISE",
    description: "It is a React application where I used REST API to fetch data from third party API source. It features the different cardio exercises.",
    image: project3,
    link: "#",
  },
  {
    title: "WEATHER DASHBOARD",
    description: "Built with Javascript, Html, CSS, MongoDB, PWA, Node packages and Bootstrap. I used third party api to fetch the data information. This display the current forecast and the 5 days weather condition ahead.",
    image: project4,
    link: "#",
  },
  {
    title: "MEMORIES-ON-THE-GO",
    description: "Built with HTML, CSS, Javascript, Third party API, Bootstrap/Mediaqueries, Git/Github - We used this application to work together or collaborate in building this project. This app aim to give user an idea about a certain movies where they can see the rating and the plot of the stories to help them plan their next movie to watch",
    image: project5,
    link: "#",
  },
  {
    title: "QUIZ PUZZLE",
    description: "This application used HTML, Javascript and Web API. This used a local storage to store and retrieved data. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that I program.",
    image: project6,
    link: "#",
  },
];

const Projects = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4, mt: "50px", mb: "50px" }}>
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2rem", sm: "3rem" }, // Responsive font size
        }}
        gutterBottom
        color="#4A4A4A"
      >
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MotionCard
              elevation={3}
              sx={{ height: "100%" }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
                <Button
                  href={project.link}
                  target="_blank"
                  variant="contained"
                  sx={{ mt: 2, background: "#8D6E63" }}
                >
                  Learn More
                </Button>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
