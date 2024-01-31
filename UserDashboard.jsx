import React, { useState } from 'react';
import { FaPaintBrush, FaUser, FaShoppingCart } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserDashboard = () => {
  const [currentPage, setCurrentPage] = useState('Explore Paintings');
  const [name, setName] = useState('');
  const [rate, setRate] = useState('');
  const [googleDriveLink, setGoogleDriveLink] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8055/sign%20in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          rate,
          googleDriveLink
        }),
      });
      if (response.ok) {
        console.log('Data uploaded successfully');
        toast.success('Data uploaded successfully');
        // Reset form fields after successful upload
        setName('');
        setRate('');
        setGoogleDriveLink('');
      } else {
        console.error('Error uploading data');
        toast.error('Error uploading data');
      }
    } catch (error) {
      console.error('Error uploading data:', error);
      toast.error('Error uploading data');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Explore Paintings':
        return (
          <div>
            <h2 style={styles.title}>Upload Picture</h2>
            <form style={styles.form} onSubmit={handleUpload}>
              <div style={styles.formGroup}>
                <label htmlFor="name" style={styles.label}>Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="rate" style={styles.label}>Rate:</label>
                <input
                  type="text"
                  id="rate"
                  name="rate"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="googleDriveLink" style={styles.label}>Google Drive Link:</label>
                <input
                  type="text"
                  id="googleDriveLink"
                  name="googleDriveLink"
                  value={googleDriveLink}
                  onChange={(e) => setGoogleDriveLink(e.target.value)}
                  style={styles.input}
                />
              </div>
              <button type="submit" style={styles.button}>Upload</button>
            </form>
          </div>
        );
      case 'Profile':
        return (
          <div style={styles.content}>
            <h2 style={styles.title}>Profile</h2>
            <p style={styles.paragraph}>This is your profile page where you can manage your account settings.</p>
          </div>
        );
      case 'Your Orders':
        return (
          <div style={styles.content}>
            <h2 style={styles.title}>Your Orders</h2>
            <p style={styles.paragraph}>View and manage your orders here.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <div
          style={{ ...styles.navItem, ...(currentPage === 'Explore Paintings' && styles.active) }}
          onClick={() => setCurrentPage('Explore Paintings')}
        >
          <FaPaintBrush /> Explore Paintings
        </div>
        <div
          style={{ ...styles.navItem, ...(currentPage === 'Profile' && styles.active) }}
          onClick={() => setCurrentPage('Profile')}
        >
          <FaUser /> Profile
        </div>
        <div
          style={{ ...styles.navItem, ...(currentPage === 'Your Orders' && styles.active) }}
          onClick={() => setCurrentPage('Your Orders')}
        >
          <FaShoppingCart /> Your Orders
        </div>
      </div>
      <div style={styles.mainContent}>
        {renderPage()}
        <ToastContainer />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
  },
  navbar: {
    display: 'flex',
    backgroundColor: '#333',
    padding: '10px',
  },
  navItem: {
    cursor: 'pointer',
    padding: '10px',
    marginRight: '10px',
    color: 'white',
  },
  active: {
    backgroundColor: '#555',
  },
  mainContent: {
    padding: '20px',
  },
  title: {
    marginBottom: '20px',
  },
  form: {
    maxWidth: '300px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    border: '1px solid #ddd',
    borderRadius: '4px',
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
  },
  content: {
    maxWidth: '500px',
  },
  paragraph: {
    lineHeight: '1.6',
  },
};

export default UserDashboard;
