const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET users con populate para mostrar rol
router.get('/', async (req, res) => {
  try {
    const users = await User.find().populate('rol', 'name description');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST users
router.post('/', async (req, res) => {
  try {
    const { nombres, apellidos, email, rol } = req.body;
    const user = new User({ nombres, apellidos, email, rol });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;