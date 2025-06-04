const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error conectando a MongoDB:', err));
const app = express();

app.use(cors());
app.use(express.json());

app.use('/roles', require('./routes/roles'));
app.use('/users', require('./routes/users'));

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});