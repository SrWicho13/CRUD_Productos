const { gql } = require('apollo-server-express');

const productTypeDefs = gql`
  type Producto {
    id: String!
    nombre: String!
    descripcion: String
    precio: Float
    categoria: String
    marca: String
    cantidadEnInv: Int
    fechaCreacion: String
    imagenes: [String]
  }

  type Query {
    obtenerProductos: [Producto]
    obtenerProductoPorID(id: String!): Producto
  }

  input CreateProductInput {
    id: String!
    nombre: String!
    descripcion: String
    precio: Float
    categoria: String
    marca: String
    cantidadEnInv: Int
    fechaCreacion: String
    imagenes: [String]
  }

  input UpdateProductInput {
    nombre: String
    descripcion: String
    precio: Float
    categoria: String
    marca: String
    cantidadEnInv: Int
    fechaCreacion: String
    imagenes: [String]
  }

  type Mutation {
    crearProducto(input: CreateProductInput!): Producto
    actualizarProducto(id: String!, input: UpdateProductInput!): Producto
    eliminarProducto(id: String!): String
  }
`;

module.exports = productTypeDefs;
