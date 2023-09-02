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
  correo: String,
  contraseña: String,
  nombreUsuario: String,
});

module.exports = mongoose.model('User', userSchema);