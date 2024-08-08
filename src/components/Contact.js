import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4,mt: "50px", mb: "50px" }}>
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
      <Box component="form" noValidate autoComplete="off">
        <TextField fullWidth label="Name" margin="normal" variant="outlined" />
        <TextField fullWidth label="Email" margin="normal" variant="outlined" />
        <TextField
          fullWidth
          label="Message"
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Send
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
