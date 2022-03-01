const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Post {
    _id: ID!
     title: String!
     text: String!
     authorUsername: String!
     communityId: Number!
   }

    type User {
    _id: ID!
     userName: String!
     text: String!
     authorUsername: String!
     posts: Array!
    }

    type Query {
      post: [Post]
      user:(_id: String)   
   }
  
   type Mutation {
     createPost(_id: String!): Post
     createUser(_id: String!): User
   }
   `;

module.exports = typeDefs;