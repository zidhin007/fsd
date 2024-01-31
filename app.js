const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./Model/User');
const Artist = require('./Model/Artist');

const app = express();
const PORT = 8055;

// Middleware
app.use(cors()); // Use cors middleware to enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose.connect('mongodb+srv://sidhins42:sidhin@cluster0.nwisxpv.mongodb.net/paintDb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Signup route
app.post('/signup', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Create a new user with the provided role
    const newUser = new User({ name, email, password, role });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Error in signup:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Find the user by email and role
    const user = await User.findOne({ email, role });

    // If the user is not found, return an error
    if (!user) {
      return res.status(401).json({ error: 'Invalid email, role, or password' });
    }

    // Compare the provided password with the stored hashed password
    if (password !== user.password) {
      return res.status(401).json({ error: 'Invalid email, role, or password' });
    }

    // Check if the user exists in the signup details
    const isUserSignedUp = await User.findOne({ email });
    if (!isUserSignedUp) {
      return res.status(401).json({ error: 'User not signed up' });
    }

    // At this point, the login is successful
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error in login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Fetch user details by ID
app.get('/user-details/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    // Check if the provided ID is valid
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }

    // Find the user by ID
    const user = await User.findById(userId);

    // If the user is not found, return an error
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return the user details
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Upload data route
app.post('/sign%20in', async (req, res) => {
  try {
    const { name, rate, googleDriveLink } = req.body;
    const newArtist = new Artist({ name, rate, googleDriveLink });
    await newArtist.save();
    res.status(201).json({ message: 'Data uploaded successfully' });
  } catch (error) {
    console.error('Error uploading data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add a new route to fetch artist details
app.get('/artists', async (req, res) => {
  try {
    const artists = await Artist.find();
    res.status(200).json(artists);
  } catch (error) {
    console.error('Error fetching artist details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add a new route to fetch all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
