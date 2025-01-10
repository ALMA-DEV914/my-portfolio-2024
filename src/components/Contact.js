import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { ReactComponent as MemeSVG } from "../assets/meme2.svg";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
    setFormSubmitted(true);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        py: 6,
        mt: 8,
        mb: 6,
        background: "linear-gradient(135deg, #f5f5f5, #e0e0e0)",
        borderRadius: 4,
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* SVG Section with Float Animation */}
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{ flex: 1, display: "flex", justifyContent: "center" }}
        >
          <MemeSVG width="350" height="350" />
        </motion.div>

        {/* Form Section */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            flex: 2,
            backgroundColor: "#ffffff",
            padding: 4,
            borderRadius: 3,
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem" },
              mb: 3,
              textAlign: { xs: "center", md: "left" },
              color: "#424242",
            }}
          >
            Contact Me
          </Typography>

          <TextField
            fullWidth
            label="Name"
            margin="normal"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ borderRadius: 2 }}
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ borderRadius: 2 }}
          />
          <TextField
            fullWidth
            label="Message"
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ borderRadius: 2 }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              background: "linear-gradient(45deg, #8D6E63, #795548)",
              color: "#fff",
              "&:hover": {
                background: "linear-gradient(45deg, #6D4C41, #5D4037)",
                transform: "scale(1.05)",
              },
              transition: "transform 0.3s ease-in-out",
            }}
          >
            Send
          </Button>
        </Box>
      </Box>

      {formSubmitted && (
        <Typography
          variant="h6"
          color="success.main"
          sx={{
            mt: 4,
            textAlign: "center",
            fontSize: "1.3rem",
            fontWeight: 500,
          }}
        >
          Thank you! Your message has been sent.
        </Typography>
      )}

      <Typography
        variant="body1"
        sx={{
          mt: 6,
          textAlign: "center",
          fontSize: "1.1rem",
          color: "#616161",
        }}
      >
        Have a project in mind or just want to say hello? I’d love to hear from
        you! Reach out and let’s connect.
      </Typography>
    </Container>
  );
};

export default Contact;
