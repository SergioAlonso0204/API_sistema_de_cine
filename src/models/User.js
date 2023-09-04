const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: String,
  dni: String,
  nombres: String,
  apellidos: String,
  fechaNacimiento: Date,
  rol: {
    type: String,
    enum: ['Administrador', 'Empleado', 'Cliente'],
    required: true,
  },
  telefono: String,
  correo: {
    type: String,
    unique: true, // Asegura que el correo sea único
    required: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
  nombreUsuario: String,
});


module.exports = mongoose.model('User', userSchema);