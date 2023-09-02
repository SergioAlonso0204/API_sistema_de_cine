const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Obtener todas las películas
router.get('/', movieController.getAllMovies);

// Crear una nueva película
router.post('/', movieController.createMovie);

// Obtener una película por su ID
router.get('/:id', movieController.getMovieById);

// Actualizar una película por su ID
router.put('/:id', movieController.updateMovieById);

// Eliminar una película por su ID
router.delete('/:id', movieController.deleteMovieById);

module.exports = router;
