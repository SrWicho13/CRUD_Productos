const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const productTypeDefs = require('./schemas/productSchema');  // Esquema de productos
const productResolvers = require('./resolvers/productResolver');  // Resolvers de productos

const app = express();

// Define los typeDefs y resolvers solo para productos
const typeDefs = [productTypeDefs];
const resolvers = [productResolvers];

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.start().then(() => {
  server.applyMiddleware({ app });

  // Conectar a MongoDB
  mongoose.connect('mongodb://localhost:27017/your-db-name', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to MongoDB');
      app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
      );
    })
    .catch(err => {
      console.error('Error connecting to MongoDB', err);
    });
});
