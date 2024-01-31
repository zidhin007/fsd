import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toastStyles.css'; // Import your custom toast styles

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user', // Default role
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
      const response = await axios.post('http://localhost:8055/login', formData);
      console.log(response.data);
      toast.success('Login successful');
      window.location.href = '/';
      // Handle successful login
    } catch (error) {
      if (error.response.status === 401 && error.response.data.error === 'User not signed up') {
        toast.error('User not signed up!');
      } else {
        toast.error('Invalid email, role, or password');
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src="/Loginpage.png" // Replace with your background image URL
          alt="Background"
          style={styles.image}
        />
      </div>
      <div style={styles.formContainer}>
        <div style={styles.overlay}></div>
        <div style={styles.card}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input} // Apply the same style as other inputs
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={styles.input} // Apply the same style as other inputs
            />
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              style={styles.input} // Apply the same style as other inputs
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>

            <button type="submit" style={styles.button}>Login</button>
          </form>
        </div>
      </div>
      <ToastContainer />
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
  imageContainer: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'grayscale(100%) brightness(50%)', // Black and white filter
    transition: 'filter 0.5s ease-in-out',
  },
  formContainer: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // White background
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.7)', // Light overlay for a subtle effect
    transition: 'background-color 0.5s ease',
  },
  card: { 
    width: '100%',
    maxWidth: '360px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: 'black', // White card background
    boxShadow: '1 7px 10px rgba(0, 0, 0, 10.0)', // Soft shadow for depth
    position: 'relative',
    transition: 'box-shadow 0.3s ease-in-out',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    boxSizing: 'border-box',
    border: '1px solid #ddd', // Subtle border
    borderRadius: '4px',
    transition: 'border-color 0.3s ease-in-out',
  },
  button: {
    width: '100%',
    padding: '12px',
    marginTop: '20px',
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
  },
};

export default LoginForm;
