const { Post, User, Community } = require('../models');

const resolvers = {
  Query: {
    Post: async () => {
      return Post.findAll({});
    },
    Query: {
      User: async () => {
        return User.findAll({});
      },
      Query: {
        Community: async () => {
          return Community.findAll({});
        },
      },
    },
    Mutation: {
      createUser: async (parent, args) => {
        const User = await User.create(args);
        return User;
      },
      createPost: async (parent, args) => {
        const Post = await Post.create(args);
        return Post;
      },
    },
  };
  
  module.exports = resolvers;