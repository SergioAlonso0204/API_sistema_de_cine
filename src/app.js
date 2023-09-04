const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');

const app = express();

// Conectar a la base de datos MongoDB
mongoose.connect('mongodb://localhost/cineDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());

// Rutas de autenticación
app.use('/api/auth', authRoutes); // Utiliza las rutas de autenticación en /api/auth

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Rutas de películas
app.use('/api/movies', movieRoutes);


// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});