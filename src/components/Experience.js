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
      "Specialized in building responsive, high-performance web applications using React, Next.js, and MUI.",
    date: "Jan 2022 - Present",
    accomplishments:
      "Delivered 20+ custom client projects with 100% satisfaction rate. Improved application performance by 30% through optimized components. Built reusable templates, speeding up future project delivery by 40%.",
  },
  {
    title: "Fullstack Web Developer at LOOKBOOK LLC",
    description:
      "Developed an interactive MERN stack web application with CI/CD integration.",
    date: "April - July 2023",
    accomplishments:
      "Reduced page load time by 40% through React optimization techniques. Collaborated with design and backend teams to launch on schedule. Handled scalability issues, ensuring smooth performance for 10k+ users.",
  },
  {
    title: "Frontend Developer at Queeery LLC",
    description: "Created modern UI components using React, Next.js, and MUI.",
    date: "Oct 2022 - Jan 2023",
    accomplishments:
      "Integrated server-side rendering (SSR) for faster page loads. Built a consistent design system used across all projects.Boosted site responsiveness, improving mobile user experience by 35%.",
  },
  {
    title: "Housekeeper - Southwest Employment Agency Singapore",
    description:
      "Maintained cleanliness and organization of residential and commercial properties.",
    date: "August 2012 - April 2021",
    accomplishments:
      "Received client commendations for exceptional service and efficiency. Managed 10+ properties with zero complaints for over 5 years. Trained new hires on safety protocols and time management techniques.",
  },
  {
    title: "Bookkeeper - Southwest Employment Agency Singapore",
    description:
      "Handled daily financial transactions and prepared financial reports.",
    date: "Jan 2013 - April 2014",
    accomplishments:
      "Implemented an online bookkeeping system, reducing errors by 15%.Balanced complex accounts in half the expected time. Reduced overhead by $4,000 per month by optimizing energy usage.",
  },
  {
    title: "City Treasurer - Dingalan, Aurora Philippines",
    description:
      "Oversaw the city's financial transactions, budgeting, and tax collection.",
    date: "April 2009 - July 2012",
    accomplishments:
      "Improved tax collection efficiency, increasing revenue by 20%. Streamlined property records management, boosting accessibility. Managed $10M+ budget with zero financial discrepancies.",
  },
];

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  marginBottom: theme.spacing(3),
  padding: theme.spacing(3),
  transition: "transform 0.3s, box-shadow 0.3s",
  overflow: "hidden",

  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: theme.shadows[6],
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const DateBadge = styled(Box)(({ theme }) => ({
  minWidth: "100px",
  textAlign: "center",
  padding: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
  borderRadius: theme.shape.borderRadius,
  fontSize: "0.875rem",
  fontWeight: "bold",

  [theme.breakpoints.down("sm")]: {
    minWidth: "auto",
    marginBottom: theme.spacing(2),
  },
}));

const Experience = () => {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography
        variant="h3"
        component="h1"
        textAlign="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "text.primary",
          mb: { xs: 4, md: 6 },
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        Experience
      </Typography>

      <List>
        {experiences.map((experience, index) => (
          <React.Fragment key={index}>
            <StyledListItem
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <DateBadge>{experience.date}</DateBadge>

              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, fontSize: { xs: "1rem", md: "1.25rem" } }}
                >
                  {experience.title}
                </Typography>

                <Typography
                  variant="body1"
                  color="textSecondary"
                  paragraph
                  sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                >
                  {experience.description}
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 500, fontSize: { xs: "0.9rem", md: "1rem" } }}
                >
                  Key Accomplishments:
                </Typography>

                <Box component="ul" sx={{ pl: 2, mt: 1, listStyleType: "disc" }}>
                  {experience.accomplishments.split(". ").map((item, i) => (
                    <Typography
                      component="li"
                      variant="body2"
                      color="textSecondary"
                      key={i}
                      sx={{
                        mb: 1,
                        fontSize: { xs: "0.85rem", md: "0.95rem" },
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
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
