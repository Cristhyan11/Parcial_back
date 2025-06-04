const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String } // <-- ya no es requerido
});

module.exports = mongoose.model('Role', roleSchema);