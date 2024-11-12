const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    trim: true
  },
  precio: {
    type: Number,
    required: true
  },
  categoria: {
    type: String,
    trim: true
  },
  marca: {
    type: String,
    trim: true
  },
  cantidadEnInv: {
    type: Number,
    required: true
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  },
  imagenes: [{
    type: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Producto', productSchema);
