// Import dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Set up Express.js server
const app = express();
const port = 5000; // Replace with your desired port number

// Enable CORS
// Allow requests from your frontend domain
const corsOptions = {
  origin: 'https://login-site-frontend.vercel.app',
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import routes
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');

// Use routes
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
