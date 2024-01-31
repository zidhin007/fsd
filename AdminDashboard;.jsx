import React, { useState, useEffect } from 'react';
import { FaUsers, FaPaintBrush, FaCog } from 'react-icons/fa';

const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState('Manage Users');
  const [artistDetails, setArtistDetails] = useState([]);

  useEffect(() => {
    if (currentPage === 'Manage Users') {
      fetchUserDetails();
    }
  }, [currentPage]);

  const fetchArtistDetails = async () => {
    try {
      const response = await fetch('http://localhost:8055/artists');
      const data = await response.json();
      setArtistDetails(data);
    } catch (error) {
      console.error('Error fetching artist details:', error);
    }
  };

  const fetchUserDetails = async () => {
    try {
      const response = await fetch('http://localhost:8055/users');
      const data = await response.json();
      setArtistDetails(data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleDelete = (userId) => {
    // Logic to handle delete for the user with userId
    console.log('Delete user with ID:', userId);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Manage Users':
        return (
          <div style={styles.content}>
            <h2 style={styles.title}>Manage Users</h2>
            <ul style={styles.list}>
              {artistDetails.map((user, index) => (
                <li key={index} style={styles.listItem}>
                  <span style={styles.listItemText}>
                    Name: {user.name}, Email: {user.email}, Role: {user.role}
                  </span>
                  <button style={styles.button} onClick={() => handleDelete(user._id)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'Paintings':
        return (
          <div style={styles.content}>
            <h2 style={styles.title}>Paintings</h2>
            <ul style={styles.list}>
              {artistDetails.map((artist, index) => (
                <li key={index} style={styles.listItem}>
                  <span style={styles.listItemText}>
                    Name: {artist.name}, Rate: {artist.rate}, Google Drive Link: {artist.googleDriveLink}
                  </span>
                  <button style={styles.button} onClick={() => handleDelete(artist._id)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'Settings':
        return (
          <div style={styles.content}>
            <h2 style={styles.title}>Settings</h2>
            {/* Add admin settings here */}
          </div>
        );
      default:
        return null;
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      color: '#333', // Dark text color
      backgroundColor: '#f5f5f5', // Light background color
    },
    content: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    list: {
      listStyle: 'none',
      padding: 0,
    },
    listItem: {
      marginBottom: '10px',
      borderBottom: '1px solid #ddd',
      paddingBottom: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    listItemText: {
      fontSize: '16px',
      color: '#333', // Dark text color
    },
    button: {
      backgroundColor: '#e57373', // Red button color
      color: '#fff', // White button text color
      border: 'none',
      padding: '5px 10px',
      cursor: 'pointer',
      borderRadius: '3px',
      marginLeft: '10px',
    },
    title: {
      marginBottom: '20px',
      fontSize: '24px',
      color: '#333', // Dark text color
    },
    navbar: {
      display: 'flex',
      backgroundColor: '#333', // Dark background color for navbar
      padding: '10px',
      marginBottom: '20px',
    },
    navItem: {
      marginRight: '20px',
      cursor: 'pointer',
      color: '#fff', // White text color for navbar items
      fontSize: '20px',
      display: 'flex',
      alignItems: 'center',
    },
    active: {
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.mainContent}>
        <div style={styles.navbar}>
          <div
            style={{ ...styles.navItem, ...(currentPage === 'Manage Users' && styles.active) }}
            onClick={() => setCurrentPage('Manage Users')}
          >
            <FaUsers /> Manage Users
          </div>
          <div
            style={{ ...styles.navItem, ...(currentPage === 'Paintings' && styles.active) }}
            onClick={() => {
              setCurrentPage('Paintings');
              fetchArtistDetails();
            }}
          >
            <FaPaintBrush /> Paintings
          </div>
          <div
            style={{ ...styles.navItem, ...(currentPage === 'Settings' && styles.active) }}
            onClick={() => setCurrentPage('Settings')}
          >
            <FaCog /> Settings
          </div>
        </div>
        {renderPage()}
      </div>
    </div>
  );
};

export default AdminDashboard;
