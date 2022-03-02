const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Post {
    _id: ID!
     title: String!
     text: String!
     authorUsername: String!
     communityId: ID!
   }

    type User {
    _id: ID!
     userName: String!
     text: String!
     authorUsername: String!
     posts: [Post]!
    }

    type Query {
      Post: [Post]
      User(_id: String): User
   }
  
   type Mutation {
     createPost(_id: String!): Post
     createUser(_id: String!): User
   }
   `;

module.exports = typeDefs;