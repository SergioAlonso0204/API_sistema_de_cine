const User = require('../models/User');

// Obtener todos los usuarios
async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios.' });
  }
}

// Crear un nuevo usuario
async function createUser(req, res) {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear usuario.' });
  }
}

// Obtener un usuario por su ID
async function getUserById(req, res) {
    (console.log.getUserById)
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuario.' });
  }
}

// Actualizar un usuario por su ID
async function updateUserById(req, res) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar usuario.' });
  }
}

// Eliminar un usuario por su ID
async function deleteUserById(req, res) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }
    res.json({ message: 'Usuario eliminado correctamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario.' });
  }
}

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
