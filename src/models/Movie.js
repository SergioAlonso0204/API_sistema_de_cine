const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  director: String, // Cambiar el campo "author" a "director"
  releaseDate: Date,
  genre: String,
  // Otros campos de la película
});

module.exports = mongoose.model('Movie', movieSchema);
