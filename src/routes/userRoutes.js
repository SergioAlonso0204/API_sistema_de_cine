const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Obtener todos los usuarios
router.get('/', userController.getAllUsers);

// Crear un nuevo usuario
router.post('/', userController.createUser);

// Obtener un usuario por su ID
router.get('/:id', userController.getUserById);

// Actualizar un usuario por su ID
router.put('/:id', userController.updateUserById);

// Eliminar un usuario por su ID
router.delete('/:id', userController.deleteUserById);

module.exports = router;
