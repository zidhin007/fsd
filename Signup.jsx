import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user', // Set default role to 'user'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the backend signup endpoint
      const response = await axios.post('http://localhost:8055/signup', formData);
      console.log(response.data); // Log the response from the backend
      // Show a toast message for successful signup
      toast.success('Signup successful');
      window.location.href = '/sign%20in';
      // You can perform additional actions after successful signup, such as redirecting to another page
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle signup error, such as displaying an error message to the user
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Signup</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label htmlFor="name" style={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <label htmlFor="role" style={styles.label}>Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="user">User</option>
            <option value="lender">Lender</option>
          </select>
          <button type="submit" style={styles.button}>Signup</button>
        </form>
      </div>
      <ToastContainer /> {/* Toast container for displaying messages */}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: '"Arial", sans-serif',
    color: 'white', // Dark text for readability
  },
  formContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  title: {
    marginBottom: '20px',
  },
  form: {
    width: '100%',
    maxWidth: '300px',
  },
  label: {
    marginBottom: '5px',
    color: 'white',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    marginBottom: '10px',
    boxSizing: 'border-box',
    border: '1px solid #ddd', // Subtle border
    borderRadius: '4px',
    transition: 'border-color 0.3s ease-in-out',
  },
  button: {
    width: '100%',
    padding: '12px',
    boxSizing: 'border-box',
    background: 'linear-gradient(45deg, #ff0066, #ff6600, #0066ff, #6600ff)',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
    backgroundSize: '300% 300%',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
    ':hover': {
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.4)',
      backgroundPosition: 'right center',
    },
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(45deg, #ff0066, #ff6600, #0066ff, #6600ff)',
      transition: 'all 0.6s ease',
      zIndex: -1,
    },
  },
};

export default Signup;
