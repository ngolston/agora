const express = require("express");
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const dbo = require("./db/conn");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const mongoose = require("mongoose");
// const db = require('./config/connection');
// get driver connection

async function startServer(){
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
 await server.start()
  server.applyMiddleware({ app });

}

startServer()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.js'));
});

dbo.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}`);
  });
});