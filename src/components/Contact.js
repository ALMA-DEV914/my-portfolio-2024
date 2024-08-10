import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { ReactComponent as MemeSVG } from "../assets/meme2.svg";
import { motion } from "framer-motion";

const MAILCHIMP_URL = process.env.REACT_APP_MAILCHIMP_URL;
const MAILCHIMP_API_KEY = process.env.REACT_APP_MAILCHIMP_API_KEY;

const Contact = () => {
  // State variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  // Handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Prepare data for Mailchimp
    const data = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: name,
        MESSAGE: message,
      },
    };

    try {
      const response = await fetch(MAILCHIMP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(`anystring:${MAILCHIMP_API_KEY}`)}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Reset form fields after submission
      setName("");
      setEmail("");
      setMessage("");
      setFormSubmitted(true);
      setFormError("");

      // Optionally, you can also handle success/failure messages here
    } catch (error) {
      setFormError("There was an error submitting your message. Please try again.");
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4, mt: "50px", mb: "50px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-end" },
          gap: 2,
        }}
      >
        {/* SVG Section with Animation */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            order: { xs: 1, md: 2 }, // Order the SVG to appear on the right on larger screens
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Initial state: invisible and moved up
            animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
            exit={{ opacity: 0, y: 50 }} // Exit state: invisible and moved down
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }} // Bouncing effect
          >
            <MemeSVG width="400" height="400" />
          </motion.div>
        </Box>

        {/* Form Section */}
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit} // Add form submission handler
          sx={{
            flex: 2,
            order: { xs: 2, md: 1 },
            background: "#F9F9F9",
            padding: "15px",
          }}
        >
          <Typography
            variant="h1"
            color="#4A4A4A"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "3rem" }, // Responsive font size
              mb: 2, // Margin bottom to create space below the header
              textAlign: { xs: "center", md: "right" }, // Align text to the right on larger screens
            }}
            gutterBottom
          >
            Contact Me
          </Typography>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            variant="outlined"
            value={name} // Bind input value to state
            onChange={(e) => setName(e.target.value)} // Update state on change
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            variant="outlined"
            value={email} // Bind input value to state
            onChange={(e) => setEmail(e.target.value)} // Update state on change
          />
          <TextField
            fullWidth
            label="Message"
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
            value={message} // Bind input value to state
            onChange={(e) => setMessage(e.target.value)} // Update state on change
          />
          <Button
            type="submit" // Set button type to submit
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              background: "#8D6E63",
              "&:hover": {
                background: "#6D4C41", // Hover background color
              },
            }}
          >
            Send
          </Button>
        </Box>
      </Box>

      {/* Success message */}
      {formSubmitted && (
        <Typography
          variant="body1"
          color="success.main"
          sx={{
            mt: 2,
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          Thank you! Your message has been sent.
        </Typography>
      )}

      {/* Error message */}
      {formError && (
        <Typography
          variant="body1"
          color="error.main"
          sx={{
            mt: 2,
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          {formError}
        </Typography>
      )}

      {/* Message Section */}
      <Typography
        variant="body1"
        color="#4A4A4A"
        sx={{
          mt: 4, // Margin top to create space above the message
          textAlign: "center", // Center align the text
          fontSize: "1.2rem", // Slightly larger font for readability
        }}
      >
        Have a project in mind or just want to say hello? I'd love to hear from you! Reach out and let's connect.
      </Typography>
    </Container>
  );
};

export default Contact;
