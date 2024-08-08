import React from 'react';
import { Container, Typography, Card, CardContent, Grid, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

const projects = [
  {
    title: 'Project One',
    description: 'This is a description of Project One.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'This is a description of Project Two.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'This is a description of Project Three.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
];

const Projects = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h2" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MotionCard
              elevation={3}
              sx={{ height: '100%' }}
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
                <Button href={project.link} target="_blank" variant="contained" color="primary" sx={{ mt: 2 }}>
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
