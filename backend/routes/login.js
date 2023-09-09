const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Admin login route
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log('Received admin login request:', email, password);

    // Find the user with the provided email
    const user = await User.findOne({ email });

    console.log('Found user:', user);

    if (!user) {
      console.log('User not found');
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare the password with the stored hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    console.log('Stored hashed password:', user.password);
    console.log('Entered password:', password);
    console.log('Password match:', isPasswordMatch);

    if (!isPasswordMatch) {
      console.log('Invalid password');
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    console.log('Admin login successful');

    // Create a JWT token
    const token = jwt.sign({ userId: user._id, isAdmin: true }, process.env.JWT_SECRET);

    // Return the token and user details
    res.json({ token, user: { name: user.name, email: user.email, isAdmin: true } });
  } catch (error) {
    console.error('Admin login failed', error);
    res.status(500).json({ error: 'Admin login failed' });
  }
});

module.exports = router;
