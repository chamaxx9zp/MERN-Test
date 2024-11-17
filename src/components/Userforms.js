import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const UserForm = ({ onAddUser }) => {
  // State for form fields
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId && userName) {
      const newUser = { id: userId, name: userName };
      onAddUser(newUser);  // Pass new user to parent component
      setUserId('');
      setUserName('');
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 4,
          p: 3,
          border: '1px solid #ccc',
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          User Form
        </Typography>
        <TextField
          label="User ID"
          variant="outlined"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <TextField
          label="User Name"
          variant="outlined"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default UserForm;
