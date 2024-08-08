import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import image2 from "../assets/me.png";
import WavyLine from "../assets/line.svg";
import "./About.css";

const MotionBox = motion(Box);

const skills = [
  { name: "HTML", level: "95%" },
  { name: "CSS/MUI/BOOTSTRAP", level: "90%" },
  { name: "JavaScript", level: "80%" },
  { name: "React.js", level: "80%" },
  { name: "MongoDB", level: "75%" },
  { name: "Node.js", level: "75%" },
  { name: "MySQL", level: "65%" },
  { name: "Git/GitHub", level: "95%" },
  { name: "Visual Studio Code", level: "Proficient" },
];

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4, mt: "50px", mb: "50px"}}>
      <Typography variant="h1" gutterBottom className="about-me" sx={{
              fontWeight: "bold",
              fontSize: { xs: '2rem', sm: '3rem' }, // Responsive font size
            }}>
        About Me
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        flexDirection={{ xs: "column", md: "row" }}
        sx={{ gap: 4 }}
      >
        <MotionBox
          component="img"
          src={image2}
          alt="About Me"
          sx={{
            borderRadius: "8px",
            width: { xs: "100%", md: "300px" },
            height: "auto",
          }}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <Box sx={{ background: "#F4F1E6", padding: "15px", flex: 1 }}>
          <Typography variant="h5" paragraph>
          I am a web developer with extensive experience in building web applications using modern technologies. My passion lies in crafting intuitive and engaging user experiences. I aim to leverage my skills in web development technologies, tools, and project management to address business needs effectively. I am committed to delivering high-quality results and thrive on overcoming challenges throughout the development process.
          </Typography>
        </Box>
      </Box>
      {/* Wavy Line Divider */}
      <Box sx={{ width: "100%", mt: 4 }}>
        <img
          src={WavyLine}
          alt="Wavy Line Divider"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      {/* Skills Section */}
      <Box
        sx={{
          mt: 4,
          background: "#F9F9F9",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Skills
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {skills.map((skill) => (
            <Box
              key={skill.name}
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
            >
              <Typography variant="body1" sx={{ flex: 1 }}>
                {skill.name}
              </Typography>
              <Box
                sx={{
                  flex: 2,
                  height: 8,
                  width: "100%",
                  background: "#E0E0E0",
                  borderRadius: 4,
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    width: skill.level,
                    background: "#76c7c0",
                    borderRadius: 4,
                  }}
                />
              </Box>
              <Typography variant="body2">{skill.level}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default About;
