const express = require("express");
const app = express();
const path = require('path');
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');

const { typeDefs, resolvers } = require('./schemas');

const port = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(express.json());
// get driver connection
const dbo = require("./db/conn");
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.js'));
});

db.once('open', () => {
  app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
      if (err) console.error(err);
    });
    console.log(`Server is running on port: ${port}`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});