// Import mongoose
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rate: {
    type: String,
    required: true
  },
  googleDriveLink: {
    type: String,
    required: true
  }
});

// Create a model based on the schema
const Artist = mongoose.model('Artist', userSchema);

// Export the model
module.exports = Artist;
