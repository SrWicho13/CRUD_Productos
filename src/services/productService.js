// src/services/productService.js

const Producto = require('../models/productModel');

const ProductService = {
  // Obtener todos los productos
  getAllProducts: async () => {
    return await Producto.find();
  },

  // Obtener un producto por ID
  getProductById: async (id) => {
    return await Producto.findById(id);
  },

  // Crear un nuevo producto
  createProduct: async (input) => {
    const newProduct = new Producto(input);
    return await newProduct.save();
  },

  // Actualizar un producto existente
  updateProduct: async (id, input) => {
    return await Producto.findByIdAndUpdate(id, input, { new: true });
  },

  // Eliminar un producto
  deleteProduct: async (id) => {
    return await Producto.findByIdAndDelete(id);
  },
};

module.exports = ProductService;
