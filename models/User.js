const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombres: String,
  apellidos: String,
  email: String,
  rol: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' }
});

module.exports = mongoose.model('User', userSchema);