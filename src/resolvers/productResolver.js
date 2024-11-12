// src/resolvers/productResolver.js

const Producto = require('../models/productModel');
const ProductService = require('../services/productService');

const productResolvers = {
  Query: {
    obtenerProductos: async () => {
      try {
        return await ProductService.getAllProducts();
      } catch (error) {
        throw new Error(error);
      }
    },
    obtenerProductoPorID: async (_, { id }) => {
      try {
        return await ProductService.getProductById(id);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    crearProducto: async (_, { input }) => {
      try {
        return await ProductService.createProduct(input);
      } catch (error) {
        throw new Error(error);
      }
    },
    actualizarProducto: async (_, { id, input }) => {
      try {
        return await ProductService.updateProduct(id, input);
      } catch (error) {
        throw new Error(error);
      }
    },
    eliminarProducto: async (_, { id }) => {
      try {
        return await ProductService.deleteProduct(id);
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = productResolvers;
