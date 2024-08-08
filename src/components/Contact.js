import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { ReactComponent as MemeSVG } from "../assets/meme1.svg";

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4, mt: "50px", mb: "50px" }}>
      <Typography
        variant="h1"
        color="#4A4A4A"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2rem", sm: "3rem" }, // Responsive font size
        }}
        gutterBottom
      >
        Contact Me
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MemeSVG width="400" height="400" /> {/* Use your SVG component */}
        </Box>
        <Box component="form" noValidate autoComplete="off" sx={{ flex: 2 }}>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Message"
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
          />
          <Button variant="contained" color="primary" sx={{ mt: 2, background: "#8D6E63",
              "&:hover": {
                background: "#6D4C41", // Hover background color
              }, }}>
            Send
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
