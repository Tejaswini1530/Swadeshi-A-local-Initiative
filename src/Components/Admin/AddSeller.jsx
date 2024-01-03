import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Paper } from '@mui/material';

const AddSeller = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    role: '1' // Set the default value for the role field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Your API endpoint for adding a user
      await axios.post('http://localhost:8065/api/user/register', userData);
      console.log('User added successfully!');

      // Clear input fields after successful submission
      setUserData({
        email: '',
        password: '',
        role: '1' // Set the role field back to the default value
      });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: 'auto', marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Add Seller
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          type="email"
          name="email"
          fullWidth
          value={userData.email}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          fullWidth
          value={userData.password}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Role"
          type="text"
          name="role"
          fullWidth
          value={userData.role}
          readOnly
          variant="outlined"
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default AddSeller;
