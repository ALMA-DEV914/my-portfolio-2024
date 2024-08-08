import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const experiences = [
  {
    title: 'Software Engineer at Company A',
    description: 'Worked on developing and maintaining web applications using React and Node.js.',
    date: 'Jan 2022 - Present',
  },
  {
    title: 'Frontend Developer at Company B',
    description: 'Designed and implemented user interfaces with a focus on performance and usability.',
    date: 'May 2020 - Dec 2021',
  },
  {
    title: 'Intern at Company C',
    description: 'Assisted in building and testing web applications as part of the development team.',
    date: 'Jun 2019 - Aug 2019',
  },
];

const Experience = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h2" gutterBottom>
        Experience
      </Typography>
      <List>
        {experiences.map((experience, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText
                primary={experience.title}
                secondary={experience.description}
                primaryTypographyProps={{ variant: 'h6' }}
                secondaryTypographyProps={{ variant: 'body2' }}
              />
              <Typography variant="body2" color="textSecondary">
                {experience.date}
              </Typography>
            </ListItem>
            {index < experiences.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default Experience;
