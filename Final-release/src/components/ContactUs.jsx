import React, { useRef, useState } from 'react';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_qgl6usb',     
      'template_7pzvk0d',   
      form.current,
      'oW4WIH1TtGzKfOASn'
    )
    .then((result) => {
      console.log(result.text);
      setStatus('success');
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      setStatus('error');
    });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 ,mb:5}}>
      <Typography variant="h4" gutterBottom fontWeight={700} color="#006A71">
        Contact Us
      </Typography>

      <Box ref={form} component="form" onSubmit={sendEmail} sx={{ mt: 3 }}>
        <TextField
          fullWidth
          name="user_name"
          label="Your Name"
          variant="outlined"
          margin="normal"
          required
        />
         <TextField
          fullWidth
          name="user_email"
          label="Your Email"
          variant="outlined"
          margin="normal"
          type="email"
          required
        />
        <TextField
          fullWidth
          name="user_subject"
          label="Subject"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          name="message"
          label="Your Message"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          required
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: '#006A71',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#004f52',
            }
          }}
        >
          Send Message
        </Button>
      </Box>

      {status === 'success' && (
        <Alert severity="success" sx={{ mt: 2 }}>
          Message sent successfully!
        </Alert>
      )}
      {status === 'error' && (
        <Alert severity="error" sx={{ mt: 2 }}>
          Something went wrong. Please try again.
        </Alert>
      )}
    </Container>
  );
};

export default ContactUs;
