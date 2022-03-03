const { Post, User, Community, Comments } = require("../models");
// const { modelName } = require("../models/Post");

const resolvers = {
  Query: {
    Post: async () => {
      return Post.find({});
    },
    User: async () => {
      return User.find({});
    },
    Community: async () => {
      return Community.find({});
    },
    Comments: async () => {
      return Comments.find({});
    },
  },
  // Mutation: {
  //   createUser: async (parent, args) => {
  //     const User = await User.create(args);
  //     return User;
  //   },
  //   createPost: async (parent, args) => {
  //     const Post = await Post.create(args);
  //     return Post;
  //   },
  // },
};

module.exports = resolvers;
