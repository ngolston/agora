const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Post {
    postId: String!
    title: String!
    text: String!
    authorUsername: String!
  }

  type User {
    postId: String!
    userName: String!
    text: String!
    authorUsername: String!
    posts: String!
  }

  type Community {
    title: String!
    description: String!
    image: String!
    relatedPosts: String!
  }

  type Comments {
    text: String!
    contentType: String!
    authorUsername: String!
    communityId: String!
    comments: String!
    reactions: Int
  }

  type Query {
    Post: [Post]
    User: [User]
    Community: [Community]
    Comments: [Comments]
  }

  type Mutation {
    createPost(title: String!, text: String!, authorUsername: String!): Post
    createCommunity(title: String!): Community
    createComments(_id: String!): Comments
  }
`;

module.exports = typeDefs;
