import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  Divider,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Freelance Web Developer at Freelancer.com",
    description:
      "Experienced frontend developer specializing in React, Next.js, and MUI. I build responsive, high-performance web applications and design intuitive user interfaces. Proven track record in delivering quality solutions that meet client needs and enhance user experiences.",
    date: "Jan 2022 - Present",
  },
  {
    title: "Fullstack Web Developer at LOOKBOOK LLC",
    description:
      "Developed a full-stack web application using the MERN stack (MongoDB, Express.js, React, Node.js), delivering a dynamic and interactive user experience. Built responsive front-end components with React, designed RESTful APIs with Express.js, and managed data with MongoDB. Deployed the application on [Deployment Platform], incorporating CI/CD pipelines for streamlined updates. Successfully addressed challenges in scalability and security, resulting in a robust and user-friendly application.",
    date: "April - July 2023",
  },
  {
    title: "Frontend Developer at Queeery LLC",
    description:
      "Developed modern web applications using React, Next.js, and MUI. Created reusable UI components, implemented server-side rendering and static site generation, and integrated a consistent design system with MUI. Focused on performance optimization, responsive design, and collaboration with design and backend teams to deliver high-quality, user-centric interfaces.",
    date: "Oct 2022 - Jan 2023",
  },
  {
    title: "Housekeeper - Southwest Employment Agency Singapore",
    description:
      "Responsible for maintaining high standards of cleanliness and organization within assigned residential or commercial properties. My role involved performing a variety of tasks, including dusting, vacuuming, mopping, and sanitizing different areas to ensure a pristine environment. I managed household chores such as laundry, ironing, and meal preparation, tailored to the specific needs and preferences of clients. Attention to detail, reliability, and efficiency were key aspects of my job, as I consistently ensured that all tasks were completed to the highest standards. My role required strong organizational skills, a proactive approach to problem-solving, and the ability to manage time effectively to meet client expectations.",
    date: "August 2012 - April 2021",
  },
  {
    title: "Bookkeeper - Southwest Employment Agency Singapore",
    description:
      "Responsible for recording and maintaining the company's daily financial transactions. Prepare reports for the company owner and trial balances. Introduced and implemented an online bookkeeping system that resulted in accurate and timely accounts records management. Balanced a particularly complicated balance sheet that had one entry missing and was in a state of limbo for three months. Reduced overhead costs by $4000 per month by suggesting the use of alternative energy during peak office hours. Stayed under budget for 15 months by ensuring that petty cash disbursement was minimized.",
    date: "Jan 2013 - April 2014",
  },
  {
    title: "City Treasurer - Dingalan, Aurora Philippines",
    description:
      "Oversaw all financial transactions and fundraising efforts going in or out of an organizing committee. Responsibilities in cash management, liquidity projections, treasury operations, bank relationship management, cash accounting, budget planning, financial reporting, record-keeping, and managing incoming and outgoing funds. Created the most effective, efficient, and accountable administration of all financial and tax collection activities for the city taxpayers. Continued the process of development and improvement of property records that are made easily accessible to other County departments, the general public, and professionals who have a need for the information contained within the treasurer's office.",
    date: "April 2009 - July 2012",
  },
];

const StyledListItem = styled(ListItem)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  marginBottom: theme.spacing(2),
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media (max-width: 600px)': {
    padding: theme.spacing(1),
    fontSize: '0.875rem',
    marginBottom: theme.spacing(1),
    '&::before': {
      content: 'attr(data-date)',
      position: 'absolute',
      top: '-30px', // Position circle above the content
      left: '50%',
      transform: 'translateX(-50%)',
      width: '50px',
      height: '50px',
      backgroundColor: theme.palette.secondary.main,
      color: '#fff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.6rem',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    '&::after': {
      display: 'none', // Hide the arrow on mobile
    },
    '@media (max-width: 600px)': {
    padding: theme.spacing(1),
    fontSize: '0.875rem',
    marginBottom: theme.spacing(1),
    '&::before': {
      left: '-40px',
      width: '50px',
      height: '50px',
      fontSize: '0.6rem',
    },
    '&::after': {
      left: '-12px',
      borderWidth: '6px 12px 6px 0',
    },
  },
  },
  '&::before': {
    content: 'attr(data-date)',
    position: 'absolute',
    left: '-70px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '60px',
    height: '60px',
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.65rem',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '-16px',
    top: '50%',
    transform: 'translateY(-50%) rotate(180deg)',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '8px 16px 8px 0',
    borderColor: `transparent ${theme.palette.secondary.main} transparent transparent`,
  },
}));

const Experience = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4, mt: "50px", mb: "50px" }}>
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2rem", sm: "2.5rem" },
          mb: 4,
          textAlign: "center",
        }}
        color="#4A4A4A"
        gutterBottom
      >
        Experience
      </Typography>
      <List>
        {experiences.map((experience, index) => (
          <React.Fragment key={index}>
            <StyledListItem
              component={motion.div}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              data-date={experience.date}
            >
              <Box sx={{ background: "#F9F9F9", padding: "10px", width: '100%' }}>
                <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                  {experience.title}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {experience.description}
                </Typography>
              </Box>
            </StyledListItem>
            {index < experiences.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default Experience;
