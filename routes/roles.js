const express = require('express');
const router = express.Router();
const Role = require('../models/Role');

// GET roles
router.get('/', async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST roles
router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body; // <-- extrae ambos campos
    const role = new Role({ name, description }); // <-- pasa ambos al modelo
    await role.save();
    res.status(201).json(role);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;