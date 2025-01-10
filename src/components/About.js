import React from "react";
import { Container, Typography, Box, Grid, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import image2 from "../assets/me3.png";
import WavyLine from "../assets/line.svg";
import "./About.css";
import SkillsPieChart from "./SkillsPieChart";
import TypingEffect from "./TypingEffect"; // Import the TypingEffect component

const MotionBox = motion(Box);

const skills = [
  { name: "HTML", level: "95%" },
  { name: "CSS/MUI/Bootstrap", level: "90%" },
  { name: "JavaScript", level: "80%" },
  { name: "React.js", level: "90%" },
  { name: "MongoDB", level: "75%" },
  { name: "Node.js", level: "75%" },
  { name: "MySQL", level: "65%" },
  { name: "SQL", level: "65%" },
  { name: "SEO", level: "85%" },
  { name: "GraphQL", level: "65%" },
  { name: "Git/GitHub", level: "95%" },
  { name: "Visual Studio Code", level: "Proficient" },
];

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6, mt: "50px", mb: "50px" }}>
      <Typography
        variant="h1"
        gutterBottom
        className="about-me"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2.5rem", sm: "3.5rem" },
          textAlign: "center",
        }}
      >
        About Me
      </Typography>
      <br></br>
      {/* Profile and Introduction Section */}
      <Grid
        container
        spacing={4}
        alignItems="center"
    
      >
        <Grid item xs={12} md={5}>
          <MotionBox
            component="img"
            src={image2}
            alt="About Me"
            loading="lazy"
            sx={{
              borderRadius: "12px",
              width: "100%",
              maxWidth: "300px",
              height: "auto",
              margin: "0 auto",
            }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Grid>

        <Grid item xs={12} md={7}>
          <Box
            sx={{
              background: "#f0f0f0",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="h5" paragraph>
              <TypingEffect
                text="I am a web developer with extensive experience in building web applications using modern technologies. My passion lies in crafting intuitive and engaging user experiences. I aim to leverage my skills in web development, tools, and project management to address business needs effectively. I am committed to delivering high-quality results and thrive on overcoming challenges throughout the development process."
                speed={50}
              />
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Wavy Line Divider */}
      <Box sx={{ width: "100%", mt: 6 }}>
        <img
          src={WavyLine}
          alt="Wavy Line Divider"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      {/* Skills Section */}
      <Box
        sx={{
          mt: 6,
          p: 3,
          borderRadius: "12px",
          background: "#f0f0f0",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontSize: { xs: "2rem", sm: "2.5rem" }, textAlign: "center" }}
        >
          Skills
        </Typography>
        <SkillsPieChart skills={skills} />

        {/* Tooltip-enhanced Skill List */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {skills.map((skill) => (
            <Grid item xs={6} sm={4} key={skill.name}>
              <Tooltip title={`Proficiency: ${skill.level}`} arrow>
                <Box
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    padding: "10px",
                    background: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {skill.name}
                </Box>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
