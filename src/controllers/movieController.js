const Movie = require('../models/Movie');

// Crear una nueva película
async function createMovie(req, res) {
  try {
    const movie = new Movie({
      title: req.body.title,
      director: req.body.director, // Utilizar el campo "director"
      releaseDate: req.body.releaseDate,
      genre: req.body.genre,
    });

    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear película.' });
  }
}

// Obtener todas las películas
async function getAllMovies(req, res) {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener películas.' });
  }
}

// Obtener una película por su ID
async function getMovieById(req, res) {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Película no encontrada.' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener película.' });
  }
}

// Actualizar una película por su ID
async function updateMovieById(req, res) {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!movie) {
      return res.status(404).json({ error: 'Película no encontrada.' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar película.' });
  }
}

// Eliminar una película por su ID
async function deleteMovieById(req, res) {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Película no encontrada.' });
    }
    res.json({ message: 'Película eliminada correctamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar película.' });
  }
}

module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovieById,
  deleteMovieById,
};
