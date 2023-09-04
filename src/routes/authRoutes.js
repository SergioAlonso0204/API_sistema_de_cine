const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Ruta para el registro de usuarios
router.post('/register', async (req, res) => {
  try {
    const { dni, nombres, apellidos, fechaNacimiento, rol, telefono, correo, contraseña, nombreUsuario } = req.body;

    // Verifica si el correo ya está en uso
    const existingUser = await User.findOne({ correo });
    if (existingUser) {
      return res.status(400).json({ message: 'El correo ya está en uso.' });
    }

    // Cifra la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Crea un nuevo usuario en la base de datos
    const newUser = new User({
      dni,
      nombres,
      apellidos,
      fechaNacimiento,
      rol,
      telefono,
      correo,
      contraseña: hashedPassword,
      nombreUsuario,
    });
    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado con éxito.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario.' });
  }
});

// Ruta para el inicio de sesión
router.post('/login', async (req, res) => {
  try {
    const { correo, contraseña } = req.body;

    // Verifica si el correo existe en la base de datos
    const user = await User.findOne({ correo });
    if (!user) {
      return res.status(401).json({ message: 'Credenciales incorrectas.' });
    }

    // Compara la contraseña proporcionada con la almacenada en la base de datos
    const passwordMatch = await bcrypt.compare(contraseña, user.contraseña);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Credenciales incorrectas.' });
    }

    // Genera un token JWT para el usuario
    const token = jwt.sign({ userId: user._id }, 'tu_secreto_secreto', {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión.' });
  }
});

module.exports = router;
